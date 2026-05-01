import "./NavBar.scss"
import { NAVLIST } from "src/constants"

export default function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                {NAVLIST.map((item) => (
                    <li key={item.name} className="p3">
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}