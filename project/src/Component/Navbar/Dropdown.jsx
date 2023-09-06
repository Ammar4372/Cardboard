import { useState } from "react";
import { Link } from "react-router-dom";

function List({ header, items }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className="nav-link dropdown-toggle"
        aria-expanded={show ? "true" : "false"}
        onClick={() => setShow((prev) => !prev)}
      >
        {header}
      </button>
      <ul className="dropdown-menu">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Link className="dropdown-item" to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default List;
