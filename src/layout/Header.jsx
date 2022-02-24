function Header() {
    return (
        <nav className="teal darken-2">
            <div className="nav-wrapper">
                <a href="#" className="left brand-logo">React Movies</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="!#">GitHub</a></li>
                    {/* <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li> */}
                </ul>
            </div>
        </nav>
    );
}

export { Header }