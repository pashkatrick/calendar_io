import { func } from 'joi';
import React, { useEffect, Fragment, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import store from '../redux/store';
import * as actions from '../redux/actionTypes'
import NotFound from '../pages/NotFound'

export default function LinkHub() {
  
    const param = useParams()
    const axios = require('axios');
    const navigate = useNavigate()

    useEffect (()=> {
        loadProvider()
    },[])

    function loadProvider () {
        var config = {
        method: 'get',
        url: `http://109.107.176.29:5000/user/${param.provider}?full=true`,
        headers: { }
        };    
        axios(config)
        .then(function (response) {
            console.log(response)
            if (response.data==false) {
                navigate('*')
                
            } else {
                loadTypes(response.data.user._id)
            }
    })
    }

    function findMatchingType (types, matchType) {
        let match = 0 
        types.map(type=> {
             if (type.length==matchType) match++
         })
        if (match==0) {
            navigate('*')
        }
    }

    function loadTypes (id) {
        var config = {
        method: 'get',
              url: `http://109.107.176.29:5000/user/${id}/types`,
              headers: { }
              };    
              axios(config)
              .then(function (response) {
                  if (response.date!==false) findMatchingType(response.data.event_types, param.type)
                else navigate('*')
          })
          
    }

    return (
    <Fragment>
        <div>{param.provider}</div>
        <div>{param.type}</div>
        <div>have to check</div>
    </Fragment>
  )
}
