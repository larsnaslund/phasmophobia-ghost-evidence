import React from 'react'
import { Alert } from "react-bootstrap";

export default function NotFound() {
    return (
        <Alert variant="warning">
            <Alert.Heading>Page not found</Alert.Heading>
            <p>
                Seems like there's nothing here.
            </p>
        </Alert>
    )
}