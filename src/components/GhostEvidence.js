import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function GhostEvidence(props) {
    return (
        (props.list.length > 0) && <ListGroup variant="flush">
            {props.list.map((evidence) => (
                <ListGroup.Item key={evidence.split(' ').join('')} className='ghost-evidence-item'>{evidence}</ListGroup.Item>
            ))}
        </ListGroup>)
}
