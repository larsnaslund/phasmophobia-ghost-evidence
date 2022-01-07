import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useGhostHelper } from '../GhostContext';

export default function GhostEvidence(props) {

    const { GetEvidenceState, StringToKey, EVIDENCE_STATE } = useGhostHelper();

    // Sort the evidence order, putting the confirmed at the bottom. This way the user sees the relevant evidence first (which is left to gather)
    props.list.sort((a, b) => {
        let aState = GetEvidenceState(a) === EVIDENCE_STATE.confirm ? 1 : 0;
        let bState = GetEvidenceState(b) === EVIDENCE_STATE.confirm ? 1 : 0;
        return aState - bState;
    });

    //TODO
    //Show the hints for the ghosts if x ghosts have been filtered? Say for example that it's down to 3 ghosts.
    // We then show some hints that can be used to determine which it is, without needing to use a evidence tool
    return (
        (props.list.length > 0) && <ListGroup variant="flush">
            {props.list.map((evidence) => (
                <ListGroup.Item
                    key={StringToKey(evidence)}
                    className={
                        'ghost-evidence-item ' +
                        (GetEvidenceState(evidence) === EVIDENCE_STATE.confirm ? 'confirmed' : '')
                    } ><span>{evidence}</span></ListGroup.Item>
            ))}
        </ListGroup>)
}
