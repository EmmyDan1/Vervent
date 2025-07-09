import { images } from "../assets/ImageData.js";
import Button from "./Button";

function ExpertCare() {
  return (
    <div className="flex flex-col md:flex-row gap-12 p-4 mx-auto items-center justify-between">
  
      <div className="grid grid-rows-1 grid-cols-2 gap-4 w-full md:w-1/2">
        <img
          src={images.ExpertImg1}
          alt="Top Image"
          className="col-span-5 h-48 w-full object-cover rounded-lg md:h-[300px]"
          loading="lazy"
        />
        <img
          src={images.ExpertImg2}
          alt="Bottom Left"
          className="h-24 w-full col-span-3 object-cover rounded-lg"
          loading="lazy"
        />

        <img
          src={images.ExpertImg3}
          alt="Bottom Right"
          className="h-24 w-full col-span-2 object-cover rounded-lg"
          loading="lazy"
        />
      </div>

   
      <div className="flex flex-col w-full md:w-1/2 -translate-y-4 md:translate-y-0">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Expert care and more right in your neighborhood
          </h2>
          <p className="text-md mb-4 w-full ">
            No protection plan? No problem. Our uBreakiFix by Asurion experts
            can help with repairs, setups, accessories, and more for anything
            with a power button.
          </p>
        </div>
        <div className="flex">
          <Button className="bg-purple-600 text-white px-6 py-2">
            Find a store
          </Button>
          <Button className="text-black px-6 py-2 border border-black ml-4">
            Find repair options
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ExpertCare;
