"use client";

import React from "react";
import { Pie, PieChart, Cell } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Today's ride data
const chartData = [
  { category: "completed", rides: 1234, fill: "hsl(180, 70%, 65%)" },
  { category: "cancelled", rides: 156, fill: "hsl(195, 60%, 55%)" },
  { category: "ongoing", rides: 89, fill: "hsl(200, 70%, 45%)" },
];

const chartConfig = {
  rides: {
    label: "Rides",
  },
  completed: {
    label: "Completed",
    color: "hsl(180, 70%, 65%)",
  },
  cancelled: {
    label: "Cancelled",
    color: "hsl(195, 60%, 55%)",
  },
  ongoing: {
    label: "Ongoing",
    color: "hsl(200, 70%, 45%)",
  },
} satisfies ChartConfig;

function RideTrendsChart() {
  const totalRides = chartData.reduce((acc, curr) => acc + curr.rides, 0);

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Ride Trends (Today)</CardTitle>
        <CardDescription>Current ride statistics</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
          {/* Donut Chart */}
          <div className="shrink-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square h-[300px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="rides"
                  nameKey="category"
                  innerRadius={70}
                  outerRadius={110}
                  strokeWidth={0}
                  paddingAngle={2}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-3">
            {chartData.map((item) => {
              const percentage = ((item.rides / totalRides) * 100).toFixed(1);
              return (
                <div key={item.category} className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full shrink-0"
                    style={{ backgroundColor: item.fill }}
                  />
                  <div className="flex flex-col">
                    <span className="capitalize text-sm font-medium text-gray-700">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {item.rides.toLocaleString()} ({percentage}%)
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default RideTrendsChart;
