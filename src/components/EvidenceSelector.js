import React, { useState, useEffect } from 'react'
import { Card, ToggleButton, ButtonGroup } from 'react-bootstrap'
import { Alert } from 'react-bootstrap';
import { useGhostHelper } from '../GhostContext';

//TODO REWRITE ONCE FUNCTIONAL
export default function EvidenceSelector() {

    const { FilterGhostsByEvidence } = useGhostHelper();

    const [error, setError] = useState(null);
    const [evidence, setEvidence] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);

    //TODO refactor and move to the proper place
    useEffect(() => {
        fetch('api/ghost-evidence')
            .then((res) => res.json())
            .then((result) => {
                let tempEvidence = [];
                // Evidence state. Whether a piece of evidence type is to be used to filter and in which way
                // 0 = default, 1 = required, 2 = to omit
                Object.entries(result).map(([key, value]) =>
                    tempEvidence.push({ id: key, label: value, state: 0 })
                )
                setIsLoaded(true);
                return setEvidence(tempEvidence);
            },
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                })
    }, []);

    const onChangeEvidence = (id) => {
        const checkedEvidence = evidence.find(item => item.id === id);

        if (checkedEvidence) {
            // If checked state is at the upper limit (2), reset to 0, otherwise increment
            checkedEvidence.state = (checkedEvidence.state === 2) ? 0 : checkedEvidence.state + 1;
            setEvidence([...evidence]);
            let include = evidence.filter(item => item.state === 1).map(e => e.label);
            let omit = evidence.filter(item => item.state === 2).map(e => e.label);
            FilterGhostsByEvidence(include, omit);
        }
    }


    return (
        <Card className='mb-2'>
            <Card.Header>Select the evidence found and/or the evidence to omit. It works just like the journal in-game.</Card.Header>
            {error && <Alert variant="danger">{error.message}</Alert>}
            <ButtonGroup className='flex-wrap'>
                {isLoaded && evidence.map(
                    (entry) => (
                        <ToggleButton
                            key={entry.id}
                            id={entry.id}
                            type="checkbox"
                            checked={entry.state === 2 || entry.state === 1}
                            onChange={() => onChangeEvidence(entry.id)}
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