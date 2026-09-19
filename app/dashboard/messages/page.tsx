"use client";
import { useState } from "react";
import { Topbar } from "@/components/dashboard/Topbar";
import { Card } from "@/components/ui/Card";
import { Send } from "lucide-react";

const initialMessages = [
  { from: "consultant", text: "Hi Ahmed, I've reviewed your checklist. Could you re-upload your latest bank statement?", time: "9:14 AM" },
  { from: "client", text: "Sure, uploading it now.", time: "9:20 AM" },
  { from: "consultant", text: "Got it, thank you. I'll review and update your status shortly.", time: "9:35 AM" },
];

export default function MessagesPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [text, setText] = useState("");

  function send() {
    if (!text.trim()) return;
    setMessages((m) => [...m, { from: "client", text, time: "Now" }]);
    setText("");
  }

  return (
    <>
      <Topbar title="Messages" />
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <Card className="flex h-[calc(100vh-11rem)] flex-col">
          <div className="border-b border-charcoal-800/8 px-5 py-4">
            <p className="text-sm font-semibold text-charcoal-800">Sara Ahmed</p>
            <p className="text-xs text-charcoal-800/50">Your assigned tax consultant</p>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto px-5 py-5">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "client" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs rounded-2xl px-4 py-2.5 text-sm ${
                    m.from === "client" ? "bg-emerald-500 text-ivory-100" : "bg-ivory-300/70 text-charcoal-800"
                  }`}
                >
                  <p>{m.text}</p>
                  <p className={`mt-1 text-[10px] ${m.from === "client" ? "text-emerald-50/70" : "text-charcoal-800/40"}`}>{m.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 border-t border-charcoal-800/8 px-5 py-4">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a message..."
              className="flex-1 rounded-full border border-charcoal-800/15 px-4 py-2.5 text-sm focus-ring focus:border-emerald-500"
            />
            <button onClick={send} className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-ivory-100 focus-ring" aria-label="Send message">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </Card>
      </div>
    </>
  );
}
