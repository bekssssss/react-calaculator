import React from 'react';
import Button from './button';

function Keypad({ onButtonClick }) {
    const buttons = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/'];

    return (
        <div className="keypad">
            {buttons.map(button => (
                <Button
                    key={button}
                    value={button}
                    onClick={() => onButtonClick(button)}
                />
            ))}
        </div>
    );
}

export default Keypad;
