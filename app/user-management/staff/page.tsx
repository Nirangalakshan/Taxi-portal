"use client";
import Menubar from "@/components/menubar/page";
import Sidebar from "@/components/sidebar/page";
import AddAdminModal from "@/app/popups/add-admin/page";
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

function StaffManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [adminUsers] = useState<AdminUser[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@ridecorp.com",
      role: "Super Admin",
      avatar: "👨‍💼",
      roleColor: "bg-red-100 text-red-600",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah@ridecorp.com",
      role: "Dispatch",
      avatar: "👩‍💼",
      roleColor: "bg-blue-100 text-blue-600",
    },
    {
      id: 3,
      name: "Mike Chen",
      email: "mike@ridecorp.com",
      role: "Customer Care",
      avatar: "👨‍💻",
      roleColor: "bg-green-100 text-green-600",
    },
  ]);

  const [availableRoles] = useState<Role[]>([
    {
      id: 1,
      name: "Super Admin",
      description: "Full Access",
      icon: <FaCrown className="text-red-500 text-2xl" />,
      color: "border-red-200 hover:border-red-400",
    },
    {
      id: 2,
      name: "Dispatch",
      description: "Rides Management",
      icon: <FaTruck className="text-blue-500 text-2xl" />,
      color: "border-blue-200 hover:border-blue-400",
    },
    {
      id: 3,
      name: "Customer Care",
      description: "Support Only",
      icon: <FaHeadset className="text-green-500 text-2xl" />,
      color: "border-green-200 hover:border-green-400",
    },
  ]);

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
              Staff Management
            </h1>
            <p className="text-gray-500 mt-1">Manage portal admin roles</p>
          </div>

          {/* Admin & Roles Management Card */}
          <div className="bg-white rounded-t-xl shadow-sm border border-gray-200 p-6 mb-0">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaInfoCircle className="text-blue-600 text-lg" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-gray-800">
                    Admin & Roles Management
                  </h2>
                  <p className="text-sm text-gray-500">Access management</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <FaPlus className="text-sm" />
                <span className="font-medium">Add Admin</span>
              </button>
            </div>
          </div>

          {/* Admin Users Section */}
          <div className="bg-white shadow-sm border border-gray-200 p-6 mb-0">
            <h3 className="text-base font-semibold text-gray-800 mb-4">
              Admin Users
            </h3>
            <div className="space-y-3">
              {adminUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 border border-gray-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                      {user.avatar}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{user.name}</h4>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-4 py-1.5 rounded-full text-sm font-medium ${user.roleColor}`}
                    >
                      {user.role}
                    </span>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-lg transition-all duration-200">
                      <FaTrash />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-lg transition-all duration-200">
                      <FaEdit />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Available Roles Section */}
          <div className="bg-white rounded-b-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-base font-semibold text-gray-800 mb-4">
              Available Roles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {availableRoles.map((role) => (
                <div
                  key={role.id}
                  className={`p-6 border-2 rounded-xl hover:shadow-md transition-all duration-200 cursor-pointer bg-white ${role.color}`}
                >
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="mb-2">{role.icon}</div>
                    <h4 className="font-semibold text-gray-800">{role.name}</h4>
                    <p className="text-sm text-gray-500">{role.description}</p>
                  </div>
                </div>
              ))}

              {/* Add Role Card */}
              <div className="p-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 cursor-pointer bg-white">
                <div className="flex flex-col items-center justify-center text-center gap-2 h-full">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                    <FaPlus className="text-gray-400 text-xl" />
                  </div>
                  <h4 className="font-medium text-gray-600">Add Role</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Admin Modal */}
      <AddAdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default StaffManagement;
