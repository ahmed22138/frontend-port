"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SendHorizonal, Bot, User, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ChatPage() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  // 👇 Bot greeting
  useEffect(() => {
    setMessages([{ role: "bot", text: "Hello! How can I help you today?" }]);
  }, []);

  const handleSend = async () => {
    if (!message.trim()) return;
    const newMessage = { role: "user", text: message };
    setMessages([...messages, newMessage]);
    setMessage("");
    setLoading(true);

    const res = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();

    setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    setLoading(false);
  };

  // ✅ Clear chat
  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("chatHistory");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br bg-white dark:bg-[#0A0A0A] p-4 sm:p-6 relative mt-14">
      
      {/* 🔙 Back Arrow Button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-4 left-4 bg-gray-300 text-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 transition mt-10"
        aria-label="Go back"
      >
        <ArrowLeft size={22} />
      </button>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black dark:text-white text-center"
      >
        <Bot className="text-purple-600" /> AI Chatbot
      </motion.h1>

      {/* Chat Box */}
      <div className="w-full max-w-2xl bg-gray-200 rounded-2xl shadow-xl border p-4 sm:p-6 flex flex-col h-[70vh] sm:h-[75vh]  ring-4 ring-blue-300">
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start gap-2 max-w-[85%] sm:max-w-[80%] ${
                  msg.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                {msg.role === "bot" ? (
                  <Bot className="text-black mt-1" />
                ) : (
                  <User className="text-blue-500 mt-1" />
                )}
                <div
                  className={`px-3 sm:px-4 py-2 rounded-2xl text-sm shadow ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800"
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
              <Bot className="text-black" />
              <span className="animate-pulse">Typing...</span>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div className="flex gap-2 flex-col sm:flex-row">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <div className="flex gap-2 justify-end">
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition flex items-center gap-1"
            >
              <SendHorizonal size={18} />
            </button>
            <button
              onClick={clearChat}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400 transition text-sm"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}










// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { SendHorizonal, Bot, User } from "lucide-react";

// export default function ChatPage() {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
//   const [loading, setLoading] = useState(false);

//   // 👇 ye part add kiya gaya hai (bot greeting)
//   useEffect(() => {
//     setMessages([{ role: "bot", text: "Hello! How can I help you today?" }]);
//   }, []);

//   const handleSend = async () => {
//     if (!message.trim()) return;
//     const newMessage = { role: "user", text: message };
//     setMessages([...messages, newMessage]);
//     setMessage("");
//     setLoading(true);

//     const res = await fetch("http://127.0.0.1:8000/chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ message }),
//     });

//     const data = await res.json();

//     setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
//     setLoading(false);
//   };

// //  ✅ Optional: clear chat button
//   const clearChat = () => {
//     setMessages([]);
//     localStorage.removeItem("chatHistory");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">
//       {/* Heading */}
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="flex items-center gap-2 text-3xl font-bold mb-6 text-gray-800"
//       >
//         <Bot className="text-purple-600" /> AI Chatbot
//       </motion.h1>

//       {/* Chat Box */}
//       <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border p-6 flex flex-col h-[70vh]">
//         <div className="flex-1 overflow-y-auto space-y-4 mb-4">
//           {messages.map((msg, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className={`flex ${
//                 msg.role === "user" ? "justify-end" : "justify-start"
//               }`}
//             >
//               <div
//                 className={`flex items-start gap-2 max-w-[80%] ${
//                   msg.role === "user" ? "flex-row-reverse" : ""
//                 }`}
//               >
//                 {msg.role === "bot" ? (
//                   <Bot className="text-black mt-1" />
//                 ) : (
//                   <User className="text-blue-500 mt-1" />
//                 )}
//                 <div
//                   className={`px-4 py-2 rounded-2xl text-sm shadow ${
//                     msg.role === "user"
//                       ? "bg-blue-600 text-white"
//                       : "bg-gray-100 text-gray-800"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             </motion.div>
//           ))}

//           {loading && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="flex justify-start items-center gap-2 text-gray-500"
//             >
//               <Bot className="text-black" />
//               <span className="animate-pulse">Typing...</span>
//             </motion.div>
//           )}
//         </div>

//         {/* Input Area */}
//         <div className="flex gap-2">
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Type a message..."
//             className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
//             onKeyDown={(e) => e.key === "Enter" && handleSend()}
//           />
//           <button
//             onClick={handleSend}
//             className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition flex items-center gap-1"
//           >
//             <SendHorizonal size={18} />
//           </button>
//           <button
//             onClick={clearChat}
//             className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400 transition text-sm"
//           >
//             Clear
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }






























// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { SendHorizonal, Bot, User } from "lucide-react";

// export default function ChatPage() {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
//   const [loading, setLoading] = useState(false);

//   // ✅ Load chat history from localStorage when page loads
//   useEffect(() => {
//     const savedMessages = localStorage.getItem("chatHistory");
//     if (savedMessages) {
//       setMessages(JSON.parse(savedMessages));
//     }
//   }, []);

//   // ✅ Save chat history to localStorage whenever messages change
//   useEffect(() => {
//     localStorage.setItem("chatHistory", JSON.stringify(messages));
//   }, [messages]);

//   const handleSend = async () => {
//     if (!message.trim()) return;
//     const newMessage = { role: "user", text: message };
//     setMessages([...messages, newMessage]);
//     setMessage("");
//     setLoading(true);

//     try {
//       const res = await fetch("http://127.0.0.1:8000/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message }),
//       });
//       const data = await res.json();

//       setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         { role: "bot", text: "⚠️ Error connecting to the server." },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Optional: clear chat button
//   const clearChat = () => {
//     setMessages([]);
//     localStorage.removeItem("chatHistory");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">
//       {/* Heading */}
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="flex items-center gap-2 text-3xl font-bold mb-6 text-gray-800"
//       >
//         <Bot className="text-purple-600" /> AI Chatbot
//       </motion.h1>

//       {/* Chat Box */}
//       <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border p-6 flex flex-col h-[70vh]">
//         <div className="flex-1 overflow-y-auto space-y-4 mb-4">
//           {messages.map((msg, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className={`flex ${
//                 msg.role === "user" ? "justify-end" : "justify-start"
//               }`}
//             >
//               <div
//                 className={`flex items-start gap-2 max-w-[80%] ${
//                   msg.role === "user" ? "flex-row-reverse" : ""
//                 }`}
//               >
//                 {msg.role === "bot" ? (
//                   <Bot className="text-black mt-1" />
//                 ) : (
//                   <User className="text-blue-500 mt-1" />
//                 )}
//                 <div
//                   className={`px-4 py-2 rounded-2xl text-sm shadow ${
//                     msg.role === "user"
//                       ? "bg-blue-600 text-white"
//                       : "bg-gray-100 text-gray-800"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             </motion.div>
//           ))}

//           {loading && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="flex justify-start items-center gap-2 text-gray-500"
//             >
//               <Bot className="text-black" />
//               <span className="animate-pulse">Typing...</span>
//             </motion.div>
//           )}
//         </div>

//         {/* Input Area */}
//         <div className="flex gap-2">
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Type a message..."
//             className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
//             onKeyDown={(e) => e.key === "Enter" && handleSend()}
//           />
//           <button
//             onClick={handleSend}
//             className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition flex items-center gap-1"
//           >
//             <SendHorizonal size={18} />
//           </button>
//           <button
//             onClick={clearChat}
//             className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400 transition text-sm"
//           >
//             Clear
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



















































// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { SendHorizonal, Bot, User } from "lucide-react";

// export default function ChatPage() {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
//   const [loading, setLoading] = useState(false);

//   const handleSend = async () => {
//     if (!message.trim()) return;
//     const newMessage = { role: "user", text: message };
//     setMessages([...messages, newMessage]);
//     setMessage("");
//     setLoading(true);

//     const res = await fetch("http://127.0.0.1:8000/chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ message }),
//     });
//     const data = await res.json();

//     setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
//     setLoading(false);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">
//       {/* Heading */}
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="flex items-center gap-2 text-3xl font-bold mb-6 text-gray-800"
//       >
//         <Bot className="text-purple-600" /> AI Chatbot
//       </motion.h1>

//       {/* Chat Box */}
//       <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border p-6 flex flex-col h-[70vh]">
//         <div className="flex-1 overflow-y-auto space-y-4 mb-4">
//           {messages.map((msg, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className={`flex ${
//                 msg.role === "user" ? "justify-end" : "justify-start"
//               }`}
//             >
//               <div
//                 className={`flex items-start gap-2 max-w-[80%] ${
//                   msg.role === "user" ? "flex-row-reverse" : ""
//                 }`}
//               >
//                 {msg.role === "bot" ? (
//                   <Bot className="text-black mt-1" />
//                 ) : (
//                   <User className="text-blue-500 mt-1" />
//                 )}
//                 <div
//                   className={`px-4 py-2 rounded-2xl text-sm shadow ${
//                     msg.role === "user"
//                       ? "bg-blue-600 text-white"
//                       : "bg-gray-100 text-gray-800"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             </motion.div>
//           ))}

//           {loading && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="flex justify-start items-center gap-2 text-gray-500"
//             >
//               <Bot className="text-black" />
//               <span className="animate-pulse">Typing...</span>
//             </motion.div>
//           )}
//         </div>

//         {/* Input Area */}
//         <div className="flex gap-2">
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Type a message..."
//             className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
//             onKeyDown={(e) => e.key === "Enter" && handleSend()}
//           />
//           <button
//             onClick={handleSend}
//             className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition flex items-center gap-1"
//           >
//             <SendHorizonal size={18} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
