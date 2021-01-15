import Layout from "../components/layout/layout";
import ProfileCard from "../components/profile/profilecard";
import Comments from "../components/profile/comments";

import Link from "next/link";
export default function Profile() {
  return (
    <div>
      <Layout>
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full overflow-hidden sm:w-2/3">
            <div className="ml-40 mt-5">
              <div className="inline-flex" id="main_menu">
                <ul className="flex flex-wrap p-1 md:p-2 sm:bg-gray-300 sm:rounded-md text-sm md:text-base">
                  <li className="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0">
                    <Link href="#">
                      <a className="font-semibold whitespace-no-wrap text-blue-600 hover:text-blue-800">
                        <span className="last firstlevel">Posts</span>
                      </a>
                    </Link>
                  </li>

                  <li className="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0">
                    <Link href="#">
                      <a className="font-semibold whitespace-no-wrap text-blue-600 hover:text-blue-800">
                        <span className="last firstlevel">Comments</span>
                      </a>
                    </Link>
                  </li>
                  <li className="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0">
                    <Link href="#">
                      <a className="font-semibold whitespace-no-wrap text-blue-600 hover:text-blue-800">
                        <span className="last firstlevel">Ups</span>
                      </a>
                    </Link>
                  </li>
                  <li className="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0">
                    <Link href="#">
                      <a className="font-semibold whitespace-no-wrap text-blue-600 hover:text-blue-800">
                        <span className="last firstlevel">Downs</span>
                      </a>
                    </Link>
                  </li>
                  <li className="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0">
                    <Link href="#">
                      <a className="font-semibold whitespace-no-wrap text-blue-600 hover:text-blue-800">
                        <span className="last firstlevel">Saved</span>
                      </a>
                    </Link>
                  </li>
                  <li className="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0">
                    <Link href="#">
                      <a className="font-semibold whitespace-no-wrap text-blue-600 hover:text-blue-800">
                        <span className="last firstlevel">Joineds</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Comments />
          </div>
          <div className="w-full bg-green-200  overflow-hidden sm:w-1/3">
            <ProfileCard />
          </div>
        </div>
      </Layout>
    </div>
  );
}
