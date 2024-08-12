import Link  from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";


const  Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex">
                {/* logo */}
                <Link href="/">
                  <h1 className="text-4xl font-semibold">
                    Luke <span className="text-accent">.</span>
                  </h1>
                </Link>
                {/* desktop */}
                <div className="hidden xl:flex item-center gap-8">
                  <Nav />
                  <Link href="/contact" >
                
                  </Link>
                  <Link href="/dashboard">Dashboard</Link>
                </div>
                <div className="xl:hidden">Mobile nAv</div>
             
            </div>
        </header>
    )
};

export default Header;