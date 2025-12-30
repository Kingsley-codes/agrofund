export interface Opportunity {
  id: number;
  title: string;
  location: string;
  type: "Crop Farm" | "Livestock";
  duration: string;
  roi: string;
  unitPrice: string;
  fundedPercentage: number;
  unitsLeft: number;
  imageUrl: string;
  imageAlt: string;
}

export interface Step {
  icon: string;
  title: string;
  description: string;
}

export interface Logo {
  icon: string;
  name: string;
}
