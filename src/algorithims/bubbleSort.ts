import { AnimationArrayTypes } from "@/lib/types";

// Bubble sort repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.
function runBubbleSort(array: number[], animations: AnimationArrayTypes) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            animations.push([[j, j + 1], false]);
            if (array[j] > array[j + 1]) {
                animations.push([[j, array[j + 1]], true]);
                animations.push([[j + 1, array[j]], true]);
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
}

export function generateBubbleSortAnimationArray(
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationArrayTypes) => void,
) {
    if (!isSorting) return;
    if (array.length <= 1) return;

    const animations: AnimationArrayTypes = [];
    const auxArray = array.slice();
    runBubbleSort(auxArray, animations);
    runAnimation(animations);
}
