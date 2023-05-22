export default function DayContainer({day, color, btnColor}){

    let notes = ['Entregar tarefa', 'Ir na academia', 'Terminar relatório'];
    let notesArray = notes.map(note => <Note title={note} key={crypto.randomUUID()} />);


    return (
        <>
        <div className={`${color} h-full flex-1 flex flex-col items-center p-3`}>
            <p className="text-xl">{day.toUpperCase()}</p>
            <div className="bg-amber-50 w-full h-full rounded-md divide-y divide-amber-950">
                {notesArray}
            </div>
            <button className={`${btnColor} w-full rounded-md mt-3 p-3 text-black/50 font-bold opacity-50 hover:opacity-100`}>+ Nova Nota</button>
        </div>
            
        </>
    );
    
}


function Note({title}){
    return(
        <div className="p-3 hover:bg-amber-100 cursor-pointer">
            <p>{title}</p>
        </div>
    );
}