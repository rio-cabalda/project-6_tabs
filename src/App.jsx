import { useEffect, useState } from 'react'
import Navigation from './components/Navigation';
import Jobs from './components/Jobs';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [developers, setDevelopers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchData = async () =>{
    setIsLoading(true);
    try {

      const response = await fetch(url);
      if(!response.ok){
        console.log('Error of fetching data.');
        setIsLoading(true);
        return
      }

      const newData = await response.json();
      setDevelopers(newData);
      setIsLoading(false);
      
    } catch (error) {
      console.log(error)
      setIsLoading(true);
    }
     
  }
  
  useEffect(()=>{
    fetchData();
  },[]);

  if(isLoading){
    return (
       <section className="loading-container">

         <div className="loading"></div>
 
      </section>
    )
  }

  return (
  <section className="jobs-center">
    <Navigation developers={developers} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
    <Jobs developers={developers}  currentItem={currentItem}/>
  </section>
)}

export default App
