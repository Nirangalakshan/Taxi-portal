"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Calendar,
  Filter,
  Search,
  Eye,
  Pencil,
  Trash2,
  ArrowUpDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data
const passengers = [
  {
    id: 1,
    name: "Sarah Johnson",
    contact: "+94 867980",
    totalTrips: 134,
    accountStatus: "Active",
    status: "Online",
  },
  {
    id: 2,
    name: "Mike Chen",
    contact: "+94 7564890",
    totalTrips: 102,
    accountStatus: "Active",
    status: "Offline",
  },
  {
    id: 3,
    name: "David Rodriguez",
    contact: "+94 877507",
    totalTrips: 88,
    accountStatus: "Inactive",
    status: "Suspend",
  },
  {
    id: 4,
    name: "Emily Wilson",
    contact: "+94 7123456",
    totalTrips: 45,
    accountStatus: "Active",
    status: "Online",
  },
  {
    id: 5,
    name: "James Anderson",
    contact: "+94 7765432",
    totalTrips: 12,
    accountStatus: "Inactive",
    status: "Offline",
  },
];

function PassengerTable() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPassengers = passengers.filter((passenger) =>
    passenger.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-xl font-bold text-gray-800">Passengers</h2>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Date Picker Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-50 transition-colors">
            <Calendar size={16} />
            <span>Choose date</span>
          </button>

          {/* Filter Dropdown */}
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-50 transition-colors min-w-[100px] justify-between">
            <div className="flex items-center gap-2">
              <Filter size={16} />
              <span>All</span>
            </div>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Search Input */}
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Find Passenger"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
            />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-b border-gray-100">
              <TableHead className="w-[250px]">
                <div className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
                  Name <ArrowUpDown size={14} className="text-gray-400" />
                </div>
              </TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>
                <div className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
                  Total Trips{" "}
                  <ArrowUpDown size={14} className="text-gray-400" />
                </div>
              </TableHead>
              <TableHead>Account Status</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPassengers.map((passenger) => (
              <TableRow
                key={passenger.id}
                className="hover:bg-gray-50/50 border-b border-gray-50 last:border-0"
              >
                <TableCell className="font-semibold text-gray-700 py-4">
                  {passenger.name}
                </TableCell>
                <TableCell className="text-gray-500">
                  {passenger.contact}
                </TableCell>
                <TableCell className="text-gray-500 pl-8">
                  {passenger.totalTrips}
                </TableCell>
                <TableCell>
                  <span
                    className={cn(
                      "font-medium text-sm",
                      passenger.accountStatus === "Active"
                        ? "text-green-500"
                        : "text-red-500"
                    )}
                  >
                    {passenger.accountStatus}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium",
                      passenger.status === "Online" &&
                        "bg-green-100 text-green-700",
                      passenger.status === "Offline" &&
                        "bg-gray-200 text-gray-600",
                      passenger.status === "Suspend" &&
                        "bg-red-100 text-red-600"
                    )}
                  >
                    <span
                      className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        passenger.status === "Online" && "bg-green-500",
                        passenger.status === "Offline" && "bg-gray-500",
                        passenger.status === "Suspend" && "bg-red-500"
                      )}
                    />
                    {passenger.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-3">
                    <button className="text-gray-500 hover:text-blue-600 transition-colors">
                      <Eye size={18} />
                    </button>
                    <button className="text-gray-500 hover:text-blue-600 transition-colors">
                      <Pencil size={18} />
                    </button>
                    <button className="text-gray-500 hover:text-red-600 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default PassengerTable;
