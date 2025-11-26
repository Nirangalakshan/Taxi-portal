import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const statusData = [
  { status: "Active", count: 2847, color: "bg-green-500" },
  { status: "Offline", count: 456, color: "bg-gray-400" },
  { status: "Suspended", count: 23, color: "bg-red-500" },
];

function UserStatus() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>User Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {statusData.map((item) => (
            <div
              key={item.status}
              className="flex items-center justify-between py-1"
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <span className="text-sm text-gray-600">{item.status}</span>
              </div>
              <span className="text-base font-semibold text-gray-900">
                {item.count.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default UserStatus;
