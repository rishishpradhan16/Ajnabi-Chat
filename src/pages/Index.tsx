import { useState } from "react";
import { ChatLanding } from "@/components/ChatLanding";
import { TextChat } from "@/components/TextChat";
import { VideoChat } from "@/components/VideoChat";

type ChatMode = "landing" | "text" | "video";

const Index = () => {
  const [mode, setMode] = useState<ChatMode>("landing");

  const handleStartTextChat = () => {
    setMode("text");
  };

  const handleStartVideoChat = () => {
    setMode("video");
  };

  const handleBack = () => {
    setMode("landing");
  };

  return (
    <>
      {mode === "landing" && (
        <ChatLanding
          onStartTextChat={handleStartTextChat}
          onStartVideoChat={handleStartVideoChat}
        />
      )}
      {mode === "text" && <TextChat onBack={handleBack} />}
      {mode === "video" && <VideoChat onBack={handleBack} />}
    </>
  );
};

export default Index;
