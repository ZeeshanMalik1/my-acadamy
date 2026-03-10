"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const ColorThemeContext = React.createContext<{
    colorTheme: string;
    setColorTheme: (color: string) => void;
}>({
    colorTheme: "",
    setColorTheme: () => { },
});

export const useColorTheme = () => React.useContext(ColorThemeContext);

export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    const [colorTheme, setColorThemeState] = React.useState("");
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
        const savedColor = localStorage.getItem("acad-color-theme") || "";
        setColorThemeState(savedColor);
        if (savedColor) {
            document.documentElement.setAttribute("data-theme", savedColor);
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
    }, []);

    const setColorTheme = (color: string) => {
        setColorThemeState(color);
        localStorage.setItem("acad-color-theme", color);
        if (color) {
            document.documentElement.setAttribute("data-theme", color);
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
    };

    if (!mounted) {
        return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
    }

    return (
        <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
            <NextThemesProvider {...props}>{children}</NextThemesProvider>
        </ColorThemeContext.Provider>
    );
}
