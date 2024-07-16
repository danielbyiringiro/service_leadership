import Header from "./Header"
import Image from "../assets/scholarship.png"
import "./Scholarship.css"
import SearchIcon from "../assets/search_icon.png"
import ScholarshipGrid from "./ScholarshipGrid"
import Footer from "./footer"

export default () =>
    {
        return(
            <div className="main">
                <Header/>
                <div className="middle">
                    <img src={Image} />
                </div>
                <div className="scholarship_last">
                    <div className="scholarship_left">
                        <p id="scholarship_first_p">Clear all</p>
                        <div className="scholarship_image_container">
                            <input id="scholarship_search" type="text" placeholder="Search"></input>
                            <img id="scholarship_search_icon" src={SearchIcon}/>
                        </div>
                        <p id="scholarship_second_p">Scholarship Type</p>
                        <div className="row">
                            <input type="checkbox" name="scholarships" value="full_scholarship"/>
                            <p>Full Scholarship</p>
                        </div>
                        <div className="row">
                            <input type="checkbox" name="scholarships" value="partial_scholarship"/>
                            <p>Partial Scholarship</p>
                        </div>
                        <div className="row">
                            <input type="checkbox" name="scholarships" value="merit_based"/>
                            <p>Merit Based</p>
                        </div>
                        <p id="scholarship_third_p">Schools</p>
                        <div className="row">
                            <input type="checkbox" id="option1" name="options" value="option1"/>
                            <p>University of Ghana</p>
                        </div>
                        <div className="row">
                            <input type="checkbox" id="option2" name="options" value="option2"/>
                            <p>Ashesi University</p>
                        </div>
                        <div className="row">
                            <input type="checkbox" id="option3" name="options" value="option3"/>
                            <p>Academic City</p>
                        </div>
                    </div>
                    <div className="scholarship_right">
                        <p id="scholarship_big_text">Financial Aid</p>
                        <ScholarshipGrid />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }