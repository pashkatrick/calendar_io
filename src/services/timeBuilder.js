export default function fillArray (start, finish) {
    let time = []
    for (let i=start; i<=finish; i=i+15) {
        time.push(i)
    }   
    return time
  }