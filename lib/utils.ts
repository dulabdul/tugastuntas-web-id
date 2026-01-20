import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Helper untuk menggabungkan class tailwind secara kondisional
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}