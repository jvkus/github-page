function LinkHubChild() {
    return (
        <div>
            <a
            href="https://example.com"
            >
            Resume
            </a>
            <a
            href="https://www.linkedin.com/in/joanna-kus-330724162/"
            >
            LinkedIn
            </a>
            <a
            href="https://github.com/jvkus"
            >
            GitHub
            </a>
            <a
            href="https://infosec.exchange/@jvkus"
            >
            Mastodon
            </a>
            <a
            href="https://example.com"
            >
            Blog link (Coming soon)
            </a>
        </div>
    );
}

export default function LinkHub() {
    return (
        <LinkHubChild />
    );
}