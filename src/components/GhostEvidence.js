import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function GhostEvidence(props) {
    return (
        (props.list.length > 0) && <ListGroup variant="flush">
            {props.list.map((evidence) => (
                <ListGroup.Item>{evidence}</ListGroup.Item>
            ))}
        </ListGroup>)
}