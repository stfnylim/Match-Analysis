import type { Metadata } from "next";
import "./globals.css";
import "./tooltip.css";
export const metadata:Metadata={title:"Signal Compass — PM&R Match 2027",description:"An interactive decision aid for comparing PM&R residency programs."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
