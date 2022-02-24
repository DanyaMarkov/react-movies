function Footer() {
    return (
        <footer className="teal darken-4 page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a class="grey-text text-lighten-4 right" href="#!">GitHub</a>
                </div>
            </div>
        </footer>
    );
}

export { Footer }