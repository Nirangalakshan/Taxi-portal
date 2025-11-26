import React from "react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  percentageChange: number;
  icon: React.ReactNode;
  iconBgColor: string;
}

function Dashboardcard({
  title,
  value,
  percentageChange,
  icon,
  iconBgColor,
}: DashboardCardProps) {
  const isPositive = percentageChange >= 0;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 md:p-5 w-full">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">
            {title}
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 truncate">
            {value}
          </h3>
        </div>
        <div
          className={`w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center shrink-0 ml-2 ${iconBgColor}`}
        >
          {icon}
        </div>
      </div>
      <div className="flex items-center gap-1 text-xs">
        <span className={isPositive ? "text-green-600" : "text-red-600"}>
          {isPositive ? "↑" : "↓"}
          {Math.abs(percentageChange)}%
        </span>
        <span className="text-gray-500">from yesterday</span>
      </div>
    </div>
  );
}

export default Dashboardcard;
