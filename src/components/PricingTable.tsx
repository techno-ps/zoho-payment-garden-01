
import { PriceBracket } from '@/utils/zohoData';

interface PricingTableProps {
  priceBrackets: PriceBracket[];
  scheme: string;
}

const PricingTable = ({ priceBrackets, scheme }: PricingTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-zoho-medium-gray/70 text-sm">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left font-medium text-zoho-text bg-zoho-light-gray/50">Quantity Range</th>
            <th className="px-4 py-3 text-right font-medium text-zoho-text bg-zoho-light-gray/50">Price</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zoho-medium-gray/30">
          {priceBrackets.map((bracket, index) => (
            <tr key={index} className="hover:bg-zoho-light-gray/30 transition-colors">
              <td className="px-4 py-3 text-zoho-text">
                {bracket.start_quantity && bracket.end_quantity && bracket.end_quantity > 0
                  ? `${bracket.start_quantity} - ${bracket.end_quantity}`
                  : bracket.start_quantity && (!bracket.end_quantity || bracket.end_quantity === 0)
                    ? `${bracket.start_quantity}+`
                    : 'All quantities'}
              </td>
              <td className="px-4 py-3 text-right text-zoho-text">
                ${bracket.price.toFixed(2)}
                <span className="text-zoho-dark-gray text-xs ml-1">{scheme === "tier" ? "/each" : ""}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
