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

function Datasets () {

  const [keys, setKeys] = useState([])
  const [datasetsMap, setDatasets] = useState({})
  const getDatasets = async () => {
    let _keys = []
    let _datasetsMap = {}
    await datasetsStore.iterate((v, k) => {
      _datasetsMap[k] = v
      _keys.push(k)
    })
    setDatasets(_datasetsMap)
    setKeys(_keys)
  }

  useEffect(getDatasets, [])

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
        <Row className="datasets">
          {
            keys.map(k => datasetsMap[k]).
              map(({}) => (
                <Col md="4">
                  <Card>
                    <CardBody>
                      <CardHeader>
                        <CardTitle><h4>{'todo'}</h4></CardTitle>
                      </CardHeader>
                      <CardBody>
                        <CardText>{'todo'}</CardText>
                      </CardBody>
                      <CardFooter>
                        {/*TODO*/}
                        <NavLink to={`/datasets/0`}>
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

export default Datasets
