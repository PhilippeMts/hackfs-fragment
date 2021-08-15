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
import { useSelector } from "react-redux";
import JsonPreview from "../components/JsonPreview/JsonPreview";

function DatasetDetails () {
  const notificationAlertRef = React.useRef(null)

  let { id } = useParams()
  let history = [];
  const { currentDataset, datasets, transformations } = useSelector(state => {
    return {
      currentDataset: state.dataset.objects[id],
      datasets: state.dataset.objects,
      transformations: state.transformation.objects
    }

  });

  const [toOpen, setToOpen] = useState({})
  console.log(toOpen)
  useEffect(() => {
    if(currentDataset?.history) {
      if(currentDataset.history.length > 0) {
        setToOpen({[currentDataset.history[currentDataset.history.length - 1].result.cid]: true})
      } else {
        setToOpen({[id]: true})
      }
    }
  }, [currentDataset?.history])

  const toggle = (cid) => {
    if(!(cid in toOpen)) {
      setToOpen({...toOpen, [cid]: true});
    } else {
      setToOpen({...toOpen, [cid]: !toOpen[cid]});
    }
  }

  const onIdShareClick = () => {
    copy(`https://localhost:3000/datasets/${id}`)
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
                  <h4>{currentDataset?.name}</h4>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="transformation-details">
                  <tbody>
                  <tr>
                    <td>ID</td>
                    <td>
                      <p>
                        <code>{id}</code>
                        <Button className="btn-link ml-2"
                                color="primary"
                                href={`https://ipfs.io/ipfs/${id}`} target="_blank"
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
              {
                currentDataset?.history.reverse().map(({transformation, result: { jsonString, cid }}) => (
                  <Card onClick={() => toggle(cid)}>
                    <CardHeader>
                      <CardTitle>
                        <Row>
                          <Col lg="10">
                            <h6>
                              {transformations[transformation].name}
                            </h6>
                            <NavLink className={'ml-4'} to={`/transformations/${transformation}`}>
                              <CardLink>See More</CardLink>
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
                    <Collapse isOpen={toOpen[cid]}>
                      <CardBody className={"dataset-creation"}>
                        <JsonPreview jsonString={jsonString}/>
                      </CardBody>
                    </Collapse>

                  </Card>
                ))
              }
              <Card onClick={() => toggle(id)}>
                <CardHeader>
                  <CardTitle>
                    <Row>
                      <Col lg="10">
                        <h6>
                          {currentDataset?.name ? `${currentDataset.name + " - "}Original data` : "Original data"}
                        </h6>
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
                <Collapse isOpen={toOpen[id]}>
                  <CardBody className={"dataset-creation"}>
                    <JsonPreview jsonString={currentDataset?.jsonString}/>
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
