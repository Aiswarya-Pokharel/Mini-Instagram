import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import { FaAngleRight } from "react-icons/fa";

export default function Stories() {
  const stories = [
    {
      pic: "https://thumbs.dreamstime.com/b/minnie-mouse-face-clipart-head-portrait-disney-cartoon-character-vector-png-drawing-illustration-sticker-vinyl-decal-sublimation-387307418.jpg",
      name: "minnie",
    },
    {
      pic: "https://i.pinimg.com/474x/27/8d/b4/278db4bb38d9345c97918d53448f7ef9.jpg",
      name: "doremon_",
    },
    {
      pic: "https://static.vecteezy.com/system/resources/thumbnails/022/589/857/small_2x/little-cute-rabbit-with-pink-wearing-red-sweater-clothes-with-a-hood-easter-bunny-pink-on-blurred-background-generative-ai-photo.jpg",
      name: "goofy",
    },
    {
      pic: pic1,
      name: "duck",
    },
    {
      pic: pic2,
      name: "pluto",
    },
    {
      pic: pic3,
      name: "daisy_duck",
    },
  ];
  return (
    <div className="relative">
      <ul
        className="flex flex-row space-x-4 py-4 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {stories.map((story, index) => (
          <li
            key={index}
            className="flex flex-col items-center gap-1 cursor-pointer flex-shrink-0 list-none"
          >
            {/* Instagram gradient ring */}
            <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
              <div className="p-[2px] bg-white rounded-full">
                <img
                  src={story.pic}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Name */}
            <span className="text-xs w-16 text-center truncate">
              {story.name}
            </span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full p-1 shadow-lg hover:scale-110 transition"
      >
        <FaAngleRight />
      </button>
    </div>
  );
}
