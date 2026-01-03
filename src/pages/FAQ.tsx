
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
          answer: "No! You have to subscribe separately for multiple platforms."
        },
        {
          question: "What is the difference between the various platform APIs?",
          answer: "Each platform offers different API capabilities. Zerodha provides the most comprehensive API with full market segment support. Groww requires a paid subscription for API access. Angel One, Upstox, and 5Paisa offer robust APIs with varying features. Check individual platform pages for detailed comparisons."
        },
		{
          question: "Which strategy among the 35 options in the software offers the potential for consistent profit with minimal risk?",
          answer: `Yes, among the 35 active strategies available in the software, Option 5: "Short Straddle or Sell CE/PE, Then Buy on Target Achieved" and Option 10: "Auto Buy/Sell Showing Last Price" have shown strong potential for generating sustained profits with relatively low downside risk. By executing this option 5 strategy, users can typically earn a minimum of ₹2000 per day using a capital base of approximately ₹4 lakhs and by executing this option 10, users can typically earn a minimum of ₹6000 per day using a capital base of approximately ₹4.5 lakhs. For Option 5: The approach involves selling both Call (CE) and Put (PE) options at any strike price, provided the premium difference between the two legs does not exceed ₹30. This setup allows traders to benefit from time decay and range-bound price movement, while maintaining a controlled risk profile. For Option 10: The approach leverages an auto buy/sell mechanism that instantly reacts to the last traded price (LTP) displayed on the screen. This ensures traders can capture opportunities without delay, reducing manual intervention and emotional bias. By aligning orders directly with the LTP, the system provides a real time execution edge, enhancing precision in volatile markets. The auto trigger acts as a smart assistant, seamlessly balancing entry and exit points while maintaining discipline. This setup empowers traders to stay ahead of sudden price swings, turning automation into a decisive advantage in fast moving conditions.`
        },
        {
          question: "Do I need separate accounts for each trading platform?",
          answer: "Yes, you need to have an active trading account with each platform you wish to integrate. Our software connects to your existing accounts through secure API authentication."
        },
		{
          question: "Which platform would you recommend as the most user friendly and efficient?",
          answer: "All platforms provide the same set of strategies and predictions, with trading options available in both NSE and MCX exchanges. The only exception is the Groww platform, which does not support commodity trading for Algo applications. However, in terms of user friendliness and efficient trading, the Algo software is most suitable when used with the Zerodha platform."
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
          question: "How do the real-time buy and sell signals work?",
          answer: "Our advanced trading system generates intelligent buy and sell signals in real-time using a sophisticated combination of technical analysis indicators, machine learning algorithms, and artificial intelligence. The system continuously monitors market data across multiple timeframes and analyzes patterns using tools like Moving Averages (SMA/EMA), MACD, RSI, Bollinger Bands, Fibonacci retracements, ADX, Stochastic Oscillator, and Volume analysis. Our proprietary ML models are trained on historical market data to identify high-probability trading opportunities, while AI algorithms adapt to changing market conditions to filter out false signals. These signals appear instantly on your dashboard with clear entry and exit points, stop-loss recommendations, and confidence scores, helping you make informed trading decisions for both Stocks and Futures & Options segments."
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
          answer: "We are presently not accepting major credit cards, debit cards, Netbanking. We only accept 'UPI' payment as mentioned in the 'Pricing' page. All payments are processed securely through UPI."
        },
        {
          question: "Is there a refund policy?",
          answer: "We offer a 7-day money-back guarantee on all new subscriptions. If you're not satisfied with our service within the first 7 days, contact our support team for a full refund."
        },
        {
          question: "Do you offer discounts for annual subscriptions?",
          answer: "Yes! Annual subscriptions receive a 10% discount compared to enterprise plan."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What kind of support do you provide?",
          answer: "Basic plan includes email support with 24-hour response time. Enterprise plan provides 24/7 priority support with dedicated account management and phone support."
        },
        {
          question: "Do you provide training or onboarding?",
          answer: "Yes! All plans include access to our comprehensive documentation training."
        },
        {
          question: "What are the system requirements?",
          answer: "Our software is accessible through any modern web browser. For optimal performance, we recommend Chrome. A stable internet connection with at least 2 Mbps speed is recommended."
        },
        {
          question: "Can I use the software on mobile devices?",
          answer: "Yes, our platform is fully responsive and works on mobile using a compatible Windows emulator or via secure remote desktop access."
        }
      ]
    },
    {
      category: "Trading Features",
      questions: [
        {
          question: "What trading automation features are available?",
          answer: "Our platform offers automated order execution, stop-loss management, useful trading strategies. Advanced features include real-time based predictions for buy and sell, momemtum analysis etc."
        },
        {
          question: "Do you provide market analytics and reports?",
          answer: "All plans include basic market data and trade reports."
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

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 pt-[2cm]">
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
