import Footer from "@/components/footer/footer";
import Navbar from "@/components/navBar/navBar";
import SideBar from "@/components/sideBar/sideBar";
import ThemeProvider from "@/components/theme/themeProvider";
import "@/globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>

      <body className="min-h-full flex flex-col">
        
        
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem /*children={children}*/>
          <div className="flex min-h-screen flex-col">

            <Navbar/>

            <div className="flex flex-1">
              
              <SideBar/>
                <div className="flex-1 overflow-auto bg-card p-6 text-card-foreground border">
                  {children}
                </div>

            </div>

            <Footer/>

          </div>

        </ThemeProvider>
        
        

      </body>
      
    </html>
  );
}
