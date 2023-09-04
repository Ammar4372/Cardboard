import Dropdown from "react-bootstrap/Dropdown";

function List({header}) {
  return (
    <Dropdown>
      <Dropdown.Toggle className="nav-link" id="dropdown-basic">
        {header}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default List;
