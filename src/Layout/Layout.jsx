import React from "react";
import Footer from "./Footer";
import classes from './Layout.module.css';
import MainNavbar from "./MainNavbar";
function Layout(props){
    return(
        <div >
            <MainNavbar/>
            <main className={classes.main}>
            {props.children}
            </main>
            
        </div>
    );
}
export default Layout;