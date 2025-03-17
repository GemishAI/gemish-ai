"use client";

import { ChatInterface } from "@/components/chat/chat-interface";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useChat } from "@/providers/chat-provider";

export default function ChatPage() {
  const params = useParams();
  const id = params?.id as string;
  const { handleSubmit, pendingMessages } = useChat();

  // Auto-trigger AI response for pending messages
  // In ChatPage.jsx
  useEffect(() => {
    if (id && pendingMessages[id]) {
      // Add a longer delay to ensure the chat interface is fully loaded
      const timer = setTimeout(() => {
        // Only submit if this is still the active chat
        if (id === params?.id) {
          handleSubmit();
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [id, pendingMessages, handleSubmit, params]);

  return (
    <div className="w-full max-w-[825px]  mx-auto h-full flex items-center justify-center pt-4">
      <ChatInterface id={id} />
    </div>
  );
}
