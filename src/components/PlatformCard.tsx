import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PlatformCardProps {
  name: string;
  api: string;
  description: string;
  features: string[];
  size: string;
  link: string;
  downloadLink: string;
  limitations?: string;
}

const PlatformCard = ({
  name,
  api,
  description,
  features,
  size,
  link,
  downloadLink,
  limitations,
}: PlatformCardProps) => {
  return (
    <Card className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-primary text-sm font-medium">{api}</p>
        </div>
        <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
          <span className="text-2xl font-bold text-primary-foreground">
            {name.charAt(0)}
          </span>
        </div>
      </div>

      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
            <span className="text-sm text-foreground">{feature}</span>
          </div>
        ))}
      </div>

      {limitations && (
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
          <p className="text-sm text-foreground">{limitations}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button variant="hero" className="w-full group">
            <Download className="w-4 h-4" />
            Download Trial
            <span className="text-xs">({size})</span>
          </Button>
        </a>
        <a href="/Installation Guide.pdf" target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button variant="outline" className="w-full group">
            Installation Guide
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        3-Day Trial • Full Features • No Credit Card Required
      </p>
    </Card>
  );
};

export default PlatformCard;
