import React from 'react';
import CommandLine from './CommandLine.js'

const CommandError = (props) => {
    const command = props.command;

    return (
        <p>
            <CommandLine command={command}></CommandLine>
            <p class="error">command not found: {command}</p>
        </p>
    );
};

export default CommandError;