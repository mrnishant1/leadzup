import React, { useCallback, useMemo, useState } from "react";

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<
    { sender: "bot" | "user"; text: string }[]
  >([
    {
      sender: "bot",
      text: "Hey! I'm the Leadzup Copilot. Ask me how to turn Reddit conversations into paying customers.",
    },
    {
      sender: "bot",
      text: "I can help you find hidden conversations, craft outreach, and automate DMs or AI comments.",
    },
  ]);

  const quickReplies = useMemo(
    () => [
      "How do you find hidden Reddit opportunities?",
      "Can you automate DMs safely?",
      "What do AI comments look like?",
      "How fast can we launch?",
    ],
    []
  );

  const generateResponse = useCallback((input: string) => {
    const normalized = input.toLowerCase();
    if (normalized.includes("hidden") || normalized.includes("opportunit")) {
      return "We monitor every subreddits and every post in real-time to spot unserved questions. When a match hits your ICP, we alert you instantly.";
    }
    if (normalized.includes("dm") || normalized.includes("direct message")) {
      return "Leadzup writes personalized DM scripts and sends them automatically once you approve. Every reply is synced to your CRM.";
    }
    if (normalized.includes("comment") || normalized.includes("ai")) {
      return "Our AI comments mimic native Reddit tone, cite real threads, and pitch your offer without sounding spammy.";
    }
    if (normalized.includes("launch") || normalized.includes("start")) {
      return "Most teams go live within 24 hours. Share your ICP, plug in brand positioning, and we handle Reddit monitoring + outreach.";
    }
    return "We help brands discover high-intent Reddit conversations, then engage through automated DMs or AI-powered replies that drive traffic back to you.";
  }, []);

  const handleSend = useCallback(() => {
    if (!chatInput.trim()) return;
    const newMessage = chatInput.trim();
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: newMessage },
      { sender: "bot", text: generateResponse(newMessage) },
    ]);
    setChatInput("");
    setIsChatOpen(true);
  }, [chatInput, generateResponse]);
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 text-sm">
      {isChatOpen && (
        <div className="w-80 rounded-2xl border border-gray-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-t-2xl">
            <div>
              <p className="text-sm font-semibold">Leadzup Copilot</p>
              <p className="text-xs text-white/80">Reddit growth guide</p>
            </div>
            <button
              className="rounded-full bg-white/20 px-2 py-1 text-xs hover:bg-white/30 transition"
              onClick={() => setIsChatOpen(false)}
              aria-label="Close chatbot"
            >
              ✕
            </button>
          </div>
          <div className="max-h-64 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={`${msg.sender}-${idx}`}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <p
                  className={`rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-orange-100 text-orange-900"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
          <div className="px-4 pb-4 space-y-2">
            <div className="flex items-center gap-2">
              <input
                className="flex-1 rounded-xl border border-gray-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Ask about Reddit growth..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <button
                className="rounded-xl bg-orange-500 px-3 py-2 text-white text-xs font-semibold hover:bg-orange-600 transition"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  className="rounded-full border border-gray-200 px-3 py-1 text-[11px] text-gray-600 hover:border-orange-300 hover:text-orange-600 transition"
                  onClick={() => {
                    setMessages((prev) => [
                      ...prev,
                      { sender: "user", text: reply },
                      { sender: "bot", text: generateResponse(reply) },
                    ]);
                    setIsChatOpen(true);
                  }}
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      <button
        className="flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-xl hover:bg-orange-600 transition"
        onClick={() => setIsChatOpen((prev) => !prev)}
      >
        {isChatOpen ? "Hide Leadzup Copilot" : "Ask Leadzup"}
        <span className="rounded-full bg-white/20 px-2 py-1 text-[10px]">
          Beta
        </span>
      </button>
    </div>
  );
};

export default Chatbot;
