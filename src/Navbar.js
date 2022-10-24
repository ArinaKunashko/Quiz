import React from "react";
import { NavLink } from "react-router-dom";
import s from "./App.css"

// let classesNew = `${s.item} ${s.active}`
const Navbar = () => {
    return <nav className={s.nav}>
         <div className={s.item}>
            <NavLink to="/" className={({ isActive }) =>
              isActive ? s.activeLink : undefined
            } > Home </NavLink>
        </div>

        <div className={s.item}>
            <NavLink to="/jsQuestions" className={({ isActive }) =>
              isActive ? s.activeLink : undefined
            } > JsQuestions </NavLink>
        </div>

        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/cssQuestions" className={({ isActive }) =>
              isActive ? s.activeLink : undefined
            } > CssQuestions </NavLink>
        </div>
       
        <div className={s.item}>
            <NavLink to="/htmlQuestions" className={({ isActive }) =>
              isActive ? s.activeLink : undefined
            } > HtmlQuestions </NavLink>
        </div>

        <div className={s.item}>
            <NavLink to="/reactQuestions" className={({ isActive }) =>
              isActive ? s.activeLink : undefined
            } > ReactQuestions </NavLink>
        </div>
        

    </nav>
}
export default Navbar;