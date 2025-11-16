import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, BookOpen, Settings, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <main>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* HEADER */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Software Documentation
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Complete guide to installing and using your trading software
              </p>
            </div>

            {/* INSTALLATION GUIDE CARD */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Installation Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Download the complete installation guide PDF for detailed setup instructions:
                </p>
                <a href="/Installation Guide.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Open Installation Guide PDF
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* QUICK START GUIDE */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Quick Start Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">

                <Accordion type="single" collapsible className="w-full">
                  
                  <AccordionItem value="item-1">
                    <AccordionTrigger>System Requirements</AccordionTrigger>
                    <AccordionContent className="space-y-2">
                      <p><strong>Operating System:</strong> Windows 10 or later</p>
                      <p><strong>Framework:</strong> .NET Framework 9.0</p>
                      <p><strong>RAM:</strong> 4GB minimum, 8GB recommended</p>
                      <p><strong>Storage:</strong> 2.5GB available space</p>
                      <p><strong>Internet:</strong> Stable broadband connection required</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Installation Steps</AccordionTrigger>
                    <AccordionContent className="space-y-2">
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Download the software installer from your platform page</li>
                        <li>Run the installer as Administrator</li>
                        <li>Follow the installation wizard</li>
                        <li>Install .NET Framework 9.0 if prompted</li>
                        <li>Launch the application and enter your license key</li>
                        <li>Zerodha & Groww require Chrome Extensions</li>
                        <li>Other brokers require one-time credential configuration</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Platform Configuration</AccordionTrigger>
                    <AccordionContent className="space-y-2">
                      <p><strong>Zerodha:</strong> Enable Kite API & generate API keys</p>
                      <p><strong>Groww:</strong> Login & generate API keys</p>
                      <p><strong>Angel One:</strong> Enter API key & client ID</p>
                      <p><strong>Upstox:</strong> Enter API key & client ID</p>
                      <p><strong>5Paisa:</strong> Enter API key & client ID</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>First Time Setup</AccordionTrigger>
                    <AccordionContent className="space-y-2">
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Select your trading platform</li>
                        <li>Configure risk management settings</li>
                        <li>Select trading strategies</li>
                        <li>Enable notifications</li>
                        <li>Test broker connectivity</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>

                </Accordion>

              </CardContent>
            </Card>

            {/* FEATURES */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Key Features Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold">23+ Trading Strategies</h4>
                  <p className="text-sm text-muted-foreground">
                    Algorithmic, AI-powered, and technical analysis-based strategies.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Real-Time Signals</h4>
                  <p className="text-sm text-muted-foreground">
                    Instant buy/sell signals based on technical indicators.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Risk Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Stop-loss, position sizing, auto-exit and risk control.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Multi-Platform Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Zerodha, Groww, Angel One, Upstox & 5Paisa supported.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* SUPPORT */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">We’re here to assist you.</p>
                <div className="text-sm space-y-1">
                  <p><strong>Email:</strong> biswajit@softgogy.com</p>
                  <p><strong>Phone:</strong> 9830046647</p>
                  <p><strong>Hours:</strong> Mon–Sat · 9 AM – 6 PM</p>
                </div>

                <Link to="/faq">
                  <Button variant="outline" className="w-full">
                    View Frequently Asked Questions
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <Link to="/">
                <Button size="lg" className="font-bold">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Documentation;
