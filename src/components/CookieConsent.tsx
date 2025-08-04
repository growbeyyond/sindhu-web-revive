import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cookie, X, Settings } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(prev => ({ ...prev, ...savedPreferences }));
      } catch (error) {
        console.error('Error parsing cookie preferences:', error);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    setPreferences(necessaryOnly);
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
  };

  const handlePreferenceChange = (type: keyof typeof preferences, value: boolean) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({ ...prev, [type]: value }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start space-x-4 flex-1">
              <Cookie className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  We use cookies to enhance your experience
                </h3>
                <p className="text-sm text-muted-foreground">
                  We use cookies to provide secure, personalized healthcare services and to analyze website traffic. 
                  Your privacy is important to us, and we are committed to protecting your personal health information 
                  in compliance with HIPAA regulations.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <Button onClick={handleAcceptAll} size="sm">
                    Accept All Cookies
                  </Button>
                  <Button onClick={handleAcceptNecessary} variant="outline" size="sm">
                    Necessary Only
                  </Button>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4 mr-2" />
                        Customize
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Cookie Preferences</DialogTitle>
                        <DialogDescription>
                          Choose which cookies you want to accept. You can change these settings at any time.
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        {/* Necessary Cookies */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <Label className="text-base font-medium">Necessary Cookies</Label>
                              <p className="text-sm text-muted-foreground">
                                Essential for website functionality and security. Cannot be disabled.
                              </p>
                            </div>
                            <Switch checked={true} disabled />
                          </div>
                          <div className="text-xs text-muted-foreground pl-0">
                            Session management, security tokens, form submissions
                          </div>
                        </div>

                        {/* Functional Cookies */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <Label className="text-base font-medium">Functional Cookies</Label>
                              <p className="text-sm text-muted-foreground">
                                Remember your preferences and improve website functionality.
                              </p>
                            </div>
                            <Switch 
                              checked={preferences.functional}
                              onCheckedChange={(checked) => handlePreferenceChange('functional', checked)}
                            />
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Language preferences, accessibility settings, user interface customizations
                          </div>
                        </div>

                        {/* Analytics Cookies */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <Label className="text-base font-medium">Analytics Cookies</Label>
                              <p className="text-sm text-muted-foreground">
                                Help us understand how visitors use our website to improve services.
                              </p>
                            </div>
                            <Switch 
                              checked={preferences.analytics}
                              onCheckedChange={(checked) => handlePreferenceChange('analytics', checked)}
                            />
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Google Analytics, page views, user behavior (anonymized data only)
                          </div>
                        </div>

                        {/* Marketing Cookies */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <Label className="text-base font-medium">Marketing Cookies</Label>
                              <p className="text-sm text-muted-foreground">
                                Show relevant health information and educational content.
                              </p>
                            </div>
                            <Switch 
                              checked={preferences.marketing}
                              onCheckedChange={(checked) => handlePreferenceChange('marketing', checked)}
                            />
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Educational content personalization, health newsletter preferences
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end space-x-3 pt-4">
                        <Button onClick={handleSavePreferences}>
                          Save Preferences
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
            
            <Button
              onClick={() => setShowBanner(false)}
              variant="ghost"
              size="sm"
              className="flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};