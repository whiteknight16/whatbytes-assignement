import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { Target } from "lucide-react";
function QuestionAnalysisComponent({
  correctAnswers,
  totalQuestions,
}: {
  correctAnswers: number;
  totalQuestions: number;
}) {
  const percentage = (correctAnswers / totalQuestions) * 100;

  const chartData = [
    { name: "Correct Answers", value: percentage, fill: "#1E3A8A" }, // Dark Blue for completed
    { name: "Wrong Answers", value: 100 - percentage, fill: "#BFDBFE" }, // Light Blue for remaining
  ];

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h1>Question Analysis</h1>
        <p>
          <span>
            You scored {correctAnswers} correct out of {totalQuestions}.
          </span>
          However there is still needs some improvements
        </p>
        {/* Circular Graph */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="80%"
              outerRadius="100%"
              data={chartData}
              startAngle={90}
              endAngle={-270}
            >
              <RadialBar dataKey="value" cornerRadius={10} />
            </RadialBarChart>
          </ResponsiveContainer>
          {/* Icon */}
          <div className="absolute text-blue-900">
            <Target size={32} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionAnalysisComponent;
