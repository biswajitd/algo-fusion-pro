import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  Mic,
  CheckCircle2,
  ArrowLeft,
  Languages,
  Volume2,
  FileText,
  Monitor,
  Zap,
  Globe,
  ImageIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const DOWNLOAD_URL =
  "https://drive.google.com/file/d/1IiufqLAyMeOmCK-d8_tXUZ7RhY6DY8mj/view?usp=drive_link";

const features = [
  {
    icon: Zap,
    title: "Zero-Playback Extraction",
    text: "Paste multiple YouTube URLs and pull captions silently in the background — no video ever plays, no buffering, no wasted bandwidth.",
  },
  {
    icon: Globe,
    title: "Auto Language Detection",
    text: "Instantly identifies the original language of every video, so you always know exactly what you're working with.",
  },
  {
    icon: Languages,
    title: "Universal Translation Engine",
    text: "Standardizes every transcript into English for unified analysis, then translates the final report into any language you choose.",
  },
  {
    icon: Volume2,
    title: "Text-to-Audio Conversion",
    text: "Turn your translated PDF report into lifelike audio — perfect for consuming insights on the go.",
  },
  {
    icon: FileText,
    title: "Structured PDF Reports",
    text: "Clean, print-ready PDFs with speaker text, translations, and metadata organised for immediate use.",
  },
  {
    icon: Monitor,
    title: "Sleek Desktop GUI",
    text: "A modern, intuitive interface designed for efficient batch processing and one-click exports.",
  },
];

const installationSteps = [
  "Click the Download button above and save the installer to your computer from Google Drive.",
  "If Windows SmartScreen shows a warning, click 'More info' and then 'Run anyway' — the file is a legitimate desktop utility.",
  "Double-click the downloaded file to launch the YouTube Speech Analyzer desktop application.",
  "Paste one or more YouTube URLs into the input panel (each URL on a new line).",
  "Choose your preferred output language and toggle text-to-audio if you'd like an MP3 alongside the PDF.",
  "Click 'Analyze' and wait a few seconds — the app extracts, translates and packages everything for you.",
  "Open the generated PDF or audio file from the output folder shown in the app.",
];

const useCases = [
  "Researchers digesting hours of foreign-language interviews and lectures",
  "Content creators mining viral videos for scripts, hooks and quotes",
  "Marketers analysing competitor channels across global markets",
  "Journalists fact-checking speeches and press conferences",
  "Educators building multilingual study material from public talks",
  "Analysts building datasets from long-form video content",
];

const YoutubeSpeechAnalyzer = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back link */}
        <Link
          to="/software-utilities"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Utility Vault
        </Link>

        {/* Hero */}
        <div className="grid md:grid-cols-[auto,1fr] gap-6 items-center mb-10">
          <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
            <Mic className="w-12 h-12 text-primary-foreground" />
          </div>
          <div>
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2">
              Utility Vault
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              YouTube Speech Analyzer
            </h1>
            <p className="text-lg text-muted-foreground">
              Global Insights, Instantly — turn hours of multilingual video into
              structured, actionable intelligence in seconds.
            </p>
          </div>
        </div>

        {/* Overview */}
        <Card className="bg-gradient-card border-border p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              YouTube Speech Analyzer is a powerful desktop utility that unlocks
              the value locked inside global video content — without ever hitting
              "play." Paste a list of YouTube URLs and the app silently pulls
              captions from every video, detects each original language, and
              translates everything into English so you can analyse them side by
              side.
            </p>
            <p>
              When you're done, translate the final results into any language you
              choose, export a beautifully structured PDF report, and even
              generate a lifelike audio version for hands-free listening. From
              academic research to competitive marketing, this tool compresses
              hours of manual review into seconds of automated intelligence.
            </p>
            <p>
              Built as a lightweight Windows desktop app with a clean GUI, it's
              designed for maximum efficiency: batch multiple URLs at once,
              choose your output language, and let the app do the heavy lifting
              in the background.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:flex-none"
            >
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                <Download className="w-4 h-4" />
                Download Now
              </Button>
            </a>
            <p className="text-xs text-muted-foreground self-center">
              Free download • Windows desktop app • Batch processing • PDF + audio output
            </p>
          </div>
        </Card>

        {/* Features */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {features.map(({ icon: Icon, title, text }) => (
              <Card
                key={title}
                className="bg-gradient-card border-border p-6 hover:border-primary transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Screenshots</h2>
          <p className="text-sm text-muted-foreground mb-6">
            A quick look at the desktop interface. Live screenshots will be added
            here once the next public build is released.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              "Main dashboard — paste URLs & pick output language",
              "Batch processing view — live progress per video",
              "Report preview — translated PDF + audio export",
            ].map((caption, i) => (
              <Card
                key={i}
                className="bg-gradient-card border-border overflow-hidden"
              >
                <div className="aspect-video bg-muted/30 border-b border-border flex items-center justify-center">
                  <div className="text-center px-4">
                    <ImageIcon className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">
                      Screenshot coming soon
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium">{caption}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Installation */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Installation & Setup</h2>
          <Card className="bg-gradient-card border-border p-8">
            <ol className="space-y-4">
              {installationSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-gradient-primary text-primary-foreground font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-sm text-foreground leading-relaxed pt-1">
                    {step}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-8 p-4 rounded-lg border border-border bg-muted/20">
              <h4 className="font-semibold mb-2 text-sm">System Requirements</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  Windows 10 or Windows 11 (64-bit recommended)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  4 GB RAM minimum (8 GB recommended for large batches)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  Active internet connection (used only to fetch captions & translations)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  ~150 MB free disk space for the app + generated reports
                </li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Use cases */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Who It's For</h2>
          <Card className="bg-gradient-card border-border p-8">
            <div className="grid md:grid-cols-2 gap-3">
              {useCases.map((u) => (
                <div key={u} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground">{u}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* CTA */}
        <Card className="bg-gradient-card border-border p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">
            Ready to decode the world's videos?
          </h2>
          <p className="text-muted-foreground mb-6">
            Download the YouTube Speech Analyzer and turn multilingual video
            into insight — no playback required.
          </p>
          <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg">
              <Download className="w-4 h-4" />
              Download YouTube Speech Analyzer
            </Button>
          </a>
        </Card>
      </div>
    </div>
  );
};

export default YoutubeSpeechAnalyzer;
