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
  BreadcrumbItem, Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap'
import { NavLink, useHistory, useParams } from 'react-router-dom'
import { datasetsStore } from '../utils/localStorage'
import { useDispatch, useSelector } from 'react-redux'
import NotificationAlert from 'react-notification-alert'
import JsonPreview from "../components/JsonPreview/JsonPreview";
import { runTransformation } from "../redux/transformation/action";

function DatasetProcess () {
  const history = useHistory()
  const dispatch = useDispatch();
  const notificationAlertRef = React.useRef(null)
  const [isPending, setIsPending] = useState(false)

  let { id } = useParams()

  const [selectedTransformationId, setSelectedTransformationId] = useState('')

  const dataset = useSelector(state => state.dataset.objects[id]);
  const transformationsMap = useSelector(
    state => Object.values(state.transformation.objects))

  const onTransformationChange = e => {
    setSelectedTransformationId(e.target.value)
  }

  const run = () => {
    setIsPending(true)
    dispatch(runTransformation(selectedTransformationId, id))
    const options = {
      place: 'tr',
      message: (
        <div>
          <div>
            Transformation successfully executed!<br/>
            Dataset updated with new value!
          </div>
        </div>
      ),
      type: 'success',
      icon: 'tim-icons icon-spaceship',
      autoDismiss: 3,
    }
    notificationAlertRef.current.notificationAlert(options)
    // TODO
    setTimeout(() => {
      history.push(`/datasets/${id}`)
    }, 4000)
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
          <BreadcrumbItem active>Process</BreadcrumbItem>
        </Breadcrumb>
        <Row>
          <Col sm="12" md="10" lg="8">
            <Card className={"dataset-creation"}>
              <CardHeader>
                <CardTitle>
                  <h4><b>1. Select a dataset: </b>{dataset?.name}</h4>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <JsonPreview jsonString={dataset?.history.length > 0 ? dataset?.history[dataset.history.length - 1].result.jsonString : dataset?.jsonString}/>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="10" lg="8">
            <Card>
              <CardHeader>
                <CardTitle>
                  <h4><b>2. Choose a transformation:</b></h4>
                </CardTitle>
              </CardHeader>
            </Card>
          </Col>
        </Row>
        <Row className="all-transformations">
          {
            transformationsMap?.
              map(({ name, desc, cid }) => (
                <Col md="4" key={cid}>
                  <Card>
                    <CardBody>
                      <CardHeader>
                        <CardTitle><h4>{name}</h4></CardTitle>
                      </CardHeader>
                      <CardBody>
                        <CardText>{desc}</CardText>
                      </CardBody>
                      <CardFooter>
                        <FormGroup check inline className="form-check-radio">
                          <Label className="form-check-label">
                            <Input type="radio"
                                   value={cid}
                                   checked={selectedTransformationId ===
                                   cid}
                                   onChange={onTransformationChange}/>
                            select this transformation
                            <span className="form-check-sign"/>
                          </Label>
                        </FormGroup>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
              ))
          }
        </Row>
        <Row>
          <Col sm="12" md="10" lg="8">
            <Card>
              <CardHeader>
                <CardTitle>
                  <h4><b>3. Run the transformation:</b></h4>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Button color="primary" className={'text-center'}
                        disabled={isPending || !selectedTransformationId}
                        onClick={run}>
                  Run
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default DatasetProcess
