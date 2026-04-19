"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIPage() {
  const router = useRouter();

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const isFirstScreen = messages.length === 0;

  // Load fluid simulation
  useEffect(() => {
    if (!canvasRef.current) return;

    (window as any).canvas = canvasRef.current;

    if (!(window as any).fluidLoaded) {
      (window as any).fluidLoaded = true;

      const script = document.createElement("script");
      script.src = "/script.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: input },
    ];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();

    setMessages([
      ...newMessages,
      { role: "assistant", content: data.reply },
    ]);

    setLoading(false);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col">

      {/* 🌊 Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 w-full h-full"
      />

      {/* UI Layer */}
      <div className="fixed inset-0 z-10 flex flex-col h-screen w-full pointer-events-none">

        {/* MAIN CONTENT */}
        <div className="flex-1 w-full max-w-4xl mx-auto flex flex-col items-center justify-center p-4 pointer-events-auto min-h-0">

          {/* FIRST SCREEN */}
          {isFirstScreen && (
            <div className="text-center flex flex-col items-center gap-6 w-full px-4">
              <h1 className="text-3xl md:text-4xl font-semibold">
                Ask About Me
              </h1>

              <TypingBar
                input={input}
                setInput={setInput}
                sendMessage={sendMessage}
                center
              />
            </div>
          )}

          {/* CHAT MODE */}
          {!isFirstScreen && (
            <div className="fixed left-1/2 -translate-x-1/2 w-full max-w-4xl h-full flex flex-col overflow-hidden rounded-2xl">

              {/* ✅ ONLY ONE SCROLL AREA */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">

                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"
                      }`}
                  >
                    <div
                      className={`px-5 py-3 rounded-2xl max-w-[75%] backdrop-blur-2xl border ${m.role === "user"
                          ? "bg-[#A47551]/50 text-[#3E2F25]"
                          : "bg-transparent border border-[#3E2F25]"
                        }`}
                    >
                      {m.content}
                    </div>
                  </div>
                ))}

                {loading && (
                  <p className="text-sm animate-pulse">Thinking...</p>
                )}

                {/* 👇 scroll anchor */}
                <div ref={messagesEndRef} />
              </div>

              {/* ✅ INPUT INSIDE CONTAINER (FIXED POSITION) */}
              <div className="shrink-0 p-4 bg-transparent">
                <TypingBar
                  input={input}
                  setInput={setInput}
                  sendMessage={sendMessage}
                />
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type TypingBarProps = {
  input: string;
  setInput: (val: string) => void;
  sendMessage: () => void;
  center?: boolean;
};

function TypingBar({ input, setInput, sendMessage, center }: TypingBarProps) {
  return (
    <div className={`w-full max-w-2xl mx-auto ${center ? "" : ""}`}>
      <div className="flex items-center gap-2 px-4 py-3 rounded-full backdrop-blur-2xl bg-white/10 border border-[#3E2F25] shadow-lg">

        <input
          className="flex-1 bg-transparent outline-none text-[#3E2F25] placeholder-[#7A6A5F]"
          placeholder="Ask something about me..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
          onClick={sendMessage}
          className="px-4 py-2 rounded-full bg-[#3E2F25] text-white hover:scale-105 transition"
        >
          Send
        </button>

      </div>
    </div>
  );
}