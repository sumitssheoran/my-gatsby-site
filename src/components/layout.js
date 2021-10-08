import * as React from 'react'
import {Link} from 'gatsby'
import {container,heading,navLinks,navLinkItem,navLinkText} from './layout.module.css'
const Layout = ({pageTitle,children}) =>{
    return(
        <div className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/sumit" className={navLinkText}>sumit</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                <h2 className={heading}>{pageTitle}</h2>
                <p className={navLinkText}>{children}</p>
                <p className={navLinkText}>{children}</p>
            </main>

        </div>
    )
}
export default Layout