import React from 'react';
import LogoAsciArt from '../LogoAsciArt.js'
import CommandLine from '../CommandLine.js'

const AboutCommand = (props) => {
    const command = props.command;

    return (
        <div>
            <CommandLine command={command}></CommandLine>
            <LogoAsciArt></LogoAsciArt>
            <p>Hey 👋,</p>
            <p>My name is <strong>thedannicraft</strong>!</p>
            <p>I{"'"}m a hobby developper based in <strong>Germany</strong>.</p>
            <p>I am passionate in writing codes, developing web applications,</p>
            <p>games and many more! You can check out my projects</p>
            <p>by running <strong><span class="secondary">projects</span></strong> inside this shell</p>
        </div>
    );
};

export default AboutCommand;