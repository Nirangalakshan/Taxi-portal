"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";

export const description = "Signup Trend Chart";

// Mock Data for different time ranges
const dataLast7Days = [
  { label: "Mon", passengers: 45, drivers: 20 },
  { label: "Tue", passengers: 52, drivers: 25 },
  { label: "Wed", passengers: 48, drivers: 22 },
  { label: "Thu", passengers: 60, drivers: 30 },
  { label: "Fri", passengers: 75, drivers: 35 },
  { label: "Sat", passengers: 90, drivers: 45 },
  { label: "Sun", passengers: 85, drivers: 40 },
];

const dataLast12Months = [
  { label: "Jan 2025", passengers: 186, drivers: 80 },
  { label: "Feb 2025", passengers: 305, drivers: 200 },
  { label: "Mar 2025", passengers: 237, drivers: 120 },
  { label: "Apr 2025", passengers: 730, drivers: 190 },
  { label: "May 2025", passengers: 209, drivers: 130 },
  { label: "Jun 2025", passengers: 214, drivers: 140 },
  { label: "Jul 2025", passengers: 534, drivers: 110 },
  { label: "Aug 2025", passengers: 414, drivers: 40 },
  { label: "Sep 2025", passengers: 134, drivers: 50 },
  { label: "Oct 2025", passengers: 194, drivers: 90 },
  { label: "Nov 2025", passengers: 394, drivers: 170 },
  { label: "Dec 2025", passengers: 231, drivers: 160 },
];

const dataYearly = [
  { label: "2021", passengers: 1500, drivers: 600 },
  { label: "2022", passengers: 2300, drivers: 900 },
  { label: "2023", passengers: 3200, drivers: 1200 },
  { label: "2024", passengers: 4500, drivers: 1800 },
  { label: "2025", passengers: 5930, drivers: 2100 },
];

const chartConfig = {
  passengers: {
    label: "Total Passengers",
    color: "#7dd3fc",
  },
  drivers: {
    label: "Total Drivers",
    color: "#0ea5e9", // Slightly darker blue for better contrast
  },
} satisfies ChartConfig;

function SignupTrendChart() {
  const [filter, setFilter] = React.useState<"7d" | "12m" | "yearly">("12m");
  const [color, setColor] = React.useState("#7dd3fc");

  const chartData = React.useMemo(() => {
    switch (filter) {
      case "7d":
        return dataLast7Days;
      case "yearly":
        return dataYearly;
      case "12m":
      default:
        return dataLast12Months;
    }
  }, [filter]);

  const totalPassengers = React.useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.passengers, 0),
    [chartData]
  );

  const totalDrivers = React.useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.drivers, 0),
    [chartData]
  );

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex flex-col gap-1">
          <CardTitle className="text-xl font-bold">Sign Up Trends</CardTitle>
          <CardDescription>
            {filter === "7d"
              ? "Last 7 Days"
              : filter === "yearly"
              ? "Yearly Overview"
              : "Jan 2025 - Dec 2025"}
          </CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={filter === "7d" ? "secondary" : "outline"}
            size="sm"
            onClick={() => setFilter("7d")}
            className={`text-xs h-8 ${
              filter === "7d"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-600 border"
            }`}
          >
            Last 7d
          </Button>
          <Button
            variant={filter === "12m" ? "secondary" : "outline"}
            size="sm"
            onClick={() => setFilter("12m")}
            className={`text-xs h-8 ${
              filter === "12m"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-600 border"
            }`}
          >
            12 Months
          </Button>
          <Button
            variant={filter === "yearly" ? "secondary" : "outline"}
            size="sm"
            onClick={() => setFilter("yearly")}
            className={`text-xs h-8 ${
              filter === "yearly"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-600 border"
            }`}
          >
            Yearly
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex gap-8 mb-6">
          <div>
            <div className="text-3xl font-bold">
              {totalPassengers >= 1000
                ? `${(totalPassengers / 1000).toFixed(1)}k`
                : totalPassengers}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: chartConfig.passengers.color }}
              />
              {chartConfig.passengers.label}
              <span className="text-xs text-muted-foreground">
                •{" "}
                {filter === "7d"
                  ? "Last 7 Days"
                  : filter === "yearly"
                  ? "2021 - 2025"
                  : "Jan 2025 - Dec 2025"}
              </span>
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold">
              {totalDrivers >= 1000
                ? `${(totalDrivers / 1000).toFixed(2)}k`
                : totalDrivers}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: chartConfig.drivers.color }}
              />
              {chartConfig.drivers.label}
              <span className="text-xs text-muted-foreground">
                •{" "}
                {filter === "7d"
                  ? "Last 7 Days"
                  : filter === "yearly"
                  ? "2021 - 2025"
                  : "Jan 2025 - Dec 2025"}
              </span>
            </div>
          </div>
        </div>

        <ChartContainer config={chartConfig} className="h-[400px] w-full">
          <BarChart accessibilityLayer data={chartData} barGap={8}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="label"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                if (filter === "12m") return value.slice(0, 3); // Jan, Feb
                return value;
              }}
              style={{ fontSize: "12px", fill: "#888" }}
            />
            <ChartTooltip
              cursor={{ fill: "transparent" }}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Bar
              dataKey="passengers"
              fill={chartConfig.passengers.color}
              radius={[4, 4, 0, 0]}
              maxBarSize={50}
            />
            <Bar
              dataKey="drivers"
              fill={chartConfig.drivers.color}
              radius={[4, 4, 0, 0]}
              maxBarSize={50}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default SignupTrendChart;
