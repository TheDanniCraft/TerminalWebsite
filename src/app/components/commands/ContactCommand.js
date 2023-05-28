import React from 'react';
import CommandLine from '../CommandLine.js'
import LinkEntry from '../LinkEntry.js';

const ContactCommand = (props) => {
    const command = props.command;

    return (
        <div>
            <CommandLine command={command}></CommandLine>
            <p>Get in touch with me here:</p>
            <LinkEntry color={"#5865F2"} label={"Discord - TheDanniCraft#0202"} link={"https://discordapp.com/users/385090261019131915"}></LinkEntry>
            <LinkEntry color={"#CBD5FF"} label={"Mail - mail@thedannicraft.de"} link={"mailto:mail@thedannicraft.de"}></LinkEntry>
        </div>
    );
};

export default ContactCommand;