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
import React, { useEffect, useState } from 'react'

// reactstrap components
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody, CardFooter, CardHeader, CardLink, CardText, CardTitle,
  Col,
  Row,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { transformationsStore } from '../utils/localStorage'
import { useSelector } from "react-redux";

function Transformations () {

  const transformationsMap = useSelector(state => Object.values(state.transformation.objects));

  return (
    <>
      <div className="content">
        <Breadcrumb>
          <BreadcrumbItem active>Transformations</BreadcrumbItem>
        </Breadcrumb>
        <Row>
          <Col md="6">
            <Card>
              <CardBody>
                <CardText>
                  Push on IPFS the Wasm bytecode of all transformations
                  you want to
                  use to process datasets.
                </CardText>
                <NavLink to="/transformations/new">
                  <Button color="primary" className={'text-center'}>Import
                    new transformation</Button>
                </NavLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="all-transformations">
          {
            transformationsMap?.
              map(({ name, desc }) => (
                <Col md="4">
                  <Card>
                    <CardBody>
                      <CardHeader>
                        <CardTitle><h4>{name}</h4></CardTitle>
                      </CardHeader>
                      <CardBody>
                        <CardText>{desc}</CardText>
                      </CardBody>
                      <CardFooter>
                        {/*TODO*/}
                        <NavLink to={`/transformations/0`}>
                          <CardLink>Card link TODO</CardLink>
                        </NavLink>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
              ))
          }
        </Row>
      </div>
    </>
  )
}

export default Transformations
