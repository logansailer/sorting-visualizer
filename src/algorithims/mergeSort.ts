import { AnimationArrayType } from "@/lib/types";

// Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945. A merge sort works as follows:
function mergeSort(
  array: number[],
  startIdx: number,
  middleIdx: number,
  endIdx: number,
  animations: AnimationArrayType
) {
  const leftArray = array.slice(startIdx, middleIdx + 1);
  const rightArray = array.slice(middleIdx + 1, endIdx + 1);

  let i = 0;
  let j = 0;
  let k = startIdx;

  while (i < leftArray.length && j < rightArray.length) {
    animations.push([[startIdx + i, middleIdx + 1 + j], false]);
    if (leftArray[i] <= rightArray[j]) {
      animations.push([[k, leftArray[i]], true]);
      array[k++] = leftArray[i++];
    } else {
      animations.push([[k, rightArray[j]], true]);
      array[k++] = rightArray[j++];
    }
  }

  while (i < leftArray.length) {
    animations.push([[startIdx + i, startIdx + i], false]);
    animations.push([[k, leftArray[i]], true]);
    array[k++] = leftArray[i++];
  }

  while (j < rightArray.length) {
    animations.push([[middleIdx + 1 + j, middleIdx + 1 + j], false]);
    animations.push([[k, rightArray[j]], true]);
    array[k++] = rightArray[j++];
  }
}

function runMergeSort(array: number[]) {
  const animations: AnimationArrayType = [];
  for (let i = 1; i < array.length; i = i * 2) {
    for (let j = 0; j < array.length - i; j += 2 * i) {
      const startIdx = j;
      const middleIdx = j + i - 1;
      const endIdx = Math.min(j + 2 * i - 1, array.length - 1);
      mergeSort(array, startIdx, middleIdx, endIdx, animations);
    }
  }
    return animations;
}

export function generateMergeSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return;

  const auxArray = array.slice();
  const animations = runMergeSort(auxArray);
  runAnimation(animations);
}
