import React from 'react'

function getDate() {
    const date = new Date()
    var month = String(date.getMonth() + 1).padStart(2, '0');
    console.log(month)
    return null
}

export default function Month() {
  return (
    <div>
        {/* <button onClick={getDate}></button> */}
    </div>
  )
}
