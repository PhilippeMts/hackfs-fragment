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
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody, Col,
  Row,
} from 'reactstrap'

function Transformations () {
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
                <p>
                  Push on IPFS the Wasm bytecode of all transformations
                  you want to
                  use to process datasets.
                </p>
                <Button color="primary" className={'text-center'}>Import
                  new transformation</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Transformations
