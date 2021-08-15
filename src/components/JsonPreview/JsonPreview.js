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
/*eslint-disable*/
import React from 'react'

import stringify from 'json-stringify-nice'

// reactstrap components
import { ThemeContext, themes } from '../../contexts/ThemeContext'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {
  atomOneDark,
  atomOneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const JsonPreview = ({ jsonString }) => {
  let str = jsonString
  try {
    str = stringify(JSON.parse(jsonString))
  } catch {}
  return (
    <>
      <div id="jsonPreview" className="jsonPreview">
        {jsonString ?
          <ThemeContext.Consumer>
            {({ theme }) => (
              <SyntaxHighlighter language="json"
                                 style={theme === themes.dark
                                   ? atomOneDark
                                   : atomOneLight}>
                {str}
              </SyntaxHighlighter>
            )}
          </ThemeContext.Consumer>
          : null}
      </div>
    </>
  )
}

export default JsonPreview
