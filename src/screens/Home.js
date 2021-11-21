import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap';
import EvidenceSelector from '../components/EvidenceSelector';
import GhostGrid from '../components/GhostGrid';

export default function Home() {

    const [error, setError] = useState(null);
    const [ghosts, setGhosts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('api/ghosts')
            .then((res) => res.json())
            .then((result) => {
                setGhosts(result);
                setIsLoaded(true);
            },
                // Handle errors instead of swallowing them in a catch block
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                })
    }, []);

    return (
        <>
            <EvidenceSelector />
            {error && <Alert variant="danger">{error.message}</Alert>}
            {isLoaded && <GhostGrid list={ghosts} />}
        </>
    )
}
