"use client";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const user = {
  fullName: "XYZ",
  position: "Developer",
  email: "xyz@gmail.com",
  collegeName: "ABC",
  status: "Active",
  skills: [],
  totalProjects: 0,
  rating: 0,
  performanceStatus: ""
};

const DashboardPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-transparent backdrop-blur-lg p-6 max-w-4xl min-h-[70vh] mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold">{user.fullName}</h1>
            <p className="text-gray-600">{user.position}</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Personal Information Panel */}
          <div className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>College:</strong> {user.collegeName}
            </p>
            <p>
              <strong>Position:</strong> {user.position}
            </p>
            <p>
              <strong>Status:</strong> {user.status}
            </p>
          </div>

          {/* Skills Panel */}
          <div className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">{user.skills}</div>
          </div>

          {/* Projects Panel */}
          <div className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Projects</h2>
            <p>
              <strong>Total Projects:</strong> {user.totalProjects}
            </p>
          </div>

          {/* Ratings Panel */}
          <div className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Ratings</h2>
            <p>
              <strong>Overall Rating:</strong> {user.rating} / 5
            </p>
          </div>

          {/* Performance Status Panel */}
          <div className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Performance Status</h2>
            <p>{user.performanceStatus}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardPage;
