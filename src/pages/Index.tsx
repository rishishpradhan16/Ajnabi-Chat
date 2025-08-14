import { useState } from "react";
import { ChatLanding } from "@/components/ChatLanding";
import { TextChat } from "@/components/TextChat";
import { VideoChat } from "@/components/VideoChat";
import { DisclaimerDialog } from "@/components/DisclaimerDialog";

type ChatMode = "landing" | "text" | "video";

const Index = () => {
  const [mode, setMode] = useState<ChatMode>("landing");
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
  const [userGender, setUserGender] = useState<string>("");
  const [userPreference, setUserPreference] = useState<string>("");

  const handleDisclaimerAccept = () => {
    setDisclaimerAccepted(true);
  };

  const handleStartTextChat = (gender: string, preference: string) => {
    setUserGender(gender);
    setUserPreference(preference);
    setMode("text");
  };

  const handleStartVideoChat = (gender: string, preference: string) => {
    setUserGender(gender);
    setUserPreference(preference);
    setMode("video");
  };

  const handleBack = () => {
    setMode("landing");
  };

  return (
    <>
      <DisclaimerDialog 
        open={!disclaimerAccepted} 
        onAccept={handleDisclaimerAccept} 
      />
      
      {disclaimerAccepted && (
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
      )}
    </>
  );
};

export default Index;
