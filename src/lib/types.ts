export type sortingAlgorithmType =
  | "bubble"
  | "selection"
  | "insertion"
  | "merge"
  | "quick";

export type SelectOptionsType = {
  value: string;
  label: string;
};

// Array of [array, isSwapping] where array is the list of line indexes that are selected and isSwapping is a boolean that determines if the two elements are being swapped
export type AnimationArrayTypes = [number[], boolean][];
