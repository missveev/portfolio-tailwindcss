import React, {Component} from "react"
import {AiFillBehanceCircle, AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillTwitterCircle} from "react-icons/all";

class Footer extends Component {
    render() {
        return (
            <footer className="bg-black py-10 px-0 md:px-36  text-gray-50 text-md flex flex-1 items-center justify-around text-center">
                <div className="items-center justify-start">
                <p className="font-light ">&copy; {(new Date().getFullYear())} MISS VEEV</p>
                </div>
                <div className="flex flex-1 justify-end text-xl gap-4">
                    <AiFillFacebook/>
                    <AiFillInstagram/>
                    <AiFillTwitterCircle/>
                    <AiFillGithub/>
                    <AiFillBehanceCircle/>
                </div>
            </footer>
        )
    }
}

export default Footer;