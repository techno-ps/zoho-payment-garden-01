
import { useState } from 'react';
import { getHostedPaymentPageUrl } from '@/utils/zohoData';
import { ArrowRight } from 'lucide-react';

interface SubscriptionFormProps {
  selectedPlanCode: string;
}

const SubscriptionForm = ({ selectedPlanCode }: SubscriptionFormProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Normally we'd process this data, but for demonstration we'll just redirect
    setTimeout(() => {
      window.location.href = getHostedPaymentPageUrl(selectedPlanCode);
    }, 1000);
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-zoho-medium-gray/30 p-6 sm:p-8">
      <h3 className="text-xl font-semibold text-zoho-text mb-6">Subscribe to BillSlayer</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-zoho-text">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-zoho-medium-gray/50 rounded-lg focus:ring-2 focus:ring-zoho-primary/30 focus:border-zoho-primary/70 transition-all"
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-zoho-text">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-zoho-medium-gray/50 rounded-lg focus:ring-2 focus:ring-zoho-primary/30 focus:border-zoho-primary/70 transition-all"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary flex justify-center items-center"
            >
              {isLoading ? (
                <span>Processing...</span>
              ) : (
                <>
                  <span>Continue to Payment</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              )}
            </button>
          </div>
        </div>
      </form>
      
      <div className="mt-4 text-center text-xs text-zoho-dark-gray">
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </div>
    </div>
  );
};

export default SubscriptionForm;
