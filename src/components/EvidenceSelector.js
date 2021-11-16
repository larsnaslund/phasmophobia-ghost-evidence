import React, { useState, useEffect } from 'react'
import { Card, Form } from 'react-bootstrap'
import { EVIDENCE } from '../assets/json/ghosts'

//TODO REWRITE ONCE FUNCTIONAL
export default function EvidenceSelector() {

    const [evidence, setEvidence] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let tempEvidence = [];

        Object.entries(EVIDENCE).map(([key, value]) =>
            // Checkbox state: 0 = unchecked, 1 = checked, 2 = strike-through
            tempEvidence.push({ id: key, label: value, state: 0 })
        )
        setIsLoaded(true);
        return setEvidence(tempEvidence);
    }, [])


    const onChangeCheckbox = (id) => {
        const checkedEvidence = evidence.find(item => item.id === id);

        if (checkedEvidence) {
            // If checked state is at the upper limit (2), reset to 0, otherwise increment
            checkedEvidence.state = (checkedEvidence.state === 2) ? 0 : checkedEvidence.state + 1;
            setEvidence([...evidence]);
        }
    }


    return (
        <Card>
            <Card.Header>Available evidence</Card.Header>
            {isLoaded && evidence.map(
                (entry) => (
                    <Form.Check type="checkbox" id={entry.id}>
                        {/* TODO get the ID dynamically instead of calling with a lambda */}
                        <Form.Check.Input checked={entry.state === 2 || entry.state === 1} onChange={() => onChangeCheckbox(entry.id)} type="checkbox" />
                        <Form.Check.Label style={entry.state === 2 ? { textDecorationLine: 'line-through' } : {}}>{entry.label}</Form.Check.Label>
                    </Form.Check>
                )
            )}
        </Card >
    )
}
