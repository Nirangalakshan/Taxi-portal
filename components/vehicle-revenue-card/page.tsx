import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const revenueData = [
  {
    vehicleType: "Car",
    trips: 150,
    revenue: 8450,
  },
  {
    vehicleType: "SUV",
    trips: 90,
    revenue: 6230,
  },
  {
    vehicleType: "TUK",
    trips: 300,
    revenue: 4180,
  },
  {
    vehicleType: "Bike",
    trips: 32,
    revenue: 3950,
  },
];

function VehicleRevenue() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Vehicle Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Table Header */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="w-1/3">
            <span className="text-xs font-medium text-gray-500 uppercase">
              Vehicle
            </span>
          </div>
          <div className="w-1/3 text-center">
            <span className="text-xs font-medium text-gray-500 uppercase">
              Trips
            </span>
          </div>
          <div className="w-1/3 text-right">
            <span className="text-xs font-medium text-gray-500 uppercase">
              Revenue
            </span>
          </div>
        </div>

        {/* Table Rows */}
        <div className="flex flex-col gap-3 mt-2">
          {revenueData.map((item) => (
            <div
              key={item.vehicleType}
              className="flex items-center justify-between"
            >
              <div className="w-1/3 flex items-center gap-2">
                <span className="text-sm text-gray-700 font-medium">
                  {item.vehicleType}
                </span>
              </div>
              <div className="w-1/3 text-center">
                <span className="text-sm text-gray-600">
                  {item.trips} trips
                </span>
              </div>
              <div className="w-1/3 text-right">
                <span className="text-sm font-semibold text-gray-900">
                  LKR {item.revenue.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default VehicleRevenue;
