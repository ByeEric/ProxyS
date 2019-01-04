import React from "react";
import {
  Grid,
  Row,
  Col,
  Tabs,
  Tab,
  TabContainer,
  TabContent,
  TabPane,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarHeader,
  NavbarToggle,
  NavItem,
  NavDropdown
} from "react-bootstrap/lib";

const SelectionTabs = () => {
  return (
    <div>
      <TabContainer id="Pet-Selection" activeKey="mammal">
        <Nav bsStyle="tabs">
          <Row className="clearfix">
            <Col xs={12}>
              <NavDropdown eventKey="mammal" title="Mammal" id="class-tab-1" />
              <NavDropdown
                eventKey="Reptilia"
                title="Reptilia"
                id="class-tab-2"
              />
              <NavDropdown eventKey="Aves" title="Aves" id="class-tab-3" />
            </Col>
          </Row>
        </Nav>
      </TabContainer>
    </div>
  );
};

export default SelectionTabs;
