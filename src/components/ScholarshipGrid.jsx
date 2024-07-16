import GNPC from "../assets/gnpc_move.png"
import MCF from "../assets/mcf_move.png"
import Tullow from "../assets/tullow_move.png"
import Dream from "../assets/dream_hive_move.png"
import MCF2 from "../assets/mcf_2_move.png"

const scholarships = [
    {
        title: "Ghana National Petroleum Corporation",
        description: "One line description of scholarship. Should be brief but important",
        img_src: GNPC,
        scholars: 120,
        deadline: "01 Sept",
        scholarsProgress: 70,
        deadlineProgress: 50,
        progress_color: "#F61111"
    },
    {
        title: "MasterCard Foundation",
        description: "One line description of scholarship. Should be brief but important",
        img_src: MCF,
        scholars: 120,
        deadline: "01 Sept",
        scholarsProgress: 70,
        deadlineProgress: 50,
        progress_color: "#108A32"
    },
    {
        title: "Tullow Tertiary Scholarship",
        description: "One line description of scholarship. Should be brief but important",
        img_src: Tullow,
        scholars: 120,
        deadline: "01 Sept",
        scholarsProgress: 70,
        deadlineProgress: 50,
        progress_color: "#802DB2" 
    },
    {
        title: "Dream Hive Scholarship",
        description: "One line description of scholarship. Should be brief but important",
        img_src: Dream,
        scholars: 120,
        deadline: "01 Sept",
        scholarsProgress: 70,
        deadlineProgress: 50,
        progress_color: "#F61111"
    },
    {
        title: "MasterCard Foundation",
        description: "One line description of scholarship. Should be brief but important",
        img_src: MCF2,
        scholars: 120,
        deadline: "01 Sept",
        scholarsProgress: 70,
        deadlineProgress: 50,
        progress_color: "#108A32" 
    },
    {
        title: "Scholarship Name",
        description: "One line description of scholarship. Should be brief but important",
        img_src: MCF2,
        scholars: 120,
        deadline: "01 Sept",
        scholarsProgress: 70,
        deadlineProgress: 50,
        progress_color:"#802DB2" 
    }
]

export default () => {
    return (
        <div className="scholarship-grid">
            {scholarships.map((scholarship, index) => (
                <div className="scholarship-card" key={index}>
                    <h3>{scholarship.title}</h3>
                    <p>{scholarship.description}</p>
                    <img src={scholarship.img_src} alt={`${scholarship.title} Logo`} />
                    
                    <div className="progress">
                        <span className="label">Scholars</span>
                        <div className="progress_row">
                            <div className="progress-bar">
                                <div 
                                    className="progress-bar-fill"
                                    style={{width: `${scholarship.scholarsProgress}%`, backgroundColor: scholarship.progress_color}}
                                ></div>
                            </div>
                            <div className="value">{scholarship.scholars}</div>
                        </div>
                    </div>
                    
                    <div className="progress">
                        <span className="label">Deadline</span>
                        <div className="progress_row">
                            <div className="progress-bar">
                                <div 
                                    className="progress-bar-fill"
                                    style={{width: `${scholarship.deadlineProgress}%`, backgroundColor: "#FFC107"}}
                                ></div>
                            </div>
                            <div className="value">{scholarship.deadline}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}