import './App.css'
import DayContainer from './components/DayContainer'

function App() {
  return (
    <div className="w-screen h-screen flex flex-col flex-wrap">
      <Container>
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

      </Container>
      

    
    </div>
  )
}

export default App




function Container({children}){
  return (
    <div className='flex flex-row flex-auto min-w-500'>
      {children}
    </div>
  );
}
