import React from 'react'
import { Card } from 'react-bootstrap'
import GhostEvidence from './GhostEvidence';
import { useGhostHelper } from '../GhostContext';

export default function GhostGrid(props) {

    const { ghosts } = useGhostHelper();

    return (<div className="ghost-grid">
        {ghosts.map((ghost) => (
            <Card key={ghost.name.split(' ').join('')}>
                <Card.Header className="ghost-name">{ghost.name}</Card.Header>
                <GhostEvidence list={ghost.evidence} />
            </Card>
        ))}
    </div>)
}
