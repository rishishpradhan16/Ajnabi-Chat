import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { MessageCircle, Video, Users } from "lucide-react";
import { useState } from "react";

interface ChatLandingProps {
  onStartTextChat: (gender: string, preference: string) => void;
  onStartVideoChat: (gender: string, preference: string) => void;
}

export const ChatLanding = ({ onStartTextChat, onStartVideoChat }: ChatLandingProps) => {
  const [gender, setGender] = useState<string>("");
  const [preference, setPreference] = useState<string>("");

  const handleStartTextChat = () => {
    if (gender && preference) {
      onStartTextChat(gender, preference);
    }
  };

  const handleStartVideoChat = () => {
    if (gender && preference) {
      onStartVideoChat(gender, preference);
    }
  };

  const isFormValid = gender && preference;
  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 text-center">
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
        <Card className="p-6 shadow-soft bg-card/80 backdrop-blur-sm border-0">
          <div className="space-y-5">
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
                onClick={handleStartTextChat}
                variant="primary"
                size="lg"
                className="w-full h-14 text-lg font-medium"
                disabled={!isFormValid}
              >
                <MessageCircle className="h-5 w-5 mr-3" />
                Text Chat
              </Button>

              <Button
                onClick={handleStartVideoChat}
                variant="teal"
                size="lg"
                className="w-full h-14 text-lg font-medium"
                disabled={!isFormValid}
              >
                <Video className="h-5 w-5 mr-3" />
                Video Chat
              </Button>
            </div>

            {/* Gender Selection */}
            <div className="space-y-4 pt-2">
              <div className="space-y-3">
                <Label className="text-sm font-medium text-foreground text-center block">Your Gender</Label>
                <div className="flex justify-center gap-2">
                  <Button
                    type="button"
                    variant={gender === "male" ? "default" : "outline"}
                    size="sm"
                    className="h-8 px-4 text-xs rounded-lg"
                    onClick={() => setGender("male")}
                  >
                    Male
                  </Button>
                  <Button
                    type="button"
                    variant={gender === "female" ? "default" : "outline"}
                    size="sm"
                    className="h-8 px-4 text-xs rounded-lg"
                    onClick={() => setGender("female")}
                  >
                    Female
                  </Button>
                  <Button
                    type="button"
                    variant={gender === "other" ? "default" : "outline"}
                    size="sm"
                    className="h-8 px-4 text-xs rounded-lg"
                    onClick={() => setGender("other")}
                  >
                    Other
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-medium text-foreground text-center block">Looking for</Label>
                <div className="flex justify-center gap-2">
                  <Button
                    type="button"
                    variant={preference === "male" ? "default" : "outline"}
                    size="sm"
                    className="h-8 px-4 text-xs rounded-lg"
                    onClick={() => setPreference("male")}
                  >
                    Male
                  </Button>
                  <Button
                    type="button"
                    variant={preference === "female" ? "default" : "outline"}
                    size="sm"
                    className="h-8 px-4 text-xs rounded-lg"
                    onClick={() => setPreference("female")}
                  >
                    Female
                  </Button>
                  <Button
                    type="button"
                    variant={preference === "any" ? "default" : "outline"}
                    size="sm"
                    className="h-8 px-4 text-xs rounded-lg"
                    onClick={() => setPreference("any")}
                  >
                    Anyone
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-xs text-muted-foreground pt-4 border-t border-border">
              By using अजनबी Chat, you agree to be respectful and follow community guidelines
            </div>
          </div>
        </Card>

        {/* Feature highlights */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-accent/30 rounded-xl p-3 space-y-1">
            <div className="text-accent-foreground font-medium text-xs">Anonymous</div>
            <div className="text-muted-foreground text-xs">
              No registration required
            </div>
          </div>
          <div className="bg-teal/20 rounded-xl p-3 space-y-1">
            <div className="text-foreground font-medium text-xs">Instant</div>
            <div className="text-muted-foreground text-xs">
              Connect immediately
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
