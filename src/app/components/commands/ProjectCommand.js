import React from 'react';
import CommandLine from '../CommandLine.js';
import CommandUsage from '../CommandUsage.js';

const ProjectCommand = (props) => {
    const command = props.command;
    const args = props.args;

    if (args.length < 1) {
        return (
            <div>
                <CommandLine command={command}></CommandLine>
                <ol style={{ paddingBottom: 15, listStyleType: "decimal", paddingLeft: 25 }}>
                    <li><strong>Terminal Page:</strong></li>
                    <p>The best way to get informed about my</p>
                </ol>
                <p>Usage: projects go {'<'}project-no{'>'}</p>
                <p>eg: projects go 4</p>
            </div>
        );
    }
    else if (args[0] == 'go' && args[1] && !args[2]) {
        switch (args[1]) {
            case "1":
                window.open('https://thedannicraft.de', '_blank')
                return <CommandLine command={command}></CommandLine>;
            default:
                return <div>
                    <CommandLine command={command}></CommandLine>;
                    <p>No project found with the id {args[1]}</p>
                </div>
        }

    }
    else {
        return <div>
            <CommandUsage usage={"projects go <project-no>"} command={command}></CommandUsage>
        </div>
    }
};

export default ProjectCommand;