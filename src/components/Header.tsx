import { Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-background-secondary border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search"
              className="pl-10 bg-background border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>
        
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          <User className="w-4 h-4 mr-2" />
          Login
        </Button>
      </div>
    </header>
  );
};

export default Header;
