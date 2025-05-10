import React from "react";
// imorting navbar component
import Nbr from "./components/Navbar/Navbar";
// imorting card component
import Cards from "./components/Card/Card";

export default function App() {
    return (
        <>
            <div className="App">
                <nav>
                    <Nbr />
                </nav>
                <section className="products">
                    <Cards />
                    <Cards />
                    <Cards />
                </section>
            </div>
        </>
    );
}
