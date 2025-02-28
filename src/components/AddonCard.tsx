
import { useState } from 'react';
import { Addon } from '@/utils/zohoData';
import PricingTable from './PricingTable';

interface AddonCardProps {
  addon: Addon;
}

const AddonCard = ({ addon }: AddonCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="plan-card overflow-visible animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <div className="p-6 sm:p-8">
        <div>
          <h3 className="text-xl font-semibold text-zoho-text">{addon.name}</h3>
          <div className="flex items-center mt-1">
            <span className="text-sm text-zoho-dark-gray">{addon.unit_name}</span>
            <span className="mx-2 text-zoho-dark-gray">•</span>
            <span className="chip bg-zoho-light-gray text-zoho-text">
              {addon.interval_unit === "yearly" ? "Annual" : "Monthly"}
            </span>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="text-sm text-zoho-dark-gray">
            {addon.pricing_scheme === "volume" ? (
              "Volume based pricing - price decreases as quantity increases"
            ) : (
              "Tier based pricing - different rates for different quantity ranges"
            )}
          </div>
        </div>
        
        <div className="mt-4">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm font-medium text-zoho-primary hover:text-zoho-primary/80 transition-colors focus:outline-none"
          >
            {isExpanded ? "Hide pricing details" : "Show pricing details"}
          </button>
          
          {isExpanded && (
            <div className="mt-4 overflow-hidden transition-all duration-300 ease-in-out animate-fade-in">
              <PricingTable priceBrackets={addon.price_brackets} scheme={addon.pricing_scheme} />
            </div>
          )}
        </div>
        
        <div className="mt-6 pt-6 border-t border-zoho-medium-gray/50">
          <div className="text-sm text-zoho-text">
            <span className="font-medium">Available with: </span>
            {addon.plans.map((plan, index) => (
              <span key={index}>
                {plan.name} Plan
                {index < addon.plans.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddonCard;
