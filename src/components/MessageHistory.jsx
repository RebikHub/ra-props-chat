import React from 'react'
import Message from './Message'
import Response from './Response'

export default function MessageHistory({list}) {
  console.log(list);
  if (!list) {
    return null;
  }
  return (
    <ul>
      {list.map(el => el.type === 'message' ?
        <Message name={el.from.name} time={el.time} text={el.text} key={el.id}/> :
        <Response name={el.from.name} time={el.time} text={el.text} key={el.id}/>)}
    </ul>
  )
}

MessageHistory.defaultProps = {
  list: []
}
