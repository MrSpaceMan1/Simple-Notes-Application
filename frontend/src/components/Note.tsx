import { Card, CloseButton, Col, Row } from "react-bootstrap";
import { NoteType } from "../types/Note";
import NoteListElementWrapper from "./NoteListElementWrapper";
import { useDeleteNoteMutation } from "../store/notesApi";

type NoteProps = {
    note: NoteType
}

export default function Note({note}: NoteProps){
    const [useMutation] = useDeleteNoteMutation()
    function deleteNote() {
        useMutation({id: note.id})
    }

    return (
        <NoteListElementWrapper>
            <Card.Header>
                <Row className="justify-content-between">
                    <Col><Card.Title>{note.title}</Card.Title></Col>
                    <Col className="col-3 d-flex justify-content-end"><CloseButton className="align-self-center" onClick={deleteNote}></CloseButton></Col>
                </Row>
            </Card.Header>
            <Card.Body className="flex" style={{maxHeight: "100%", overflow: "scroll"}}>
                <Card.Text>{note.content}</Card.Text>
            </Card.Body>
        </NoteListElementWrapper>)
}