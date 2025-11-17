
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, TrendingUp, Shield } from "lucide-react";
import teamB from "@/assets/team-b.png";
import teamC from "@/assets/team-c.png";
import teamD from "@/assets/team-d.png";
import teamE from "@/assets/team-e.png";

const AboutUs = () => {
  const team = [
    {
      name: "B Dutta",
      role: "Chief Executive Officer",
      description: "Founder and visionary, Dutta is the driving force and main developer behind the trading software. He actively engages in software development, marketing, and enhancing user experience strategies.",
      image: teamB
    },
    {
      name: "D Kumar",
      role: "Chief Operations Officer",
      description: "Kumar thrives on challenges. With years of experience as a Trading Director in the tech industry, Kumar has been instrumental in our growth. He is one of the brightest minds in trading technology.",
      image: teamC
    },
    {
      name: "S Chakraborty",
      role: "Chief Technology Officer",
      description: "Chakraborty is a passionate leader who loves her work. Chakraborty mentors over 50 developers and nurtures a community of thousands of traders.",
      image: teamD
    },
    {
      name: "G Choudhury",
      role: "Chief Technology Officer",
      description: "Choudhury, with his extensive market experience, helps us analyze trends and optimize performance. He is committed to driving success and elevating our platform.",
      image: teamE
    }
  ];

  return (
    <div className="min-h-screen bg-background">

      <section className="pt-24 pb-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                About Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Tailored experiences to boost trading success
            </p>
            <p className="text-lg text-muted-foreground">
              Traders seek insightful analytics. We empower our users to make informed decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-card border-border p-8 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Unlock New Trading Way of{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Making Profit
                </span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Intelligence Meets Simplicity</h3>
                  <p className="text-muted-foreground text-sm">
                    Revolutionize the way you trade with Easy Trade—where intelligence meets simplicity, and profits meet precision!
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Target className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold">Market at Your Fingertips</h3>
                  <p className="text-muted-foreground text-sm">
                    Easy Trade puts the market at your fingertips, empowering you with tools to trade smarter and faster than ever.
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Technology Fuels Growth</h3>
                  <p className="text-muted-foreground text-sm">
                    Make trading stress-free and effective with Easy Trade—where technology fuels your financial growth!
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg font-semibold text-foreground mb-4">
                  Our primary focus is user satisfaction with Easy Trading Software.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/platforms">
                    <Button size="lg" className="font-bold">
                      Download Trial
                    </Button>
                  </Link>
                  <a href="/Help.pdf" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg">
                      View Documentation
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">Meet Our Experts</h2>
              </div>
              <p className="text-xl text-muted-foreground">
                Expert traders and developers driving our innovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div>
                        <CardTitle className="text-2xl">{member.name}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-primary">
                          {member.role}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-primary p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
                Ready to Start Your Trading Journey?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Join thousands of successful traders using our cutting-edge software
              </p>
              <Link to="/platforms">
                <Button variant="secondary" size="lg" className="font-bold">
                  Download Free Trial
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p>Email: biswajit@softgogy.com | Contact: 9830046647</p>
            <p>Address: 397 Motilal Colony, Gr. Floor, Kolkata 700081, India</p>
            <p className="mt-4">© 2025 Softgogy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
