import { Card, CardContent } from "@/components/ui/card";
import { Apple, Play } from "lucide-react";

const AppStores = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Download <span className="text-primary">Coming Soon</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Duella will be available on both iOS and Android platforms
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
          <Card className="w-full sm:w-auto min-w-[280px] border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Apple className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Download on the</p>
                  <h3 className="text-2xl font-bold">App Store</h3>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                  Coming Soon
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full sm:w-auto min-w-[280px] border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Get it on</p>
                  <h3 className="text-2xl font-bold">Google Play</h3>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                  Coming Soon
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Join our waitlist to be notified when we launch
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppStores;
