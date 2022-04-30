import { func } from 'joi';
import React, { useEffect, Fragment, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import store from '../redux/store';
import * as actions from '../redux/actionTypes'
import NotFound from '../pages/NotFound'

export default function LinkHub() {
  
    const param = useParams()
    
    useEffect (()=> {

    })

    return (
    <Fragment>
        <div>{param.provider}</div>
        <div>{param.length}</div>
        <div>have to check</div>
    </Fragment>
  )
}
