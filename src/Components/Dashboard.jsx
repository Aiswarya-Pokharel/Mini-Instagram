// Dashboard.jsx
import Post from "./Post";
import Sidebar from "./Sidebar";
import Stories from "./Stories";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-black text-white">
      {/* SIDEBAR */}
      <div className="flex-shrink-0">
        <Sidebar />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-xl ml-80 px-4 py-6">
          {/* STORIES BOX */}
          <div className=" rounded-xl p-4">
            <Stories />
          </div>

          {/* Posts will go here */}
          <div>
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
}
