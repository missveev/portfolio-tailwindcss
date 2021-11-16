import React, {Component} from "react"
import {AiOutlineGithub, BsDownload, RiLinkedinBoxLine} from "react-icons/all";

class About extends Component {
    render() {
        if (this.props.data) {
            var bio = this.props.data.bio;

        }

        return (
            <section className="px-0 md:px-36 py-24 bg-portfolio-black" id={"About"}>
                <div className="container flex flex-col  gap-12">
                    <div className="flex flex-1 items-center lg: items-start">
                        <h2 className="text-4xl text-portfolio-blue uppercase">About</h2>
                    </div>
                    {/*Glassmorphism background*/}
                    <div
                        className="
                        h-auto w-auto
                        bg-white bg-opacity-10
                        relative z-2
                        rounded-2xl shadow-3xl
                        border border-r-0
                        border-b-0 border-opacity-30
                        backdrop-filter backdrop-blur-sm">

                        <div className="flex flex-col py-2 px-10 ">

                            <ul className="flex flex-wrap py-2 text-3xl text-portfolio-ppurple gap-8">

                                <li><RiLinkedinBoxLine/></li>
                                <li><AiOutlineGithub/></li>

                                <li className="text-gray-300 text-xl flex">Download my
                                    <button type="button"
                                            className="flex justify-center
                                            text-center ml-1 bg-portfolio-ppurple
                                            rounded-2xl h-15 w-32">
                                        resume
                                        <span className="ml-2 mt-1"><BsDownload/></span>
                                    </button>
                                </li>
                            </ul>
                            <h2 className="text-gray-300 text-xl py-10 font-thin"> {bio}</h2>
                            <div className="grid grid-cols-2 flex flex-col-reverse gap-x-10">
                                <h1 className="text-gray-300 text-2xl pb-3">Main Skills</h1>
                                <h1 className="text-gray-300 text-2xl pb-3">Other Interest</h1>
                                <div
                                    className="grid grid-cols-2 text-gray-300 text-left pb-10 font-light gap-x-20 gap-y-4">
                                    <p>Front-end Development</p>
                                    <p>UI &amp; UX Design</p>
                                    <p>E-commerce, Wordpress</p>
                                    <p>Project Management</p>
                                    <p>ReactJs, Tailwind CSS</p>
                                    <p>Database Management</p>
                                </div>
                                <div
                                    className="grid grid-cols-2 text-gray-300 text-left pb-10 gap-x-20 gap-y-4 font-light">
                                    <p>Youtube</p>
                                    <p>Photography</p>
                                    <p>Video Editing</p>
                                    <p>Baking</p>
                                    <p>Travelling</p>
                                </div>
                            </div>
                            <h1 className="text-gray-300 text-2xl pb-3">Education</h1>
                            <div className="grid grid-cols-2 font-light text-gray-300 pb-10">
                                <div>
                                    <p>Eastern Mediterranean University</p>
                                    <p className="italic">Computer Engineering</p>
                                    <p className="italic">Sept.2017 - June2019</p>
                                </div>
                                <div>
                                    <p>Eastern Mediterranean University</p>
                                    <p className="italic">Information Technology</p>
                                    <p className="italic">Sept.2013- June2017</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;