import { Home, List, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const navItems = [
    { icon: Home, label: "Home", active: true },
    { icon: List, label: "Latest", active: false },
    { icon: Moon, label: "My List", active: false },
  ];

  return (
    <div className={cn("w-64 bg-background-secondary border-r border-border p-6", className)}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-horror-red horror-text-glow">
          Bhootvaani
        </h1>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200",
              item.active
                ? "bg-horror-red text-white horror-glow"
                : "text-muted-foreground hover:text-foreground hover:bg-background-tertiary"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
