import { useEffect, useState } from "react"
import Note from "./components/Note"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useGetNotesQuery } from "./store/notesApi";
import AddNote from "./components/AddNote";

export default function App(){
    const [isDarkTheme, setIsDarkTheme] = useState(true)
    const theme = isDarkTheme ? "dark" : "light"

    const { data, isLoading } = useGetNotesQuery()

    const toggleTheme = () => setIsDarkTheme(v => !v)

    useEffect(() => {
        document.querySelector("html")?.setAttribute("data-bs-theme", theme)        
    }, [isDarkTheme])

    return (
    <>
        <Container fluid>
            <Row className="justify-content-between">
                <Col className="col-sm-6 col-4">
                    <h1>Notes</h1>
                </Col>
                <Col className="col-sm-6 col-8 d-flex align-content-center justify-content-end">
                    <Button className="my-2" onClick={toggleTheme}>Toggle theme</Button>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            {isLoading ? 
                <Container fluid className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>      
                    </Spinner>
                </Container>: 
                <Row className="gy-4">
                    {data?.map(note => (<Note note={note}/>))}
                    <AddNote />
                </Row>
            }
        </Container>
    </>)
}