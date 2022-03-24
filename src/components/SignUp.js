import React, { useState } from 'react'
import axios from 'axios'

export default function SignUp(props) {
    const [state, setState] = useState({
      name:'',
      nick_name:'',
      bio:'',
      alert:''
    })
    
    const server= "http://localhost:5000"
    
    function loginUser () {
      
      var axios = require('axios');
      var data = JSON.stringify({
        "user": {
          "name": state.name,
          "nick_name": state.nick_name,
          "avatar": "",
          "bio": state.bio,
          "lang": "ru"
        }
      });
      
      var config = {
        method: 'post',
        url: 'http://localhost:5000/user/add',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setState({...state, alert:"Congratulations!", name:'', nick_name:'',bio:''})
      })
      .catch(function (error) {
        console.log(error);
      });

    }

    return <div>
        <div className="column">
          <p>Create a new user:</p>
          <div>{state.alert}</div>
          <input placeholder="name" type="text" onChange={e=> setState({...state, name: e.target.value})} />
            <br />
            <input placeholder="nickname" type="text" onChange={e=> setState({...state, nick_name: e.target.value})} />
            <br />
            <textarea placeholder="bio" type="textarea" onChange={e=> setState({...state,bio: e.target.value})} />
            <br />
          <button classname="button" type="submit" onClick={()=>loginUser()}>Sign In</button>
        </div>
    </div>
}
