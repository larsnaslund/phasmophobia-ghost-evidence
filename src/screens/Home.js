import React from 'react'
import { GHOSTS } from '../assets/json/ghosts';
import GhostGrid from '../components/GhostGrid';

export default function Home() {
    return (
        <GhostGrid list={GHOSTS} />
    )
}
