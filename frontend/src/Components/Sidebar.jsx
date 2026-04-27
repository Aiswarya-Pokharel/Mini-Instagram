import { useState } from "react";
import {
  FaInstagram,
  FaHome,
  FaVideo,
  FaSearch,
  FaCompass,
  FaPaperPlane,
  FaHeart,
  FaPlusSquare,
  FaBars,
  FaUserCircle,
} from "react-icons/fa";

const sideLists = [
  { icon: <FaHome />, link: "/home", title: "Home" },
  { icon: <FaSearch />, link: "/search", title: "Search" },
  { icon: <FaCompass />, link: "/explore", title: "Explore" },
  { icon: <FaVideo />, link: "/videos", title: "Reels" },
  { icon: <FaPaperPlane />, link: "/messages", title: "Messages" },
  { icon: <FaHeart />, link: "/notifications", title: "Notifications" },
  { icon: <FaPlusSquare />, link: "/create", title: "Create" },
];

const menuLists = [
  { icon: <FaBars />, link: "/menu", title: "More" },
  { icon: <FaUserCircle />, link: "/profile", title: "Profile" },
];

export default function Sidebar() {
  const [active, setActive] = useState("/home");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`h-screen ${
        isExpanded ? "w-56" : "w-16"
      } transition-all duration-300  flex flex-col px-2 py-6 fixed top-0 left-0 z-50`}
    >
      {/* TOP - Instagram Logo */}
      <div className="mb-8 px-2 h-10 flex items-center overflow-hidden">
        {isExpanded ? (
          <span className="text-2xl font-bold font-serif tracking-tight whitespace-nowrap">
            Instagram
          </span>
        ) : (
          <FaInstagram className="text-3xl" />
        )}
      </div>

      {/* MID ICONS */}
      <div className="flex-1">
        <ul className="flex flex-col gap-1">
          {sideLists.map((list, index) => (
            <li
              key={index}
              onClick={() => setActive(list.link)}
              className={`list-none flex items-center gap-4 text-2xl p-3 rounded-xl cursor-pointer transition-all duration-200
                ${active === list.link ? "font-bold" : "font-normal"}
                hover:bg-gray-800`}
            >
              {/* ICON */}
              <span
                className={`min-w-[26px] ${active === list.link ? "scale-110" : ""} transition-transform`}
              >
                {list.icon}
              </span>

              {/* LABEL */}
              {isExpanded && (
                <span className="text-sm whitespace-nowrap transition-all duration-200">
                  {list.title}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* BOTTOM ICONS */}
      <div>
        <ul className="flex flex-col gap-1">
          {menuLists.map((list, index) => (
            <li
              key={index}
              onClick={() => setActive(list.link)}
              className={`list-none flex items-center gap-4 text-2xl p-3 rounded-xl cursor-pointer transition-all duration-200
                ${active === list.link ? "font-bold" : "font-normal"}
                hover:bg-gray-800`}
            >
              {/* ICON */}
              <span
                className={`min-w-[26px] ${active === list.link ? "scale-110" : ""} transition-transform`}
              >
                {list.icon}
              </span>

              {/* LABEL */}
              {isExpanded && (
                <span className="text-sm whitespace-nowrap transition-all duration-200">
                  {list.title}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
