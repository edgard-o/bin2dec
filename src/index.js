import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {

    const [binaryText, setBinaryText] = useState('');
    const [decimalText, setDecimalText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (binaryText.match(/^[0-1]+$/g) === null) {
            setErrorMessage('Enter either 0 or 1')

            return
        }

        setErrorMessage('')

        const reversedBinaryText = binaryText
            .split('')
            .map(Number)

        const result = reversedBinaryText.reduce(
            (accumulator, currentValue, idx) =>
                accumulator + currentValue * Math.pow(2, idx)
        )

        setDecimalText(result)
    };

    return (
        <>
            <h1>Binary to Decimal Converter</h1>

            <form onSubmit={onFormSubmit} class="col s6">
                {errorMessage && <span style={{ color: 'red' }}> {errorMessage} </span>}
                <br />
                <div class="input-field col s6">
                    <input
                        className="validate"
                        id="binary"
                        autoComplete="off"
                        type="text" name="binary"
                        value={binaryText}
                        onChange={e => setBinaryText(e.target.value)}
                        maxLength="8"
                    />
                    <label htmlFor="binary">
                        Binary Input
                    </label>
                </div>

                <br />
                <input type="submit" value="Submit" />
                <br />
                <label>
                    Decimal output
                    <input type="text" name="decimal" value={decimalText} disabled />
                </label>
            </form>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
