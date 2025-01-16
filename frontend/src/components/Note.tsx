import { Card } from "react-bootstrap";

type NoteProps = {
    title: string,
    content: string,
    id: number
}

export default function Note({title, content, id}: NoteProps){

    return (
    <Card>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{content}</Card.Text>
        </Card.Body>
    </Card>)
}