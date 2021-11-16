import React from "react";
import { CgClose, GiHamburgerMenu} from "react-icons/all";
import Hero from "./hero";


function Header() {
    const [isOpen, setisOpen] = React.useState(false);

    function handleClick() {
        setisOpen(!isOpen);
    }

    return (
        <div>
            <header className="bg-portfolio-black h-screen">
                <div className={
                    (isOpen ? "block" : "hidden") +
                    " fixed bg-portfolio-purple bg-opacity-50 w-screen h-screen z-40 text-white right-0 transition-all duration-500 ease-in-out"}>
                    <button className={"text-3xl absolute text-white left-20 top-20"} onClick={() => {
                        handleClick()
                    }}><CgClose/></button>
                    <ul className=" text-2xl text-left absolute p-20 lg:w-96 sm:w-40 right-0 font-thin bg-portfolio-blue bg-opacity-70 lg:h-screen md:w-72 md:h-screen h sm:h-screen">
                        <li className="py-2"><a href={"/"}> Home</a></li>
                        <li className="py-2"><a href={"#About"}>About</a></li>
                        <li className="py-2"><a href={"#Work"}>Works</a></li>
                        <li className="py-2"><a href={"#Contact"}>Contact</a></li>
                    </ul>
                </div>
                <nav className="container flex justify-between py-4">
                    <div className="py-1">
                        <h2 className="text-portfolio-purple text-3xl mt-2 font-light uppercase">VEEV</h2>
                    </div>
                    <button type="button" className="py-1 text-portfolio-purple text-3xl mt-2 font-justify-end"
                            onClick={() => {
                                handleClick()
                            }}>
                        <GiHamburgerMenu/>
                    </button>
                </nav>
                <Hero/>
            </header>
        </div>
    )
}

export default Header;