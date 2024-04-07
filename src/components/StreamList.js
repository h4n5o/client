// client/src/components/StreamList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StreamList = () => {
    const [streams, setStreams] = useState([]);

    useEffect(() => {
        // Hier anstelle von 'http://localhost:3001/api/streams' deine API-URL verwenden
        axios.get("http://localhost:3001/api/streams")
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
