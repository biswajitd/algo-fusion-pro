import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, ExternalLink, GraduationCap, Scale, Sparkles, Brain, Mic, Database, Music, Fingerprint, Mail, Wrench, Stethoscope, Languages, FileSpreadsheet, CheckCircle2, Info, ArrowRight } from "lucide-react";

const mockTestEngMedLawFeatures = [
  "Engineering, medical, law, and ISI admission exam coverage in one package",
  "Subject-wise practice modules for JEE, NEET, CLAT, and ISI entrance patterns",
  "Real exam simulation with timed sections and realistic question formats",
  "Detailed answers and step-by-step explanations for every question",
  "Adaptive difficulty to match the candidate's performance and improve weak areas",
  "Performance analytics with score breakdowns and topic-wise strengths",
  "Customizable mock tests to practice specific sections or full exams",
  "Offline desktop use after download for uninterrupted practice",
  "Regular updates to reflect current exam patterns and question styles",
  "User-friendly interface designed for quick setup and focused practice",
];

const mockTestBankingFeatures = [
  "Specialized question bank for banking recruitment and employment exams",
  "Coverage of IBPS PO/Clerk, SBI PO/Clerk, RBI Assistant, and regional rural banks",
  "Real exam simulation with timed sections and realistic question formats",
  "Detailed answers and step-by-step explanations for every question",
  "Adaptive difficulty to match the candidate's performance and improve weak areas",
  "Performance analytics with score breakdowns and topic-wise strengths",
  "Customizable mock tests to practice specific sections or full exams",
  "Offline desktop use after download for uninterrupted practice",
  "Regular updates to reflect current exam patterns and question styles",
  "User-friendly interface designed for quick setup and focused practice",
];

const mockTestMBAFeatures = [
  "MBA entrance exam focus for CAT, XAT, GMAT, SNAP, NMAT, and MAT",
  "Quantitative aptitude, verbal ability, data interpretation, and logical reasoning sections",
  "Real exam simulation with timed sections and realistic question formats",
  "Detailed answers and step-by-step explanations for every question",
  "Adaptive difficulty to match the candidate's performance and improve weak areas",
  "Performance analytics with score breakdowns and topic-wise strengths",
  "Customizable mock tests to practice specific sections or full exams",
  "Offline desktop use after download for uninterrupted practice",
  "Regular updates to reflect current exam patterns and question styles",
  "User-friendly interface designed for quick setup and focused practice",
];

const mockTestGovtFeatures = [
  "Comprehensive coverage of central and state government employment exams",
  "Practice sets for SSC, Railway, Defence, Police, and Public Service Commission tests",
  "Real exam simulation with timed sections and realistic question formats",
  "Detailed answers and step-by-step explanations for every question",
  "Adaptive difficulty to match the candidate's performance and improve weak areas",
  "Performance analytics with score breakdowns and topic-wise strengths",
  "Customizable mock tests to practice specific sections or full exams",
  "Offline desktop use after download for uninterrupted practice",
  "Regular updates to reflect current exam patterns and question styles",
  "User-friendly interface designed for quick setup and focused practice",
];

const mockTestCertFeatures = [
  "Certification exam practice for professional and technical qualifications",
  "Coverage of CFA, CS, CA foundation, digital marketing, cloud, and IT certifications",
  "Real exam simulation with timed sections and realistic question formats",
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

const aiTutorFeatures = [
  "Universal subject mastery — math, science, humanities, coding and beyond",
  "Multi-format input: type a question or upload PDF, DOCX, TXT or images",
  "Snap a photo of any textbook page and get instant, accurate solutions",
  "Generates a beautifully formatted PDF with step-by-step explanations",
  "Zero installation — portable .exe, just download and double-click",
  "Perfect for school, college, competitive prep and parents helping kids",
  "Lightning-fast processing powered by an advanced AI reasoning engine",
  "Detailed working shown like a personal tutor, not just final answers",
  "Handles complex equations, proofs, essays, comprehension and diagrams",
  "Tip: keep uploads to 10–15 pages per request for the fastest results",
];

const youtubeSpeechFeatures = [
  "Extract transcripts from multiple YouTube URLs simultaneously — no playback needed",
  "Zero-playback extraction: skip buffering and load captions instantly in the background",
  "Automatic language detection tags the original language of every video",
  "Seamless translation into English for unified cross-language analysis",
  "Translate final results into any language you choose for global sharing",
  "Text-to-audio conversion turns translated PDF reports into lifelike audio files",
  "Sleek desktop GUI designed for efficient batch processing and one-click exports",
  "Export clean, structured transcripts and insights as print-ready PDFs",
  "Built for researchers, content creators, marketers and data analysts",
  "Turn hours of global video content into actionable insights in seconds",
];

const backupProFeatures = [
  "Comprehensive 4-in-1 data management covering backup, recovery, and storage optimization",
  "Smart incremental backup technology to save time and drastically reduce storage consumption",
  "A Professional‑grade security that locks or encrypts files and folders, with optional encrypted backup to a secure online account",
  "Intelligent duplicate file and folder finder to safely identify redundancies and reclaim wasted disk space",
  "Automated background backups for continuous, stress-free data protection without interrupting your workflow",
  "Deep scan algorithms capable of rescuing fragmented and lost data across multiple drive types",
  "Precision duplicate analysis based on core file data and sizes, rather than just matching file names",
  "Completely secure, local desktop operation after download for absolute data privacy",
  "Lightweight architecture designed to run silently without draining your computer's system resources",
  "User-friendly interface built for quick configuration, intuitive disk management, and one-click restorations",
];

const aiSongMashupFeatures = [
  "AI-powered vocal removal turns any track into a clean instrumental in seconds",
  "Intelligent song mashup engine blends multiple tracks into fresh, seamless compositions",
  "Voice mixing tools let you layer your own recordings or reference samples over music",
  "Lyric generator creates original lyrics in your chosen language and syncs them with the track",
  "One-click stem separation for vocals, drums, bass, and other instruments",
  "Real-time preview so you can fine-tune transitions, tempo, and key before exporting",
  "Export studio-quality mashups, instrumentals, and lyric videos in popular audio formats",
  "Beginner-friendly interface with flexible controls for hobbyists and professionals alike",
  "Perfect for content creators, DJs, musicians, and social-media remix projects",
  "Your personal AI studio for innovation, remixing, and unlimited musical exploration",
];

const signaScanFeatures = [
  "Comprehensive signature verification delivering clear verdicts: GENUINE, INCONCLUSIVE, or FORGED",
  "Advanced comparative technology rigorously analyzes questioned signatures against enrolled specimens",
  "Professional-grade analytical reporting generates exportable, detailed PDF documents",
  "Intelligent per-feature breakdown examines structural and geometric characteristics of every signature",
  "Streamlined workflows provide instant confidence metrics and similarity scores",
  "Deep algorithmic analysis detects subtle anomalies, hesitations, and inconsistencies",
  "Precision scoring based on intricate stroke data and individual writing traits",
  "Completely secure, offline desktop operation keeps confidential documents on your local machine",
  "Highly optimized architecture processes high-resolution signature images swiftly",
  "User-friendly interface for quick specimen enrollment, visual comparisons, and one-click reports",
];

const mailReplyFeatures = [
  "Comprehensive 3-in-1 email management: local archiving, attachment analysis, and reply drafting",
  "Smart auto-detection instantly configures IMAP servers based on your email domain",
  "Professional-grade security processes login via App Passwords locally — credentials never stored",
  "Intelligent folder structuring organizes mail by sender, sorting .eml files, bodies, and attachments",
  "Precision intent categorization distinguishes meetings, invoices, complaints, and urgent orders",
  "Completely secure, offline desktop operation keeps private emails and attachments on your system",
  "Lightweight architecture reads, analyzes, and drafts context-aware replies without memory strain",
  "User-friendly interface for quick date-filtering, custom domain routing, and signature setup",
  "Automated reply drafting saves hours on repetitive client and customer communications",
  "Perfect for professionals, freelancers, and small businesses managing high-volume inboxes",
];

const winRescueFeatures = [
  "Comprehensive 5-in-1 system management: boot repair, image backups, data rescue, malware defense, and hardware diagnostics",
  "Flexible deployment runs from live Windows, WinRE, or any bootable WinPE USB drive",
  "Professional-grade boot repair resolves Blue Screens, boot loops, corrupted BCDs, and damaged MBRs",
  "Intelligent partition management rescans disks, repairs volumes, assigns letters, and guides recovery",
  "Automated PC tune-up cleans junk, maintains SSD/HDD, trims startup programs, and restores network connectivity",
  "Deep diagnostics evaluate S.M.A.R.T. disk health, stress-test CPUs, test RAM, and detect failing components",
  "Precision malware defense powered by Microsoft Defender for real-time protection and rootkit scanning",
  "Completely secure, local operation rescues private files to an external drive before high-risk changes",
  "Robust backup architecture creates full system images and executes bare-metal restorations",
  "User-friendly interface for driver troubleshooting, registry repair, and fixing update-caused startup failures",
];

const medGuideFeatures = [
  "Comprehensive clinical reference covering diseases, conditions, symptoms, and toxicological poisoning exposures",
  "Dual-input interface supporting both rapid free-text typing and hands-free microphone voice queries",
  "Detailed pharmaceutical monographs with recommended medications, active chemical ingredients, and adult dosing regimens",
  "Advanced interaction analysis engine highlighting critical adverse drug reactions, warnings, and safety contraindications",
  "Professional-grade PDF reporting with title bands, medication cards, and emergency warning banners",
  "Multilingual document generation for seamless translation and export of clinical reference reports",
  "Hybrid data architecture combining a fast offline database with verified online sources",
  "Dedicated emergency toxicology protocols with prominent warning alerts for critical poisoning inquiries",
  "Completely secure, local desktop operation keeping your clinical research and queries strictly private",
  "User-friendly interface for rapid condition searching, intuitive monograph navigation, and one-click PDF exports",
];

const speakRightFeatures = [
  "Comprehensive 3-in-1 system: live speech recognition, real-time grammar correction, and automated PDF progress reporting",
  "Smart voice-activated recording that engages the moment you talk and stays in standby when silent",
  "Advanced pre-roll audio buffering that eliminates clipped first words by anticipating speech start",
  "Live multi-language translation allowing you to speak in your preferred language and see instant English equivalents",
  "Instant side-by-side grammar evaluation with live transcriptions, identified errors, and corrected sentences",
  "Professional-grade PDF reporting with color-coded feedback—red strikethroughs for mistakes and green for ideal corrections",
  "Visual achievement indicators including per-sentence breakdown cards and 'Perfect!' validation ticks",
  "High-sensitivity audio engine with adaptive noise thresholding for clean capture in noisy environments",
  "Completely secure, local desktop operation ensuring your voice recordings and practice sessions remain private",
  "User-friendly interface for rapid language selection, one-click session management, and instant exportable reports",
];

const incomeTaxFeatures = [
  "Universal document support: reads loose or archived pay slips, Form 16 Part B, AIS/TIS, and bank interest statements from a folder",
  "Smart data consolidation: rapid folder selection automatically gathers all tax documents into a single processing queue",
  "Dual regime comparison: side-by-side breakdown of tax liability under both Old and New tax regimes",
  "Discrepancy detection engine highlights disputes, inconsistencies, and mismatches across multiple documents",
  "Professional Excel reporting generates Income_Tax_Report_FY2025-26.xlsx with clean layouts, title bands, and live formulas",
  "Secure handling of protected files: skips and logs unreadable or password-protected PDFs without guessing",
  "Audit & alerts: prominent warnings for missing data or unmatched income streams to prevent filing errors",
  "Local & private operation: runs entirely on your desktop to keep sensitive financial documents secure",
  "User-friendly interface with simple folder selection, hands-free automated extraction, and one-click spreadsheet export",
  "Built for professionals and individuals who want accuracy, transparency, and confidence in tax review",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Mock Test for Engineering Medical Law and ISI Admission Exam */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">Mock Test for Engineering Medical Law and ISI Admission Exam</h2>
                <p className="text-primary text-sm font-medium">Professional Edition</p>
              </div>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Prepare for the toughest entrance exams with a dedicated mock test module for
              Engineering, Medical, Law, and ISI admissions. Practice under realistic exam
              conditions with detailed explanations and performance analytics.
            </p>

            <div id="mock-test-eng-med-law-features" className="space-y-2 mb-6 flex-grow scroll-mt-24">
              {mockTestEngMedLawFeatures.map((f, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://drive.google.com/file/d/1Ewi0khwyG3x9rK8lLHIPCQRwnpyLE--N/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="hero" size="lg" className="w-full">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
              <a href="#mock-test-eng-med-law-features" className="flex-1">
                <Button variant="outline" size="lg" className="w-full group">
                  <Info className="w-4 h-4" />
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              JEE • NEET • CLAT • ISI • Free download
            </p>
          </Card>

          {/* Mock Test for Banking Employment Exam */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">Mock Test for Banking Employment Exam</h2>
                <p className="text-primary text-sm font-medium">Professional Edition</p>
              </div>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Ace banking and employment recruitment exams with specialized practice sets for
              IBPS, SBI, RBI, and regional rural banks. Build speed, accuracy, and confidence
              before the real test.
            </p>

            <div id="mock-test-banking-features" className="space-y-2 mb-6 flex-grow scroll-mt-24">
              {mockTestBankingFeatures.map((f, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://drive.google.com/file/d/19t90DsH-agblpvzeZ2LnDup4obBM5u6o/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="hero" size="lg" className="w-full">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
              <a href="#mock-test-banking-features" className="flex-1">
                <Button variant="outline" size="lg" className="w-full group">
                  <Info className="w-4 h-4" />
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              IBPS • SBI • RBI • Free download
            </p>
          </Card>

          {/* Mock Test for MBA Admission Exam */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">Mock Test for MBA Admission Exam</h2>
                <p className="text-primary text-sm font-medium">Professional Edition</p>
              </div>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Crack MBA entrance exams with focused mock tests for CAT, XAT, GMAT, SNAP,
              NMAT, and MAT. Sharpen your quantitative, verbal, DI, and reasoning skills with
              detailed solutions.
            </p>

            <div id="mock-test-mba-features" className="space-y-2 mb-6 flex-grow scroll-mt-24">
              {mockTestMBAFeatures.map((f, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://drive.google.com/file/d/1yWCRxn6P6A4LDvgx1LRgrSYYSuilwhn-/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="hero" size="lg" className="w-full">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
              <a href="#mock-test-mba-features" className="flex-1">
                <Button variant="outline" size="lg" className="w-full group">
                  <Info className="w-4 h-4" />
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              CAT • XAT • GMAT • Free download
            </p>
          </Card>

          {/* Mock Test for Government Employment Exam */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">Mock Test for Government Employment Exam</h2>
                <p className="text-primary text-sm font-medium">Professional Edition</p>
              </div>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Target central and state government jobs with practice tests for SSC, Railway,
              Defence, Police, and Public Service Commission recruitment exams. Improve your
              speed and accuracy with realistic simulations.
            </p>

            <div id="mock-test-govt-features" className="space-y-2 mb-6 flex-grow scroll-mt-24">
              {mockTestGovtFeatures.map((f, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://drive.google.com/file/d/1tbVUR2b1qwxvRNR_HWTt__rD_DD0tCQu/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="hero" size="lg" className="w-full">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
              <a href="#mock-test-govt-features" className="flex-1">
                <Button variant="outline" size="lg" className="w-full group">
                  <Info className="w-4 h-4" />
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              SSC • Railway • Defence • PSC
            </p>
          </Card>

          {/* Mock Test for Different Certifications Exam */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">Mock Test for Different Certifications Exam</h2>
                <p className="text-primary text-sm font-medium">Professional Edition</p>
              </div>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Prepare for professional certification exams across finance, law, IT, and digital
              domains. Practice with targeted question banks for CFA, CS, CA foundation, cloud,
              and more.
            </p>

            <div id="mock-test-cert-features" className="space-y-2 mb-6 flex-grow scroll-mt-24">
              {mockTestCertFeatures.map((f, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://drive.google.com/file/d/12CxhmtEU5XEaD2OEUhqVNgpZj8PV8s_J/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="hero" size="lg" className="w-full">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
              <a href="#mock-test-cert-features" className="flex-1">
                <Button variant="outline" size="lg" className="w-full group">
                  <Info className="w-4 h-4" />
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              CFA • CS • CA • IT certifications • Free download
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

          {/* Astrology */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">Decode Your Destiny</h2>
                <p className="text-primary text-sm font-medium">Astrological Life-Cycle Engine</p>
              </div>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Go beyond vague daily horoscopes. Powered by the industry-standard Swiss
              Ephemeris, this engine turns raw birth data into a stunning 48-page life
              blueprint — mapping past events, future milestones, Dasha periods and
              tailored gemstone remedies with mathematical precision.
            </p>

            <div id="astro-features" className="space-y-2 mb-6 flex-grow scroll-mt-24">
              {astroFeatures.map((f, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://drive.google.com/file/d/1FXjeTvQC_cQxgHYRj76-LLENDJPHLLBE/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="hero" size="lg" className="w-full">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
              <a href="#astro-features" className="flex-1">
                <Button variant="outline" size="lg" className="w-full group">
                  <Info className="w-4 h-4" />
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Swiss Ephemeris precision • 48-page PDF • Professional & personal use
            </p>
          </Card>

          {/* AI Universal Problem Solver & Tutor */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">AI Universal Problem Solver & Tutor</h2>
                <p className="text-primary text-sm font-medium">Your On-Demand Academic Companion</p>
              </div>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Brain className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Stop hitting a wall on tough assignments. This portable AI engine solves
              problems across every subject and stream — from middle-school algebra to
              university-level mechanics. Type a question, or drop in a PDF, Word file,
              text file or even a photo of your textbook, and get a beautifully
              formatted PDF with step-by-step explanations in seconds. No installation,
              no bloatware — just download the .exe and start solving.
            </p>

            <div id="ai-tutor-features" className="space-y-2 mb-6 flex-grow scroll-mt-24">
              {aiTutorFeatures.map((f, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://drive.google.com/file/d/1OviZciaNBtX2OrLMJ4oQLGudwmLrfgYh/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="hero" size="lg" className="w-full">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
              <a href="#ai-tutor-features" className="flex-1">
                <Button variant="outline" size="lg" className="w-full group">
                  <Info className="w-4 h-4" />
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Portable .exe • No installation • Step-by-step PDF answers
            </p>
          </Card>

          {/* YouTube Speech Analyzer */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">YouTube Speech Analyzer</h2>
                <p className="text-primary text-sm font-medium">Global Insights, Instantly</p>
              </div>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Mic className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Unlock the power of global video content without ever hitting "play." Paste
              a list of YouTube URLs and watch the software silently pull captions from
              every video, detect original languages, translate everything into English, and
              even convert your final report into lifelike audio. From research to
              marketing, turn hours of multilingual content into structured, actionable
              intelligence in seconds.
            </p>

            <div id="youtube-speech-features" className="space-y-2 mb-6 flex-grow scroll-mt-24">
              {youtubeSpeechFeatures.map((f, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://drive.google.com/file/d/1OviZciaNBtX2OrLMJ4oQLGudwmLrfgYh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="hero" size="lg" className="w-full">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
              <Link to="/software-utilities/youtube-speech-analyzer" className="flex-1">
                <Button variant="outline" size="lg" className="w-full group">
                  <Info className="w-4 h-4" />
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Multi-URL batch processing • Auto-translation • PDF + audio output
            </p>
          </Card>

          {/* Back Up Pro */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">Back Up Pro</h2>
                <p className="text-primary text-sm font-medium">Professional Edition</p>
              </div>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Database className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Safeguard your digital world with a single professional utility. Back Up Pro
              combines smart incremental backups, a powerful data-recovery engine, and an
              intelligent duplicate-file cleaner into one lightweight desktop app. Whether
              you are protecting family photos, rescuing files from a corrupted drive, or
              reclaiming gigabytes of wasted storage, this 3-in-1 solution works locally
              and privately on your own computer — no cloud required.
            </p>

            <div id="backup-pro-features" className="space-y-2 mb-6 flex-grow scroll-mt-24">
              {backupProFeatures.map((f, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://drive.google.com/file/d/1NCXeU7kGKFdU6Nm8LcgIBtGOlRDLvoCH/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="hero" size="lg" className="w-full">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
              <a href="#backup-pro-features" className="flex-1">
                <Button variant="outline" size="lg" className="w-full group">
                  <Info className="w-4 h-4" />
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              3-in-1 backup + recovery + cleanup • Local & private • Lightweight
            </p>
          </Card>

          {/* AI Song Mashup Composer */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">AI Song Mashup Composer</h2>
                <p className="text-primary text-sm font-medium">Your Personal AI Music Studio</p>
              </div>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Music className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transform the way you create music. AI Song Mashup Composer blends creativity
              with cutting-edge AI to remove vocals, mix voices, build intelligent mashups,
              and even generate lyrics in your chosen language — all from a clean, easy-to-use
              desktop interface. Whether you are a professional musician, a content creator,
              or a passionate hobbyist, this is your personal studio for innovation, remixing,
              and musical exploration.
            </p>

            <div id="ai-song-mashup-features" className="space-y-2 mb-6 flex-grow scroll-mt-24">
              {aiSongMashupFeatures.map((f, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://drive.google.com/file/d/1YVOQ9cOAWIx4IybMfxk9oUP6YlPkABkq/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="hero" size="lg" className="w-full">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
              <a href="#ai-song-mashup-features" className="flex-1">
                <Button variant="outline" size="lg" className="w-full group">
                  <Info className="w-4 h-4" />
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Vocal removal • AI mashups • Lyric generation • Studio-quality export
            </p>
          </Card>

          {/* SignaScan Pro */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">SignaScan Pro</h2>
                <p className="text-primary text-sm font-medium">Handwritten Signature Verification Expert</p>
              </div>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Fingerprint className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empower your document authentication process with a specialized professional utility.
              SignaScan Pro combines advanced comparative analysis, precise similarity scoring, and
              comprehensive PDF reporting into one powerful desktop app. Whether you are verifying
              legal contracts, auditing financial documents, or investigating potential forgery,
              this expert solution works locally and privately on your own computer — no internet
              connection required.
            </p>

            <div id="signascan-features" className="space-y-2 mb-6 flex-grow scroll-mt-24">
              {signaScanFeatures.map((f, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://drive.google.com/file/d/1omM3eWAtMYVsMA5r-IOcniLvdgHe-Ovp/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="hero" size="lg" className="w-full">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
              <a href="#signascan-features" className="flex-1">
                <Button variant="outline" size="lg" className="w-full group">
                  <Info className="w-4 h-4" />
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Offline verification • GENUINE / FORGED verdicts • Exportable PDF reports
            </p>
          </Card>

          {/* MailReplyAssistant */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">MailReplyAssistant</h2>
                <p className="text-primary text-sm font-medium">Intelligent Offline Email Analyzer & Automator</p>
              </div>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Streamline your inbox management with a specialized professional utility.
              MailReplyAssistant combines automated email harvesting, advanced attachment parsing,
              and local AI intent detection into one powerful desktop app. Whether you are generating
              professional drafts, auditing communications, or building a secure client archive,
              this intelligent solution works locally and privately — no external cloud or
              subscription required.
            </p>

            <div id="mailreply-features" className="space-y-2 mb-6 flex-grow scroll-mt-24">
              {mailReplyFeatures.map((f, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://drive.google.com/file/d/1qGpOnu0P4azJNaw0at4qKUkqLaOOvShc/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="hero" size="lg" className="w-full">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
              <a href="#mailreply-features" className="flex-1">
                <Button variant="outline" size="lg" className="w-full group">
                  <Info className="w-4 h-4" />
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Local IMAP archiving • AI intent detection • Auto-reply drafting
            </p>
          </Card>

          {/* WinRescueKit */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">WinRescueKit</h2>
                <p className="text-primary text-sm font-medium">Comprehensive System Recovery & Diagnostic Toolkit</p>
              </div>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Wrench className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Safeguard your PC's health with a definitive professional utility. WinRescueKit
              combines advanced boot repair, complete system-image backups, and powerful hardware
              diagnostics into one versatile application. Whether you are rescuing files from a
              crashed OS, troubleshooting persistent Blue Screens, or optimizing performance, this
              all-in-one solution works locally from a live Windows environment or bootable USB —
              no active internet connection required.
            </p>

            <div id="winrescue-features" className="space-y-2 mb-6 flex-grow scroll-mt-24">
              {winRescueFeatures.map((f, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://drive.google.com/file/d/11gsB3WqkxMxtdksyerhzE-6b7Pq20p9Y/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="hero" size="lg" className="w-full">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
              <a href="#winrescue-features" className="flex-1">
                <Button variant="outline" size="lg" className="w-full group">
                  <Info className="w-4 h-4" />
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Boot repair • System imaging • Hardware diagnostics • Malware defense
            </p>
          </Card>

          {/* MedGuide Reference */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">MedGuide Reference</h2>
                <p className="text-primary text-sm font-medium">Clinical Decision Support & Pharmacological Reference Expert</p>
              </div>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Stethoscope className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empower your clinical research and medical inquiries with a specialized professional utility.
              MedGuide Reference combines intelligent condition searching, comprehensive pharmaceutical profiling,
              and authoritative drug interaction analysis into one powerful desktop app. Whether you are reviewing
              treatment protocols, verifying active chemical compositions, or evaluating emergency toxicology
              guidelines, this clinical reference solution delivers clear, structured medical insights directly
              on your computer — drawing from a curated offline database supplemented by authoritative public sources.
            </p>

            <div id="medguide-features" className="space-y-2 mb-6 flex-grow scroll-mt-24">
              {medGuideFeatures.map((f, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://drive.google.com/file/d/1JD22rYz4MEDu6ve-V3a5TKK7Y4lr0rzX/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="hero" size="lg" className="w-full">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
              <a href="#medguide-features" className="flex-1">
                <Button variant="outline" size="lg" className="w-full group">
                  <Info className="w-4 h-4" />
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Clinical reference • Drug interactions • PDF reports • Private & offline
            </p>
          </Card>

          {/* SpeakRight English Coach */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">SpeakRight English Coach</h2>
                <p className="text-primary text-sm font-medium">Interactive Spoken English & Grammar Fluency Coach</p>
              </div>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Languages className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Elevate your English speaking confidence with a specialized professional utility.
              SpeakRight English Coach combines intelligent voice recognition, real-time grammar correction,
              and visual diagnostic reporting into one powerful desktop app. Whether you are polishing your
              conversational fluency, translating regional thoughts into natural English, or refining your
              pronunciation for professional communication, this interactive solution provides a private,
              judgment-free learning space right on your own computer.
            </p>

            <div id="speakright-features" className="space-y-2 mb-6 flex-grow scroll-mt-24">
              {speakRightFeatures.map((f, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://drive.google.com/file/d/1c-p5ddqIoi9kNeNpejhwB3mviz0ITF_N/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="hero" size="lg" className="w-full">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
              <a href="#speakright-features" className="flex-1">
                <Button variant="outline" size="lg" className="w-full group">
                  <Info className="w-4 h-4" />
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Voice recognition • Grammar correction • PDF reports • Local & private
            </p>
          </Card>

          {/* Income Tax Report Generator */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">Income Tax Report Generator</h2>
                <p className="text-primary text-sm font-medium">Automated Tax Extraction • Regime Comparison • Discrepancy Analysis</p>
              </div>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <FileSpreadsheet className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Take control of your tax planning with a specialized desktop utility designed for professionals and individuals alike. The Income Tax Report Generator transforms scattered financial documents into a clear, structured Excel analysis, ensuring accuracy, transparency, and confidence in your tax review.
            </p>

            <div id="income-tax-features" className="space-y-2 mb-6 flex-grow scroll-mt-24">
              {incomeTaxFeatures.map((f, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://drive.google.com/file/d/1ZqqD1r6Pc5Pgw_FFLASGx0OtqhDZqke9/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="hero" size="lg" className="w-full">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
              <a href="#income-tax-features" className="flex-1">
                <Button variant="outline" size="lg" className="w-full group">
                  <Info className="w-4 h-4" />
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Old vs New regime • Excel export • Local & private
            </p>
          </Card>
        </div>


        <div className="max-w-4xl mx-auto mt-12 text-center">
          <p className="text-base md:text-lg font-medium text-foreground bg-muted/50 rounded-xl py-4 px-6 border border-border">
            No installation needed — just double-click to run.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoftwareUtilities;
