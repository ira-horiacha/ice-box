import "./Header.scss"
import NavBar from "../NavBar/NavBar"
import Button from "../Button/Button"

export default function Header(){
    return(
        <header className="header container">
            <a href="/" className="header__logo-link" aria-label="Ice Box home page">
                <img className="header__logo" src="/logo.svg" alt="Ice Box" />
            </a>
            <NavBar />
            <div className="header__button-wrapper">
                <Button size="s" isArrow={true} href="#order_section" />
            </div>
        </header>
    )
}