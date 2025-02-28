import { generateBubbleSortAnimationArray } from "@/algorithims/bubbleSort";
import { generateQuickSortAnimationArray } from "@/algorithims/quickSort";
import { generateMergeSortAnimationArray } from "@/algorithims/mergeSort";
import { generateInsertionSortAnimationArray } from "@/algorithims/insertionSort";
import { generateSelectionSortAnimationArray } from "@/algorithims/selectionSort";
import { sortingAlgorithmType, AnimationArrayType } from "./types";

export const MIN_ANIMATION_SPEED = 10;
export const MAX_ANIMATION_SPEED = 1500;

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
  runAnimation: (animations: AnimationArrayType) => void
) {
  switch (selectedAlgorithm) {
    case "bubble":
      generateBubbleSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "quick":
      generateQuickSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "merge":
      generateMergeSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "insertion":
      generateInsertionSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "selection":
      generateSelectionSortAnimationArray(isSorting, array, runAnimation);
      break;
    default:
      break;
  }
}

export const sortingAlgorithmsData = {
  bubble: {
    title: "Bubble Sort",
    description:
      "Bubble sort repeatedly steps through the list, comparing and swapping adjacent elements if needed until the list is sorted. Smaller elements gradually 'bubble' to the top. While easy to implement, it has a high time complexity, making it inefficient for large datasets.",
    worstCase: "O(n^2)",
    averageCase: "O(n^2)",
    bestCase: "O(n)",
  },
  quick: {
    title: "Quick Sort",
    description:
      "Quick sort partitions an array into two subarrays based on a pivot, then recursively sorts each subarray. This divide-and-conquer approach makes it highly efficient for large datasets. Though worst-case complexity is O(n^2), it typically runs in O(n log n).",
    worstCase: "O(n^2)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  merge: {
    title: "Merge Sort",
    description:
      "Merge sort divides an array into halves, sorts them recursively, and merges the sorted halves. It is a stable, comparison-based algorithm with consistent O(n log n) performance. Though efficient, it requires additional memory for merging subarrays.",
    worstCase: "O(n log n)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  insertion: {
    title: "Insertion Sort",
    description:
      "Insertion sort builds a sorted array one item at a time by shifting elements as needed. It is simple, adaptive, and efficient for small or nearly sorted datasets but becomes slow on large lists due to its O(n^2) complexity in most cases.",
    worstCase: "O(n^2)",
    averageCase: "O(n^2)",
    bestCase: "O(n)",
  },
  selection: {
    title: "Selection Sort",
    description:
      "Selection sort repeatedly finds the smallest unsorted element and swaps it into place. It requires minimal memory but is inefficient for large datasets due to its O(n^2) complexity. While simple, it usually performs worse than insertion sort.",
    worstCase: "O(n^2)",
    averageCase: "O(n^2)",
    bestCase: "O(n^2)",
  },
};
