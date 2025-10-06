import walletMockup from "@/assets/wallet-mockup.png";
import sendMoneyMockup from "@/assets/send-money-mockup.png";
import giveawayMockup from "@/assets/giveaway-mockup.png";

const AppShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for <span className="text-primary">Mobile-First</span> Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            A beautiful, intuitive mobile app designed for the way you live and work
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center space-y-4 animate-fade-in">
            <div className="relative mx-auto w-64 h-[500px] bg-gradient-to-b from-primary/5 to-transparent rounded-3xl p-4 shadow-lg">
              <img 
                src={walletMockup} 
                alt="Wallet Dashboard"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-xl font-bold">Wallet Dashboard</h3>
            <p className="text-muted-foreground">View balance, track activity, and manage your money at a glance</p>
          </div>

          <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="relative mx-auto w-64 h-[500px] bg-gradient-to-b from-primary/5 to-transparent rounded-3xl p-4 shadow-lg">
              <img 
                src={sendMoneyMockup} 
                alt="Send Money"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-xl font-bold">Instant Transfers</h3>
            <p className="text-muted-foreground">Send money to anyone, instantly and securely</p>
          </div>

          <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative mx-auto w-64 h-[500px] bg-gradient-to-b from-primary/5 to-transparent rounded-3xl p-4 shadow-lg">
              <img 
                src={giveawayMockup} 
                alt="Smart Giveaways"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-xl font-bold">Smart Giveaways</h3>
            <p className="text-muted-foreground">Run campaigns and distribute funds at scale</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
