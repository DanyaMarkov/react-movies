import { useLayoutEffect, useState } from "react"

//Узнаем какая тема стоит в Windows
const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)")
const defaultTheme = isDarkTheme ? "dark" : "light"
//console.log("Установленная тема в Windows: ", defaultTheme)


export const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem("app-theme"), defaultTheme);

    useLayoutEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("app-theme", theme)
    }, [theme]);

    return { theme, setTheme }
}