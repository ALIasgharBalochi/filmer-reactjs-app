import React from 'react'



import loading1 from "../assets/loading1.gif"
const Loading = ({Height,text}) => {
  return (
        <div style={{width: '100%',height: `${Height}`,display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
         <img src={loading1} style={{width: '10%',height: '20%'}} />
         <h1 style={{color: 'orangered'}}>{text}</h1>
        </div>
  )
}

export default Loading;
