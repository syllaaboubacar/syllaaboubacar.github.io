'use client';
import {DataText} from "@/data/contentText";
import Link from "next/link";
import {
  SidebarFooter
} from "@/components/ui/sidebar";
import { useTranslations } from "next-intl";
type NavItem = {
  label: string;
  href: string;
};
export default function MyFooter(){

  const sideItems = DataText.sideItems;
  const menuEntries = Object.entries(sideItems).filter(([key]) => key !== "title");
  const t = useTranslations('footer');

    return(
        <SidebarFooter className="justify-center items-center border-t-2">
            <footer className="w-full bg-background/95 backdrop-blur-sm mt-0">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2"> {/* ← py-8 → py-4 */}
                
                    <div className="flex flex-wrap justify-between items-start gap-4">{/* ← gap-8 → gap-4 (optionnel) */}
                        <div className="flex-1 min-w-50">
                            <h3 className="text-lg font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-3">
                                {DataText.footer.me}
                            </h3>
                            <p className="text-sm text-muted-foreground max-w-md">
                                
                                {t(`${DataText.footer.aboutMe}`)}

                            </p>
                        </div>
                        
                        <div className="flex-1 min-w-50 text-right">
                            <h4 className="font-semibold text-foreground mb-3">

                                {t(`${DataText.footer.followMe}`)}

                            </h4>
                            <div className="flex space-x-4 justify-end">

                                <a target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub" href="https://github.com/syllaaboubacar">
                                
                                    <svg data-prefix="fab" data-icon="square-github" className="svg-inline--fa fa-square-github h-8 w-8 rounded-full text-primary" role="img" viewBox="0 0 448 512" aria-hidden="true">
                                        <path fill="currentColor" d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM265.8 407.7c0-1.8 0-6 .1-11.6 .1-11.4 .1-28.8 .1-43.7 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-26.6-7.5-56.6-7.5-83.2 0 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 9 .1 21.7 .1 30.6 0 4.8 .1 8.6 .1 10 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7 .6 3.9 1.9 .3 1.3-1 2.6-3 3-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7 .9 3.7 2.4 0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1 .9-1.1 2.8-.9 4.3 .6 1.3 1.3 1.8 3.3 .9 4.1-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9 1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5 .9-.9 2.4-.4 3.5 .6 1.1 1.3 1.3 2.8 .4 3.5-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6 .4-.6 1.5-.9 2.8-.4 1.3 .7 1.9 1.8 1.5 2.6-.4 .9-1.7 1.1-2.8 .4z">
                                        </path>
                                    </svg>

                                </a>

                                <a target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn" href="https://www.linkedin.com/in/sylla-aboubacar-ba033312b">
                                    <svg data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin h-8 w-8 rounded-full text-primary" role="img" viewBox="0 0 448 512" aria-hidden="true">
                                        <path fill="currentColor" d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z">
                                        </path>
                                    </svg>
                                </a>

                                <a className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook" href="mailto:contact@syllaaboubacar.com">
                                    <svg data-prefix="fab" data-icon="square-facebook" className="svg-inline--fa fa-square-facebook h-8 w-8 rounded-full text-primary" role="img" viewBox="0 0 448 512" aria-hidden="true">
                                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l98.2 0 0-145.8-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 145.8 129 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z">
                                        </path>
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className="mt-2 pt-1 border-t text-center text-sm text-muted-foreground flex flex-col sm:flex-row justify-between items-center gap-2">  {/* ← mt-8 → mt-4, pt-6 → pt-3 */}
                        <p>{DataText.footer.copyright}{t(`${DataText.footer.copyrightLaw}`)}</p>
                        <p className="flex items-center gap-1">{t(`${DataText.footer.comment}`)}</p>
                    </div>

                </div>
            </footer>
        </SidebarFooter>
    );
}