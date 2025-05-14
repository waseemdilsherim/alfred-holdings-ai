import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility function that combines clsx and tailwind-merge
 * Allows merging of conditional class names while resolving Tailwind CSS conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Function to safely access nested properties in objects
 */
export function get<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

/**
 * A simple delay utility function
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Format a date with options
 */
export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
): string {
  const d = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', options).format(d);
} 