"use client";
import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaUserTag,
  FaTimes,
  FaCamera,
  FaShieldAlt,
} from "react-icons/fa";

interface AddAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddAdminModal({ isOpen, onClose }: AddAdminModalProps) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    role: "Super Admin",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form data:", formData);
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm border border-black flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-auto h-[90%] animate-scaleIn">
        {/* Header */}
        <div className="bg-blue-400 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <FaShieldAlt className="text-white text-lg" />
            </div>
            <div>
              <h2 className="text-white font-semibold text-lg">
                Create Admin Role
              </h2>
              <p className="text-blue-100 text-xs">Create New Admin</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 hover:bg-opacity-20 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* Profile Picture Upload */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-2 border-2 border-dashed border-blue-300 cursor-pointer hover:bg-blue-100 transition-all duration-200">
              <FaUser className="text-blue-400 text-3xl" />
            </div>
            <button
              type="button"
              className="text-blue-500 text-sm font-medium hover:underline flex items-center gap-1"
            >
              <FaCamera className="text-xs" />
              Upload profile picture
            </button>
          </div>

          <div className="space-y-4">
            {/* Admin Username */}
            <div>
              <label className="flex items-center gap-2 text-gray-600 text-sm font-medium mb-2">
                <FaUser className="text-gray-400" />
                Admin Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter Username"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="flex items-center gap-2 text-gray-600 text-sm font-medium mb-2">
                <FaEnvelope className="text-gray-400" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="username@gmail.com"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="flex items-center gap-2 text-gray-600 text-sm font-medium mb-2">
                <FaPhone className="text-gray-400" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(+94)77....712"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                required
              />
            </div>

            {/* Set Password */}
            <div>
              <label className="flex items-center gap-2 text-gray-600 text-sm font-medium mb-2">
                <FaLock className="text-gray-400" />
                Set Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                required
              />
            </div>

            {/* Select Role */}
            <div>
              <label className="flex items-center gap-2 text-gray-600 text-sm font-medium mb-2">
                <FaUserTag className="text-gray-400" />
                Select Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 appearance-none cursor-pointer bg-white"
                required
              >
                <option value="Super Admin">Super Admin</option>
                <option value="Dispatch">Dispatch</option>
                <option value="Customer Care">Customer Care</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-200 font-medium shadow-sm hover:shadow-md"
            >
              Save Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAdminModal;
