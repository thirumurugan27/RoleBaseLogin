import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Student() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    // Add your logout logic here (clear tokens, etc.)
    navigate("/");
  };

  const menuItems = [
    {
      icon: "📚",
      title: "My Courses",
      count: "5",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "📝",
      title: "Assignments",
      count: "12",
      color: "from-green-500 to-green-600",
    },
    {
      icon: "📊",
      title: "Grades",
      count: "4.2 GPA",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "📅",
      title: "Schedule",
      count: "Today",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: "📖",
      title: "Library",
      count: "3 Books",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: "💬",
      title: "Messages",
      count: "8",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-2xl">
                🎓
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Student Portal
                </h1>
                <p className="text-sm text-gray-500">Welcome back, Student!</p>
              </div>
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                  S
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
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-2">
            Welcome to Your Dashboard 🎓
          </h2>
          <p className="text-blue-100 text-lg">
            Track your academic progress and stay organized
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
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">View details →</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            📌 Recent Activity
          </h3>
          <div className="space-y-3">
            {[
              {
                title: "Mathematics Assignment Due",
                time: "Tomorrow, 11:59 PM",
                color: "bg-red-100 text-red-600",
              },
              {
                title: "Physics Quiz Completed",
                time: "2 hours ago",
                color: "bg-green-100 text-green-600",
              },
              {
                title: "New Course Material Added",
                time: "5 hours ago",
                color: "bg-blue-100 text-blue-600",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div>
                  <p className="font-semibold text-gray-800">
                    {activity.title}
                  </p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${activity.color}`}
                >
                  {index === 0 ? "Pending" : "Completed"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
