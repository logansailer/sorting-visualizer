import { AnimationArrayType } from "@/lib/types";

// Quick sort is a divide and conquer algorithm that divides the input array into two sub-arrays and then recursively sort the two sub-arrays.
function partition(
  array: number[],
  low: number,
  high: number,
  animations: AnimationArrayType
) {
  const pivot = array[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    animations.push([[j, high], false]);
    if (array[j] < pivot) {
      i++;
      animations.push([[i, array[j]], true]);
      animations.push([[j, array[i]], true]);
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  animations.push([[i + 1, array[high]], true]);
  animations.push([[high, array[i + 1]], true]);
  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  return i + 1;
}

function runQuickSort(
  array: number[],
  low: number,
  high: number,
  animations: AnimationArrayType
) {
  if (low < high) {
    const pi = partition(array, low, high, animations);
    runQuickSort(array, low, pi - 1, animations);
    runQuickSort(array, pi + 1, high, animations);
  }
}

export function generateQuickSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return;
  const animations: AnimationArrayType = [];
  const auxArray = array.slice();
  runQuickSort(auxArray, 0, array.length - 1, animations);
  runAnimation(animations);
}
