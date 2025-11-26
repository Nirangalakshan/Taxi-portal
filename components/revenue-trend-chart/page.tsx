"use client";

import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
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
import { Button } from "../ui/button";

// Last 7 days revenue data
const chartData = [
  { day: "Monday", revenue: 8500 },
  { day: "Tuesday", revenue: 9200 },
  { day: "Wednesday", revenue: 11400 },
  { day: "Thursday", revenue: 13800 },
  { day: "Friday", revenue: 15200 },
  { day: "Saturday", revenue: 14100 },
  { day: "Sunday", revenue: 12847 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(200, 80%, 60%)",
  },
} satisfies ChartConfig;

function RevenueTrendChart() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Revenue Trend</CardTitle>
          <CardDescription>Last 7 days</CardDescription>
        </div>
        <div>
          <Button
            variant="outline"
            size="sm"
            className="bg-blue-500 text-white"
          >
            Last 7d
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 12,
              left: 12,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-revenue)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-revenue)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="revenue"
              type="monotone"
              fill="url(#fillRevenue)"
              fillOpacity={0.4}
              stroke="var(--color-revenue)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default RevenueTrendChart;
