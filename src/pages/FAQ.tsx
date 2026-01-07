import React from "react";
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

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

type FAQCategory = {
  category: string;
  questions: FAQItem[];
};

const FAQ = () => {
  const faqCategories: FAQCategory[] = [
    {
      category: "Trading Platforms",
      questions: [
        {
          question: "Which trading platforms do you support?",
          answer: (
            <p>
              We support Zerodha, Groww, Angel One, Upstox, and 5Paisa covering
              NSE equities, Futures & Options, and MCX commodities.
            </p>
          ),
        },
        {
          question: "Can I use multiple trading platforms simultaneously?",
          answer: <p>No. Separate subscriptions are required per platform.</p>,
        },
        {
          question:
            "Which strategy among the 35 options offers consistent profit with minimal risk?",
          answer: (
            <div className="space-y-3">
              <p>
                Among the available strategies, the following have shown strong
                consistency:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  <b>Option 5:</b> Short Straddle (Sell CE/PE, Buy on Target)
                </li>
                <li>
                  <b>Option 10:</b> Auto Buy/Sell using Last Traded Price (LTP)
                </li>
              </ul>
              <p>
                Option 5 typically yields ₹2000/day with ~₹4 lakh capital.
              </p>
              <p>
                Option 10 typically yields ₹6000/day with ~₹4.5 lakh capital.
              </p>
            </div>
          ),
        },
        {
          question: "Please give some tricks for profitable trading.",
          answer: (
            <div className="space-y-4">
              <p>
                Below are practical strategies used consistently for profits:
              </p>

              <div>
                <b>Strategy 1 – Neutral Stock Play</b>
                <ul className="list-disc pl-6">
                  <li>Timing: 10:00–10:30 AM</li>
                  <li>Tool: Option 23 (HH/LL analysis)</li>
                  <li>Capital: ₹5 lakh</li>
                  <li>Expected Profit: ~₹5,000</li>
                </ul>
              </div>

              <div>
                <b>Strategy 2 – Extreme Buy/Sell</b>
                <ul className="list-disc pl-6">
                  <li>Use Option 23 signals</li>
                  <li>Repetition: 4</li>
                  <li>Expected Profit: ~₹5,000</li>
                </ul>
              </div>

              <div>
                <b>Strategy 3 – Straddle (Option 5)</b>
                <ul className="list-disc pl-6">
                  <li>Profit from time decay</li>
                  <li>95% consistency</li>
                  <li>₹1,000 commodity profit after 3:30 PM</li>
                </ul>
              </div>
            </div>
          ),
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
            Find answers to common questions about platforms, APIs, and
            subscriptions.
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
                  Common questions about{" "}
                  {category.category.toLowerCase()}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${categoryIndex}-${index}`}
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
      </main>
    </div>
  );
};

export default FAQ;
