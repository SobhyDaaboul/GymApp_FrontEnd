import NavigationBar from "./NavigationBar";
import MainPage from "./MainPage";
import Footer from "./Footer";

function Layout() {
    return (
        <div className="container">
            <NavigationBar/>
            <MainPage/>
            <Footer/>
        </div>
    );
}

export default Layout;