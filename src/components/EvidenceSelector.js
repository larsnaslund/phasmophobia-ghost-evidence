import React from 'react'
import { Card, ToggleButton, ButtonGroup } from 'react-bootstrap'
import { useGhostHelper } from '../GhostContext';

//TODO REWRITE ONCE FUNCTIONAL
export default function EvidenceSelector() {

    const { UpdateEvidence, evidence } = useGhostHelper();

    return (
        <Card className='mb-2'>
            <Card.Header>Select the evidence found and/or the evidence to omit. It works just like the journal in-game.</Card.Header>
            <ButtonGroup className='flex-wrap'>
                {evidence && evidence.map(
                    (entry) => (
                        <ToggleButton
                            key={entry.id}
                            id={entry.id}
                            type="checkbox"
                            checked={entry.state === 2 || entry.state === 1}
                            onChange={() => UpdateEvidence(entry.id)}
                            style={entry.state === 2 ? { background: '#dc3545', textDecorationLine: 'line-through' } : entry.state === 1 ? { background: '#198754' } : {}}
                            variant="secondary"
                        >
                            {entry.label}
                        </ToggleButton>
                    )
                )}
            </ButtonGroup>
        </Card>
    )
}