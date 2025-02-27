import { generateBubbleSortAnimationArray } from "@/algorithims/bubbleSort";
import { generateQuickSortAnimationArray } from "@/algorithims/quickSort";
import { generateMergeSortAnimationArray } from "@/algorithims/mergeSort";
import { generateInsertionSortAnimationArray } from "@/algorithims/insertionSort";
import { generateSelectionSortAnimationArray } from "@/algorithims/selectionSort";
import { sortingAlgorithmType, AnimationArrayType } from "./types";

export const MIN_ANIMATION_SPEED = 10;
export const MAX_ANIMATION_SPEED = 2000;

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
      "Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm gets its name because smaller elements 'bubble' to the top of the list. Although it is simple to understand and implement, it is not suitable for large data sets as its average and worst-case time complexity is quite high.",
    worstCase: "O(n^2)",
    averageCase: "O(n^2)",
    bestCase: "O(n)",
  },
  quick: {
    title: "Quick Sort",
    description:
      "Quick sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays, one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value. Quick sort partitions an array and then calls itself recursively twice to sort the two resulting subarrays. This algorithm is quite efficient for large-sized data sets as its average and worst-case time complexity is O(n log n).",
    worstCase: "O(n^2)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  merge: {
    title: "Merge Sort",
    description:
      "Merge sort is a divide and conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one. Merge sort is a stable sort which means that the relative order of equal sort items is the same in the input and output. It is also a stable sort with a time complexity of O(n log n) in all cases.",
    worstCase: "O(n log n)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  insertion: {
    title: "Insertion Sort",
    description:
      "Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages: Simple implementation, Efficient for (quite) small data sets, More efficient in practice than most other simple quadratic (i.e., O(n^2)) algorithms such as selection sort or bubble sort, Adaptive, i.e., efficient for data sets that are already substantially sorted: the time complexity is O(kn) when each element in the input is no more than k places away from its sorted position, Stable; i.e., does not change the relative order of elements with equal keys, In-place; i.e., only requires a constant amount O(1) of additional memory space, Online; i.e., can sort a list as it receives it.",
    worstCase: "O(n^2)",
    averageCase: "O(n^2)",
    bestCase: "O(n)",
  },
  selection: {
    title: "Selection Sort",
    description:
      "Selection sort is an in-place comparison sorting algorithm. It has an O(n^2) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort is noted for its simplicity, and it has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited. The algorithm divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.",
    worstCase: "O(n^2)",
    averageCase: "O(n^2)",
    bestCase: "O(n^2)",
  },
};