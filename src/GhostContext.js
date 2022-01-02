import React, { useState, useEffect, createContext, useContext } from 'react';
import { Alert } from 'react-bootstrap';

const GhostContext = createContext();

// TODO come up with better name
export function useGhostHelper() {
    return useContext(GhostContext);
}

export const GhostProvider = props => {

    const [ghosts, setGhosts] = useState([]);
    const [untouchedGhosts, setUntouchedGhosts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const value = {
        ghosts,
        FilterGhostsByEvidence
    };

    function FilterGhostsByEvidence(include, omit) {

        // If nothing is provided, reset the ghosts
        if (include.length === 0 && omit.length === 0) {
            return setGhosts(untouchedGhosts);
        }

        const filtered = [];
        untouchedGhosts.forEach((ghost) => {
            // Amount of matches that have to be made
            let matchesLeft = include.length + omit.length;
            // Loop through each evidence type that the ghost should have. For every match, substract 1 from matchesLeft
            include.forEach(e => matchesLeft -= ghost.evidence.includes(e));
            // Similar thing here, but this time make sure the ghost DOES NOT have a certain evidence type
            omit.forEach(e => matchesLeft -= !ghost.evidence.includes(e));
            // If everything matched up, then this ghost meets the current given evidence criterias
            if (matchesLeft === 0) {
                filtered.push(ghost);
            }
        });

        setGhosts(filtered);
    }

    useEffect(() => {
        fetch('api/ghosts')
            .then((res) => res.json())
            .then((result) => {
                setGhosts(result);
                setUntouchedGhosts(result);
                setIsLoaded(true);
            },
                // Handle errors instead of swallowing them in a catch block
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                });
    }, []);

    return (
        <GhostContext.Provider value={value}>
            {error && <Alert variant="danger">{/*error.message*/}</Alert>}
            {isLoaded && props.children}
        </GhostContext.Provider>
    )
}