import { ChartSpline } from "lucide-react";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";

// Function to process percentile data
const processPercentileData = (percentiles: number[]) => {
  const countMap: Record<number, number> = {};

  percentiles.forEach((p) => {
    countMap[p] = (countMap[p] || 0) + 1;
  });

  return Object.keys(countMap)
    .map((key) => ({
      percentile: Number(key),
      students: countMap[Number(key)],
    }))
    .sort((a, b) => a.percentile - b.percentile);
};

// Function to calculate average percentile
const calculatePercentileAverage = (
  graphData: { percentile: number; students: number }[]
): number => {
  if (graphData.length === 0) return 0;

  const totalPercentile = graphData.reduce(
    (sum, item) => sum + item.percentile * item.students,
    0
  );
  return parseFloat((totalPercentile / graphData.length).toFixed(2));
};

function ComparisonGraphComponent({
  percentileAchieved,
  percentiles,
}: {
  percentileAchieved: number;
  percentiles: number[];
}) {
  const graphData = processPercentileData(percentiles);
  const percentileAverage = calculatePercentileAverage(graphData);

  return (
    <div className="w-full max-w-xl mx-auto border-2 p-4 rounded-lg shadow-md bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-lg text-gray-900 dark:text-gray-100">
          Comparison Graph
        </h1>
        {/* Icon with Circular Background */}
        <div className="w-12 h-12 flex items-center justify-center bg-gray-300 dark:bg-gray-700 text-white font-bold rounded-full">
          <ChartSpline className="w-6 h-6 text-gray-900 dark:text-gray-200" />
        </div>
      </div>

      {/* Info Text */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        <span className="font-bold text-gray-900 dark:text-gray-100">
          You scored
          {percentileAchieved}% percentile,
        </span>
        which is
        <span className="font-bold text-gray-900 dark:text-gray-100">
          {percentileAchieved > percentileAverage
            ? "greater"
            : percentileAchieved < percentileAverage
            ? "less"
            : "equal"}
        </span>
        to the average percentile of
        <span className="font-bold text-gray-900 dark:text-gray-100">
          {percentileAverage}%
        </span>
        of all the engineers who took this assessment.
      </p>

      {/* Graph Section */}
      <div className="p-4 rounded-lg shadow-md bg-white dark:bg-gray-900">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={graphData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />{" "}
            {/* Vertical grid lines removed */}
            <XAxis
              dataKey="percentile"
              label={{
                value: "Percentile",
                position: "insideBottom",
                offset: -5,
                fill: "#374151", // Dark gray for visibility
              }}
              tick={{ fill: "#6B7280" }} // Light gray for readability
            />
            {/* Tooltip for Hover */}
            <Tooltip
              formatter={(value, name, props) => [
                `Students: ${value}`,
                `Percentile: ${props.payload.percentile}`,
              ]}
            />
            {/* Line Graph */}
            <Line
              type="monotone"
              dataKey="students"
              stroke="#4F46E5"
              strokeWidth={2.5}
              dot={{ r: 5, fill: "#4F46E5" }} // Bigger dots
            />
            {/* Permanent Label for Your Percentile */}
            <ReferenceDot
              x={percentileAchieved}
              y={
                graphData.find((d) => d.percentile >= percentileAchieved)
                  ?.students || 0
              }
              fill="red"
              r={8}
              stroke="black"
              strokeWidth={2}
            />
            <ReferenceDot
              x={percentileAchieved}
              y={0} // Position label above the graph
              fill="transparent"
              label={{
                value: "Your Percentile",
                position: "top",
                fill: "red",
                fontSize: 14,
                fontWeight: "bold",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ComparisonGraphComponent;
