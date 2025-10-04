import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Settings as SettingsIcon, Bell, Shield, Palette, Database } from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 px-6 pb-12 max-w-4xl mx-auto">
        {/* Header */}
        <div className="space-y-6 mb-12 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <SettingsIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Settings</h1>
              <p className="text-muted-foreground">Manage your preferences and account</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Appearance Settings */}
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-3 mb-4">
              <Palette className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Appearance</h2>
            </div>
            <Separator className="mb-4" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Use dark theme</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Animations</Label>
                  <p className="text-sm text-muted-foreground">Enable smooth animations</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>

          {/* Privacy Settings */}
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Privacy & Security</h2>
            </div>
            <Separator className="mb-4" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Private Browsing</Label>
                  <p className="text-sm text-muted-foreground">Don't save browsing history</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Block Trackers</Label>
                  <p className="text-sm text-muted-foreground">Prevent tracking scripts</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>

          {/* Notification Settings */}
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Notifications</h2>
            </div>
            <Separator className="mb-4" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>New Games</Label>
                  <p className="text-sm text-muted-foreground">Notify about new game releases</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Updates</Label>
                  <p className="text-sm text-muted-foreground">Get notified about updates</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>

          {/* Data Settings */}
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Data & Storage</h2>
            </div>
            <Separator className="mb-4" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Cache</Label>
                  <p className="text-sm text-muted-foreground">Clear cached data</p>
                </div>
                <Button variant="outline" size="sm">Clear Cache</Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Cookies</Label>
                  <p className="text-sm text-muted-foreground">Manage cookie preferences</p>
                </div>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
            </div>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end gap-3">
            <Button variant="outline">Reset to Defaults</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
