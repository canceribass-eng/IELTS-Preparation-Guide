// =============================================================================
// IELTS MASTER PRO - 100 CEFR READING PRACTICE MASTER DATABASE AGGREGATOR
// Unites: A1 (15), A2 (20), B1 (25), B2 (20), C1 (10), C2 (10) = 100 Passages
// =============================================================================

const READING_DATABASE = [
  ...(typeof READING_A1 !== 'undefined' ? READING_A1 : []),
  ...(typeof READING_A2 !== 'undefined' ? READING_A2 : []),
  ...(typeof READING_B1 !== 'undefined' ? READING_B1 : []),
  ...(typeof READING_B2 !== 'undefined' ? READING_B2 : []),
  ...(typeof READING_C1 !== 'undefined' ? READING_C1 : []),
  ...(typeof READING_C2 !== 'undefined' ? READING_C2 : [])
];

// Dual-access compatibility
READING_DATABASE.A1 = (typeof READING_A1 !== 'undefined' ? READING_A1 : []);
READING_DATABASE.A2 = (typeof READING_A2 !== 'undefined' ? READING_A2 : []);
READING_DATABASE.B1 = (typeof READING_B1 !== 'undefined' ? READING_B1 : []);
READING_DATABASE.B2 = (typeof READING_B2 !== 'undefined' ? READING_B2 : []);
READING_DATABASE.C1 = (typeof READING_C1 !== 'undefined' ? READING_C1 : []);
READING_DATABASE.C2 = (typeof READING_C2 !== 'undefined' ? READING_C2 : []);

if (typeof window !== 'undefined') {
  window.READING_DATABASE = READING_DATABASE;
}
