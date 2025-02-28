
import { useState } from 'react';
import { Plan, getAddonByCode, getHostedPaymentPageUrl } from '@/utils/zohoData';
import { ArrowRight, Check } from 'lucide-react';

interface SubscriptionCardProps {
  plan: Plan;
  isPopular?: boolean;
}

const SubscriptionCard = ({ plan, isPopular = false }: SubscriptionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const features = [
    "Support property List 1 or more properties",
    "Meters can be linked to properties",
    "Interactive monthly reports",
    "Consumption and cost data insights",
    "Alert on accounts not received"
  ];
  
  if (plan.interval_unit === "years") {
    features.push("Option to import 12 month history");
    features.push("Option to set monthly budgets");
  }
  
  return (
    <div 
      className={`plan-card group animate-fade-in ${isPopular ? 'ring-2 ring-zoho-primary' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: isPopular ? '0.1s' : '0.2s' }}
    >
      {isPopular && (
        <div className="bg-zoho-primary text-white text-xs font-medium px-3 py-1 text-center">
          MOST POPULAR
        </div>
      )}
      
      <div className="p-6 sm:p-8">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-zoho-text">{plan.name} Plan</h3>
            <p className="text-sm text-zoho-dark-gray mt-1">{plan.description || 'Flexible utility monitoring'}</p>
          </div>
          
          {plan.interval_unit === "years" && (
            <span className="chip bg-zoho-light-gray text-zoho-text">Save 20%</span>
          )}
        </div>
        
        <div className="mt-6">
          <div className="flex items-baseline">
            <span className="price-tag">${plan.recurring_price}</span>
            <span className="text-zoho-dark-gray ml-2">/{plan.interval_unit === "years" ? "year" : "month"}</span>
          </div>
          <div className="mt-1 text-sm text-zoho-dark-gray">
            {plan.interval_unit === "years" 
              ? "Billed annually"
              : "Billed monthly"}
          </div>
        </div>
        
        <div className="mt-8">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-zoho-success flex-shrink-0 mr-3" />
                <span className="text-sm text-zoho-text">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-8">
          <a 
            href={getHostedPaymentPageUrl(plan.plan_code)}
            target="_blank" 
            rel="noopener noreferrer"
            className={`w-full inline-flex justify-center items-center text-center px-6 py-3 rounded-full font-medium transition-all duration-300 
              ${isPopular ? 'bg-zoho-primary text-white hover:bg-zoho-primary/90' : 'bg-zoho-light-gray text-zoho-text hover:bg-zoho-medium-gray/80'}`}
          >
            <span>Subscribe Now</span>
            <ArrowRight className={`h-4 w-4 ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
