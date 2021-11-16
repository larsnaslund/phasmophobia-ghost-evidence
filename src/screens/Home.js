import React from 'react'
import { GHOSTS } from '../assets/json/ghosts';
import EvidenceSelector from '../components/EvidenceSelector';
import GhostGrid from '../components/GhostGrid';

export default function Home() {
    return (
        <>
            <EvidenceSelector />
            <GhostGrid list={GHOSTS} />
        </>
    )
}
