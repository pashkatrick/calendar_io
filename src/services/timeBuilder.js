export default function fillArray () {
    let time = []
    for (let i=0; i<=1440; i=i+15) {
        time.push(i)
    }   
    return time
  }

export function timeDecoder (num) {
    const hour = Math.floor((num/15)/4)
    let min = num-(hour*4*15)
    if (min==0) min=min.toString()+'0'
    const m = num>=720 ? 'pm' : 'am'; 
    return (`${hour}:${min}${m}`)
  }