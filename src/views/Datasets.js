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
  CardBody,
  CardFooter,
  CardHeader,
  CardLink,
  CardText,
  CardTitle,
  Col,
  Row,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { datasetsStore } from '../utils/localStorage'
import JsonPreview from '../components/JsonPreview/JsonPreview'
import { useSelector } from "react-redux";

function Datasets () {

  const datasetsMap = useSelector(state => Object.values(state.dataset.objects));


  return (
    <>
      <div className="content">
        <Breadcrumb>
          <BreadcrumbItem active>Datasets</BreadcrumbItem>
        </Breadcrumb>
        <Row>
          <Col md="6">
            <Card>
              <CardBody>
                <CardText>
                  Push initial datasets on IPFS and run multiple
                  transformations,
                  one after the other, creating collaborative data processing
                  pipelines.
                </CardText>
                <NavLink to="/datasets/new">
                  <Button color="primary" className={'text-center'}>Create
                    new dataset</Button>
                </NavLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="all-datasets">
          {
           datasetsMap?.
              map(({jsonString, name, cid}) => (
                <Col md="4">
                  <Card>
                    <CardBody>
                      <CardHeader>
                        <CardTitle><h4>{name}</h4></CardTitle>
                      </CardHeader>
                      <CardBody>
                        <JsonPreview jsonString={jsonString}/>
                      </CardBody>
                      <CardFooter>
                        {/*TODO*/}
                        <NavLink to={`/datasets/${cid}`}>
                          <CardLink>View</CardLink>
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

export default Datasets
