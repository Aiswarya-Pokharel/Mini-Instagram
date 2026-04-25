import {
  FaEllipsisH,
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaPaperPlane,
  FaRegBookmark,
  FaRetweet,
} from "react-icons/fa";
import { useState } from "react";
import mountain from "../assets/mountain.jpg";
import kalinchowk from "../assets/kalinchowk.jpg";
import pic3 from "../assets/pic3.jpg";

export default function Post() {
  const posts = [
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_fkJ8D-xAhRxikKJr5IexUXyrThEyX0hzg&s",
      title: "routineofnepalbandha",
      time: "1h",
      post: "https://picsum.photos/seed/nepal/600/600",
      likes: 1234,
      caption:
        "Every corner of Nepal tells a story 🇳🇵✨ #VisitNepal #Wanderlust",
    },
    {
      logo: "https://static.vecteezy.com/system/resources/thumbnails/022/589/857/small_2x/little-cute-rabbit-with-pink-wearing-red-sweater-clothes-with-a-hood-easter-bunny-pink-on-blurred-background-generative-ai-photo.jpg",
      title: "goofy",
      time: "2h",
      post: kalinchowk,
      likes: "9.9K",
      caption:
        "Kalinchowk — where the clouds touch the earth and the soul finds peace 🙏❄️ #Kalinchowk #HimalayanVibes",
    },
    {
      logo: "https://i.pinimg.com/474x/27/8d/b4/278db4bb38d9345c97918d53448f7ef9.jpg",
      title: "doremon_",
      time: "3h",
      post: "https://picsum.photos/seed/disney/600/600",
      likes: "4.3K",
      caption: "Not all those who wander are lost 🌿🗺️ #Adventure #ExploreMore",
    },
    {
      logo: pic3,
      title: "daisy_duck",
      time: "5h",
      post: mountain,
      likes: "1.2K",
      caption:
        "The mountains are calling and I must go 🏔️🌄 The higher you climb, the better the view #MountainLife #Nepal #Hiking",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
}

function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="bg-black overflow-hidden">
      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          {/* Profile pic with gradient ring */}
          <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
            <div className="p-[2px] bg-black rounded-full">
              <img
                src={post.logo}
                alt={post.title}
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-white font-semibold text-sm">{post.title}</h3>
            <span className="text-gray-500">•</span>
            <p className="text-blue-400 text-sm font-semibold cursor-pointer">
              Follow
            </p>
          </div>
        </div>

        {/* Three dots */}
        <FaEllipsisH className="text-white cursor-pointer" />
      </div>

      {/* POST IMAGE */}
      <img
        src={post.post}
        alt="Post"
        className="w-full object-cover rounded-xl"
      />

      {/* ACTION BUTTONS */}
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Like */}
          <div className="relative group">
            <button onClick={handleLike}>
              {liked ? (
                <FaHeart className="text-red-500 text-2xl" />
              ) : (
                <FaRegHeart className="text-white text-2xl" />
              )}
            </button>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Like
            </span>
          </div>

          {/* Comment */}
          <div className="relative group">
            <FaRegComment className="text-white text-2xl cursor-pointer" />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Comment
            </span>
          </div>

          {/* Repost */}
          <div className="relative group">
            <FaRetweet className="text-white text-2xl cursor-pointer" />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Repost
            </span>
          </div>

          {/* Share */}
          <div className="relative group">
            <FaPaperPlane className="text-white text-2xl cursor-pointer" />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Share
            </span>
          </div>
        </div>
        {/* Save */}
        <button onClick={() => setSaved(!saved)}>
          <FaRegBookmark
            className={`text-2xl ${saved ? "text-yellow-400" : "text-white"}`}
          />
        </button>
      </div>

      {/* LIKES COUNT */}
      <div className="px-4 pb-1">
        <p className="text-white font-semibold text-sm">
          {likes.toLocaleString()} likes
        </p>
      </div>

      {/* CAPTION */}
      <div className="px-4 pb-1">
        <span className="text-white font-semibold text-sm mr-2">
          {post.title}
        </span>
        <span className="text-white text-sm">{post.caption}</span>
      </div>

      {/* TIME */}
      <div className="px-4 pb-3">
        <p className="text-gray-500 text-xs font-semibold">{post.time} ago</p>
      </div>
    </div>
  );
}
