import { useEffect } from 'react';
import { useTheme } from '../hooks/use-theme'


function Header() {

    const { theme, setTheme } = useTheme("light");

    useEffect(() => {
        if (document.documentElement.hasAttribute("app-theme")) {
            //console.log("Есть данные о теме");
        } else {
            theme === "light" ? setTheme("light") : setTheme("dark");
        }
    }, []);

    const switchTheme = () => {
        console.log("поменяли тему")
        setTheme(theme);
        theme === "light" ? setTheme("dark") : setTheme("light")
    }

    return (
        <nav className="app__navbar">
            <div className="row nav-wrapper">
                <a href="#" className="brand-logo">React Movies</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/DanyaMarkov">GitHub автора</a></li>

                    <div class="col switch">
                        <span>Тёмная тема </span>
                        <label>
                            {/* Светлая */}
                            <input type="checkbox"
                                onChange={switchTheme}
                                checked={theme === "dark"} />

                            <span class="lever"></span>
                            {/* Темная */}
                        </label>
                    </div>

                </ul>
            </div>
        </nav>
    );
}

export { Header }