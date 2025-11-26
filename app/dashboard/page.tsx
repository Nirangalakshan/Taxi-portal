import Dashboardcard from "@/components/dashboard-card/page";
import Menubar from "@/components/menubar/page";
import Sidebar from "@/components/sidebar/page";
import RevenueTrendChart from "@/components/revenue-trend-chart/page";
import RideTrendsChart from "@/components/ride-trends-chart/page";
import React from "react";
import UserStatus from "@/components/user-status-card/page";
import VehicleRevenue from "@/components/vehicle-revenue-card/page";
import SignupTrendChart from "@/components/signup-trend-chart/page";

function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="hidden md:block bg-white h-full">
        <Sidebar />
      </div>
      <div className="w-full bg-gray-50 h-full overflow-auto">
        <Menubar />
        <div className="px-4 py-4 md:px-6 md:py-5 lg:px-8">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Dashboard
          </h1>
          <p className="text-sm md:text-base text-gray-500">
            Welcome back! Here&apos;s what&apos;s happening with your taxi
            portal.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4 px-4 md:px-6 lg:px-8 pb-4 md:pb-6">
          <Dashboardcard
            title="Active Drivers"
            value="247"
            percentageChange={12}
            iconBgColor="bg-blue-50"
            icon={
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            }
          />
          <Dashboardcard
            title="Ongoing Rides"
            value="89"
            percentageChange={8}
            iconBgColor="bg-cyan-50"
            icon={
              <svg
                className="w-5 h-5 text-cyan-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            }
          />
          <Dashboardcard
            title="Daily Revenue"
            value="LKR 12,847"
            percentageChange={13}
            iconBgColor="bg-green-50"
            icon={
              <svg
                className="w-5 h-5 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />
          <Dashboardcard
            title="Completed Trips"
            value="1,234"
            percentageChange={7}
            iconBgColor="bg-sky-50"
            icon={
              <svg
                className="w-5 h-5 text-sky-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />
          <Dashboardcard
            title="New Signups"
            value="42"
            percentageChange={23}
            iconBgColor="bg-indigo-50"
            icon={
              <svg
                className="w-5 h-5 text-indigo-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            }
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 md:px-6 lg:px-8 pb-6 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-4 h-full">
            <RevenueTrendChart />
            <UserStatus />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 h-full">
            <RideTrendsChart />
            <VehicleRevenue />
          </div>
        </div>
        <div className="p-6">
          <SignupTrendChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
