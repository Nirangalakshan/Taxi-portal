"use client";

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

export const description = "Signup Trend Chart";

const chartData = [
  { month: "January", passengers: 186, drivers: 80 },
  { month: "February", passengers: 305, drivers: 200 },
  { month: "March", passengers: 237, drivers: 120 },
  { month: "April", passengers: 730, drivers: 190 },
  { month: "May", passengers: 209, drivers: 130 },
  { month: "June", passengers: 214, drivers: 140 },
  { month: "July", passengers: 534, drivers: 110 },
  { month: "August", passengers: 414, drivers: 40 },
  { month: "September", passengers: 134, drivers: 50 },
  { month: "October", passengers: 194, drivers: 90 },
  { month: "November", passengers: 394, drivers: 170 },
  { month: "December", passengers: 231, drivers: 160 },
];

const chartConfig = {
  passengers: {
    label: "Passengers",
    color: "#7dd3fc",
  },
  drivers: {
    label: "Drivers",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

function SignupTrendChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Signup Trend Chart</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="p-6 ">
        <ChartContainer config={chartConfig} className="h-[500px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="passengers" fill="#7dd3fc" radius={4} />
            <Bar dataKey="drivers" fill="#60a5fa" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}

export default SignupTrendChart;
