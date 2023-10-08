import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";


const MainLayout = () => {
    return (
        <div>
            <section></section>
            <section className="max-w-7xl mx-auto">
                <Outlet></Outlet>
            </section>
            <section className="mt-20">
                <Footer></Footer>
            </section>
        </div>
    );
};

export default MainLayout;