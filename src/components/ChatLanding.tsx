import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Video, Users } from "lucide-react";

interface ChatLandingProps {
  onStartTextChat: () => void;
  onStartVideoChat: () => void;
}

export const ChatLanding = ({ onStartTextChat, onStartVideoChat }: ChatLandingProps) => {
  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        {/* Branding */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            अजनबी Chat
          </h1>
          <p className="text-lg text-muted-foreground">
            Meet a Stranger
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>Connect with random people worldwide</span>
          </div>
        </div>

        {/* Main Card */}
        <Card className="p-8 shadow-soft bg-card/80 backdrop-blur-sm border-0">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                Choose your chat style
              </h2>
              <p className="text-muted-foreground text-sm">
                Start a conversation with a random stranger
              </p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={onStartTextChat}
                variant="primary"
                size="lg"
                className="w-full h-14 text-lg font-medium"
              >
                <MessageCircle className="h-5 w-5 mr-3" />
                Text Chat
              </Button>

              <Button
                onClick={onStartVideoChat}
                variant="teal"
                size="lg"
                className="w-full h-14 text-lg font-medium"
              >
                <Video className="h-5 w-5 mr-3" />
                Video Chat
              </Button>
            </div>

            <div className="text-xs text-muted-foreground pt-4 border-t border-border">
              By using अजनबी Chat, you agree to be respectful and follow community guidelines
            </div>
          </div>
        </Card>

        {/* Feature highlights */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-accent/30 rounded-2xl p-4 space-y-2">
            <div className="text-accent-foreground font-medium">Anonymous</div>
            <div className="text-muted-foreground text-xs">
              No registration required
            </div>
          </div>
          <div className="bg-teal/20 rounded-2xl p-4 space-y-2">
            <div className="text-teal-foreground font-medium">Instant</div>
            <div className="text-muted-foreground text-xs">
              Connect immediately
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
