import Link from "next/link";

function Header() {
  return (
    <div>
      <nav className="h-20">
        <div className="-mb-px h-15 bg-blue-500 flex justify-center">
          <Link href="/">
            <a className="self-left no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8">
              Gesova
            </a>
          </Link>
          <Link href="/postpage">
            <a className="self-left no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8">
              Postpage
            </a>
          </Link>
          <Link href="/community">
            <a className="self-left no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8">
              Community
            </a>
          </Link>
          <Link href="/explore">
            <a className="self-left no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8">
              Explore
            </a>
          </Link>
          <Link href="/profile">
            <a className="self-left no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8">
              Profile
            </a>
          </Link>
          <Link href="/add">
            <a className="self-left no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8">
              Add
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
