import { AnimationArrayType } from '@/lib/types';

// Selection sort is an in-place comparison sorting algorithm that divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list.
function runSelectionSort(array: number[], animations: AnimationArrayType) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      animations.push([[j, minIndex], false]);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    animations.push([[i, array[minIndex]], true]);
    animations.push([[minIndex, array[i]], true]);
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
}

export function generateSelectionSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void,
) {
  if (isSorting) return;
  if (array.length <= 1) return;

  const animations: AnimationArrayType = [];
  const auxArray = array.slice();
  runSelectionSort(auxArray, animations);
  runAnimation(animations);
}