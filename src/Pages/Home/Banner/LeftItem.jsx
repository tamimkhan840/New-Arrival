import { useState } from "react";
import { MdOutlineNavigateNext, MdMenu } from "react-icons/md";
const womenClothing = [
  {
      id: 1,
      name: "Woman’s Fashion",

  },
  {
      id: 2,
      name: "Men’s Fashion",

  },
  {
      id: 3,
      name: "Electronics",

  },
  {
      id: 4,
      name: "Home & Lifestyle",

  },
  {
      id: 5,
      name: "Medicine",

  },
  {
      id: 6,
      name: "Sports & Outdoor",

  },
  {
      id: 7,
      name: "Baby’s & Toys",

  },
  {
      id: 8,
      name: "Groceries & Pets",

  }
];
function LeftItem() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="col-span-3">
      {/* মোবাইল ডিভাইসের জন্য টগল বাটন */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-3 left-0 z-50  text-black p-2 rounded"
      >
        <MdMenu className="w-6 h-6" />
      </button>

      {/* সাইডবার */}
      <div
        className={` fixed top-0 left-0 h-full bg-white shadow-lg z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-3/4"
        } transition-transform duration-300 md:relative md:translate-x-0 md:col-span-3 max-[780px]:hidden px-4 mt-10 lg:col`}
      >
        {
            womenClothing.map((item)=> (
              <ul key={item.id} className="text-base">
                <li className="flex justify-between items-center cursor-pointer xl:mb-5 lg:py-1.5 lg:px-1.5 rounded hover:bg-[#F5F5F5]">
              <a href="#">{item.name}</a>
              <span>
                <MdOutlineNavigateNext className="w-6 h-5" />
              </span>
            </li>
              </ul>
            ))
          }
      </div>

      {/* মোবাইল ডিভাইসের জন্য Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed top-55 left-0 w-3/4 h-full bg-black  z-30 md:hidden text-white"
        >
          {
            womenClothing.map((item)=> (
              <ul key={item.id} className="text-base">
                <li className="flex justify-between items-center cursor-pointer xl:mb-5 lg:py-1.5 lg:px-1.5 rounded hover:bg-[#F5F5F5]">
              <a href="#">{item.name}</a>
              <span>
                <MdOutlineNavigateNext className="w-6 h-5" />
              </span>
            </li>
              </ul>
            ))
          }

        </div>
      )}
    </div>
  );
}

export default LeftItem;
