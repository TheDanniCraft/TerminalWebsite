import React from 'react';

const LinkEntry = (props) => {
    const label = props.label;
    const color = props.color;
    const link = props.link;

    return (
        <p>
            <a style={{ color: color }} href={link}>{label}</a>
        </p>
    );
};

export default LinkEntry;