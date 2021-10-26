import React from 'react';

export const Message = ({ text, author }) => {
    return (
        <div>
            {author}: {text}
        </div>
    );
}