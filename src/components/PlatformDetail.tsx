import Navigation from "./Navigation";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Download, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PlatformDetailProps {
  name: string;
  api: string;
  description: string;
  features: string[];
  size: string;
  segments: string[];
  keyFeatures: {
    title: string;
    description: string;
  }[];
  limitations?: string;
}

const PlatformDetail = ({
  name,
  api,
  description,
  features,
  size,
  segments,
  keyFeatures,
  limitations,
}: PlatformDetailProps) => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-foreground">
                    {name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">{name}</h1>
                  <p className="text-primary text-lg font-medium mt-1">{api}</p>
                </div>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {description}
              </p>

              {limitations && (
                <Card className="bg-destructive/10 border-destructive/20 p-6 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2.5 flex-shrink-0" />
                    <p className="text-foreground leading-relaxed">{limitations}</p>
                  </div>
                </Card>
              )}

              <Card className="bg-gradient-card border-border p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="bg-gradient-card border-border p-8">
                <h2 className="text-2xl font-bold mb-4">Supported Market Segments</h2>
                <div className="flex flex-wrap gap-3">
                  {segments.map((segment, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {segment}
                    </span>
                  ))}
                </div>
              </Card>
            </div>

            <div className="lg:sticky lg:top-32">
              <Card className="bg-gradient-card border-primary p-8 shadow-glow">
                <h2 className="text-2xl font-bold mb-6">Download & Get Started</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Trial Period</span>
                    <span className="font-bold text-secondary">3 Days</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Download Size</span>
                    <span className="font-bold">{size}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Full Features</span>
                    <span className="font-bold text-secondary">Included</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-muted-foreground">Credit Card</span>
                    <span className="font-bold">Not Required</span>
                  </div>
                </div>

                <Button variant="hero" size="lg" className="w-full mb-4 text-lg">
                  <Download className="w-5 h-5" />
                  Download 3-Day Trial
                </Button>

                <p className="text-center text-sm text-muted-foreground mb-6">
                  For installation guide and support
                </p>

                <div className="bg-card/50 rounded-lg p-4 border border-border">
                  <p className="text-sm text-foreground leading-relaxed">
                    💡 <strong>Quick Setup:</strong> Our software comes with automatic connectivity 
                    to {name}, eliminating tedious verification steps. Simply download, install, 
                    and start trading smarter.
                  </p>
                </div>
              </Card>

              <div className="mt-8 space-y-4">
                {keyFeatures.map((feature, index) => (
                  <Card key={index} className="bg-gradient-card border-border p-6">
                    <h3 className="font-bold mb-2 text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Make Trading Smarter, Faster, and More Efficient
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our revolutionary solution work hard, so you don't have to. 🚀
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Download className="w-5 h-5" />
                Download Free Trial
              </Button>
              <Link to="/">
                <Button variant="outline" size="lg">
                  Explore Other Platforms
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformDetail;
