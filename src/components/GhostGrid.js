import React from 'react'
import { Card } from 'react-bootstrap'
import GhostEvidence from './GhostEvidence';

export default function GhostGrid(props) {
    return (<div className="ghost-grid">
        {props.list.map((ghost) => (
            <Card>
                <Card.Header className="ghost-name">{ghost.name}</Card.Header>
                <GhostEvidence list={ghost.evidence} />
            </Card>
        ))}
    </div>)
}
