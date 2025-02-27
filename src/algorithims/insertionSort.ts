import { AnimationArrayType } from "@/lib/types";

// Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
function runInsertionSort(array: number[], animations: AnimationArrayType) {
  for (let i = 1; i < array.length; i++) {
    animations.push([[i, i], false]);
    const current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      animations.push([[j, j + 1], false]);
      animations.push([[j + 1, array[j]], true]);
      array[j + 1] = array[j];
      j--;
    }
    animations.push([[j + 1, current], true]);
    array[j + 1] = current;
  }
}

export function generateInsertionSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return;

  const animations: AnimationArrayType = [];
  const auxArray = array.slice();
  runInsertionSort(auxArray, animations);
  runAnimation(animations);
}
