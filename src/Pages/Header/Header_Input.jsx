
import { FaSearch } from "react-icons/fa";

function Header_Input() {
  return (

    <form className="flex max-[640px]:hidden">
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pointer-events-none end-0 pe-3">
          <FaSearch />
        </div>
        <input type="search" id="default-search" className="block w-[223px] h-[38px] px-3 py-3 pe-8 text-sm text-gray-900 border rounded-sm focus:outline-none  " placeholder="What are you looking for?" required />
      </div>
    </form>
  )
}

export default Header_Input