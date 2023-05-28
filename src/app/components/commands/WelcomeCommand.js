import React from 'react';
import LogoAsciArt from '../LogoAsciArt.js'
import InfoSection from '../InfoSection.js'
import CommandLine from '../CommandLine.js'

const WelcomeCommand = (props) => {
    const command = props.command;

    return (
        <div>
            <CommandLine command={command}></CommandLine>
            <LogoAsciArt></LogoAsciArt>
            <InfoSection></InfoSection>
        </div>
    );
};

export default WelcomeCommand;