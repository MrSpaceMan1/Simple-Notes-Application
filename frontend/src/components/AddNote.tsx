import { CardBody } from "react-bootstrap";
import NoteListElementWrapper from "./NoteListElementWrapper";
import "./AddNote.css";
import { useState } from "react";
import AddNoteForm from "./AddNoteForm";

export default function AddNote(){
    const [isAdding, setIsAdding] = useState<boolean>(false)

    return (
    <NoteListElementWrapper>
        {isAdding ? 
            <CardBody>
                <AddNoteForm setIsAdding={setIsAdding}/>
            </CardBody> :
            <button className="add-note-button" onClick={() => setIsAdding(true)}>
                <span>+</span>
            </button>
        }
    </NoteListElementWrapper>
    )
}