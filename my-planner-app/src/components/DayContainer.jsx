import { useState } from "react";

export default function DayContainer({day, color, btnColor}){

    function confirmAddNote(){
        setNotes([...notes, {id: crypto.randomUUID() , text: textValue}]);
        setEditMode(false);
    }

    function deleteNote(id){
        console.log(notes);
        setNotes(notes.filter(note => note.id !== id));
    }
    //Input handle
    function handleChance(e){
        setTextValue(e.target.value);
    }


    const [notes, setNotes]=useState([]);
    const [editMode, setEditMode]=useState(false);
    const [textValue, setTextValue]=useState('');

    //setNotes([...notes, a]);
    let notesArray = notes.map(note => <Note title={note.text} key={note.id} id={note.id} deleteNote={deleteNote} />);


    return (
        <>
        <div className={`${color} h-full flex-1 flex flex-col items-center p-3`}>
            <p className="text-xl text-white font-bold p-2">{day.toUpperCase()}</p>
            <div className="bg-amber-100 w-full h-full rounded-md divide-y divide-amber-950 overflow-y-auto max-h-full">
                {notesArray}
                {editMode && <input type="text" autoFocus={true} placeholder="Nova Nota" className="w-full p-3 rounded-md" onChange={handleChance}/> }
            </div>
            {editMode ?   
            <BigButton btnColor={btnColor} onClick={confirmAddNote} msg="Confirmar"/> :
            <BigButton btnColor={btnColor} onClick={()=>{setEditMode(true)}} msg="+ Nova Nota"/>
            }


          
        </div>
            
        </>
    );
    
}


function Note({title, deleteNote, id}){

    const [hoverState, setHoverState]= useState(false);

    return(
        <div className="p-3 hover:bg-amber-100  flex justify-between items-center" onMouseEnter={()=>{setHoverState(true)}} onMouseLeave={()=>{setHoverState(false)}}>
            <p className="p-2">{title}</p>
            {hoverState && <button onClick={()=>{deleteNote(id)}} className="hover:bg-amber-200 rounded-md p-2 h-fit hover:opacity-50 opacity-10"><svg className="text-black " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></button>}
        </div>
    );
}

function BigButton({btnColor, onClick, msg}){
    return(
        <button onClick={onClick} className={`${btnColor} w-full rounded-md mt-3 p-3 text-black/50 font-bold opacity-50 hover:opacity-100`}>{msg}</button>
    );
}