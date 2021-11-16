import React, {Component} from "react";

class Contact extends Component {
    render() {
        return (
            <section className="px-0 md:px-36 py-24 bg-portfolio-black" id="Contact">
                <div className="container flex flex-col  gap-12">
                    <div className="flex flex-1 items-center lg: items-start">
                        <h2 className="text-4xl text-portfolio-blue uppercase">Contact</h2>
                    </div>
                    <div>
                        <h3 className="text-xl text-white">Feel free to send an e-mail
                            on <a href="#">pamilerinvivian@gmail.com</a></h3>
                        <h3 className="text-l text-white mt-2">Alternatively, you can also drop-in a mail here!</h3>
                        <form className="py-14 flex flex-col">
                            <input type="text" className="py-6 mb-2 bg-black text-white text-2xl border-none border-b-2 border-portfolio-purple" placeholder="NAME"/>
                            <input type="text" className="py-6 mb-2 bg-black text-white text-2xl" placeholder="EMAIL"/>
                            <input type="text" className="py-6 mb-2 bg-black text-white text-2xl" placeholder="MESSAGE"/>
                            <button type="button" className="bg-portfolio-purple text-gray-300 w-20 h-10 rounded">Send</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;