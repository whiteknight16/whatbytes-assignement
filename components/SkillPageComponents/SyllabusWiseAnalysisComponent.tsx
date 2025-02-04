import { Progress } from "@/components/ui/progress";
import React from "react";

interface SyllabusWiseAnalysisDataInterface {
  name: string;
  completionPercentage: number;
}

// Pastel color array for the color of the bar
const pastelColors: string[] = [
  "#FFB3BA", // Light Pink
  "#FFDFBA", // Peach
  "#FFFFBA", // Light Yellow
  "#BAFFC9", // Mint Green
  "#BAE1FF", // Light Blue
  "#E6C7FC", // Lavender
  "#FFC3A0", // Soft Orange
];

// Function to get a random pastel color
const getRandomPastelColor = () => {
  return pastelColors[Math.floor(Math.random() * pastelColors.length)];
};

function SyllabusWiseAnalysisComponent({
  syllabusWiseAnalysisData,
}: {
  syllabusWiseAnalysisData: SyllabusWiseAnalysisDataInterface[];
}) {
  return (
    <div>
      <h1>Syllabus Wise Analysis</h1>
      <div className="flex">
        {syllabusWiseAnalysisData.map((data, index) => (
          <div key={index}>
            <p>{data?.name}</p>
            <div>
              <Progress
                value={data.completionPercentage}
                className={`bg-${getRandomPastelColor()}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SyllabusWiseAnalysisComponent;
