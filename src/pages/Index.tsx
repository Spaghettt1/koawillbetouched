import { Navigation } from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Search, MessageCircle, Mail, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-6">
        <main className="relative text-center space-y-12 animate-fade-in w-full max-w-3xl">
          {/* Big Hideout Text */}
          <div className="relative">
            <h1 className="text-9xl md:text-[12rem] font-bold tracking-tight">
              <span className="text-foreground">Hideout</span>
              <span className="text-primary">.</span>
            </h1>
          </div>

          {/* Search Bar with Button Inside */}
          <div className="relative w-full">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground z-10" />
            <Input 
              placeholder="search anything" 
              className="w-full h-16 pl-16 pr-32 text-lg bg-card border-border transition-colors rounded-2xl"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 h-12 px-6 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors">
              Search
            </button>
          </div>

          {/* Footer */}
          <footer className="mt-24 text-center space-y-4 text-sm text-muted-foreground">
            <div className="flex justify-center gap-6 flex-wrap">
              <a 
                href="https://discord.gg/HkbVraQH89" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Discord Server
              </a>
              <a 
                href="mailto:hideout-network-buisness@hotmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                Support
              </a>
              <Link 
                to="/terms"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <FileText className="w-4 h-4" />
                Terms of Service
              </Link>
              <Link 
                to="/privacy"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Shield className="w-4 h-4" />
                Privacy Policy
              </Link>
            </div>
            <p>&copy; {new Date().getFullYear()} Hideout Network. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Index;
