
export interface PriceBracket {
  start_quantity?: number;
  end_quantity?: number;
  price: number;
}

export interface TaxPreference {
  tax_name: string;
  tax_percentage: number;
  tax_id: string;
}

export interface Plan {
  plan_id: string;
  plan_code: string;
  name: string;
  description: string;
  status: string;
  recurring_price: number;
  pricing_scheme: string;
  price_brackets: PriceBracket[];
  unit: string;
  interval: number;
  interval_unit: string;
  is_taxable: boolean;
  item_tax_preferences: TaxPreference[];
  addons: {
    name: string;
    addon_code: string;
  }[];
}

export interface Addon {
  addon_id: string;
  addon_code: string;
  name: string;
  description: string;
  status: string;
  unit_name: string;
  type: string;
  interval_unit: string;
  pricing_scheme: string;
  price_brackets: PriceBracket[];
  is_taxable: boolean;
  plans: {
    name: string;
    plan_code: string;
  }[];
}

// Zoho Plans data
export const plans: Plan[] = [
  {
    plan_id: "5803420000000110062",
    plan_code: "BSA",
    name: "Annual",
    description: "2 meters included",
    status: "active",
    recurring_price: 240.00,
    pricing_scheme: "unit",
    price_brackets: [{ price: 240.00 }],
    unit: "",
    interval: 1,
    interval_unit: "years",
    is_taxable: true,
    item_tax_preferences: [
      {
        tax_name: "Zero Rate",
        tax_percentage: 0.0,
        tax_id: "5803420000000091050"
      },
      {
        tax_name: "Standard Rate",
        tax_percentage: 15.0,
        tax_id: "5803420000000091048"
      }
    ],
    addons: [{ name: "Meter (Annual)", addon_code: "BSMETERANNUAL" }]
  },
  {
    plan_id: "5803420000000110073",
    plan_code: "BSM",
    name: "Monthly",
    description: "",
    status: "active",
    recurring_price: 30.00,
    pricing_scheme: "unit",
    price_brackets: [{ price: 30.00 }],
    unit: "/meter/month",
    interval: 1,
    interval_unit: "months",
    is_taxable: true,
    item_tax_preferences: [
      {
        tax_name: "Zero Rate",
        tax_percentage: 0.0,
        tax_id: "5803420000000091050"
      },
      {
        tax_name: "Standard Rate",
        tax_percentage: 15.0,
        tax_id: "5803420000000091048"
      }
    ],
    addons: [{ name: "Meter (Monthly)", addon_code: "BSMETERMONTHLY" }]
  }
];

// Zoho Addons data
export const addons: Addon[] = [
  {
    addon_id: "5803420000000110135",
    addon_code: "BSMETERANNUAL",
    name: "Meter (Annual)",
    description: "",
    status: "active",
    unit_name: "/meter/month",
    type: "recurring",
    interval_unit: "yearly",
    pricing_scheme: "volume",
    price_brackets: [
      { start_quantity: 1.00, end_quantity: 20.00, price: 20.00 },
      { start_quantity: 21.00, end_quantity: 50.00, price: 18.00 },
      { start_quantity: 51.00, end_quantity: 100.00, price: 16.00 },
      { start_quantity: 101.00, end_quantity: 0.00, price: 14.00 }
    ],
    is_taxable: true,
    plans: [{ name: "Annual", plan_code: "BSA" }]
  },
  {
    addon_id: "5803420000000110152",
    addon_code: "BSMETERMONTHLY",
    name: "Meter (Monthly)",
    description: "",
    status: "active",
    unit_name: "/meter/month",
    type: "recurring",
    interval_unit: "monthly",
    pricing_scheme: "tier",
    price_brackets: [
      { start_quantity: 1.00, end_quantity: 20.00, price: 30.00 },
      { start_quantity: 21.00, end_quantity: 50.00, price: 28.00 },
      { start_quantity: 51.00, end_quantity: 100.00, price: 26.00 },
      { start_quantity: 101.00, end_quantity: 0.00, price: 24.00 }
    ],
    is_taxable: true,
    plans: [{ name: "Monthly", plan_code: "BSM" }]
  }
];

// Function to get addon by code
export const getAddonByCode = (code: string): Addon | undefined => {
  return addons.find(addon => addon.addon_code === code);
};

// Get hosted payment page URL
export const getHostedPaymentPageUrl = (planCode: string): string => {
  return `https://billing.zohosecure.com/subscribe/0fcd69e279cacd9778385992bb64a2726a2bba0f6b053217ad482bf477cf719e/${planCode}`;
};
