import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function createOnboardingData<T>(
  onboardingDataList: Array<T>
): Record<number, T> {
  return onboardingDataList.reduce((acc, value, index) => {
    acc[index + 1] = value;
    return acc;
  }, {} as Record<number, T>);
}
