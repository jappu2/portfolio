import {Link} from 'react-router-dom'
export default function Navigation(){
    return(
        <div className="navigation-bar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact me</Link>
            </div>
        </div>
    )
}