import Button from "./Button";
import { images } from "../assets/ImageData.js";

function LiveSupport() {
  return (
    <div className="w-full">
    
      <div className="mb-4 md:hidden">
        <div>
          <img
            src={images.LiveSupportImg}
            alt="Live Support"
            loading="lazy"
            className="w-[350px] h-[300px] mx-auto object-cover rounded-2xl"
          />
        </div>
        <div className="p-3">
          <h2 className="text-2xl font-semibold mb-4">
            Live tech support at your fingertips
          </h2>
          <p className="text-md mb-4">
            Each year, more than 30 million people rely on us to keep their tech
            running. So whether it’s device setup and troubleshooting or
            enhancing your device's performance, we’re here to help.
          </p>
          <Button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Get Tech Support
          </Button>
        </div>
      </div>

      <div className="hidden md:flex mx-auto px-4 py-10 gap-10 items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">
            Live tech support at your fingertips
          </h2>
          <p className="text-md mb-6">
            Each year, more than 30 million people rely on us to keep their tech
            running. So whether it’s device setup and troubleshooting or
            enhancing your device's performance, we’re here to help.
          </p>
          <Button className="bg-purple-600 w-24 text-white rounded-full hover:bg-purple-700 transition-colors ">
            Support
          </Button>
        </div>
        <div>
          <img
            src={images.LiveSupportImg}
            alt="Live Support"
            loading="lazy"
            className="w-[990px] h-[450px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default LiveSupport;
