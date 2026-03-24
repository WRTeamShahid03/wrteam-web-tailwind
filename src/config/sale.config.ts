/**
 * ============================================================
 *  SALE STRIPE CONFIGURATION
 *  Edit dates/settings here — no component changes needed.
 *  Dates are local time (your server/browser timezone).
 * ============================================================
 *
 *  Timeline:
 *    saleStartDate          → stripe becomes visible
 *    countdownStartDate     → countdown timer starts showing from this date
 *    saleEndDate            → countdown counts DOWN TO this date; stripe hides after
 *
 *  new Date(year, month - 1, day, hours24, minutes)
 */

const saleConfig = {
  // Stripe starts showing on this date
  saleStartDate: new Date(2026, 2, 24, 11, 30), // 25 March 2026, 6:30 PM

  // Countdown becomes visible from this date (counts down to saleEndDate)
  countdownStartDate: new Date(2026, 3, 2, 18, 30), // 2 April 2026, 6:30 PM

  // Stripe hides + countdown target
  saleEndDate: new Date(2026, 3, 5, 18, 30), // 5 April 2026, 6:30 PM
} as const;

export default saleConfig;
