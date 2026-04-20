export function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) return null;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Stripe = require("stripe");
  return new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-11-20.acacia" });
}

export const PLANS = {
  free: { name: "Free", price: 0, features: ["3 routines", "10 photo uploads", "Print & run mode"] },
  solo: { name: "Solo Caregiver / Teacher", price: 12, yearlyPrice: 96, features: ["Unlimited routines", "Unlimited photos", "Full template library", "Routine history", "Priority support"] },
  family: { name: "Family / Practitioner", price: 24, yearlyPrice: 192, features: ["Everything in Solo", "5 household/classroom users", "Shared routine library", "Multiple child profiles"] },
  classroom: { name: "Classroom", price: 49, yearlyPrice: 468, features: ["15 user seats", "Shared template library", "Classroom schedule packs", "Centralized management"] },
};
