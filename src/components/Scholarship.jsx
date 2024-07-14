import Header from "./Header"
import Image from "../assets/scholarship.png"
import "./Scholarship.css"
import SearchIcon from "../assets/search_icon.png"

export default () =>
    {
        return(
            <div className="main">
                <Header/>
                <div className="middle">
                    <img src={Image} />
                </div>
                <div className="last">
                    <div className="left">
                        <p id="first_p">Clear all</p>
                        <div className="image_container">
                            <input id="search" type="text" placeholder="Search"></input>
                            <img id="search_icon" src={SearchIcon}/>
                        </div>
                        <p id="second_p">Scholarship Type</p>
                        <label for="option1">
                            <input type="checkbox" id="option1" name="options" value="option1"/>
                            Full Scholarship
                        </label>
                        <br/>
                        <label for="option2">
                            <input type="checkbox" id="option2" name="options" value="option2"/>
                            Partial Scholarship
                        </label>
                        <br/>
                        <label for="option3">
                            <input type="checkbox" id="option3" name="options" value="option3"/>
                            Merit Based
                        </label>
                        <p id="third_p">Schools</p>
                        <label for="option1">
                            <input type="checkbox" id="option1" name="options" value="option1"/>
                            University of Ghana
                        </label>
                        <br/>
                        <label for="option2">
                            <input type="checkbox" id="option2" name="options" value="option2"/>
                            Ashesi University
                        </label>
                        <br/>
                        <label for="option3">
                            <input type="checkbox" id="option3" name="options" value="option3"/>
                            Academic City
                        </label>
                    </div>
                    <div className="right">
                        <p id="big_text">Financial Aid</p>
                    </div>
                </div>
            </div>
        )
    }