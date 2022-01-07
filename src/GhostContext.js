import React, { useState, useEffect, createContext, useContext } from 'react';
import { Alert } from 'react-bootstrap';

const GhostContext = createContext();

// TODO come up with better name
export function useGhostHelper() {
    return useContext(GhostContext);
}

export const GhostProvider = props => {

    // Current ghosts that are used in the UI
    const [ghosts, setGhosts] = useState([]);
    // All the ghosts from the load stage
    const [untouchedGhosts, setUntouchedGhosts] = useState([]);

    // All evidence types. Also includes a state property to know whether it's been found under the session or can be omitted
    const [evidence, setEvidence] = useState([]);
    const EVIDENCE_STATE = {
        default: 0,
        confirm: 1,
        omit: 2
    };

    // Current error and load state
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const value = {
        ghosts,
        evidence,
        UpdateEvidence,
        GetEvidenceState,
        StringToKey,
        EVIDENCE_STATE
    };

    // onMount
    useEffect(() => {
        simpleJSONFetch('api/ghosts', (result) => {
            setGhosts(result);
            setUntouchedGhosts(result)
        });
        simpleJSONFetch('api/ghost-evidence', (result) => {
            // Map evidence into usable format. label = string representation of evidence
            let e = Object.entries(result).map(
                ([key, value]) => ({ id: key, label: value, state: 0 })
            );
            setEvidence(e);
        });
    }, []);

    // on evidence change
    useEffect(() => {
        let confirmed = evidence.filter(e => e.state === EVIDENCE_STATE.confirm);
        let omitted = evidence.filter(e => e.state === EVIDENCE_STATE.omit);

        let matches = untouchedGhosts.filter((ghost) => {
            // Find all the ghosts with a perfect evidence match
            return (
                confirmed.filter(e => ghost.evidence.includes(e.label)).length === confirmed.length
                &&
                omitted.filter(e => !ghost.evidence.includes(e.label)).length === omitted.length
            );
        });

        setGhosts(matches);
    }, [evidence]);


    //0 = default, 1 = required, 2 = to omit
    function UpdateEvidence(id) {
        let e = evidence.find(item => item.id === id);

        if (e) {
            // Update the evidence state in circular fashion. 0 => 1 => 3 => 0 ...
            e.state = (e.state === EVIDENCE_STATE.omit ? EVIDENCE_STATE.default : e.state + 1);
            setEvidence([...evidence]);
        }
    }

    function StringToKey(string) {
        return string.split(' ').join('');
    }

    function GetEvidenceState(evidenceLabel) {
        const item = evidence.find(item => item.label === evidenceLabel);
        return (!item) ? EVIDENCE_STATE.default : item.state;
    }

    const simpleJSONFetch = (endpoint, resultCallback) => {
        fetch(endpoint)
            .then((res) => res.json())
            .then((result) => {
                setIsLoaded(true);
                resultCallback(result);
            },
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                });
    }

    return (
        <GhostContext.Provider value={value}>
            {error && <Alert variant="danger">{/*error.message*/}</Alert>}
            {isLoaded && props.children}
        </GhostContext.Provider>
    )
}