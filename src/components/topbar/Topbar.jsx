import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons";
const Topbar = ({appOpen, setAppOpen}) => {
    return (
        <div className={"topbar " + (appOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">ZaidWeb</a>
                    <div className="itemContainer">
                    <Person className="icon" />
                    <span>+92 3049488689</span>
                    </div>
                    <div className="itemContainer">
                    <Mail className="icon" />
                    <span>zaid123@gmail.com</span>
                    </div>
                </div>
             
                <div className="right">
                    <div className="hamburger" onClick={()=>setAppOpen(!appOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;
