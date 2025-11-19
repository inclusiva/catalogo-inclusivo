import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout() {
    return (
        <>
        <div className="layout">
    <Header />
                <main className="main-container">
                    <Outlet/>
                </main>
                <Footer />
        </div>
            
        </>
    )
}