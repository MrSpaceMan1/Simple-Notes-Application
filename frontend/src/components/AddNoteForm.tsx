import { Button, CloseButton, Col, Form, Row } from "react-bootstrap";
import { useAddNoteMutation } from "../store/notesApi";
import { AddNoteType } from "../types/AddNote";

interface AddNoteFormProps{
    setIsAdding: (isAdding: boolean) => void
}

export default function AddNoteForm({setIsAdding}: AddNoteFormProps){
    const [useMutation, {error, isLoading}] = useAddNoteMutation()
    function handleSumbit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault()
        const form = event.currentTarget;
        if (!form.checkValidity()){
            event.stopPropagation()
            return
        }
        const formData = new FormData(form)
        const addNote = Object.fromEntries(formData) as unknown as AddNoteType;
        console.log(form)
        console.log(new FormData(form))
        useMutation(addNote)
            .unwrap()
            .then(() => {
                form.reset()
                setIsAdding(false);
            })
    }

    return (
        <Form onSubmit={handleSumbit}>
            <Form.Group controlId="title">
                <Row>
                    <Col>
                        <Form.Label>Title</Form.Label>
                    </Col>
                    <Col className="col-3 d-flex justify-content-end">
                        <CloseButton onClick={() => setIsAdding(false)} className="align-self-center"/>
                    </Col>
                </Row>
                <Form.Control 
                    name="title"
                    minLength={3} 
                    maxLength={100} 
                    type="text" 
                    placeholder="Title"
                />
            </Form.Group>
            <Form.Group controlId="content">
                <Form.Label>Content</Form.Label>
                <Form.Control 
                    name="content"
                    minLength={3} 
                    maxLength={500} 
                    as="textarea" 
                    type="textarea" 
                    placeholder="Content" 
                    style={{maxHeight: "5em"}} 
                    className="w-100"/>
            </Form.Group>
            <Row className="mt-2 mx-0 justify-content-end">
                <Button disabled={isLoading} type="submit" className="col-3 col-sm-9 col-md-6 col-lg-5">Add note</Button>
            </Row>
            {error && JSON.stringify(error)}
        </Form>
    )
}