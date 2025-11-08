import Navigation from "@/components/Navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  const faqCategories = [
    {
      category: "Trading Platforms",
      questions: [
        {
          question: "Which trading platforms do you support?",
          answer: "We support integration with Zerodha, Groww, Angel One, Upstox, and 5Paisa. Each platform offers unique features and market segment access including NSE equities, Futures & Options, and MCX commodities."
        },
        {
          question: "Can I use multiple trading platforms simultaneously?",
          answer: "Yes! Our Professional and Enterprise plans allow you to connect multiple trading platforms. The Professional plan supports up to 3 platforms, while the Enterprise plan offers unlimited platform integrations."
        },
        {
          question: "What is the difference between the various platform APIs?",
          answer: "Each platform offers different API capabilities. Zerodha provides the most comprehensive API with full market segment support. Groww requires a paid subscription for API access. Angel One, Upstox, and 5Paisa offer robust APIs with varying features. Check individual platform pages for detailed comparisons."
        },
        {
          question: "Do I need separate accounts for each trading platform?",
          answer: "Yes, you need to have an active trading account with each platform you wish to integrate. Our software connects to your existing accounts through secure API authentication."
        }
      ]
    },
    {
      category: "API Integration",
      questions: [
        {
          question: "How does the API integration work?",
          answer: "Our software connects to your broker's official API using secure authentication tokens. Once connected, you can execute trades, monitor positions, and access real-time market data directly through our unified interface."
        },
        {
          question: "Is my trading data secure?",
          answer: "Absolutely. We use industry-standard encryption and security protocols. Your API credentials are stored securely, and all communications with broker APIs are encrypted. We never store your trading passwords."
        },
        {
          question: "What happens if the API connection fails?",
          answer: "Our system includes automatic reconnection mechanisms and real-time monitoring. You'll receive instant notifications if any connectivity issues occur, ensuring you're always aware of your connection status."
        },
        {
          question: "Can I customize the API settings?",
          answer: "Yes, our Enterprise plan includes custom API integration options. You can configure rate limits, timeout settings, and implement custom trading logic based on your specific requirements."
        }
      ]
    },
    {
      category: "Subscription Plans",
      questions: [
        {
          question: "What is included in the free trial?",
          answer: "All plans include a 3-day free trial with full access to features. You can test the software with real-time data, execute trades, and explore all functionalities before committing to a paid subscription. No credit card required."
        },
        {
          question: "Can I upgrade or downgrade my plan?",
          answer: "Yes, you can change your subscription plan at any time. Upgrades take effect immediately, while downgrades will apply at the start of your next billing cycle."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, debit cards, UPI, net banking, and digital wallets. All payments are processed securely through our payment gateway."
        },
        {
          question: "Is there a refund policy?",
          answer: "We offer a 7-day money-back guarantee on all new subscriptions. If you're not satisfied with our service within the first 7 days, contact our support team for a full refund."
        },
        {
          question: "Do you offer discounts for annual subscriptions?",
          answer: "Yes! Annual subscriptions receive a 15% discount compared to monthly billing. Enterprise customers can also discuss custom pricing based on their specific needs."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What kind of support do you provide?",
          answer: "Basic plan includes email support with 24-hour response time. Professional plan adds live chat support. Enterprise plan provides 24/7 priority support with dedicated account management and phone support."
        },
        {
          question: "Do you provide training or onboarding?",
          answer: "Yes! All plans include access to our comprehensive documentation and video tutorials. Enterprise customers receive personalized onboarding sessions and training for their team."
        },
        {
          question: "What are the system requirements?",
          answer: "Our software is cloud-based and accessible through any modern web browser. For optimal performance, we recommend Chrome, Firefox, or Edge. A stable internet connection with at least 2 Mbps speed is recommended."
        },
        {
          question: "Can I use the software on mobile devices?",
          answer: "Yes, our platform is fully responsive and works on mobile browsers. We also offer dedicated mobile apps for iOS and Android with all essential trading features."
        }
      ]
    },
    {
      category: "Trading Features",
      questions: [
        {
          question: "What trading automation features are available?",
          answer: "Our platform offers automated order execution, stop-loss management, bracket orders, and custom trading strategies. Advanced features include algorithmic trading capabilities available in Professional and Enterprise plans."
        },
        {
          question: "Can I backtest my trading strategies?",
          answer: "Yes, Professional and Enterprise plans include backtesting tools that allow you to test your strategies against historical data before deploying them in live markets."
        },
        {
          question: "Do you provide market analytics and reports?",
          answer: "All plans include basic market data and trade reports. Professional and Enterprise plans offer advanced analytics, performance metrics, and customizable reporting features."
        },
        {
          question: "Is there a limit on the number of trades I can execute?",
          answer: "No, there are no artificial limits on trade execution. However, your broker's API rate limits and trading restrictions still apply based on your account type with them."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our trading platform integration, API features, and subscription plans.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="text-2xl">{category.category}</CardTitle>
                <CardDescription>
                  Common questions about {category.category.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
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
                Cannot find the answer you are looking for? Our support team is here to help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Contact us through our Success Stories page or email us at support@softgogy.com
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
