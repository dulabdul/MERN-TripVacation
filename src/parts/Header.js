import React from "react";
import Button from "elements/button";
import BrandText from "./BrandText";

export default function Header(props) {
  const getNavLinkCLass = (path) => {
    return props.location.pathname === path ? "active" : "";
  };
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandText />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className={`nav-item ${getNavLinkCLass("/")}`}>
                <Button className="nav-link" href="/" type="link">
                  Home
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkCLass("/browser-by")}`}>
                <Button className="nav-link" href="/browser-by" type="link">
                  Browser by
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkCLass("/stories")}`}>
                <Button className="nav-link" href="/stories" type="link">
                  Stories
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkCLass("/agents")}`}>
                <Button className="nav-link" href="/agents" type="link">
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
