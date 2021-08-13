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
  CardHeader,
  CardTitle,
  Col,
  Row,
  Table,
} from 'reactstrap'
import { NavLink, useParams } from 'react-router-dom'
import { transformationsStore } from '../utils/localStorage'
import NotificationAlert from 'react-notification-alert'
import copy from 'copy-to-clipboard'

function TransformationDetails () {
  const notificationAlertRef = React.useRef(null)

  let { id } = useParams()
  const [transformation, setTransformation] = useState({})
  const getTransformation = async () => {
    setTransformation(await transformationsStore.getItem(id))
  }
  useEffect(getTransformation, [])

  const onIdCopyClick = () => {
    copy('TODO')
    const options = {
      place: 'tr',
      message: (
        <div>
          <div>
            Transformation ID copied to clipboard!
          </div>
        </div>
      ),
      type: 'success',
      icon: 'tim-icons icon-single-copy-04',
      autoDismiss: 7,
    }
    notificationAlertRef.current.notificationAlert(options)
  }

  return (
    <>
      <div className="content">
        <div className="react-notification-alert-container">
          <NotificationAlert ref={notificationAlertRef}/>
        </div>
        <Breadcrumb>
          <BreadcrumbItem>
            <NavLink to="/transformations">
              Transformations
            </NavLink>
          </BreadcrumbItem>
          <BreadcrumbItem active>Details</BreadcrumbItem>
        </Breadcrumb>
        <Row>
          <Col sm="12" md="10" lg="8">
            <Card>
              <CardHeader>
                <CardTitle>
                  <h4>Details</h4>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="transformation-details" responsive>
                  <tbody>
                  <tr>
                    <td>Name</td>
                    <td>
                      <h6>{transformation.name}</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>ID</td>
                    <td>
                      <p>
                        <code>TODO</code>
                        <Button className="btn-link ml-2"
                                color="primary"
                                href="https://ipfs.io/TODO" target="_blank"
                                rel="noopener noreferrer"
                        >
                          See on IPFS
                        </Button>
                        <Button className="btn-simple ml-4" color="primary"
                                onClick={onIdCopyClick}>
                          {/*TODO*/}
                          <i className="tim-icons icon-single-copy-04"/>{' '}
                          Copy
                        </Button>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Wasm module</td>
                    <td>
                      <p>
                        <code>TODO</code>
                        <Button className="btn-link ml-2"
                                color="primary"
                                href="https://ipfs.io/TODO" target="_blank"
                                rel="noopener noreferrer"
                        >
                          See on IPFS
                        </Button>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>
                      <p>{transformation.desc}</p>
                    </td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default TransformationDetails
