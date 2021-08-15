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
  CardBody, Col, Form, FormGroup, FormText, Input, Label,
  Row,
} from 'reactstrap'
import { NavLink, useHistory } from 'react-router-dom'
import { transformationsStore } from '../utils/localStorage'
import { useDispatch } from "react-redux";
import { postTransformation } from "../redux/transformation/action";

function TransformationImport () {
  const history = useHistory();
  const dispatch = useDispatch();

  const [file, setFile] = useState(null)
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [isPending, setIsPending] = useState(false)

  const onChangeFile = e => {
    setFile(e.target.files[0])
  }

  const onChangeName = e => {
    setName(e.target.value)
  }

  const onChangeDesc = e => {
    setDesc(e.target.value)
  }

  const onSubmit = async e => {
    e.preventDefault();
    setIsPending(true);
    dispatch(postTransformation(name, desc, file));
    history.push("/transformations");
    // TODO probably notification
  }


  return (
    <>
      <div className="content">
        <Breadcrumb>
          <BreadcrumbItem>
            <NavLink to="/transformations">
              Transformations
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
                        <Label for="wasmFile">Wasm module</Label>
                        <Input type="file" accept=".wasm" name="file" id="wasmFile"
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
                    <Col md="5">
                      <FormGroup className={name ? '' : "has-danger"}>
                        <Label for="name">Name</Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={onChangeName}
                          placeholder="What would be a good name for this module ?"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                      id="description"
                      value={desc}
                      onChange={onChangeDesc}
                      cols="80"
                      placeholder="Take some time to describe the way your module works."
                      rows="4"
                      type="textarea"
                    />
                  </FormGroup>
                  <Button color="primary" type="submit" disabled={isPending || !file || !name}>
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

export default TransformationImport
