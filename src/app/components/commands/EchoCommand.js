import React from 'react';
import CommandLine from '../CommandLine';

const EchoCommand = (props) => {
    const command = props.command;
    const message = props.message;

    return (
        <p>
            <CommandLine command={command}></CommandLine>
            <p>{message}</p>
        </p>
    );
};

export default EchoCommand;