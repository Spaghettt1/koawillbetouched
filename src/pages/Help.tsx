import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Mail, MessageCircle, BookOpen } from "lucide-react";

const Help = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 px-6 pb-12 max-w-4xl mx-auto">
        {/* Header */}
        <div className="space-y-6 mb-12 animate-fade-in text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">Help Center</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions and get support.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Card className="p-6 bg-card border-border hover:border-primary/20 transition-all cursor-pointer group">
            <BookOpen className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">Documentation</h3>
            <p className="text-sm text-muted-foreground">Browse our guides and tutorials</p>
          </Card>
          <a href="https://discord.gg/HkbVraQH89" target="_blank" rel="noopener noreferrer">
            <Card className="p-6 bg-card border-border hover:border-primary/20 transition-all cursor-pointer group">
              <MessageCircle className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-sm text-muted-foreground">Join our Discord community</p>
            </Card>
          </a>
          <a href="mailto:hideout-network-buisness@hotmail.com">
            <Card className="p-6 bg-card border-border hover:border-primary/20 transition-all cursor-pointer group">
              <Mail className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-sm text-muted-foreground">Get in touch with support</p>
            </Card>
          </a>
        </div>

        {/* FAQ Section */}
        <Card className="p-8 bg-card border-border">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I access blocked games?</AccordionTrigger>
              <AccordionContent>
                Simply navigate to the Games section and click on any game to start playing. 
                All games are accessible without restrictions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is Hideout safe to use?</AccordionTrigger>
              <AccordionContent>
                Yes, Hideout is completely safe. We don't collect any personal information 
                and all connections are secure.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I use this on my school computer?</AccordionTrigger>
              <AccordionContent>
                Hideout is designed to work on most school networks, but availability may 
                depend on your school's specific restrictions and policies.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How does the browser feature work?</AccordionTrigger>
              <AccordionContent>
                The browser feature allows you to access websites through a proxy, 
                helping you bypass network restrictions while maintaining privacy.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Do I need to create an account?</AccordionTrigger>
              <AccordionContent>
                No account is required to use most features. However, creating an account 
                allows you to save your favorites and personalize your experience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </main>
    </div>
  );
};

export default Help;
