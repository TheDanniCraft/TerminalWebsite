import React from 'react';
import CommandLine from '../CommandLine.js';
import CommandUsage from '../CommandUsage.js';

const SocialsCommand = (props) => {
    const command = props.command;
    const args = props.args;

    const SocialLine = (props) => {
        const name = props.name;
        const link = props.link;

        return (
            <tr>
                <td class="secondary" style={{ width: 150 }}>
                    {name}
                </td>
                <span>-&nbsp;&nbsp;</span>
                <td>
                    {link}
                </td>
            </tr>
        )
    }

    if (args.length < 1) {
        return (
            <div>
                <CommandLine command={command}></CommandLine>
                <table style={{ lineHeight: 1 }}>
                    <SocialLine name={"1. Discord"} link={"https://discord.gg/gamerforge"}></SocialLine>
                    <SocialLine name={"2. YouTube"} link={"https://youtube.com/thedannicraft"}></SocialLine>
                    <SocialLine name={"3. Twitch"} link={"https://twitch.tv/thedannicraft"}></SocialLine>
                    <SocialLine name={"4. Instagram"} link={"https://instagram.com/thedannicraft"}></SocialLine>
                </table>
                <p>Usage: socials go {'<'}social-no{'>'}</p>
                <p>eg: social go 4</p>
            </div>
        );
    }
    else if (args[0] == 'go' && args[1] && !args[2]) {
        switch (args[1]) {
            case "1":
                window.open('https://discord.gg/gamerforge', '_blank')
                return <CommandLine command={command}></CommandLine>;
            case "2":
                window.open('https://youtube.com/thedannicraft', '_blank')
                return <CommandLine command={command}></CommandLine>;
            case "3":
                window.open('https://twitch.tv/thedannicraft', '_blank')
                return <CommandLine command={command}></CommandLine>;
            case "4":
                window.open('https://instagram.com/thedannicraft', '_blank')
                return <CommandLine command={command}></CommandLine>;
            default:
                return <div>
                    <CommandLine command={command}></CommandLine>;
                    <p>No social found with the id {args[1]}</p>
                </div>
        }

    }
    else {
        return <div>
            <CommandUsage usage={"socials go <social-no>"} command={command}></CommandUsage>
        </div>
    }
};

export default SocialsCommand;