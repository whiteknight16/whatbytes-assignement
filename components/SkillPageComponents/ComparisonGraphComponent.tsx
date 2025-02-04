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

  // Count occurrences of each percentile
  percentiles.forEach((p) => {
    countMap[p] = (countMap[p] || 0) + 1;
  });

  // Convert to sorted array of objects
  return Object.keys(countMap)
    .map((key) => ({
      percentile: Number(key),
      students: countMap[Number(key)],
    }))
    .sort((a, b) => a.percentile - b.percentile);
};

//Function to calculate average percentile
const calculatePercentileAverage = (
  graphData: { percentile: number; students: number }[]
): number => {
  if (graphData.length === 0) return 0;

  const totalPercentile = graphData.reduce(
    (sum, item) => sum + item.percentile * item.students,
    0
  );
  return totalPercentile / graphData.length;
};

function ComparisonGraphComponent({
  percentileAchieved,
  percentiles,
}: {
  percentileAchieved: number;
  percentiles: number[];
}) {
  //const data for graph
  const graphData = processPercentileData(percentiles);
  const percentileAverage = calculatePercentileAverage(graphData);
  return (
    <div>
      <h1>Comparison Graph</h1>

      <div>
        <p>
          You scored {percentileAchieved}% percentile which is
          {percentileAchieved > percentileAverage
            ? "greater"
            : percentileAchieved < percentileAverage
            ? "less"
            : "equal"}
          to the average percentile of {percentileAverage}% of all the engineers
          who took this assessment
        </p>
        <ChartSpline />
      </div>

      <div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={graphData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="percentile"
              label={{
                value: "Percentile",
                position: "insideBottom",
                offset: -5,
              }}
            />
            <YAxis
              label={{ value: "Students", angle: -90, position: "insideLeft" }}
            />
            <Tooltip
              formatter={(value, name, props) => [
                `Students: ${value}`,
                `Percentile: ${props.payload.percentile}`,
              ]}
            />
            <Line
              type="monotone"
              dataKey="students"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 4 }}
            />

            {/* Highlight your percentile */}
            <ReferenceDot
              x={percentileAchieved}
              y={
                graphData.find((d) => d.percentile >= percentileAchieved)
                  ?.students || 0
              }
              fill="red"
              r={6}
              stroke="black"
              strokeWidth={2}
              label={{ value: "Your Percentile", position: "top", fill: "red" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ComparisonGraphComponent;
