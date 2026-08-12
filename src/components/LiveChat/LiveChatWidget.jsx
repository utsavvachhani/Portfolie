import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";

const QUICK_OPTIONS = [
  { id: "projects", label: "💻 Featured Projects" },
  { id: "about", label: "👤 About Utsav" },
  { id: "skills", label: "🛠️ Technical Skills" },
  { id: "contact", label: "📬 Contact & Resume" },
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: "bot",
    text: "👋 Hi there! Welcome to Utsav Vachhani's Portfolio Assistant.\nHow can I help you today? Select an option below or type a message!",
    time: "Just now",
    options: QUICK_OPTIONS,
  },
];

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadCount(0);
    }
  }, [messages, isOpen]);

  const processResponse = (userText) => {
    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const lower = userText.toLowerCase();
      let botText = "";
      let followUpOptions = QUICK_OPTIONS;

      if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey")) {
        botText = "Hello! 👋 Great to meet you! I can help you learn more about Utsav's engineering projects, MERN stack skills, or contact info. What would you like to explore?";
      } else if (lower.includes("project") || lower.includes("work") || lower.includes("repo") || lower.includes("converse") || lower.includes("cybershield")) {
        botText = "🚀 Utsav has built flagship full-stack products:\n• Converse2K25: MERN college fest registration platform\n• Cyber Shield: Email awareness & threat analytics system\n• WhatsApp Automation Tool: Node.js & WebSockets service\n• Finance Dashboard: React & Framer Motion telemetry UI";
        followUpOptions = [
          { id: "skills", label: "🛠️ View Tech Stack" },
          { id: "contact", label: "📬 Contact Utsav" },
        ];
      } else if (lower.includes("about") || lower.includes("who") || lower.includes("background") || lower.includes("education")) {
        botText = "👤 Utsav Vachhani is a Full-Stack MERN Developer and IT Undergraduate student at Sarvajanik College of Engineering & Technology (SCET), Surat. He specializes in building scalable backend REST APIs, MongoDB schemas, and responsive React/Next.js interfaces.";
        followUpOptions = [
          { id: "projects", label: "💻 View Projects" },
          { id: "skills", label: "🛠️ Technical Skills" },
        ];
      } else if (lower.includes("skill") || lower.includes("mern") || lower.includes("stack") || lower.includes("react") || lower.includes("node")) {
        botText = "🛠️ Utsav's Technical Core:\n• Frontend: React.js, Next.js, JavaScript (ES6+), Tailwind CSS, Material UI\n• Backend: Node.js, Express.js, JWT, bcrypt, RESTful APIs\n• Databases: MongoDB, Mongoose ORM, PostgreSQL\n• Tools & Cloud: Git, GitHub, Firebase, Vercel";
        followUpOptions = [
          { id: "projects", label: "💻 View Projects" },
          { id: "contact", label: "📬 Get in Touch" },
        ];
      } else if (lower.includes("contact") || lower.includes("hire") || lower.includes("email") || lower.includes("linkedin") || lower.includes("resume") || lower.includes("cv")) {
        botText = "📬 You can get in touch with Utsav directly:\n• LinkedIn: linkedin.com/in/vachhani-utsav-21ut75\n• GitHub: github.com/utsavvachhani\n• Email: Leave your message or contact email right here!";
        followUpOptions = [
          { id: "about", label: "👤 About Utsav" },
          { id: "projects", label: "💻 View Projects" },
        ];
      } else {
        botText = "Thanks for your message! Utsav is open for software engineering internships and full-stack projects. Feel free to leave your contact details or choose an option below:";
      }

      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: botText,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        options: followUpOptions,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  const handleOptionClick = (option) => {
    processResponse(option.label);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    processResponse(inputValue.trim());
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Expanded Live Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 30, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-[90vw] sm:w-[380px] h-[500px] mb-4 rounded-3xl glass-card border border-divider/30 shadow-2xl overflow-hidden flex flex-col pointer-events-auto bg-secondary/95 backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-highlight/20 via-primary to-emerald-500/20 border-b border-divider/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-2xl bg-highlight text-dark flex items-center justify-center font-bold shadow-md">
                    <SmartToyIcon sx={{ fontSize: 20 }} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-secondary animate-pulse" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-primary tracking-wide">
                    Utsav AI Assistant
                  </h3>
                  <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider block">
                    Online • Interactive Assistant
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl hover:bg-secondary/60 text-third hover:text-primary transition-colors cursor-pointer"
                aria-label="Close Chat Window"
              >
                <CloseIcon sx={{ fontSize: 18 }} />
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`flex items-end gap-2 ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.sender === "bot" && (
                      <div className="w-7 h-7 rounded-xl bg-highlight/20 text-highlight flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        <SmartToyIcon sx={{ fontSize: 14 }} />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-highlight text-dark font-medium rounded-br-none shadow-md"
                          : "bg-primary/80 border border-divider/20 text-primary rounded-bl-none shadow-sm whitespace-pre-line"
                      }`}
                    >
                      <div>{msg.text}</div>
                      <div
                        className={`text-[9px] mt-1.5 text-right ${
                          msg.sender === "user" ? "text-dark/70" : "text-third/70"
                        }`}
                      >
                        {msg.time}
                      </div>
                    </div>

                    {msg.sender === "user" && (
                      <div className="w-7 h-7 rounded-xl bg-secondary text-primary flex items-center justify-center flex-shrink-0 text-xs font-bold border border-divider/20">
                        <PersonIcon sx={{ fontSize: 14 }} />
                      </div>
                    )}
                  </div>

                  {/* Interactive Quick Option Chips appended under Bot Message */}
                  {msg.sender === "bot" && msg.options && msg.options.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5 pl-9 max-w-[90%]">
                      {msg.options.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => handleOptionClick(opt)}
                          className="px-3 py-1.5 rounded-xl bg-highlight/10 hover:bg-highlight hover:text-dark text-highlight text-[11px] font-bold border border-highlight/25 transition-all duration-300 shadow-sm cursor-pointer active:scale-95 text-left"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-7 h-7 rounded-xl bg-highlight/20 text-highlight flex items-center justify-center flex-shrink-0">
                    <SmartToyIcon sx={{ fontSize: 14 }} />
                  </div>
                  <div className="bg-primary/80 border border-divider/20 p-3 rounded-2xl rounded-bl-none flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-highlight animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-highlight animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-highlight animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSendMessage}
              className="p-3 border-t border-divider/20 bg-primary/40 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask a question or select an option..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-secondary text-primary text-xs border border-divider/20 focus:border-highlight focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-highlight text-dark font-bold hover:bg-white transition-all cursor-pointer shadow-md flex items-center justify-center active:scale-95"
              >
                <SendIcon sx={{ fontSize: 16 }} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button with Breathing / Pulse Animation */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative p-4 rounded-2xl bg-highlight text-dark font-extrabold shadow-[0_0_25px_rgba(103,154,231,0.5)] cursor-pointer pointer-events-auto border border-highlight/40 flex items-center justify-center group"
        aria-label="Open Live Chat"
      >
        <span className="absolute inset-0 rounded-2xl bg-highlight opacity-40 animate-ping pointer-events-none" />

        {isOpen ? (
          <CloseIcon sx={{ fontSize: 24 }} className="z-10" />
        ) : (
          <ChatIcon sx={{ fontSize: 24 }} className="z-10" />
        )}

        {!isOpen && unreadCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 z-20 w-5 h-5 rounded-full bg-emerald-500 text-white text-[10px] font-black flex items-center justify-center border-2 border-secondary shadow-md animate-bounce">
            {unreadCount}
          </span>
        )}
      </motion.button>

    </div>
  );
};

export default LiveChatWidget;
