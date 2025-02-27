import { generateBubbleSortAnimationArray } from "@/algorithims/bubbleSort";
import { sortingAlgorithmType, AnimationArrayTypes } from "./types";

export const MIN_ANIMATION_SPEED = 100;
export const MAX_ANIMATION_SPEED = 400;

//generates random num from interval [min, max]
export function generateRandomNumberFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const algorithmOptions = [
  { label: "Bubble", value: "bubble" },
  { label: "Quick", value: "quick" },
  { label: "Merge", value: "merge" },
  { label: "Insertion", value: "insertion" },
  { label: "Selection", value: "selection" },
];

export function generateAnimationArray(
    selectedAlgorithm: sortingAlgorithmType,
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationArrayTypes) => void,
) {
    switch (selectedAlgorithm) {
      case "bubble":
          generateBubbleSortAnimationArray(isSorting, array, runAnimation);
        break;
      default:
				break;
		}
}