import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/softgogy.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const platforms = [
    { name: "Zerodha", path: "/zerodha" },
    { name: "Groww", path: "/groww" },
    { name: "Angel One", path: "/angel-one" },
    { name: "Upstox", path: "/upstox" },
    { name: "5Paisa", path: "/5paisa" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Software Features", path: "/software-features" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Pricing", path: "/pricing" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logoImage} 
              alt="Softgogy Logo" 
              className="h-10 w-10 object-cover rounded-full"
            />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Softgogy
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Platforms Dropdown */}
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

            {/* FIXED DOWNLOAD TRIAL BUTTON */}
            <Button variant="hero" size="sm" asChild>
              <Link to="/platforms">Download Trial</Link>
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="border-t border-border pt-2 mt-2">
              <p className="text-sm text-muted-foreground mb-2 px-2">Platforms:</p>
              {platforms.map((platform) => (
                <Link
                  key={platform.path}
                  to={platform.path}
                  className="block py-2 text-foreground hover:text-primary transition-colors pl-4"
                  onClick={() => setIsOpen(false)}
                >
                  {platform.name}
                </Link>
              ))}
            </div>

            {/* FIXED MOBILE DOWNLOAD TRIAL BUTTON */}
            <Button variant="hero" size="sm" className="w-full" asChild>
              <Link to="/platforms">Download Trial</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
