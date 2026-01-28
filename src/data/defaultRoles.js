// src/data/defaultRoles.js

export const DEFAULT_ROLES = {
  AT: { name: "Accounting Tech", cost_rate: 12.60, color: "#00B894" },
  AC: { name: "Accountant", cost_rate: 14.70, color: "#0984E3" },
  SA: { name: "Sr. Accountant", cost_rate: 15.75, color: "#6C5CE7" },
  CO: { name: "Consultant", cost_rate: 46.75, color: "#FDCB6E" },
  MA: { name: "Manager", cost_rate: 66.00, color: "#C41E3A" }
};

export const DEFAULT_SECTIONS = {
  ap: { key: "ap", name: "A/P", color: "#C41E3A" },
  ar: { key: "ar", name: "A/R", color: "#0984E3" },
  cm: { key: "cm", name: "Cash Management", color: "#00B894" },
  fa: { key: "fa", name: "Fixed Assets", color: "#6C5CE7" },
  pr: { key: "pr", name: "Payroll", color: "#FDCB6E" },
  jc: { key: "jc", name: "Job Cost", color: "#E17055" },
  gl: { key: "gl", name: "General Ledger", color: "#636E72" },
  tx: { key: "tx", name: "Tax", color: "#2D3436" },
  me: { key: "me", name: "Month-End", color: "#A29BFE" },
  fr: { key: "fr", name: "Financial Reporting", color: "#74B9FF" },
  ye: { key: "ye", name: "Year-End", color: "#FD79A8" },
  oh: { key: "oh", name: "Overhead", color: "#802629" }
};

export const DEFAULT_INDUSTRIES = [
  'General Contractor',
  'Specialty Contractor', 
  'Heavy/Highway',
  'Residential Builder',
  'Commercial Builder',
  'Electrical',
  'Plumbing/HVAC',
  'Roofing',
  'Concrete/Masonry',
  'Steel/Iron Work',
  'Landscaping',
  'Other'
];
