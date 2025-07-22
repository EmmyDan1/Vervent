import { images } from "../assets/ImageData.js";

const devices = [
  {
    title: "Start a claim",
    img: images.TvImg,
  },
  {
    title: "Fix something",
    img: images.ApplianceImg,
  },
  {
    title: "Get tech Help",
    img: images.PhoneImg,
  },
  {
    title: "Protect my tech",
    img: images.WashingMacImg,
  },
  {
    title: "Find a store",
    img: images.ApplianceImg,
  },
  {
    title: "Fix something",
    img: images.ApplianceImg,
  },
];

function DependOnDevice() {
  return (
    <div className="p-4 mb-10">
      <h1 className="text-2xl font-semibold mb-3">More help for the devices you depend on</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
        {devices.map((device, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-sm rounded-lg  hover:shadow-lg transition-shadow border border-gray-300 "
          >
            <img
              src={device.img}
              alt={device.title}
              className="w-28 h-24  rounded-lg mb-2 "
            />
            <h2 className="font-semibold text-lg">{device.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DependOnDevice;