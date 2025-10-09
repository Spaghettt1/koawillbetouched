import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import updateData from "@/data/update.json";

export const UpdateDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen this version's update
    const seenUpdate = localStorage.getItem(`hideout_update_${updateData.version}`);
    if (!seenUpdate) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem(`hideout_update_${updateData.version}`, 'true');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && handleClose()}>
      <DialogContent className="sm:max-w-[500px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Update ({updateData.version})
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-sm text-muted-foreground mb-2">Changelog</h3>
            <ScrollArea className="h-[300px] w-full rounded-md border border-border p-4">
              <div className="space-y-2">
                {updateData.changes.map((change, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <p 
                      className="text-sm flex-1" 
                      dangerouslySetInnerHTML={{ __html: change }}
                    />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
          
          <p className="text-xs text-muted-foreground text-center">
            Update Date: {updateData.updateDate}
          </p>
        </div>

        <DialogFooter>
          <Button onClick={handleClose} className="w-full">
            Ok
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
