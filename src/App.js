import { useState } from "react"
import "./App.css";

const Theme = () => {
    const [theme, setTheme] = useState("light");

    return (
        <div>
            <Form theme={theme} />
            <label>
                <input type="checkbox" onChange={() => setTheme(theme === "light" ? "dark" : "light")} />
                Use dark theme
            </label>
        </div>
    )
}

const Form = ({ theme }) => {
    return (
        <Panel theme={theme}>
            <h1>Welcome</h1>
            <Button theme={theme}>Sign up</Button>
            <Button theme={theme}>Log in</Button>
        </Panel>
    )
}

const Panel = ({ theme, children }) => {
    return (
        <section className={`container-${theme}`}>
            {children}
        </section>
    )
}

const Button = ({ theme, children }) => {
    return (
        <button className={`button-${theme}`}>{children}</button>
    )
}

export default Theme;