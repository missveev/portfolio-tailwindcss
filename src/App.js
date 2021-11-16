import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Header from "./landing/header";
import About from "./landing/about";
import Work from "./landing/projects";
import Contact from "./landing/contact";
import Footer from "./landing/footer";
import {Component} from "react";
import $ from "jquery";

class App extends Component {


    constructor(props) {
        super(props);

        this.state = {
            foo: 'bar',
            resumeData: {}
        };
    }

    getResumeData() {
        $.ajax({
            url: './resumeData.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({resumeData: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            }
        });
    }

    componentDidMount() {
        this.getResumeData();
    }

    render() {
        return (
            <div>
                <>
                    <BrowserRouter>

                        <Header data={this.state.resumeData.main}/>
                        <About/>
                        <Work/>
                        <Contact/>
                        <Footer/>
                    </BrowserRouter>
                </>
            </div>
        );

    }
}

export default App;
