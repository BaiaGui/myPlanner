import { useState } from 'react'
import './App.css'
import DayContainer from './components/DayContainer'
import LandingPage from './components/landingPage';

function App() {

  const [onApp, setOnApp]=useState(false);

  return (
    <>
    {onApp?<AppPage/>:<LandingPage setPage={setOnApp}/>}
    </>
  )
}

export default App


//---------------------------------------

function AppPage(){
  const days=["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo", "Anotações"];
  let dayComponentArray = days.map(day =><DayContainer key={crypto.randomUUID()} day={day} color={"bg-slate-700"} btnColor={"bg-slate-500"}/>)

  let arr1 = dayComponentArray.slice(0,4);
  let arr2 = dayComponentArray.slice(4, 8);


  return(

    <div className="w-screen h-screen flex flex-wrap">
      <Container>
        {arr1}
      </Container>
      <Container>
        {arr2}
      </Container>
    {/* <Container>
      <DayContainer day="Segunda" color="bg-red-200" btnColor="bg-red-400"/>
      <DayContainer day="Terça"  color="bg-yellow-200" btnColor="bg-yellow-400"/>
      <DayContainer day="Quarta" color="bg-teal-200" btnColor="bg-teal-400"/>
      <DayContainer day="Quinta" color="bg-indigo-200" btnColor="bg-indigo-400"/>
    </Container>
    <Container>
      <DayContainer day="Sexta" color="bg-lime-200" btnColor="bg-lime-400"/>
      <DayContainer day="Sábado" color="bg-purple-200" btnColor="bg-purple-400"/>
      <DayContainer day="Domingo" color="bg-orange-200" btnColor="bg-orange-400"/>
      <DayContainer day="Anotações" color="bg-fuchsia-200" btnColor="bg-fuchsia-400"/>

    </Container> */}
    </div>
  );
}






function Container({children}){
  return (
    <div className='flex flex-row flex-auto h-1/2 w-screen'>
      {children}
    </div>
  );
}

