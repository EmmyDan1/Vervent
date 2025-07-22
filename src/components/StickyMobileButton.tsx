
import { FaGamepad } from "react-icons/fa";

type StickyMobileButtonProps = {
  toggleDropdown: () => void;
  isOpen: boolean;
};

const StickyMobileButton: React.FC<StickyMobileButtonProps> = ({
  toggleDropdown,
  isOpen,
}) => {
  return (
    <div className="sticky -mt-12 top-4 z-40  px-4 py-2 md:hidden">
      <button
        className="flex items-center justify-between bg-white text-black py-3 px-4 rounded-full shadow-md w-full max-w-md mx-auto focus:outline-none"
        onClick={toggleDropdown}
      >
        <FaGamepad fontSize={28} />
        <div className="flex items-center justify-between w-full ml-3">
          <div className="flex flex-col">
            <p className="text-[11px] font-medium opacity-40">
              What needs help
            </p>
            <p className="text-[13px] font-semibold">Phones, etc.</p>
          </div>
          <p className="border-l border-gray h-10 mx-3"></p>
          <div className="flex flex-col">
            <p className="text-[11px] font-medium opacity-40">
              How can we help
            </p>
            <p className="text-[13px] font-semibold">Repair, etc.</p>
          </div>
        </div>
        <span className="ml-3 text-xl">{isOpen ? "▲" : "🔍"}</span>
      </button>
    </div>
  );
};

export default StickyMobileButton;
