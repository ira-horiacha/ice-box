import "./NavBar.scss"
import { NAVLIST } from "src/constants"

export default function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                {NAVLIST.map((item) => (
                    <a href={item.link}><li key={item.name} className="p3">
                        {item.name}
                    </li></a>
                ))}
            </ul>
        </nav>
    )
}