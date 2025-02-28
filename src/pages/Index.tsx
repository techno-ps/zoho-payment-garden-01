
import { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import SubscriptionCard from "@/components/SubscriptionCard";
import AddonCard from "@/components/AddonCard";
import SubscriptionForm from "@/components/SubscriptionForm";
import { plans, addons } from "@/utils/zohoData";
import { ArrowRight, CreditCard, Check } from 'lucide-react';

const Index = () => {
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState(plans[0].plan_code);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading to show animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
      toast({
        title: "Welcome to BillSlayer",
        description: "Explore our subscription plans and add-ons.",
      });
    }, 500);
    
    return () => clearTimeout(timer);
  }, [toast]);
  
  const handlePlanClick = (planCode: string) => {
    setSelectedPlan(planCode);
    toast({
      title: "Plan Selected",
      description: `You've selected the ${planCode === 'BSA' ? 'Annual' : 'Monthly'} plan.`,
    });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zoho-light-gray">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 sm:pt-36">
        <div className="max-w-5xl mx-auto text-center">
          <div 
            className="inline-block px-4 py-1 mb-6 rounded-full bg-zoho-light-gray text-zoho-text text-sm font-medium animate-fade-in" 
            style={{ animationDelay: '0.1s' }}
          >
            Utility Management Made Simple
          </div>
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-zoho-text tracking-tight animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Streamline Your Utility Monitoring
          </h1>
          <p 
            className="mt-6 text-xl text-zoho-dark-gray max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            Monitor, analyze, and optimize your utility usage across all your properties with BillSlayer's comprehensive management platform.
          </p>
          <div 
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <a href="#pricing" className="btn-primary">
              View Pricing Plans
            </a>
            <a href="#features" className="btn-secondary">
              Explore Features
            </a>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">Powerful Features</h2>
            <p className="section-subheading">Everything you need to manage your property utilities efficiently.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {isLoaded && [
              {
                title: "Property Management",
                description: "Link meters to properties and automatically collect usage data.",
                icon: <Check className="h-6 w-6 text-zoho-primary" />,
                delay: 0.1
              },
              {
                title: "Data Insights",
                description: "Interactive reports and analytics to optimize your utility usage.",
                icon: <Check className="h-6 w-6 text-zoho-primary" />,
                delay: 0.2
              },
              {
                title: "Secure Payments",
                description: "Seamless billing and payment processing through Zoho's secure platform.",
                icon: <CreditCard className="h-6 w-6 text-zoho-primary" />,
                delay: 0.3
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-zoho-medium-gray/30 animate-fade-in"
                style={{ animationDelay: `${feature.delay}s` }}
              >
                <div className="h-12 w-12 rounded-full bg-zoho-light-gray flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-zoho-text mb-2">{feature.title}</h3>
                <p className="text-zoho-dark-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">Simple, Transparent Pricing</h2>
            <p className="section-subheading">Choose the plan that works best for your needs. All plans include core features.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {isLoaded && plans.map((plan, index) => (
              <div key={plan.plan_id} onClick={() => handlePlanClick(plan.plan_code)}>
                <SubscriptionCard 
                  plan={plan} 
                  isPopular={plan.interval_unit === "years"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Addons Section */}
      <section id="addons" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">Add-ons & Extras</h2>
            <p className="section-subheading">Customize your subscription with additional meters and services.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {isLoaded && addons.map((addon) => (
              <AddonCard key={addon.addon_id} addon={addon} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-zoho-light-gray/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zoho-text tracking-tight mb-4">Ready to get started?</h2>
              <p className="text-lg text-zoho-dark-gray mb-6">
                Join thousands of property managers who trust BillSlayer to optimize their utility management.
              </p>
              
              <div className="space-y-4">
                {[
                  "No credit card required for exploration",
                  "Secure and compliant billing through Zoho",
                  "Cancel or change plans anytime",
                  "Dedicated support team",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-zoho-success mr-3 flex-shrink-0" />
                    <span className="text-zoho-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <SubscriptionForm selectedPlanCode={selectedPlan} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-white py-12 px-6 border-t border-zoho-medium-gray/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-semibold text-zoho-text">BillSlayer</h2>
              <p className="text-sm text-zoho-dark-gray mt-1">Powered by Zoho Subscriptions</p>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <a href="#features" className="text-sm text-zoho-text hover:text-zoho-primary transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-sm text-zoho-text hover:text-zoho-primary transition-colors">
                Pricing
              </a>
              <a href="#addons" className="text-sm text-zoho-text hover:text-zoho-primary transition-colors">
                Add-ons
              </a>
              <a href="#contact" className="text-sm text-zoho-text hover:text-zoho-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-zoho-medium-gray/30 text-center">
            <p className="text-sm text-zoho-dark-gray">
              &copy; {new Date().getFullYear()} BillSlayer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
