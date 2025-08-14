import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Mic, MicOff, Video, VideoOff, Phone, PhoneOff, User } from "lucide-react";

interface VideoChatProps {
  onBack: () => void;
}

export const VideoChat = ({ onBack }: VideoChatProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isSearching, setIsSearching] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Initialize local video stream
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error("Error accessing media devices:", error);
      });

    // Simulate finding a stranger
    const timer = setTimeout(() => {
      setIsSearching(false);
      setIsConnected(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDisconnect = () => {
    setIsConnected(false);
    // Stop local video stream
    if (localVideoRef.current?.srcObject) {
      const stream = localVideoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }
    setTimeout(() => {
      onBack();
    }, 1000);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (localVideoRef.current?.srcObject) {
      const stream = localVideoRef.current.srcObject as MediaStream;
      const audioTrack = stream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = isMuted;
      }
    }
  };

  const toggleVideo = () => {
    setIsVideoOff(!isVideoOff);
    if (localVideoRef.current?.srcObject) {
      const stream = localVideoRef.current.srcObject as MediaStream;
      const videoTrack = stream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = isVideoOff;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex flex-col">
      {/* Header */}
      <div className="bg-card/90 backdrop-blur-sm border-b border-border p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button onClick={onBack} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold">अजनबी Chat</h1>
              <span className="text-sm text-muted-foreground">Video</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {isSearching && (
              <div className="flex items-center gap-2 text-sm text-primary">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                <span>Searching for stranger...</span>
              </div>
            )}
            {isConnected && (
              <div className="flex items-center gap-2 text-sm text-teal">
                <User className="h-4 w-4" />
                <span>Connected</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Video Area */}
      <div className="flex-1 max-w-6xl mx-auto w-full p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[calc(100vh-200px)]">
          {/* Remote Video */}
          <Card className="relative overflow-hidden shadow-soft bg-card/80 backdrop-blur-sm border-0 flex items-center justify-center">
            {isConnected ? (
              <video
                ref={remoteVideoRef}
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                playsInline
              />
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4 text-muted-foreground">
                {isSearching ? (
                  <>
                    <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center animate-pulse">
                      <Video className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <p className="text-center">Searching for stranger...</p>
                  </>
                ) : (
                  <>
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                      <VideoOff className="h-8 w-8" />
                    </div>
                    <p className="text-center">Stranger disconnected</p>
                  </>
                )}
              </div>
            )}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              Stranger
            </div>
          </Card>

          {/* Local Video */}
          <Card className="relative overflow-hidden shadow-soft bg-card/80 backdrop-blur-sm border-0">
            <video
              ref={localVideoRef}
              className="w-full h-full object-cover rounded-lg scale-x-[-1]"
              autoPlay
              playsInline
              muted
            />
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              You
            </div>
            
            {/* Video overlay when video is off */}
            {isVideoOff && (
              <div className="absolute inset-0 bg-gradient-warm flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <VideoOff className="h-12 w-12 mx-auto mb-2" />
                  <p>Video Off</p>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Controls */}
        <div className="mt-6 flex justify-center">
          <Card className="p-4 shadow-soft bg-card/90 backdrop-blur-sm border-0">
            <div className="flex items-center gap-4">
              <Button
                onClick={toggleMute}
                variant={isMuted ? "destructive" : "secondary"}
                size="lg"
                className="h-12 w-12 rounded-full"
              >
                {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
              </Button>

              <Button
                onClick={toggleVideo}
                variant={isVideoOff ? "destructive" : "secondary"}
                size="lg"
                className="h-12 w-12 rounded-full"
              >
                {isVideoOff ? <VideoOff className="h-5 w-5" /> : <Video className="h-5 w-5" />}
              </Button>

              <Button
                onClick={handleDisconnect}
                variant="destructive"
                size="lg"
                className="h-12 px-6 rounded-full"
              >
                <PhoneOff className="h-5 w-5 mr-2" />
                End Call
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
