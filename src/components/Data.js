import React from 'react'
import tachyons from 'tachyons'

const Data = ({id,name,email,popup}) =>{
    return(
                 <div className="tc bg-light-green dib br3 pa3 grow ma2 shadow-2" onDoubleClick={popup} >
                     <img src={`https://robohash.org/${id}`} alt="Robofans" />
                 <div>
                 <h2>{name}</h2>
                 <p>{email}</p>
            </div>
        </div>
    )
}
export default Data;