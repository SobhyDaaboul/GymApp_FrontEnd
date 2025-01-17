import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

function Layout(props) {
    return (
        <div className="container">
            <NavigationBar/>
            <main>{props.children}</main>
            <Footer/>
        </div>
    );
}

export default Layout;