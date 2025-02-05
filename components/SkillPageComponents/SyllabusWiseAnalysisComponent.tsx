import React from "react";

interface SyllabusWiseAnalysisDataInterface {
  name: string;
  completionPercentage: number;
}

// Pastel colors for progress bars
const pastelColors: string[] = [
  "#FFB3BA", // Light Pink
  "#FFDFBA", // Peach
  "#FFFFBA", // Light Yellow
  "#BAFFC9", // Mint Green
  "#BAE1FF", // Light Blue
  "#E6C7FC", // Lavender
  "#FFC3A0", // Soft Orange
];

// Function to pick a random pastel color
const getRandomPastelColor = () =>
  pastelColors[Math.floor(Math.random() * pastelColors.length)];
function SyllabusWiseAnalysisComponent({
  syllabusWiseAnalysisData,
}: {
  syllabusWiseAnalysisData: SyllabusWiseAnalysisDataInterface[];
}) {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md w-full max-w-md max-h-[500px] overflow-y-auto">
      {/* Title */}
      <h1 className="text-lg font-bold mb-5 text-gray-900 dark:text-gray-100">
        Syllabus Wise Analysis
      </h1>

      {/* Syllabus List */}
      <div className="flex flex-col gap-5">
        {" "}
        {/* Increased gap */}
        {syllabusWiseAnalysisData.map((data, index) => {
          const color = getRandomPastelColor();
          return (
            <div key={index} className="flex flex-col gap-2">
              {/* Topic Name */}
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {data?.name}
              </p>

              {/* Progress Bar with Percentage */}
              <div className="flex items-center gap-4">
                <div className="relative w-4/5 h-4 bg-gray-300 dark:bg-gray-700 rounded-full">
                  <div
                    className="absolute h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${data.completionPercentage}%`,
                      backgroundColor: color,
                    }}
                  />
                </div>
                {/* Percentage */}
                <span className="text-sm font-semibold" style={{ color }}>
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
