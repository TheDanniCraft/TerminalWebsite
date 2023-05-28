import React from 'react';
import CommandLine from './CommandLine.js'

const CommandUsage = (props) => {
    const command = props.command;
    const usage = props.usage;

    return (
        <p>
            <CommandLine command={command}></CommandLine>
            <p>usage: {usage}</p>
        </p>
    );
};

export default CommandUsage;