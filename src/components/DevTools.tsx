import { useState } from "react";
import { X, Code, Terminal, Database, Cookie, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DevToolsProps {
  onClose: () => void;
}

export const DevTools = ({ onClose }: DevToolsProps) => {
  const [consoleMessages] = useState<string[]>([
    "DevTools initialized",
    "Press F12 or Ctrl+Shift+I to toggle",
  ]);

  const getLocalStorageItems = () => {
    const items: { key: string; value: string }[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        items.push({ key, value: localStorage.getItem(key) || '' });
      }
    }
    return items;
  };

  const getCookies = () => {
    return document.cookie.split(';').map(c => c.trim()).filter(c => c);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[400px] bg-card border-t border-border shadow-2xl z-[9999] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/30">
        <div className="flex items-center gap-2">
          <Code className="w-4 h-4 text-primary" />
          <h3 className="font-semibold">Developer Tools</h3>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="console" className="flex-1 flex flex-col">
        <TabsList className="w-full justify-start rounded-none border-b bg-background">
          <TabsTrigger value="console" className="gap-2">
            <Terminal className="w-4 h-4" />
            Console
          </TabsTrigger>
          <TabsTrigger value="storage" className="gap-2">
            <Database className="w-4 h-4" />
            Storage
          </TabsTrigger>
          <TabsTrigger value="cookies" className="gap-2">
            <Cookie className="w-4 h-4" />
            Cookies
          </TabsTrigger>
          <TabsTrigger value="html" className="gap-2">
            <FileText className="w-4 h-4" />
            Elements
          </TabsTrigger>
        </TabsList>

        <TabsContent value="console" className="flex-1 m-0 p-0">
          <ScrollArea className="h-full p-4">
            <div className="space-y-2 font-mono text-sm">
              {consoleMessages.map((msg, i) => (
                <div key={i} className="text-muted-foreground">
                  &gt; {msg}
                </div>
              ))}
              <div className="text-yellow-500 mt-4">
                ⚠ Note: This is a simulated console. For full browser DevTools, press F12
              </div>
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="storage" className="flex-1 m-0 p-0">
          <ScrollArea className="h-full p-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Local Storage</h4>
                <div className="space-y-2">
                  {getLocalStorageItems().map((item, i) => (
                    <div key={i} className="bg-muted p-2 rounded font-mono text-xs">
                      <div className="text-primary font-semibold">{item.key}</div>
                      <div className="text-muted-foreground truncate">{item.value}</div>
                    </div>
                  ))}
                  {getLocalStorageItems().length === 0 && (
                    <div className="text-muted-foreground text-sm">No items in local storage</div>
                  )}
                </div>
              </div>
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="cookies" className="flex-1 m-0 p-0">
          <ScrollArea className="h-full p-4">
            <div className="space-y-2">
              {getCookies().map((cookie, i) => (
                <div key={i} className="bg-muted p-2 rounded font-mono text-xs">
                  {cookie}
                </div>
              ))}
              {getCookies().length === 0 && (
                <div className="text-muted-foreground text-sm">No cookies found</div>
              )}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="html" className="flex-1 m-0 p-0">
          <ScrollArea className="h-full p-4">
            <div className="font-mono text-xs">
              <div className="text-muted-foreground">
                &lt;html&gt;<br />
                &nbsp;&nbsp;&lt;head&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Hideout Browser&lt;/title&gt;<br />
                &nbsp;&nbsp;&lt;/head&gt;<br />
                &nbsp;&nbsp;&lt;body&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;...<br />
                &nbsp;&nbsp;&lt;/body&gt;<br />
                &lt;/html&gt;
              </div>
              <div className="text-yellow-500 mt-4">
                ⚠ For full HTML inspection, press F12 to open browser DevTools
              </div>
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};
