import React from 'react'


const Registerlogin = () => {
  return (
    <>
    <div className="form" style={{direction:"rtl"}}>

    <div className="input-wrapper">
        <input type="text" 
         id="name"
         className="cool-input"
         placeholder="שם"
         value={"s"}
         onChange={(e) => (e)} />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          id="phone"
          className="cool-input"
          placeholder="פלאפון"
          value={''}
          onChange={(e) => (e)}
        />
      </div>
      <button className="pay-buttonA" onClick={()=>(console.log("hi"))}>הזמן עכשיו !</button>
      <button className="pay-buttonB" onClick={()=>(console.log("bye"))}>לעגלה</button>
      </div>
      </>
      
        
  )
}

export default Registerlogin;