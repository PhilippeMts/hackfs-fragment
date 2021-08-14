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
import { Button, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  postTransformation,
  runTransformation,
} from '../redux/transformation/action'

function FluenceTest () {
  const transformations = useSelector(state => {
    return Object.values(state.transformation.objects)
  });
  const dispatch = useDispatch();

  const [selectedFile, setSelectedFile] = useState(undefined);
  const [fileName, setFileName] = useState(null);


  return (
    <>
      <div className="content">
        <Row>
          <input type="file"
                 onChange={(e) => setSelectedFile(e.target.files[0])}/>
        </Row>
        <Row>
          <input type="text" placeholder={"Name"}
                 onChange={(e) => setFileName(e.target.value)}/>
        </Row>
        <Row>
          <Button onClick={() => {
            dispatch(postTransformation(fileName, fileName, selectedFile));
          }}>UPLOAD</Button>
        </Row>
        {

          transformations?.map(t => <Row key={t.cid}>
            {t.name}
          </Row>)
        }
        <Row>
          <Button disabled={transformations[0] === undefined} onClick={() => {
            dispatch(runTransformation(transformations[0].cid, "marine_playground"));
          }}>RUN</Button>
        </Row>
      </div>
    </>
  )
}

export default FluenceTest
