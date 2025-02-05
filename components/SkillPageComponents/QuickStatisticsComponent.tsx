// Gives quick stats about the test
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
    { icon: NotepadText, value: `${percentileAchieved}%`, title: "Percentile" },
    {
      icon: Check,
      value: `${correctAnswers}/${totalQuestions}`,
      title: "Correct Answers",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto border-2 p-6 rounded-lg shadow-md bg-white dark:bg-gray-900">
      {/* Title */}
      <h1 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-4 text-center xl:text-left">
        Quick Statistics
      </h1>

      {/* Stats Section */}
      <div className="flex flex-wrap xl:flex-nowrap justify-between gap-6 xl:gap-12">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-4 flex-1 min-w-[120px] xl:min-w-[200px] 
              ${
                index !== stats.length - 1
                  ? "md:border-r-2 border-gray-300 dark:border-gray-700 pr-6 xl:pr-12"
                  : ""
              }`}
          >
            {/* Circle around Icon */}
            <div className="w-14 h-14 flex items-center justify-center bg-gray-300 dark:bg-gray-700 text-white font-bold rounded-full">
              <item.icon className="w-7 h-7 text-gray-900 dark:text-gray-200" />
            </div>

            {/* Text */}
            <div className="flex flex-col">
              <h1 className="font-bold text-lg text-gray-900 dark:text-gray-100">
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
