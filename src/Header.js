import NavBar from "./components/NavBar";
import Contact from "./components/Contact";

export default function Header() {
    return (
        <header>
            <NavBar />
            <p>
                Hi
                I'm Joanna Kus
                This website is in progress. Pardon the dust.
            </p>
            <Contact />
        </header>
    );
}