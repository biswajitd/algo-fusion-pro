import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const platforms = [
    { name: "Zerodha", path: "/zerodha" },
    { name: "Groww", path: "/groww" },
    { name: "Angel One", path: "/angel-one" },
    { name: "Upstox", path: "/upstox" },
    { name: "5Paisa", path: "/5paisa" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Softgogy
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors">
                Platforms
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {platforms.map((platform) => (
                  <Link
                    key={platform.path}
                    to={platform.path}
                    className="block px-4 py-3 hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {platform.name}
                  </Link>
                ))}
              </div>
            </div>
            <Button variant="hero" size="sm">
              Download Trial
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link
              to="/"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            {platforms.map((platform) => (
              <Link
                key={platform.path}
                to={platform.path}
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {platform.name}
              </Link>
            ))}
            <Button variant="hero" size="sm" className="w-full">
              Download Trial
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
