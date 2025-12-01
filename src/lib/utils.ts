import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Parses a date string in the format "DD/MM/YYYY-HH:MMAM" or "DD/MM/YYYY-HH:MMPM"
 * Example: "02/12/2025-6:30PM" -> Date object for December 2nd, 2025 at 6:30 PM
 * 
 * @param dateString - Date string in format "DD/MM/YYYY-HH:MMAM" or "DD/MM/YYYY-HH:MMPM"
 * @returns Date object or null if parsing fails
 */
export function parseSaleDate(dateString: string | undefined): Date | null {
  // Return null if date string is not provided
  if (!dateString) {
    return null;
  }

  try {
    // Split the date string by "-" to separate date and time
    const [datePart, timePart] = dateString.split('-');
    
    if (!datePart || !timePart) {
      console.error('Invalid date format. Expected format: DD/MM/YYYY-HH:MMAM or DD/MM/YYYY-HH:MMPM');
      return null;
    }

    // Parse the date part (DD/MM/YYYY)
    const [day, month, year] = datePart.split('/').map(Number);
    
    if (!day || !month || !year) {
      console.error('Invalid date format. Expected format: DD/MM/YYYY');
      return null;
    }

    // Parse the time part (HH:MMAM or HH:MMPM)
    // Remove AM/PM and get the time
    const isPM = timePart.toUpperCase().includes('PM');
    const timeWithoutAMPM = timePart.replace(/AM|PM/gi, '').trim();
    const [hours, minutes] = timeWithoutAMPM.split(':').map(Number);

    if (hours === undefined || minutes === undefined) {
      console.error('Invalid time format. Expected format: HH:MMAM or HH:MMPM');
      return null;
    }

    // Convert to 24-hour format
    let hours24 = hours;
    if (isPM && hours !== 12) {
      hours24 = hours + 12;
    } else if (!isPM && hours === 12) {
      hours24 = 0;
    }

    // Create and return the Date object
    // Note: month is 0-indexed in JavaScript Date (0 = January, 11 = December)
    const date = new Date(year, month - 1, day, hours24, minutes, 0);
    
    // Validate the date
    if (isNaN(date.getTime())) {
      console.error('Invalid date values');
      return null;
    }

    return date;
  } catch (error) {
    console.error('Error parsing sale date:', error);
    return null;
  }
}

/**
 * Checks if the sale target date has passed
 * 
 * @param targetDate - The target date to check
 * @returns true if the date has passed, false otherwise
 */
export function isSaleDatePassed(targetDate: Date | null): boolean {
  if (!targetDate) {
    return true; // If no date is set, consider it as passed
  }
  
  const now = new Date();
  return now >= targetDate;
}

