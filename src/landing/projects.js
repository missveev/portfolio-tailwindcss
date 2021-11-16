import React, {Component} from "react";
import {AiFillFolder, BiLinkExternal, BsGithub} from "react-icons/all";

class Work extends Component {
    render() {
        return (
            <section className="px-0 md:px-36 py-24 bg-portfolio-black" id="Work">
                <div className="container flex flex-col  gap-12">
                    <h3 className="text-md text-gray-300">FEATURED PROJECTS</h3>
                    <h1 className=" flex flex-1 text-4xl text-white">Stuff I've Worked On <span className="text-5xl"><AiFillFolder/></span></h1>
                    <div className="flex flex-wrap gap-10 text-black">
                        <div className="bg-gradient-to-r from-yellow-50 to-yellow-200 w-80 h-80 text-black">
                            <div className="flex flex-col item-center">
                                <div className="flex flex-row justify-end py-4 px-4 text-2xl gap-4 ">
                                    <BsGithub/>
                                    <BiLinkExternal/>
                                </div>
                                <div>
                                    <h2 className="flex px-16 mt-24 text-4xl justify-center font-bold ">Raba Exchange.</h2>
                                    <ul className="flex px-16 mt-12 justify-between font-medium">
                                        <li>API</li>
                                        <li>HTML/SCSS</li>
                                        <li>JS</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="bg-gradient-to-r from-blue-100 to-pink-200 w-80 h-80 text-black">
                            <div className="flex flex-col item-center">
                                <div className="flex flex-row justify-end py-4 px-4 text-2xl gap-4 ">
                                    <BsGithub/>
                                    <BiLinkExternal/>
                                </div>
                                <div>
                                    <h2 className="flex px-16 mt-24 text-4xl justify-center font-bold ">Raba Exchange.</h2>
                                    <ul className="flex px-16 mt-12 justify-between font-medium">
                                        <li>API</li>
                                        <li>HTML/SCSS</li>
                                        <li>JS</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="bg-gradient-to-r from-purple-300 to-pink-300 w-80 h-80 text-black">
                            <div className="flex flex-col item-center">
                                <div className="flex flex-row justify-end py-4 px-4 text-2xl gap-4 ">
                                    <BsGithub/>
                                    <BiLinkExternal/>
                                </div>
                                <div>
                                    <h2 className="flex px-16 mt-24 text-4xl justify-center font-bold">Raba Exchange.</h2>
                                    <ul className="flex px-16 mt-12 justify-between font-medium">
                                        <li>API</li>
                                        <li>HTML/SCSS</li>
                                        <li>JS</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="bg-gradient-to-r from-indigo-200 to-indigo-300 w-80 h-80 text-black">
                            <div className="flex flex-col item-center">
                                <div className="flex flex-row justify-end py-4 px-4 text-2xl gap-4 ">
                                    <BsGithub/>
                                    <BiLinkExternal/>
                                </div>
                                <div>
                                    <h2 className="flex px-16 mt-24 text-4xl justify-center font-bold ">Raba Exchange.</h2>
                                    <ul className="flex px-16 mt-12 justify-between font-medium">
                                        <li>API</li>
                                        <li>HTML/SCSS</li>
                                        <li>JS</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="bg-gradient-to-r from-blue-300 to-pink-200 w-80 h-80 text-black">
                            <div className="flex flex-col item-center">
                                <div className="flex flex-row justify-end py-4 px-4 text-2xl gap-4 ">
                                    <BsGithub/>
                                    <BiLinkExternal/>
                                </div>
                                <div>
                                    <h2 className="flex px-16 mt-24 text-4xl justify-center font-bold ">Raba Exchange.</h2>
                                    <ul className="flex px-16 mt-12 justify-between font-medium">
                                        <li>API</li>
                                        <li>HTML/SCSS</li>
                                        <li>JS</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Work;