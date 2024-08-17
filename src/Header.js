import NavBar from "./components/NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <p>
            Hi
            I'm Joanna Kus
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            This website is in progress. Pardon the dust.
            </a>
        </header>
    );
}