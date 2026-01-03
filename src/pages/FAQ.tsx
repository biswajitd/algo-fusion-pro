import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FAQ = () => {
  const faqCategories = [
    {
      category: "Trading Platforms",
      questions: [
        {
          question: "Which trading platforms do you support?",
          answer:
            "We support integration with Zerodha, Groww, Angel One, Upstox, and 5Paisa. Each platform offers unique features and market segment access including NSE equities, Futures & Options, and MCX commodities.",
        },
        {
          question: "Can I use multiple trading platforms simultaneously?",
          answer:
            "No! You have to subscribe separately for multiple platforms.",
        },
        {
          question: "What is the difference between the various platform APIs?",
          answer:
            "Each platform offers different API capabilities. Zerodha provides the most comprehensive API with full market segment support. Groww requires a paid subscription for API access. Angel One, Upstox, and 5Paisa offer robust APIs with varying features. Check individual platform pages for detailed comparisons.",
        },
        {
          question:
            "Which strategy among the 35 options in the software offers the potential for consistent profit with minimal risk?",
          answer: `Yes, among the 35 active strategies available in the software, Option 5: "Short Straddle or Sell CE/PE, Then Buy on Target Achieved" and Option 10: "Auto Buy/Sell Showing Last Price" have shown strong potential for generating sustained profits with relatively low downside risk.

By executing Option 5, users can typically earn a minimum of ₹2000 per day using a capital base of approximately ₹4 lakhs.  
By executing Option 10, users can typically earn a minimum of ₹6000 per day using a capital base of approximately ₹4.5 lakhs.

Option 5 focuses on selling both CE and PE within a controlled premium difference to benefit from time decay.  
Option 10 leverages real-time LTP-based auto execution, reducing emotional bias and enabling faster reaction in volatile markets.`,
        },
        {
          question: "Do I need separate accounts for each trading platform?",
          answer:
            "Yes, you need to have an active trading account with each platform you wish to integrate. Our software connects to your existing accounts through secure API authentication.",
        },
        {
          question:
            "Which platform would you recommend as the most user friendly and efficient?",
          answer:
            "All platforms provide the same set of strategies and predictions, with trading options available in both NSE and MCX exchanges. The only exception is the Groww platform, which does not support commodity trading for Algo applications. However, in terms of user friendliness and efficient trading, the Algo software is most suitable when used with the Zerodha platform.",
        },
      ],
    },
    {
      category: "API Integration",
      questions: [
        {
          question: "How does the API integration work?",
          answer:
            "Our software connects to your broker's official API using secure authentication tokens. Once connected, you can execute trades, monitor positions, and access real-time market data directly through our unified interface.",
        },
        {
          question: "Is my trading data secure?",
          answer:
            "Absolutely. We use industry-standard encryption and security protocols. Your API credentials are stored securely, and all communications with broker APIs are encrypted. We never store your trading passwords.",
        },
        {
          question: "What happens if the API connection fails?",
          answer:
            "Our system includes automatic reconnection mechanisms and real-time monitoring. You'll receive instant notifications if any connectivity issues occur, ensuring you're always aware of your connection status.",
        },
        {
          question: "How do the real-time buy and sell signals work?",
          answer:
            "Our system generates intelligent real-time buy/sell signals using technical indicators, machine learning, and AI. Signals include entry, exit, stop-loss guidance, and confidence scoring for informed decisions.",
        },
      ],
    },
    {
      category: "Subscription Plans",
      questions: [
        {
          question: "What is included in the free trial?",
          answer:
            "All plans include a 3-day free trial with full access to features. No credit card required.",
        },
        {
          question: "Can I upgrade or downgrade my plan?",
          answer:
            "Yes, you can change your subscription plan at any time.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We only accept UPI payments as mentioned on the Pricing page.",
        },
        {
          question: "Is there a refund policy?",
          answer:
            "We offer a 7-day money-back guarantee on all new subscriptions.",
        },
        {
          question: "Do you offer discounts for annual subscriptions?",
          answer:
            "Yes! Annual subscriptions receive a 10% discount.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What kind of support do you provide?",
          answer:
            "Basic plan includes email support. Enterprise plan includes 24/7 priority support.",
        },
        {
          question: "Do you provide training or onboarding?",
          answer:
            "Yes! All plans include access to documentation and training.",
        },
        {
          question: "What are the system requirements?",
          answer:
            "Any modern browser with a stable internet connection.",
        },
        {
          question: "Can I use the software on mobile devices?",
          answer:
            "Yes, via compatible Windows emulator or secure remote desktop.",
        },
      ],
    },
    {
      category: "Trading Features",
      questions: [
        {
          question: "What trading automation features are available?",
          answer:
            "Automated order execution, stop-loss management, strategies, and real-time predictions.",
        },
        {
          question: "Do you provide market analytics and reports?",
          answer:
            "All plans include basic market data and trade reports.",
        },
        {
          question: "Is there a limit on the number of trades?",
          answer:
            "No artificial limits. Broker API limits still apply.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 pt-[2cm]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about platforms, APIs, and subscriptions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {category.category}
                </CardTitle>
                <CardDescription>
                  Common questions about {category.category.toLowerCase()}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue={
                    categoryIndex === 0 ? "item-0-5" : undefined
                  }
                >
                  {category.questions.map((faq, questionIndex) => (
                    <AccordionItem
                      key={questionIndex}
                      value={`item-${categoryIndex}-${questionIndex}`}
                    >
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Still have questions?</CardTitle>
              <CardDescription>
                Our support team is here to help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Email us at support@softgogy.com
              </p>
              <a
                href="/success-stories"
                className="text-primary hover:underline font-medium"
              >
                Contact Support →
              </a>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
