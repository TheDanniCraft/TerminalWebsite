import React from 'react';
import CommandLine from '../CommandLine';

const CommandHistoryCommand = (props) => {
    const command = props.command;
    const history = props.history;

    const extractHistory = () => {
        return history.map((line, index) => (
            <React.Fragment key={index}>
                <p>{line}</p>
            </React.Fragment>
        ));
    }

    return (
        <p>
            <CommandLine command={command}></CommandLine>
            {extractHistory()}
        </p>
    );
};

export default CommandHistoryCommand;