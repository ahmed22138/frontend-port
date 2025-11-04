"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "OpenAI-Agent",
  "Sanity",
  "React",
  "GSAP",
];

export default function MarqueeGSAP() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!row1Ref.current || !row2Ref.current) return;

    const items1 = row1Ref.current.children;
    const items2 = row2Ref.current.children;

    const itemWidth = items1[0].getBoundingClientRect().width;
    const totalWidth = itemWidth * items1.length;
    const mod = gsap.utils.wrap(0, totalWidth);

    function marquee(target: any, duration: number, direction: string) {
      gsap.set(target, {
        x: (i: number) => i * itemWidth,
      });

      return gsap.timeline().to(target, {
        x: direction,
        duration,
        repeat: -1,
        ease: "none",
        modifiers: {
          x: (x: string) => mod(parseFloat(x)) + "px",
        },
      });
    }

    const tl = gsap.timeline({ paused: true });
    tl.add(marquee(items1, 10, "+=" + totalWidth))
      .add(marquee(items2, 12, "-=" + totalWidth), 0);

    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => tl.play(),
      onEnterBack: () => tl.play(),
      onLeave: () => tl.pause(),
      onLeaveBack: () => tl.pause(),
    });

    tl.play();

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="overflow-hidden w-full py-6 space-y-3"
    >
      <div
        ref={row1Ref}
        className="flex gap-10 whitespace-nowrap font-extrabold text-3xl text-black dark:text-white"
      >
        {skills.concat(skills).map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>

      <div
        ref={row2Ref}
        className="flex gap-10 whitespace-nowrap font-extrabold text-3xl text-black dark:text-white"
      >
        {skills.concat(skills).map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </div>
  );
}
