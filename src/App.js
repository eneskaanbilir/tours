import './App.css';
import Tours from './Tours';
import './tours.css'
import toursList from './data';
import { useEffect, useState } from 'react';


function App() {

  const [data, setData] = useState(toursList)

  function deleteList(id) {
   const newFilter = data.filter( (e)=>e.id !==id )
   setData(newFilter) 
  }

  const [load, setLoad] = useState(true);

  const refreshPage = () => {
    setLoad(true);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  
  if (data.length === 0) {
    return(
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }} >
        <h2>No Tours Left</h2>
        <button className='btn' onClick={refreshPage}>Refresh</button>
      </div>
    )
  }

  return (
    <div >
      <h2>Our Tours</h2>
      <div className='underLine' ></div>
        <div className='tours'>
     {
      load ? <p className="p">Loading</p> : data.map( (e)=> <Tours data={e} del={deleteList} setLoad={setLoad} />  )
     }
     </div>
    </div>
  );
}

export default App;
