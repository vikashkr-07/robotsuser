import React, { Fragment } from 'react'
import './App.css';
import DataList from './components/DataList';
import InputSearch from './components/InputSearch';
import Message from './components/Message';
import Scroll from './components/Scroll';
import Popup from './components/Popup';

function App() {

  let [user,setUser]=React.useState([]);
  let [input,setInput]=React.useState('');
  let [popup,setPopup]=React.useState(false);
  React.useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>{
      return response.json();
    })
    .then(data =>{
        setUser(data);
    })
  },[])

  console.log(user);

  let inputSearch = (e) =>{
    // console.log(e.target.value)
      setInput(e.target.value);
  }

  let filterRobo=user.filter((ele)=>{
      return ele.name.toLowerCase().includes(input.toLowerCase());
  })

  const popupHandle = () =>{
    setPopup(true);
  }

  const closePopup = () =>{
    setPopup(false);
  }


  return !user.length ? <h1>Loading.......</h1>
  :
   (
  <Fragment>
    {
      popup ? <Popup  closePopup={closePopup}/> : ''
    }
    <div className="tc">
         <Message message={filterRobo.length===0 ? 'Record Not Found':'Robofans' } />
         {/* <button type="button" onClick={popupHandle}>Pop up</button> */}
         <InputSearch  inputSearch={inputSearch}/>
         <Scroll>
            <DataList  user={filterRobo} popup={popupHandle}/>
         </Scroll>
    </div>
  </Fragment>
  );
}

export default App;
