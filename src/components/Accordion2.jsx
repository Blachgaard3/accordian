// src/components/Accordion.js
import React, { useState } from 'react';

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [isLocked2, setIsLocked2] = useState(true);
  const [isLocked3, setIsLocked3] = useState(true);
  const [isLocked4, setIsLocked4] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [isUnlock2Disabled, setIsUnlock2Disabled] = useState(true);

  const handleToggle = (index) => {
    if (index === 0 || (index === 1 && !isLocked2) || (index === 2 && !isLocked3) || (index === 3 && !isLocked4)) {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  const handleUnlock2 = () => {
    setIsLocked2(false);
  };

  const handleUnlock3 = () => {
    setIsLocked3(false);
  };

  const handleUnlock4 = () => {
    setIsLocked4(false);
  };

  const handleSectionColorChange = (index) => {
    document.getElementById(`section-title-${index}`).style.color = 'green';
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsUnlock2Disabled(!value.trim());
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            className="bg-gray-200 p-4 cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <h2
              id={`section-title-${index}`}
              className="text-lg font-semibold"
            >
              {item.title}
              <span className="float-right">
                {openIndex === index ? '▲' : '▼'}
              </span>
            </h2>
          </div>
          {openIndex === index && (
            <div className="bg-white p-4">
              {item.content}
              {index === 0 && (
                <div>
                  <label htmlFor="inputNumber">Indtast antal personer: </label>
                  <input
                    type="number"
                    id="inputNumber"
                    value={inputValue}
                    onChange={handleInputChange}
                    style={{ border: '1px solid #ccc', padding: '5px' }}
                  />
                  <button
                    onClick={() => { handleUnlock2(); handleSectionColorChange(index); }}
                    disabled={isUnlock2Disabled}
                  >
                    Unlock Section 2
                  </button>
                </div>
              )}
              {index === 1 && !isLocked2 && (
                <div>
                  <p>Content for Section 2</p>
                  <button onClick={() => { handleUnlock3(); handleSectionColorChange(index); }}>
                    Unlock Section 3
                  </button>
                </div>
              )}
              {index === 2 && !isLocked3 && (
                <div>
                  <p>Content for Section 3</p>
                  <button onClick={() => { handleUnlock4(); handleSectionColorChange(index); }}>
                    Unlock Section 4
                  </button>
                </div>
              )}
              {index === 3 && !isLocked4 && (
                <div>
                  <p>Content for Section 4</p>
                  <button onClick={() => handleSectionColorChange(index)}>
                    Do Something in Section 4
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;