import './App.css'
import DayContainer from './components/DayContainer'

function App() {
  return (
    <div className="w-screen h-screen flex">
      <DayContainer day="Segunda"/>
      <DayContainer day="Terça"/>
      <DayContainer day="Quarta"/>
      <DayContainer day="Quinta"/>
      <DayContainer day="Sexta"/>
      <DayContainer day="Sábado"/>
      <DayContainer day="Domingo"/>
    </div>
  )
}

export default App
