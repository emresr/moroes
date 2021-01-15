import Image from "next/image";
import Trending from "./trending";
import All from "./all";
function Content() {
  return (
    <div className="flex flex-wrap overflow-hidden">
      <All />
      <Trending />
    </div>
  );
}
export default Content;
