import { images } from "../assets/ImageData";
import Badge from "./Badge";

const helpArray = [
  {
    img: images.device6,
    title: "Start a claim",
    text: "Start or track your claim",
  },
  {
    img: images.device8,
    title: "Protect your device",
    text: "Enroll in verizon protect",
    badge: "HURRY! ENDS 5/26",
    badgeColor: "bg-black",
  },
  {
    img: images.ExpertImg3,
    title: "Get a screen repair",
    text: "Get a screen repair or replacement",
  },
  {
    img: images.device8,
    title: "Explore a tech support plan",
    text: " Starting around $15/month",
    badge: "Free",
    badgeColor: "bg-purple-500",
  },

  {
    img: images.device7,
    title: "Recycle your device",
    text: "For all eligible devices",
  },
  {
    img: images.device6,
    title: "Get installation help",
    text: " Discounted installation for smart home devices",
    badge: "we'll welcome you",
    badgeColor: "bg-green-500",
  },
];

function Help() {
  return (
    <div className=" mx-auto">
      <h1 className="font-semibold text-2xl p-4">What can we help you with?</h1>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4">
        {helpArray.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            {item.badge && (
              <Badge
                className={`absolute  text-white text-xs px-2 py-1 rounded-full  ${
                  item.badgeColor || "bg-gray-500"
                }`}
              >
                {item.badge}
              </Badge>
            )}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-auto mb-2 overflow-hidden rounded-lg"
              loading="lazy" 
            />

            <h4 className="font-semibold text-sm">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Help;
