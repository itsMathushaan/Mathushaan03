import Nav from 'react-bootstrap/Nav';

function table_statu() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>All Employees</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" className='text-dark'>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          In Active
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default table_statu;