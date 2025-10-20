import React, { useState } from "react";
import axios from "axios";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      // Call GPT API
      const response = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }]
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer YOUR_OPENAI_API_KEY`
        }
      });

      const botMessage = {
        sender: "bot",
        text: response.data.choices[0].message.content
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { sender: "bot", text: "Error: could not get response" }]);
    }
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      {isOpen && (
        <div style={{ width: "300px", height: "400px", background: "white", border: "1px solid #ccc", borderRadius: "10px", display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
            {messages.map((m, i) => (
              <div key={i} style={{ textAlign: m.sender === "user" ? "right" : "left", margin: "5px 0" }}>
                <span style={{ background: m.sender === "user" ? "#0D6EFD" : "#E9ECEF", color: m.sender === "user" ? "white" : "black", padding: "5px 10px", borderRadius: "10px", display: "inline-block" }}>{m.text}</span>
              </div>
            ))}
          </div>
          <div style={{ padding: "10px", display: "flex", gap: "5px" }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
              style={{ flex: 1, padding: "5px" }}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
      <button
        onClick={toggleChat}
        style={{ backgroundColor: "#0D6EFD", color: "white", border: "none", padding: "10px 15px", borderRadius: "50%", fontSize: "20px" }}
      >
        💬
      </button>
    </div>
  );
}

export default Chatbot;
