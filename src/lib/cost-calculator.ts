export interface CostCalculatorInput {
  weightKg: number;
  isExpress: boolean;
  isFragile: boolean;
  declaredValue: number;
}

export interface CostBreakdown {
  base: number;
  weightCharge: number;
  expressCharge: number;
  fragileCharge: number;
  insuranceCharge: number;
  total: number;
}

export const BASE_FARE = 100;
export const RATE_PER_KG = 20;
export const EXPRESS_SURCHARGE = 250;
export const FRAGILE_SURCHARGE = 150;
export const INSURANCE_RATE = 0.02;

export function calculateShipmentCost(input: CostCalculatorInput): CostBreakdown {
  const weightKg = Math.max(0, input.weightKg || 0);
  const declaredValue = Math.max(0, input.declaredValue || 0);

  const base = BASE_FARE;
  const weightCharge = Math.round(weightKg * RATE_PER_KG);
  const expressCharge = input.isExpress ? EXPRESS_SURCHARGE : 0;
  const fragileCharge = input.isFragile ? FRAGILE_SURCHARGE : 0;
  const insuranceCharge = Math.round(declaredValue * INSURANCE_RATE);

  const total = base + weightCharge + expressCharge + fragileCharge + insuranceCharge;

  return { base, weightCharge, expressCharge, fragileCharge, insuranceCharge, total };
}
