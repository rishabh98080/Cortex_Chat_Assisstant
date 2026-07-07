import { useState, useRef, useEffect } from "react";
import "./ChatWidget.css";
import { sendMessage } from "../services/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import {
  Bot,
  MessageCircle,
  X,
  Send,
  Zap,
  BarChart3,
  Leaf,
  Sparkles,
} from "lucide-react";

export default function ChatWidget({
  open,
  setOpen,
  selectedGraph,
}) {
  console.log(selectedGraph)
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: `👋 Welcome!

I'm Cortex AI.

Ask me anything about energy monitoring, dashboards, power factor, electricity usage or energy savings.`,
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  /* -------- NEW -------- */

  useEffect(() => {
    if (!selectedGraph) return;

    setOpen(true);

    handleSend("Analyze this graph.",selectedGraph);
  }, [selectedGraph]);

  /* --------------------- */

  const suggestions = [
    {
      icon: <Zap size={18} />,
      text: "What is Power Factor?",
    },
    {
      icon: <BarChart3 size={18} />,
      text: "Explain my energy graph",
    },
    {
      icon: <Leaf size={18} />,
      text: "How can I save electricity?",
    },
    {
      icon: <Sparkles size={18} />,
      text: "Show product demo",
    },
  ];

const handleSend = async (question = input, image = null) => {

    if (!question.trim()) return;

    setMessages((prev) => [
        ...prev,
        {
            sender: "user",
            text: question,
            image: image,
        },
    ]);

    setInput("");
    setLoading(true);

    try {

        let imageFile = null;

        // Convert graph URL to an actual File
        if (image) {

            const imageResponse = await fetch(image);

            const blob = await imageResponse.blob();

            imageFile = new File(
                [blob],
                "graph.png",
                {
                    type: blob.type,
                }
            );

            console.log("📷 Image converted to File:", imageFile);
        }

        const response = await sendMessage(question, imageFile);

        setMessages((prev) => [
            ...prev,
            {
                sender: "bot",
                text: response.answer,
            },
        ]);

    } catch (error) {

        console.error(error);

        setMessages((prev) => [
            ...prev,
            {
                sender: "bot",
                text: "Sorry, I couldn't connect to Cortex AI. Please try again.",
            },
        ]);

    } finally {

        setLoading(false);

    }
};

  return (
    <>
      {/* Floating Button */}

      <button
        className={`chat-fab ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={26} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}

      <div className={`chat-window ${open ? "show" : ""}`}>
        {/* Header */}

        <div className="chat-header">
          <div className="header-info">
            <div className="bot-avatar">
              <Bot size={22} />
            </div>

            <div>
              <h3>Cortex AI</h3>
              <span>Smart Energy Assistant</span>
            </div>
          </div>

          <button
            className="close-btn"
            onClick={() => setOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        {/* Chat Body */}

        <div className="chat-body">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.sender === "bot"
                  ? "bot-message"
                  : "user-message"
              }
            >
              <div
                style={{
                  background: "white",
                  padding: "20px",
                  color: "black",
                }}
              >
                {msg.image && (
                          <img
                            src={msg.image}
                            alt="Selected Graph"
                            style={{
                              width: "100%",
                              borderRadius: "10px",
                              marginBottom: "12px",
                              border: "1px solid #ddd"
                            }}
                          />
                        )}
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {msg.text}
                </ReactMarkdown>
              </div>
            </div>
          ))}

          {loading && (
            <div className="bot-message">
              <div className="bubble">
                <p>Thinking...</p>
              </div>
            </div>
          )}

          <div ref={chatEndRef}></div>

          {/* Suggestions */}

          <div className="suggestions">
            {suggestions.map((item) => (
              <button
                key={item.text}
                onClick={() => handleSend(item.text)}
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}

        <div className="chat-footer">
          <input
            value={input}
            placeholder="Type your question..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
          />

          <button
            onClick={() => handleSend()}
            disabled={loading}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </>
  );
}