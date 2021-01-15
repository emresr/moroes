import Image from "next/image";

function ProfileCard() {
  return (
    <div>
      <div className="ml-3 mt-5">
        <Image
          className="inline"
          src="/favicon.ico"
          alt="Picture of the author"
          width={32}
          height={32}
        />
        <h1 className="inline mt-9 ml-5 mr-7 text-4xl font-extrabold">Emre</h1>
      </div>
      <div className="mt-4 ml-7 ">
        <h1 className="text-lg font-semibold"> Coder Guy</h1>

        <div className="mb-3">
          <h1 className="font-bold text-base">Been here since </h1>
          <h1 className="font-semibold text-lg"> 10 Dec 2019</h1>
        </div>
        <div className="mb-3">
          <h1 className="inline text-lg">277,3K ups</h1>
          <h1 className="inline ml-4 text-lg">102 posts</h1>
        </div>
        <h1 className="text-lg">299 followers </h1>
      </div>
      <div className="w-full center-items  ">
        <button class="uppercase px-8 py-2 border border-green-600 text-green-600 max-w-max shadow-sm hover:shadow-lg">
          button
        </button>
      </div>
    </div>
  );
}
export default ProfileCard;
