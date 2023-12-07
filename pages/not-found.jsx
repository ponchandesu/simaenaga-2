import React, {useEffect , useState } from 'react'
import { Helmet ,HelmetProvider} from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

import './not-found.css'

const NotFound = (props) => {
  return (
    <HelmetProvider>
      <div className="not-found-container">
        <Helmet>
          <title>404 - Not Found</title>
        </Helmet>
        <h3>OOPS! PAGE NOT FOUND</h3>
        <div className="not-found-container1">
          <h1 className="not-found-text1">404</h1>
        </div>
        <div className="not-found-container2">
          <h2 className="not-found-text2">
            WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
          </h2>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default NotFound
