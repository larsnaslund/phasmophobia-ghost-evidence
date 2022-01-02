import React from 'react'
import EvidenceSelector from '../components/EvidenceSelector';
import GhostGrid from '../components/GhostGrid';
import { GhostProvider } from '../GhostContext';

export default function Home() {
    return (
        <GhostProvider>
            <EvidenceSelector />
            <GhostGrid />
        </GhostProvider>
    )
}
