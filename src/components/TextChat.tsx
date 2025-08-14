import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Send, User, UserX } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface TextChatProps {
  onBack: () => void;
}

export const TextChat = ({ onBack }: TextChatProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [isSearching, setIsSearching] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Simulate finding a stranger
    const timer = setTimeout(() => {
      setIsSearching(false);
      setIsConnected(true);
      addSystemMessage("You're now connected to a stranger. Say hello!");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const addSystemMessage = (content: string) => {
    const systemMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: false,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, systemMessage]);
  };

  const addMessage = (content: string, isUser: boolean) => {
    const message: Message = {
      id: Date.now().toString(),
      content,
      isUser,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, message]);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !isConnected) return;

    addMessage(newMessage, true);
    setNewMessage("");

    // Simulate stranger response
    setTimeout(() => {
      const responses = [
        "Hello! How are you?",
        "Nice to meet you!",
        "What's your favorite hobby?",
        "Where are you from?",
        "That's interesting!",
        "Tell me more about that.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      addMessage(randomResponse, false);
    }, 1000 + Math.random() * 2000);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    addSystemMessage("Stranger has disconnected.");
    setTimeout(() => {
      onBack();
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex flex-col">
      {/* Header */}
      <div className="bg-card/90 backdrop-blur-sm border-b border-border p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button onClick={onBack} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold">अजनबी Chat</h1>
              <span className="text-sm text-muted-foreground">Text</span>
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
            {isConnected && (
              <Button onClick={handleDisconnect} variant="destructive" size="sm">
                <UserX className="h-4 w-4 mr-2" />
                Disconnect
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 max-w-4xl mx-auto w-full p-4">
        <Card className="h-[calc(100vh-200px)] flex flex-col shadow-soft bg-card/80 backdrop-blur-sm border-0">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex w-full",
                  message.isUser ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-xs px-4 py-3 rounded-2xl",
                    message.isUser
                      ? "bg-gradient-warm text-primary-foreground shadow-warm"
                      : message.content.includes("connected") || message.content.includes("disconnected")
                      ? "bg-muted text-muted-foreground text-center text-sm"
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-border">
            <div className="flex gap-3">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={
                  isConnected 
                    ? "Type your message..." 
                    : "Waiting for connection..."
                }
                disabled={!isConnected}
                className="flex-1 h-12 rounded-2xl bg-background border-border focus:ring-primary"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!isConnected || !newMessage.trim()}
                variant="primary"
                size="lg"
                className="h-12 px-6 rounded-2xl"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
