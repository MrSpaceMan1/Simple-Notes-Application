import { useEffect, useState } from "react"
import Note from "./components/Note"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from "react-bootstrap";

export default function App(){
    const [isDarkTheme, setIsDarkTheme] = useState(true)
    const theme = isDarkTheme ? "dark" : "light"
    
    const toggleTheme = () => setIsDarkTheme(v => !v)

    useEffect(() => {
        document.querySelector("html")?.setAttribute("data-bs-theme", theme)
        console.log("Does this even work", theme);
        
    }, [isDarkTheme])
    return (
    <div data-bs-theme={theme}>
        <Row className="justify-content-between p-2">
            <Col className="col-4 col-sm-3 col-lg-6">
                <h1>Notes</h1>
            </Col>
            <Col className="col-8 col-sm-3 col-lg-6 d-flex justify-content-end">
                <Button>Toggle theme</Button>
            </Col>
        </Row>
        <Note title="Test note" content="test content" id={1}></Note>
    </div>)
}