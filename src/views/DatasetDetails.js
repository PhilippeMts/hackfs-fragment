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
  CardLink,
  CardText,
  CardTitle,
  Col,
  Collapse,
  Row,
} from 'reactstrap'
import { NavLink, useParams } from 'react-router-dom'
import { datasetsStore } from '../utils/localStorage'
import NotificationAlert from 'react-notification-alert'
import copy from 'copy-to-clipboard'

function DatasetDetails () {
  const notificationAlertRef = React.useRef(null)

  let { id } = useParams()
  const [dataset, setDataset] = useState({})
  const getDataset = async () => {
    setDataset(await datasetsStore.getItem(id))
  }
  useEffect(getDataset, [])

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const onIdShareClick = () => {
    copy('TODO')
    const options = {
      place: 'tr',
      message: (
        <div>
          <div>
            Sharing link copied to clipboard!
          </div>
        </div>
      ),
      type: 'success',
      icon: 'tim-icons icon-send',
      autoDismiss: 7,
    }
    notificationAlertRef.current.notificationAlert(options)
  }

  return (
    <>
      <div className="content dataset-details-content">
        <div className="react-notification-alert-container">
          <NotificationAlert ref={notificationAlertRef}/>
        </div>
        <Breadcrumb>
          <BreadcrumbItem>
            <NavLink to="/datasets">
              Datasets
            </NavLink>
          </BreadcrumbItem>
          <BreadcrumbItem active>Details</BreadcrumbItem>
        </Breadcrumb>
        <Row>
          <Col sm="12" md="10" lg="8">
            <Card>
              <CardHeader>
                <CardTitle>
                  <h4>{dataset.name}</h4>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="transformation-details">
                  <tbody>
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
                                onClick={onIdShareClick}>
                          {/*TODO*/}
                          <i className="tim-icons icon-send"/>{' '}
                          Share
                        </Button>
                      </p>
                    </td>
                  </tr>
                  </tbody>
                </div>
                <CardText className={'mt-4'}>
                  Collaborate and push a new evolution of this dataset by
                  executing a new transformation.
                </CardText>
                <NavLink to={`/datasets/${id}/process`}>
                  <Button color="primary" className={'text-center'}>Run new
                    transformation</Button>
                </NavLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className={'history'}>
          <Col lg="12">
            <>
              {/*TODO WIP to iterate on dataset history items*/}
              <Card onClick={toggle}>
                <CardHeader>
                  <CardTitle>
                    <Row>
                      <Col lg="10">
                        <h6>
                        {'Transformation name TODO'}{' '}
                        {'TODO difference between initial data and processed data (with transformation name)'}
                        </h6>
                        <NavLink className={'ml-4'} to={`/transformations/0`}>
                          <CardLink>see more TODO</CardLink>
                        </NavLink>
                      </Col>
                      <Col lg="2" className="text-right">
                        <Button className="btn-link accordion-toggle-button"
                                color="primary" size="sm">
                          <i className="tim-icons icon-minimal-down"
                             color="primary"/>{' '}
                        </Button>
                      </Col>
                    </Row>
                  </CardTitle>
                </CardHeader>
                <Collapse isOpen={isOpen}>
                  <CardBody>
                    {'TODO difference between initial data (not tag) and processed data (tag `output data`)'}
                    Anim pariatur cliche reprehenderit,
                    enim eiusmod high life accusamus terry richardson ad squid.
                    Nihil
                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident.
                  </CardBody>
                </Collapse>

              </Card>
            </>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default DatasetDetails
