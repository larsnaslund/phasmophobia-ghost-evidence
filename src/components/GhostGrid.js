import React from 'react'
import { Card } from 'react-bootstrap'
import GhostEvidence from './GhostEvidence';
import { useGhostHelper } from '../GhostContext';

export default function GhostGrid(props) {

    const { ghosts } = useGhostHelper();

    // Generates a random slight tilt. Hopefully brings some extra life into the notes
    function randomTilt() {
        const min = -0.7;
        const max = 0.7;
        const tiltDegree = Math.random() * (max - min + max) + min;
        return {
            transform: 'rotate(' + tiltDegree + 'deg)'
        };
    }

    return (<div className="ghost-grid">
        {ghosts.map((ghost) => (
            <Card key={ghost.name.split(' ').join('')} style={randomTilt()}>
                <Card.Header className="ghost-name">{ghost.name}</Card.Header>
                <GhostEvidence list={ghost.evidence} />
            </Card>
        ))}
    </div>)
}
