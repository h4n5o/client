import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StreamList = () => {
    const [streams, setStreams] = useState([]);

    useEffect(() => {
        // Hier die korrekte API-URL verwenden (Port 3000)
        axios.get("http://localhost:3000/api/streams")
            .then(response => {
                setStreams(response.data);
            })
            .catch(error => {
                console.error('Fehler beim Abrufen der Stream-Daten:', error);
            });
    }, []);

    return (
        <ul>
            {streams.map(stream => (
                <li key={stream.id}>
                    <a href={stream.url}>{stream.title}</a>
                </li>
            ))}
        </ul>
    );
};

export default StreamList;