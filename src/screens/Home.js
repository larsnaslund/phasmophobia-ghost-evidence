import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { GHOSTS } from '../assets/json/ghosts';

export default function Home() {

    const Evidence = (props) => {
        return <ListGroup variant="flush">
            {props.list.map((evidence) => (
                <ListGroup.Item>{evidence}</ListGroup.Item>
            ))}
        </ListGroup>;
    }

    return (
        <div className="ghost-grid">
            {GHOSTS.map((ghost) => (
                <Card>
                    <Card.Header style={{ fontWeight: 'bold' }}>{ghost.name}</Card.Header>
                    <Evidence list={ghost.evidence} />
                </Card>
            ))}
        </div>
    )
}
