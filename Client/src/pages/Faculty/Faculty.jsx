import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Faculty() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    // Add your logout logic here (clear tokens, etc.)
    navigate("/");
  };

  const menuItems = [
    {
      icon: "👥",
      title: "My Classes",
      count: "8",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: "📋",
      title: "Assignments",
      count: "24",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: "✅",
      title: "Grading",
      count: "15 Pending",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: "📅",
      title: "Schedule",
      count: "This Week",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: "📊",
      title: "Analytics",
      count: "View",
      color: "from-indigo-500 to-blue-600",
    },
    {
      icon: "📢",
      title: "Announcements",
      count: "3 New",
      color: "from-rose-500 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-2xl">
                📘
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Faculty Portal
                </h1>
                <p className="text-sm text-gray-500">
                  Manage your classes and students
                </p>
              </div>
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                  F
                </div>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showMenu ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {showMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-10 animate-fadeIn">
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors duration-200">
                    Profile
                  </button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors duration-200">
                    Settings
                  </button>
                  <hr className="my-2" />
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 transition-colors duration-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-2">
            Welcome to Your Dashboard 📘
          </h2>
          <p className="text-emerald-100 text-lg">
            Manage your courses and track student progress
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div
                    className={`px-3 py-1 bg-gradient-to-r ${item.color} text-white rounded-full text-sm font-semibold`}
                  >
                    {item.count}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">View details →</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions & Upcoming */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              ⚡ Quick Actions
            </h3>
            <div className="space-y-3">
              {[
                {
                  title: "Create Assignment",
                  icon: "➕",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  title: "Grade Submissions",
                  icon: "✍️",
                  color: "from-orange-500 to-red-600",
                },
                {
                  title: "Post Announcement",
                  icon: "📣",
                  color: "from-purple-500 to-pink-600",
                },
                {
                  title: "View Reports",
                  icon: "📈",
                  color: "from-emerald-500 to-teal-600",
                },
              ].map((action, index) => (
                <button
                  key={index}
                  className="w-full flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 border-2 border-transparent hover:border-emerald-200 transition-all duration-200 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                    {action.icon}
                  </span>
                  <span className="font-semibold text-gray-800">
                    {action.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Upcoming Classes */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              📅 Upcoming Classes
            </h3>
            <div className="space-y-3">
              {[
                {
                  course: "Data Structures",
                  time: "Today, 9:00 AM",
                  room: "Room 301",
                },
                {
                  course: "Algorithms",
                  time: "Today, 2:00 PM",
                  room: "Room 205",
                },
                {
                  course: "Database Systems",
                  time: "Tomorrow, 10:00 AM",
                  room: "Room 401",
                },
              ].map((classItem, index) => (
                <div
                  key={index}
                  className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border-l-4 border-emerald-500"
                >
                  <p className="font-bold text-gray-800">{classItem.course}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm text-gray-600">⏰ {classItem.time}</p>
                    <p className="text-sm text-gray-600">📍 {classItem.room}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
