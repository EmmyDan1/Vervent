import React from "react";
import { Star } from "lucide-react";
import { images } from "../assets/ImageData.js";

const testimonials = [
  {
    name: "Katie",
    service: "Verizon Mobile Protect",
    quote:
      "The same day service is amazing! I was floored when I was told within hours I'd get a new phone!",
    image: images.device6, 
  },
  {
    name: "Chun",
    service: "Asurion Appliance+",
    quote:
      "The representative... was very polite and helpful, the issue was addressed immediately.",
    image: images.device7,
  },
  {
    name: "Russell",
    service: "Amazon Complete Protect",
    quote: "The most amazing plan I’ve ever purchased in my entire life.",
    image: images.device8,
  },
  {
    name: "Jason",
    service: "Asurion Home+",
    quote:
      "I have 5 kids and we get a lot of wear and tear on our devices... Asurion was quick to handle.",
    image: images.Img15,
  },
];

const StarRating = () => (
  <div className="flex space-x-1 text-yellow-400">
    {Array(5)
      .fill()
      .map((_, index) => (
        <Star key={index} size={16} fill="currentColor" strokeWidth={0} />
      ))}
  </div>
);

const Testimonials = () => {
  return (
    <div className="bg-white px-4 py-10 md:py-20">
      <div className=" mb-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">
          Hands-on help that wins people’s hearts
        </h2>
        <p className="text-gray-600 ">
          Your tech might glitch, break, or give out, but we never will. Just
          ask the over 300 million people who trust us to care for theirs.
          <a href="#" className="text-purple-600 underline ml-1">
            Check out more reviews →
          </a>
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((item, idx) => (
          <div key={idx} className="relative rounded-lg ">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[400px] object-cover rounded-xl"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-95 p-4 rounded-lg shadow-md">
              <div className="mb-1">
                <p className="mt-2 font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.service}</p>
              </div>

              <p className="text-sm text-gray-700">{item.quote}</p>
            </div>

          </div>
        ))}
      </div>
      <div className="flex justify-center  mt-10 flex-wrap gap-6">
        <div className="flex flex-col items-center">
          <p className="font-semibold">Google</p>
          <StarRating />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-semibold">ConsumerAffairs</p>
          <StarRating />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-semibold">Amazon</p>
          <StarRating />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
