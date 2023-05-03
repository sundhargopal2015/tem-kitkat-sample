import { useContext, useState } from "react"
import "./App.css";

import { ThemeContext } from "./AppContext";

const Theme = () => {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={theme}>
            <Form />
            <label>
                <input type="checkbox" onChange={() => setTheme(theme === "light" ? "dark" : "light")} />
                Use dark theme
            </label>
        </ThemeContext.Provider>
    )
}

const Form = () => {
    return (
        <Panel>
            <h1>Welcome</h1>
            <Button>Sign up</Button>
            <Button>Log in</Button>
        </Panel>
    )
}

const Panel = ({ children }) => {
    const theme = useContext(ThemeContext);

    return (
        <section className={`container-${theme}`}>
            {children}
        </section>
    )
}

const Button = ({ children }) => {

    return (
        <ThemeContext.Consumer>{(value) => <button className={`button-${value}`}>{children}</button>}</ThemeContext.Consumer>
    )
}

export default Theme;