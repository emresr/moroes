import Link from "next/link";

function Header2() {
  return (
   <div>
       const links = ["link1", "link2", "link3"];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
  }

  handleMenuClick() {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
  }

  renderMenuCol() {
    return (
      <div className="flex flex-col">
        {links.map(link => (
          <a className="mr-6 font-bold text-gray-500 hover:text-white text-base md:text-lg lg:text-xl">
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>
    );
  }

  renderMenuRow() {
    return (
      <div className="flex hidden sm:block">
        {links.map(link => (
          <a className="mr-6 font-bold text-gray-500 hover:text-white text-base md:text-lg lg:text-xl">
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>
    );
  }

  render() {
    return (
      <header className="flex items-center">
        <img
          src="https://placeimg.com/640/640/people?t=1560273369797"
          className="flex-shrink-0 rounded-full h-10 w-10 md:h-16 md:w-16 lg:h-32 lg:w-32 flex items-center justify-center shadow-xl m-3"
        />
        <div className="container pl-8">
          <div className="flex items-center">
            <h1 className="font-bold text-white text-3xl">
              <a>
                <span className="text-indigo-200 hover:text-white text-2xl sm:text-3xl md:text-4xl">
                  Test Title
                </span>
              </a>
            </h1>
            <button
              className="ml-auto sm:hidden mr-2"
              onClick={this.handleMenuClick.bind(this)}
            >
              <i className="fas fa-bars fill-current text-indigo-200 hover:text-white text-2xl" />
            </button>
          </div>
          {this.state.menuOpen && this.renderMenuCol()}
          {this.renderMenuRow()}
        </div>
      </header>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="text-center mt-10">
          <p className="font-bold text-xl">
            Simple Navbar made with{" "}
            <a className="text-indigo-800" href="https://tailwindcss.com">
              TailwindCSS
            </a>{" "}
            and{" "}
            <a className="text-indigo-800" href="https://reactjs.org">
              React
            </a>
          </p>
          <p>
            It can be simply adapted to{" "}
            <a className="text-indigo-800 font-bold" href="https://www.gatsbyjs.org">
              Gatsby
            </a>{" "}
            too
          </p>
          <p className="font-bold mt-3">
            Reduce your window to show the <span className="text-indigo-800 font-bold">hamburger menu   <i className="ml-2 fas fa-bars fill-current text-indigo-800 text-2xl" /></span>
          </p>

        </div>
        <div className="bg-indigo-800 shadow-xl m-6 rounded">
          <Header />
        </div>
        
        <div className="text-center">
                     <p className="pt-5">
            Show me some love on  <a className="text-indigo-800 font-bold" href="https://twitter.com/fabio_runci">
              Twitter
            </a>{" "} if this has helped you

            
          </p>
        </div>
      </main>
    );
  }
}

   </div>
  );
}

export default Header2;
