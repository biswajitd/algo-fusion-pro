import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, GraduationCap, Scale, Sparkles, CheckCircle2, Info, ArrowRight } from "lucide-react";

const mockTestFeatures = [
  "Real exam simulation with timed sections and realistic question formats",
  "Extensive question bank covering Officer and Staff level government exams",
  "Supports major competitive tests including CAT, XAT, GMAT, CFA, and CLAT",
  "Detailed answers and step-by-step explanations for every question",
  "Adaptive difficulty to match the candidate's performance and improve weak areas",
  "Performance analytics with score breakdowns and topic-wise strengths",
  "Customizable mock tests to practice specific sections or full exams",
  "Offline desktop use after download for uninterrupted practice",
  "Regular updates to reflect current exam patterns and question styles",
  "User-friendly interface designed for quick setup and focused practice",
];

const legalHelpFeatures = [
  "Instant legal guidance for common civil and criminal issues",
  "Searchable Q&A that returns relevant statutes and case summaries",
  "Plain-language explanations so non-lawyers can understand legal options",
  "Curated precedents highlighting similar judgments and outcomes",
  "Step-by-step remedies and suggested next actions for common problems",
  "Filter by jurisdiction to find High Court and Supreme Court decisions",
  "Downloadable summaries for easy reference and sharing with lawyers",
  "Regularly updated content to reflect recent judgments and legal changes",
  "Secure and private — no user data is shared without consent",
  "Designed for both citizens and lawyers to speed up legal research and case preparation",
];

const astroFeatures = [
  "Swiss Ephemeris engine delivers down-to-the-minute planetary accuracy",
  "Dynamic life timeline mapping major transits across your full lifespan",
  "Vimshottari Dasha periods with precise start and end dates",
  "Historical context for past events plus forecasts for future milestones",
  "Functional benefic & malefic analysis for personalised guidance",
  "Safe, tailored gemstone remedies to strengthen your planetary protectors",
  "Professional 48-page PDF report — pristine and ready to print",
  "In-depth coverage of core identity, emotional nature, and mental inclinations",
  "Ideal for professional astrologers to hand premium reports to clients",
  "Perfect for self-seekers wanting clarity on career peaks and life turning points",
];

const SoftwareUtilities = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-600">
            Utility Vault
          </h1>
          <p className="text-lg text-muted-foreground">
            Free and professional utilities built to help you learn, practice, and get
            reliable information — beyond trading.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mock Test */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">Mock Test for All Exams</h2>
                <p className="text-primary text-sm font-medium">Professional Edition</p>
              </div>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              After downloading, take realistic mock tests for government service exams
              (Officer and Staff posts) and major competitive exams such as CAT, XAT,
              GMAT, CFA, CLAT and more. The software simulates real exam conditions and
              provides detailed answers with explanations.
            </p>

            <div id="mock-test-features" className="space-y-2 mb-6 flex-grow scroll-mt-24">
              {mockTestFeatures.map((f, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://drive.google.com/file/d/1IiufqLAyMeOmCK-d8_tXUZ7RhY6DY8mj/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="hero" size="lg" className="w-full">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
              <a href="#mock-test-features" className="flex-1">
                <Button variant="outline" size="lg" className="w-full group">
                  <Info className="w-4 h-4" />
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Free download • Offline use • Regularly updated
            </p>
          </Card>

          {/* Legal Help */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">Legal Help Window</h2>
                <p className="text-primary text-sm font-medium">Legal Advice for All</p>
              </div>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Scale className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Opens a dedicated window offering searchable legal guidance, plain-language
              summaries of relevant laws, and pointers to precedent cases — helping you
              understand your legal position quickly.
            </p>

            <div id="legal-help-features" className="space-y-2 mb-6 flex-grow scroll-mt-24">
              {legalHelpFeatures.map((f, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://legaladviceforall.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="hero" size="lg" className="w-full">
                  <ExternalLink className="w-4 h-4" />
                  Open Now
                </Button>
              </a>
              <a href="#legal-help-features" className="flex-1">
                <Button variant="outline" size="lg" className="w-full group">
                  <Info className="w-4 h-4" />
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Opens in a new tab • Free to use • Private & secure
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SoftwareUtilities;
