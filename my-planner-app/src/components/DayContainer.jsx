export default function DayContainer({day}){
    return (
        <>
        <div className="bg-red-300 h-full flex-1 flex flex-col items-center p-3">
            <p className="text-xl">{day.toUpperCase()}</p>
            <div className="bg-amber-50 w-full h-full rounded-md divide-y divide-amber-950">
                <Note/>
                <Note/>
                <Note/>
            </div>
            <button className="bg-red-400 w-full rounded-md mt-3 p-3 text-black/50 font-bold hover:bg-red-500">+ Nova Nota</button>
        </div>
            
        </>
    );
    
}


function Note(){
    return(
        <div className="p-3 hover:bg-amber-100 cursor-pointer">
            <p>Entregar atividade</p>
        </div>
    );
}