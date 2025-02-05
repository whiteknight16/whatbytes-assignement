import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Target } from "lucide-react";

function QuestionAnalysisComponent({
  correctAnswers,
  totalQuestions,
}: {
  correctAnswers: number;
  totalQuestions: number;
}) {
  const percentage = correctAnswers / totalQuestions;
  const chartData = [
    { name: "Correct Answers", value: percentage },
    {
      name: "Wrong Answers",
      value: percentage === 1 || percentage === 0 ? 0 : 1 - percentage,
    },
  ];

  const COLORS = ["#1E3A8A", "#BFDBFE"]; // Dark Blue (Correct) & Light Blue (Wrong)

  return (
    <div className="bg-white dark:bg-gray-900 px-6 py-5 rounded-lg shadow-md w-full max-w-lg">
      {/* Header with Score */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          Question Analysis
        </h1>
        <p className="text-lg font-semibold dark:text-blue-600 text-blue-700">
          {correctAnswers}/{totalQuestions}
        </p>
      </div>

      {/* Score Info */}
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-5">
        <span className="font-semibold text-gray-900 dark:text-gray-100">
          You got {correctAnswers} correct out of {totalQuestions}.
        </span>{" "}
        {correctAnswers === totalQuestions &&
          "Keep pushing forward for even better results!"}
        {correctAnswers !== totalQuestions &&
          "However it still needs some improvements"}
      </p>

      {/* Doughnut Chart */}
      <div className="relative w-52 h-52 mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius="65%" // Better spacing
              outerRadius="95%" // More visually appealing
              paddingAngle={3}
            >
              {chartData.map(
                (entry, index) =>
                  entry.value !== 0 && (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  )
              )}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Centered Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Target size={40} className="text-blue-900 dark:text-blue-300" />
        </div>
      </div>
    </div>
  );
}

export default QuestionAnalysisComponent;
