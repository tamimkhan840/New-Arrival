import Category from "./category/Category"
import LeftItem from "./Banner/LeftItem"
import RightItem from "./Banner/RightItem"
import FlashSales from "./FlashSales/FlashSales"
import Arrival from "./New_Arrival/Arrival"
import MusicExperience from "./musicExperience/MusicExperience"
import Support from "./support/Support"


function Home() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 ">
        <LeftItem />
        <RightItem />
      </div>
      <Category />
      <FlashSales />
      <hr />
      <MusicExperience />
      <Arrival />
      <Support />
    </div>
  )
}

export default Home