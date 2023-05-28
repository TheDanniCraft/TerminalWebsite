import React from 'react';
import CommandLine from '../CommandLine.js'

const HelpLine = (props) => {
    const command = props.command;
    const description = props.description;

    return (
        <tr>
            <td class="secondary" style={{ width: 150 }}>
                {command}
            </td>
            <span>-&nbsp;&nbsp;</span>
            <td>
                {description}
            </td>
        </tr>
    )
}

const HelpCommand = (props) => {
    const command = props.command;

    return (
        <p>
            <CommandLine command={command}></CommandLine>
            <table style={{ lineHeight: 1 }}>
                <HelpLine command={"about"} description={"about TheDanniCraft"}></HelpLine>
                <HelpLine command={"clear"} description={"clear the terminal"}></HelpLine>
                <HelpLine command={"contact"} description={"wanna contact me?"}></HelpLine>
                <HelpLine command={"echo"} description={"print something out"}></HelpLine>
                <HelpLine command={"exit"} description={"exit the shell"}></HelpLine>
                <HelpLine command={"help"} description={"see a list of all commands"}></HelpLine>
                <HelpLine command={"history"} description={"view your command history"}></HelpLine>
                <HelpLine command={"projects"} description={"list of my current projects"}></HelpLine>
                <HelpLine command={"socials"} description={"get all my socials"}></HelpLine>
                <HelpLine command={"welcome"} description={"prints the welcome line"}></HelpLine>
                <HelpLine command={"whoami"} description={"see who you are"}></HelpLine>
            </table>
        </p>
    );
};

export default HelpCommand;