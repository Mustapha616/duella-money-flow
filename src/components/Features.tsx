import { Wallet, Send, Gift, Shield, Wifi, Bitcoin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Wallet,
    title: "Unified Wallet",
    description: "One wallet for all your financial needs - payments, transfers, and savings in one place.",
  },
  {
    icon: Send,
    title: "Smart Transfers",
    description: "Send money instantly to anyone. Support for bulk transfers, scheduled payments, and automation.",
  },
  {
    icon: Gift,
    title: "Smart Giveaways",
    description: "Run fair and transparent campaigns to distribute funds to multiple recipients safely.",
  },
  {
    icon: Shield,
    title: "KYC-Lite Security",
    description: "Quick onboarding with phone/email verification, PIN, and biometric authentication.",
  },
  {
    icon: Wifi,
    title: "Offline Transactions",
    description: "Stay connected even without internet. Mesh networks and USSD support for rural areas.",
  },
  {
    icon: Bitcoin,
    title: "Crypto Integration",
    description: "Seamlessly manage both traditional and digital currencies in one unified platform.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need in <span className="text-primary">One App</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Duella brings together the best financial tools, designed for modern Africa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-primary transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
