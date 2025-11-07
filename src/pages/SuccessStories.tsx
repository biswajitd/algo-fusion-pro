import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const SuccessStories = () => {
  const testimonials = [
    {
      name: "Rohan Gupta",
      title: "Most Valuable Software",
      content: `I've been trading for several years, but Easy Trading Software has taken my profitability to a whole new level. The software's powerful analytical tools and precise automates have enabled me to consistently make winning trades. The platform's charts and analysis have given me a significant edge in the market when to buy or when to sell. Since using Easy Trading Software, I've seen a remarkable increase in my profits. 

Out of all available strategies, Option 5 — the Short Straddle (Sell CE/PE, followed by Target-Based Buy) — consistently stands out as the most rewarding. With this setup, I've often locked in profits of ₹1,500 within just 15 minutes.

It's an indispensable tool for anyone serious about achieving financial success in the stock market.`,
    },
    {
      name: "Sruti Sen",
      title: "Great Software",
      content: `Easy Trading Software has truly revolutionized my trading journey. As someone relatively new to the market, I was initially intimidated by the complexities involved. However, this platform's intuitive design and user-friendly interface made it incredibly easy to navigate and execute automative trades. The straightforward tools empowered me to make informed decisions with confidence. Thanks to Easy Trading Software, I've not only gained a deeper understanding of the market but also achieved significant profits. It's a game-changer for anyone looking for a seamless and profitable trading experience.`,
    },
    {
      name: "Priya Patel",
      title: "Incredible Experience",
      content: `In the fast-paced world of trading, time is of the essence. Easy Trading Software has been instrumental in helping me maximize my efficiency and profitability without monitoring my trade and emotional stress. The platform's different options, such as straddle trading with target profit works fantastically, have significantly reduced the time I spend monitoring the market. I highly recommend Easy Trading Software to any serious trader looking to optimize their profit and boost their returns.`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real experiences from traders who transformed their trading journey with Softgogy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      {testimonial.title}
                    </h3>
                    <div className="h-1 w-16 bg-gradient-primary rounded-full mb-4"></div>
                  </div>
                  
                  <p className="text-foreground/80 mb-6 whitespace-pre-line leading-relaxed">
                    {testimonial.content}
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-foreground italic">
                      — {testimonial.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h2>
              <p className="text-muted-foreground mb-6">
                Join thousands of successful traders who have transformed their trading with our AI-powered software
              </p>
              <a
                href="/#platforms"
                className="inline-block px-8 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg hover:shadow-glow transition-all duration-300"
              >
                Start Your Free Trial
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-muted/30 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-2">
            397 Motilal Colony, Kolkata 700081, India
          </p>
          <p className="text-muted-foreground">
            <i className="fa fa-phone me-2"></i>
            <a href="tel:+91-9830046647" className="hover:text-primary transition-colors">
              +91-9830046647
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SuccessStories;
