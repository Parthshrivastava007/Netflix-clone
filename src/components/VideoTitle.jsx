import { INFO_ICON, PLAY_BUTTON } from "../utlis/Constants";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 w-1/3">{overview}</p>
      <div className="flex">
        <button className="flex gap-2 bg-white text-black p-4 px-12 text-xl rounded-lg cursor-pointer hover:opacity-80">
          <img className="h-7 w-7" src={PLAY_BUTTON} />
          Play
        </button>
        <button className="flex gap-2 mx-2 bg-gray-900 text-white p-4 px-12 text-xl rounded-lg cursor-pointer hover:opacity-80">
          <img className="h-8 w-8" src={INFO_ICON} />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
