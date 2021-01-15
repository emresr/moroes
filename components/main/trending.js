import Image from "next/image";

function Trending() {
  return (
    <div className="w-full overflow-hidden sm:w-1/3">
      <h1 className="mt-9 ml-5 mr-7 text-4xl font-extrabold"> Trending</h1>
      <div className="mt-4 ml-11 mr-11">
        <div className="w-5/6">
          <div className="border-solid rounded-md  border-2 my-2 flex">
            <div className="max-w w-full">
              <h2 className="font-bold text-2xl"> Best crime series</h2>
              <p className="ml-3  "> Maybe line of duty </p>
              <div className="float-right">
                <p className=" ">Series</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Trending;
