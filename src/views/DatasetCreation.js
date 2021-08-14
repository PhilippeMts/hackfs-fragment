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
import React, { useState } from 'react'

// reactstrap components
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap'
import { NavLink, useHistory } from 'react-router-dom'
import { datasetsStore } from '../utils/localStorage'
import JsonPreview from '../components/JsonPreview/JsonPreview'

function DatasetCreation () {
  const history = useHistory()
  const [file, setFile] = useState(null)
  const [name, setName] = useState('')
  const [jsonString, setJsonString] = useState('{}')
  const [isPending, setIsPending] = useState(false)

  const onChangeFile = e => {
    const file = e.target.files[0]
    setFile(file)
    if (file) {
      const reader = new FileReader()
      reader.readAsText(file, 'UTF-8')
      reader.onload = evt => {
        setJsonString(evt.target.result)
      }
    }

  }

  const onChangeName = e => {
    setName(e.target.value)
  }

  const onSubmit = async e => {
    e.preventDefault()
    setIsPending(true)
    let unsecureKey = (await datasetsStore.length()).toString()  // TODO replace w/ IPLD object CID
    await datasetsStore.setItem(
      unsecureKey,
      {
        jsonString,
        name,
      },
    )
    history.push('/datasets')
    // TODO probably notification
  }

  return (
    <>
      <div className="content dataset-creation">
        <Breadcrumb>
          <BreadcrumbItem>
            <NavLink to="/datasets">
              Datasets
            </NavLink>
          </BreadcrumbItem>
          <BreadcrumbItem active>New</BreadcrumbItem>
        </Breadcrumb>
        <Row>
          <Col md="8">
            <Card>
              <CardBody>
                <Form onSubmit={onSubmit}>
                  <Row>
                    <Col md="4">
                      <FormGroup>
                        <Label for="jsonFile">Initial JSON data</Label>
                        <Input type="file" accept=".json" name="jsonFile"
                               id="jsonFile"
                               onChange={onChangeFile}/>
                        {file ?
                          <FormText color="muted">
                            {file.name}
                          </FormText>
                          :
                          <FormText color="danger">
                            No file selected
                          </FormText>
                        }
                      </FormGroup>
                    </Col>
                    <Col md="8">
                      <FormGroup className={name ? '' : 'has-danger'}>
                        <Label for="name">Name</Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={onChangeName}
                          placeholder="What would be a good name for this dataset ?"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label for="jsonPreview">Preview</Label>
                        <JsonPreview jsonString={jsonString}/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button color="primary" type="submit"
                          disabled={isPending || !file || !name}>
                    Import
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default DatasetCreation
