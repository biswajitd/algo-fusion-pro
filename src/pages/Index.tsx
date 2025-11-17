
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PlatformsList from "@/components/PlatformsList";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Smartphone, Shield, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <PlatformsList />
      
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Choose{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Our Software?
                </span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Smartphone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Mobile Ready</h3>
                  <p className="text-muted-foreground text-sm">
                    Trade on the go with mobile device compatibility via Windows emulator or remote desktop
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold">Risk Protected</h3>
                  <p className="text-muted-foreground text-sm">
                    Advanced risk management with stop-loss, position sizing, and real-time monitoring
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Lightning Fast</h3>
                  <p className="text-muted-foreground text-sm">
                    Built with Python, C#, and .NET Framework 9 for optimal Windows performance
                  </p>
                </div>
              </div>

              <div className="bg-card/50 rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold mb-4">Hybrid Intelligence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You retain full manual control at any moment, allowing you to override, adjust, 
                  or intervene in trades based on your own insights or evolving market conditions. 
                  This hybrid model ensures that both algorithmic precision and human intuition work 
                  in harmony for optimal trading outcomes.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Start with a 3-day free trial. Experience the power of AI-driven trading with full features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/platforms">
                <Button variant="secondary" size="lg" className="font-bold">
                  Download Free Trial
                </Button>
              </Link>
              <a href="/Help.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View Documentation
                </Button>
              </a>
            </div>
            <p className="text-sm text-primary-foreground/70 mt-6">
              No credit card required • Full feature access • 3-day trial period
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">S</span>
                </div>
                <span className="text-lg font-bold">Softgogy</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Revolutionary algo trading software powered by AI and machine learning
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Platforms</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/zerodha" className="hover:text-primary transition-colors">Zerodha</a></li>
                <li><a href="/groww" className="hover:text-primary transition-colors">Groww</a></li>
                <li><a href="/angel-one" className="hover:text-primary transition-colors">Angel One</a></li>
                <li><a href="/upstox" className="hover:text-primary transition-colors">Upstox</a></li>
                <li><a href="/5paisa" className="hover:text-primary transition-colors">5Paisa</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/documentation" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="/Installation Guide.pdf" className="hover:text-primary transition-colors">Installation Guide</a></li>
                <li><a href="/software-features" className="hover:text-primary transition-colors">Software Features</a></li>
                <li><a href="/faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: biswajit@softgogy.com</li>
                <li>Contact: 9830046647</li>
                <li>Address: 397 Motilal Colony,</li>
                <li>Gr. Floor, Kolkata 700081, India</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Softgogy. All rights reserved. Built with cutting-edge AI technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
