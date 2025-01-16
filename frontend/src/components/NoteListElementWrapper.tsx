import { ReactNode } from "react";
import { Card, Col } from "react-bootstrap";

interface NoteListElementWrapperProps{
    children: Array<ReactNode> | ReactNode
}

export default function NoteListElementWrapper({children}: NoteListElementWrapperProps){
    return (
    <Col className="col-12 col-sm-4 mh-100" style={{height: "17em"}}>
        <Card className="h-100">
            {children}
        </Card>
    </Col>
    )
}