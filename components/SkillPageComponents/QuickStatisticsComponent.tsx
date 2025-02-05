import React from "react";
import { Check, NotepadText, Trophy } from "lucide-react";

interface StatsInterface {
  icon: React.ElementType;
  value: string | number;
  title: string;
}

function QuickStatisticsComponent({
  rankAchieved,
  percentileAchieved,
  correctAnswers,
  totalQuestions,
}: {
  rankAchieved: number;
  percentileAchieved: number;
  correctAnswers: number;
  totalQuestions: number;
}) {
  const stats: StatsInterface[] = [
    { icon: Trophy, value: rankAchieved, title: "Your Rank" },
    {
      icon: NotepadText,
      value: `${percentileAchieved}%`,
      title: "Percentile",
    },
    {
      icon: Check,
      value: `${correctAnswers}/${totalQuestions}`,
      title: "Correct Answers",
    },
  ];

  return (
    <div className="w-full max-w-xl mx-auto border-2 p-4 rounded-lg shadow-md bg-white dark:bg-gray-900">
      {/* Title */}
      <h1 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-3 text-center md:text-left">
        Quick Statistics
      </h1>

      {/* Stats Section */}
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 p-3 flex-1 min-w-[100px] 
              ${
                index !== stats.length - 1
                  ? "border-r-2 border-gray-300 dark:border-gray-700 pr-4"
                  : ""
              }`}
          >
            {/* Proper Circular Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-gray-300 dark:bg-gray-700 text-white font-bold rounded-full">
              <item.icon className="w-6 h-6 text-gray-900 dark:text-gray-200" />
            </div>

            {/* Text */}
            <div className="flex flex-col">
              <h1 className="font-bold text-gray-900 dark:text-gray-100">
                {item.value}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickStatisticsComponent;
