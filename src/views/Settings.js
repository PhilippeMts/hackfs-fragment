/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'

// reactstrap components
import {
  Badge, Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
} from 'reactstrap'
import { ThemeContext, themes } from '../contexts/ThemeContext'
import { datasetsStore, transformationsStore } from '../utils/localStorage'

function Settings () {
  const onRestartClick = async () => {
    await transformationsStore.clear();
    await datasetsStore.clear();
    console.log("local forage has been cleared !")
    // TODO notification
  }

  return (
    <>
      <div className="content settings">
        <Row>
          <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Appearance</CardTitle>
              </CardHeader>
              <CardBody>
                <div>
                  <ThemeContext.Consumer>
                    {({ changeTheme }) => (
                      <>
                        <p className="color-label">
                          <Badge
                            className="light-badge mr-2"
                            onClick={() => changeTheme(themes.light)}
                          />{' '}LIGHT MODE</p>
                        <p className="color-label">
                          <Badge
                            className="dark-badge mr-2"
                            onClick={() => changeTheme(themes.dark)}
                          />{' '}DARK MODE</p>
                      </>
                    )}
                  </ThemeContext.Consumer>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Connect a Wallet</CardTitle>
              </CardHeader>
              <CardBody>
                <Button color="primary">Connect</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Restart the Demo</CardTitle>
              </CardHeader>
              <CardBody>
                <Button color="danger" onClick={onRestartClick}>Restart</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Settings
