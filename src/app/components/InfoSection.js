import React from 'react';
import { name, version } from '../../../package.json';

const InfoSection = () => {
    return (
        <span>
            <p>Welcome to {name}. (Version {version})</p>
            <p>----</p>
            <p>This project{"'"}s source code can be found on the project{"'"}s <a href='https://github.com/TheDanniCraft/TerminalWebsite' style={{ color: "#FF9D00" }}>GitHub repo</a>.</p>
            <p>----</p>
            <p>For a list of available commands, type `<span class="secondary">help</span>`.</p>
        </span>
    );
};

export default InfoSection;