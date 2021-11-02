import "./menu.scss";

const Menu = ({appOpen , setAppOpen}) => {
    return (
        <div className={"menu " + (appOpen && "active")}>
            <ul>
                <li onClick={()=>setAppOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setAppOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setAppOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=>setAppOpen(false)}>
                    <a href="#testimonial">Testimonial</a>
                </li>
                <li onClick={()=>setAppOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu;
