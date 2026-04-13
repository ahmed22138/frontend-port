"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SendHorizonal, Bot, User, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ChatPage() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: "bot", text: "Hello! How can I help you today?" }]);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!message.trim()) return;
    const newMessage = { role: "user", text: message };
    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "⚠️ Could not connect to the server. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([{ role: "bot", text: "Hello! How can I help you today?" }]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-[#0A0A0A] p-4 sm:p-6 relative mt-14">

      <button
        onClick={() => router.push("/")}
        className="absolute top-4 left-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full p-2 shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition mt-10"
        aria-label="Go back"
      >
        <ArrowLeft size={22} />
      </button>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black dark:text-white text-center"
      >
        <Bot className="text-purple-600" /> AI Chatbot
      </motion.h1>

      <div className="w-full max-w-2xl bg-gray-100 dark:bg-neutral-900 rounded-2xl shadow-xl border border-gray-200 dark:border-neutral-800 p-4 sm:p-6 flex flex-col h-[70vh] sm:h-[75vh]">
        <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-1">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`flex items-start gap-2 max-w-[85%] sm:max-w-[80%] ${
                  msg.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                {msg.role === "bot" ? (
                  <Bot className="text-purple-600 mt-1 shrink-0" />
                ) : (
                  <User className="text-blue-500 mt-1 shrink-0" />
                )}
                <div
                  className={`px-3 sm:px-4 py-2 rounded-2xl text-sm shadow ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-neutral-800 text-gray-800 dark:text-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            </motion.div>
          ))}

          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start items-center gap-2 text-gray-500"
            >
              <Bot className="text-purple-600" />
              <span className="animate-pulse text-sm">Typing...</span>
            </motion.div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="flex gap-2 flex-col sm:flex-row">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 dark:border-neutral-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black dark:text-white bg-white dark:bg-neutral-800"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <div className="flex gap-2 justify-end">
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 disabled:opacity-50 transition flex items-center gap-1"
            >
              <SendHorizonal size={18} />
            </button>
            <button
              onClick={clearChat}
              className="bg-gray-300 dark:bg-neutral-700 text-gray-800 dark:text-white px-4 py-2 rounded-full hover:bg-gray-400 dark:hover:bg-neutral-600 transition text-sm"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
