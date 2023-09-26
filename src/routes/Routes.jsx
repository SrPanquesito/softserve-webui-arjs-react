import { Outlet, Link } from "react-router-dom";
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './Routes.css'

// Navigation bar
function Routes() {
    return (
      <>
        <section id="container-root">
          <section id="container-navbar">
            <header>
              <h2 className="title">AR.js demo</h2>
              <div className="icons">
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div>
            </header>
            <nav>
              <ul>
                <li>
                    <Link to={`app`}>App</Link>
                </li>
                <li>
                    <Link to={`contact-us`}>Contact Us</Link>
                </li>
              </ul>
            </nav>
          </section>
          <section id="container-main">
              <Outlet />
          </section>
          <section id="container-footer">
            <footer>
              <small>&copy; Copyright 2023, Example Corporation</small>
            </footer>
          </section>
        </section>
      </>
    )
}

export default Routes