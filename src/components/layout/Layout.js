import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import classes from "../../CSS/Layout.module.css";

function Layout(props) {
  return (
    <div className={classes.layoutContainer}>
      <NavigationBar />
      <main className={classes.mainContent}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
