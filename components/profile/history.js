import Link from "next/link";
export default function History() {
  return (
    <div className="mt-0 ">
      <h1 className="font-bold text-2xl "> Order History</h1>
      <div className="inline-flex" id="main_menu">
        <ul className="flex flex-wrap p-1 md:p-2 sm:bg-gray-300 sm:rounded-md text-sm md:text-base">
          <li className="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0">
            <Link href="#">
              <a className="font-semibold whitespace-no-wrap text-blue-600 hover:text-blue-800">
                <span className="last firstlevel">Last 10</span>
              </a>
            </Link>
          </li>
          <li className="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0">
            <Link href="#">
              <a className="font-semibold whitespace-no-wrap text-blue-600 hover:text-blue-800">
                <span className="last firstlevel">Monthly</span>
              </a>
            </Link>
          </li>
          <li className="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0">
            <Link href="#">
              <a className="font-semibold whitespace-no-wrap text-blue-600 hover:text-blue-800">
                <span className="last firstlevel">All Time</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <div className=" mt-2 mb-3 text-blue-800">
          <div className="flex justify-between bg-red-300 hover:bg-red-200 rounded">
            <Link href="#">
              <a className=" w-fill rounded-lg flex p-4  ">
                Caramelatte + Donut x2
              </a>
            </Link>
            <p className="my-auto mr-3"> 19$</p>
          </div>
        </div>
      </div>
    </div>
  );
}
