import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface DisclaimerDialogProps {
  open: boolean;
  onAccept: () => void;
}

export const DisclaimerDialog = ({ open, onAccept }: DisclaimerDialogProps) => {
  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertTriangle className="h-6 w-6 text-destructive" />
          </div>
          <DialogTitle className="text-xl font-semibold">
            18+ Content Warning
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground space-y-2">
            <p>
              This platform connects you with random strangers worldwide. 
              You must be 18 years or older to use this service.
            </p>
            <p>
              By continuing, you acknowledge that:
            </p>
            <ul className="text-left text-xs space-y-1 mt-2">
              <li>• You are 18 years of age or older</li>
              <li>• You will maintain respectful behavior</li>
              <li>• You understand this is an unmoderated platform</li>
              <li>• You use this service at your own discretion</li>
            </ul>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col space-y-2">
          <Button 
            onClick={onAccept}
            variant="destructive"
            className="w-full"
          >
            I am 18+ and Accept
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            If you are under 18, please leave this site immediately
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
