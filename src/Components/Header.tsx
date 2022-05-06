import { useState } from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header
      className={show === false ? "PageHeader" : "PageHeaderColumsActivate"}
    >
      <div
        className={show === false ? "GridTwoColums" : "GridTwoColumsActivate"}
      >
        <div className={show === false ? "GridOne" : "GridOneActivate"}>
          <img
            onClick={() => setShow(!show)}
            className="ImagenLogo"
            src="https://cdn.discordapp.com/attachments/889575240617852989/972005800174297118/MrMikeDev.png"
            alt="Logo"
          />
        </div>
        <div className={show === false ? "GridTwo" : "GridTwoActivate"}>
          <ul className="List">
            <li className={show === false ? "ListItem" : "ListItemActivate"}>
              <Link className="HeaderLink" to="/">
                Home
              </Link>
            </li>
            <li className={show === false ? "ListItem" : "ListItemActivate"}>
              <Link className="HeaderLink" to="/projects">
                Projects
              </Link>
            </li>
            <li className={show === false ? "ListItem" : "ListItemActivate"}>
              <Link className="HeaderLink" to="/skills">
                Skills
              </Link>
            </li>
            <li className={show === false ? "ListItem" : "ListItemActivate"}>
              <Link className="HeaderLink" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
