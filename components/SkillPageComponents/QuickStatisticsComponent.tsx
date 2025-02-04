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
  //Created a stats array so the code can be easily updated later on
  const stats: StatsInterface[] = [
    { icon: Trophy, value: rankAchieved, title: "YOUR RANKS" },
    {
      icon: NotepadText,
      value: String(percentileAchieved) + "%",
      title: "PERCENTILE",
    },
    {
      icon: Check,
      value: String(correctAnswers) + "/" + String(totalQuestions),
      title: "CORRECT ANSWERS",
    },
  ];
  return (
    <div className="flex flex-col">
      <h1>Quick Statistics</h1>
      <div className="flex">
        <div>
          {/*Mapping the stats array to display the stats*/}
          {stats.map((item, index) => (
            <div key={index}>
              <item.icon />
              <div>
                <h1>{item.value}</h1>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuickStatisticsComponent;
