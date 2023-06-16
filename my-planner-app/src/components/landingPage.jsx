
export default function LandingPage({setPage}){
    return (
       <div className="w-sreen h-screen flex items-center flex-col bg-gradient-to-tr from-blue-900 to-indigo-950">
       <header className=" flex w-screen bg-gray-700/30 px-8 py-4 border-blue-200/10 border-b justify-between items-center"><p className="text-white text-2xl font-bold w-fit">myPlanner</p>
       <p className=" w-fit text-white/50">por BaiaGui</p></header>

       <div className="flex flex-col items-center content-center mt-60 w-1/2">
       <h1 className="text-white text-6xl mb-4 text-center font-bold">Sua organização semanal de maneira fácil!</h1>
        <h2 className="text-white/50 text-center">Introduzindo o myPlanner: seu companheiro semanal! Com design intuitivo e funcional, ele organiza suas tarefas e compromissos, permitindo que você alcance seus objetivos com facilidade. Otimize seu tempo e melhore sua produtividade com o myPlanner, sua ferramenta ideal para uma semana bem planejada..Clique no botão abaixo e descubra!</h2>
       <button onClick={()=>{setPage(true)}} className="bg-amber-500 px-6 py-4 my-20 text-white rounded-md shadow-xl shadow-amber-300/10 hover:scale-105 transition-all">Começar</button>
       </div>
       
       </div>);

}