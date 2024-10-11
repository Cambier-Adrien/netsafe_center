import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import GrayButton from "../Components/GrayButton";
import HeaderButton from "../Components/HeaderButton";
import MainTitle from "../Components/MainTitle";
import NavHamburgerMenu from "../Components/NavHamburgerMenu";
import { useEffect, useState } from "react";

export default function Header() {
  const [OpenMenu, setOpenMenu] = useState(false);

  const toggleOpenMenu = () => {
    setOpenMenu(!OpenMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setOpenMenu(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Check the initial window size in case it's already larger than 1024px
    if (window.innerWidth > 1024) {
      setOpenMenu(false);
    }

    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="z-50 fixed bg-white shadow-md shadow-purple-200/50 h-16 w-full flex items-center justify-between px-8">
      <div className="flex gap-4 h-full items-center relative">
        <a href="/">
          <MainTitle value="Netsafe Center"></MainTitle>
        </a>
      </div>
      <div className="hidden lg:flex gap-4 h-full items-center relative">
        <HeaderButton value="Espace de connaissance"></HeaderButton>
        <HeaderButton value="Outils pratiques"></HeaderButton>
        <HeaderButton value="Quizz d'apprentissage"></HeaderButton>
        <HeaderButton value="Cours"></HeaderButton>
      </div>
      <div className="flex gap-4 h-full items-center">
        <GrayButton icon={faComment} background={true} />
        <GrayButton icon={faUser} background={true} />
        <div className="block lg:hidden">
          <GrayButton onClick={toggleOpenMenu} className="none" icon={faBars} />
        </div>
      </div>
      <NavHamburgerMenu
        isOpen={OpenMenu}
        onClick={toggleOpenMenu}
      ></NavHamburgerMenu>
    </header>
  );
}