import React from "react";

const MobileNavBar = ({ isMenuOpen, setIsmenuOpen }) => {
  const handleScroll = (selectionId) => {
    //console.log("selectionId: ", selectionId);
    //console.log("is menu open: ", isMenuOpen);
    if (isMenuOpen) {
      //console.log("is open");
      setIsmenuOpen(false);
    }
    document.getElementById(selectionId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-screen fixed top-0 z-20">
      <div className="w-1/2 h-screen flex flex-col p-8 bg-background">
        <div className="ui-circle -ml-20 -mt-10" />
        <ul>
          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("hero")}>
              Home
            </a>
          </li>

          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("skills")}>
              Skills
            </a>
          </li>

          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("exprience")}>
              Work Exprience
            </a>
          </li>

          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("about")}>
              About Me
            </a>
          </li>
        </ul>

        <button
          className="h-10 bg-primary text-white text-xs md:text-sm px-6 rounded over:bg-blue-200 hover:text-primary hover:bg-blue-200 md:block"
          onClick={() => handleScroll("contact")}
        >
          Contact Me
        </button>
      </div>
      <div
        onClick={() => {
          setIsmenuOpen(false);
        }}
        className="w-screen h-screen bg-overlayBg fixed top-0 -z-10"
      ></div>
    </div>
  );
};

export default MobileNavBar;
