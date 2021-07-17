
import React from 'react';
import Data from './Data';

const DataList = ({user,popup}) =>{
    return(
        <div>
            {
              user.map((ele,index)=>{
                return <Data name={ele.name} id={ele.id} email={ele.email} key={index} popup={popup}/>
              })
            }
        </div>
    )
}
export default DataList;