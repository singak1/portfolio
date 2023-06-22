import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Navbar