import React from "react";

interface SyllabusWiseAnalysisDataInterface {
  name: string;
  completionPercentage: number;
}

// Pastel colors for progress bars
const pastelColors: string[] = [
  "#FFB3BA", // Light Pink
  "#FFDFBA", // Peach
  "#BAFFC9", // Mint Green
  "#BAE1FF", // Light Blue
  "#E6C7FC", // Lavender
  "#FFC3A0", // Soft Orange
];

// Function to get a pastel color based on index (to prevent flickering)
//Else the colors will change on every re-render
const getPastelColor = (index: number) =>
  pastelColors[index % pastelColors.length];

function SyllabusWiseAnalysisComponent({
  syllabusWiseAnalysisData,
}: {
  syllabusWiseAnalysisData: SyllabusWiseAnalysisDataInterface[];
}) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-3xl max-h-[500px] overflow-y-auto">
      {/* Title */}
      <h1 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Syllabus Wise Analysis
      </h1>

      {/* Syllabus List */}
      <div className="flex flex-col gap-6">
        {syllabusWiseAnalysisData.map((data, index) => {
          const color = getPastelColor(index);
          return (
            <div key={index} className="flex flex-col gap-3">
              {/* Topic Name */}
              <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                {data.name}
              </p>

              {/* Progress Bar with Percentage */}
              <div className="flex items-center gap-4">
                <div className="relative w-4/5 h-3 bg-gray-300 dark:bg-gray-700 rounded-full">
                  <div
                    className="absolute h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${data.completionPercentage}%`,
                      backgroundColor: color,
                    }}
                  />
                </div>
                {/* Percentage */}
                <span className="text-base font-semibold" style={{ color }}>
                  {data.completionPercentage}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SyllabusWiseAnalysisComponent;
