import React, { useState } from 'react';
import { caesarCipherUtil, CaesarCipherParams } from '../utils/caesarCipher'; // Import the caesarCipherReduce function and CaesarCipherParams type

const CaesarCipherForm: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [shift, setShift] = useState<string>('5');
  const [direction, setDirection] = useState<string>('forward');
  const [output, setOutput] = useState<string>('');

  // Handle input text change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Handle shift value change
  const handleShiftChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setShift(value);
      setOutput('');
    }
  };

  // Handle direction change
  const handleDirectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDirection(e.target.value);
  };

// Handle form submission
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const shiftValue = parseInt(shift, 10) || 0;
    const params: CaesarCipherParams = { inputStr: input, shift: shiftValue, forward: direction === 'forward' };
    setOutput(caesarCipherUtil(params));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input">Input </label>
          <input id="input" type="text" value={input} onChange={handleInputChange} placeholder="Enter text to encrypt"/>
        </div>
        <div>
          <label htmlFor="shift">Shift </label>
          <input id="shift" type="text" value={shift} onChange={handleShiftChange} placeholder="Enter shift number"/>
        </div>
        <div>
          <label htmlFor="direction">Direction </label>
          <div className="custom-select-wrapper">
            <select id="direction" value={direction} onChange={handleDirectionChange}>
              <option value="forward">Forward</option>
              <option value="backward">Backward</option>
            </select>
          </div>
        </div>
        <button type="submit">Generate Cipher</button>
      </form>
      <div>
        <h3>Output </h3>
        <p>{output}</p>
      </div>
    </div>
  );
};

export default CaesarCipherForm;
