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
  const percentage = (correctAnswers / totalQuestions) * 100;

  const chartData = [
    { name: "Correct Answers", value: percentage },
    { name: "Wrong Answers", value: 100 - percentage },
  ];

  const COLORS = ["#1E3A8A", "#BFDBFE"]; // Dark Blue (Correct) & Light Blue (Wrong)

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md w-full max-w-md">
      {/* Header with Score */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">
          Question Analysis
        </h1>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          {correctAnswers}/{totalQuestions}
        </p>
      </div>

      {/* Score Info */}
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
        <span className="font-semibold text-gray-900 dark:text-gray-100">
          You scored {correctAnswers} correct out of {totalQuestions}.
        </span>{" "}
        However, there is still room for improvement.
      </p>

      {/* Doughnut Chart */}
      <div className="relative w-40 h-40 mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius="70%" // Doughnut Effect
              outerRadius="100%"
              paddingAngle={3}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Centered Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Target size={32} className="text-blue-900 dark:text-blue-300" />
        </div>
      </div>
    </div>
  );
}

export default QuestionAnalysisComponent;
