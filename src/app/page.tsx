"use client";

import { Select } from "@/components/Input/Select";
import { Slider } from "@/components/Input/Slider";
import { useSortingAlgorithmContext } from "@/context/visualizer";
import { sortingAlgorithmType } from "@/lib/types";
import {
  algorithmOptions,
  generateAnimationArray,
  sortingAlgorithmsData,
} from "@/lib/utils";
import { FaPlayCircle } from "react-icons/fa";
import { RxReset } from "react-icons/rx";

export default function Home() {
  const {
    arrayToSort,
    isSorting,
    setAnimationSpeed,
    animationSpeed,
    selectedAlgorithm,
    setSelectedAlgorithm,
    requiresReset,
    resetArrayAndAnimation,
    runAnimation,
  } = useSortingAlgorithmContext();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAlgorithm(e.target.value as sortingAlgorithmType);
  };

  //runs on button
  const handlePlay = () => {
    if (requiresReset) {
      resetArrayAndAnimation();
      return;
    }
    generateAnimationArray(
      selectedAlgorithm,
      isSorting,
      arrayToSort,
      runAnimation
    );
  };

  return (
    //header info
    <main className="absolute top-0 h-dvh w-screen bg-gray-950">
      <div className="flex h-full justify-center">
        <div
          id="content-container"
          className="flex max-w-[1020px] w-full flex-col lg:px-0 px-4"
        >
          <div className="h-[66px] relative flex items-center justify-between w-full">
            <h1 className="text-gray-300 text-2xl font-light hidden md:flex">
              Sorting Visualizer
            </h1>
            <div className="flex items-center justify-center gap-4">
              <Slider
                value={animationSpeed}
                handleChange={(e) => setAnimationSpeed(Number(e.target.value))}
                isDisabled={isSorting}
              />
              <Select
                options={algorithmOptions}
                defaultValue={selectedAlgorithm}
                onChange={handleSelectChange}
                isDisabled={isSorting}
              />
            </div>
            <button
              className="flex items-center justify-center"
              onClick={handlePlay}
            >
              {requiresReset ? (
                <RxReset className="text-purple-800 h-8 w-8" />
              ) : (
                <FaPlayCircle className="text-[#f6ad55] h-8 w-8" />
              )}
            </button>
          </div>

          {/*Sorting Algorithim Info*/}
          <div className="flex top-[120%] left-0 w-full">
            <div className="flex w-full text-[#f6ad55] p-4 rounded border border-purple-950 bg-gray-900 bg-opacity-10 gap-6">
              <div className="flex flex-col items-start justify-start w-3/4">
                <h3 className="text-lg">
                  {sortingAlgorithmsData[selectedAlgorithm].title}
                </h3>
                <p className="text-sm text-gray-300 pt-2">
                  {sortingAlgorithmsData[selectedAlgorithm].description}
                </p>
              </div>
              <div className="hidden sm:flex flex-col items-start justify-start w-1/4 gap-2">
                <h3 className="text-lg">Time Complexity</h3>
                <div className="flex flex-col gap-2">
                  <p className="flex w-full text-sm text-gray-300">
                    <span className="w-28">Worst Case:</span>
                    <span>
                      {sortingAlgorithmsData[selectedAlgorithm].worstCase}
                    </span>
                  </p>
                  <p className="flex w-full text-sm text-gray-300">
                    <span className="w-28">Average Case:</span>
                    <span>
                      {sortingAlgorithmsData[selectedAlgorithm].averageCase}
                    </span>
                  </p>
                  <p className="flex w-full text-sm text-gray-300">
                    <span className="w-28">Best Case:</span>
                    <span>
                      {sortingAlgorithmsData[selectedAlgorithm].bestCase}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[calc(100vh-66px)] w-full">
            <div className="absolute bottom-0 w-full mx-auto left-0 right-0 flex justify-center items-end">
              {arrayToSort.map((value, index) => (
                <div
                  key={index}
                  className="array-line bg-purple-800 relative w-1 mx-0.5 shadow-lg opacity-70 rounded-lg"
                  style={{ height: `${value}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
