import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

const Waitlist = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter both your name and email.",
        variant: "destructive",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to Duella! 🎉",
        description: "You're on the waitlist. We'll notify you when we launch.",
      });
      setFormData({ name: "", email: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="waitlist" className="py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container px-4 mx-auto">
        <Card className="max-w-2xl mx-auto shadow-glow border-2 border-primary/20">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Join the <span className="text-primary">Revolution</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Be among the first to experience the future of African fintech
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-14 text-lg border-2 focus:border-primary"
                  maxLength={100}
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-14 text-lg border-2 focus:border-primary"
                  maxLength={255}
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full h-14 text-lg bg-gradient-primary hover:opacity-90 shadow-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>

            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>No spam, ever. Unsubscribe anytime.</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Waitlist;
