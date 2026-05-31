"use client"
import { ReactNode } from "react"
import { Attribute,ThemeProvider as NextThemeProvider } from "next-themes";

interface proops {
    children: ReactNode,
    attribute?: Attribute,
    defaultTheme?:string,
    enableSystem?: boolean,
    disableTransitionOnChange?:boolean
}

export default function ThemeProvider({children,attribute,defaultTheme,enableSystem,disableTransitionOnChange}:proops){
    return(
        <NextThemeProvider 
            attribute={attribute} 
            defaultTheme={defaultTheme} 
            enableSystem={enableSystem} 
            disableTransitionOnChange={disableTransitionOnChange} 
        >
            {children}
        </NextThemeProvider>
    );
}