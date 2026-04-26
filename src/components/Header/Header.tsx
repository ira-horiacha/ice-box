import "./Header.scss"
import NavBar from "../NavBar/NavBar"
import Button from "../Button/Button"

export default function Header(){
    return(
        <header className="container">
            <a href="/"><img src='/logo.svg' alt='logo ice box' /></a>
            <NavBar />
            <Button size="s" isArrow={true} href="#order_section"></Button>
        </header>
    )
}