import React from 'react';

const CommandLine = (props) => {
    const command = props.command;

    return (
        <div style={{ paddingTop: 10 }}>
            <p>
                <span class="prefix">visitor</span>@<span class="secondary">thedannicraft.de</span>:~$ {command}
            </p>
        </div>
    );
};

export default CommandLine;