"use client";
import Menubar from "@/components/menubar/page";
import Sidebar from "@/components/sidebar/page";
import React, { useState } from "react";
import {
  FaUserShield,
  FaUserCog,
  FaHeadset,
  FaPlus,
  FaEllipsisV,
  FaInfoCircle,
  FaCrown,
  FaTruck,
  FaTrash,
  FaEdit,
} from "react-icons/fa";
import PassengerTable from "@/components/passenger-table/page";

interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
  roleColor: string;
}

interface Role {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

function PassengerManagement() {
  return (
    <div className="flex w-full h-screen">
      <div className="bg-white h-full">
        <Sidebar />
      </div>
      <div className="w-full bg-gray-50 h-full overflow-y-auto">
        <Menubar />

        {/* Main Content */}
        <div className="px-8 py-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Passenger Management
            </h1>
            <p className="text-gray-500 mt-1">
              Manage and monitor passenger accounts and activity
            </p>
          </div>
        </div>
        <div className="px-8 py-6">
          <PassengerTable />
        </div>
      </div>
    </div>
  );
}

export default PassengerManagement;
