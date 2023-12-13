import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [isLocked2, setIsLocked2] = useState(true);
  const [isLocked3, setIsLocked3] = useState(true);
  const [isLocked4, setIsLocked4] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [isUnlock2Disabled, setIsUnlock2Disabled] = useState(true);
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [isUnlock4Disabled, setIsUnlock4Disabled] = useState(true);
  const [inputTime, setInputTime] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [isSection3NextDisabled, setIsSection3NextDisabled] = useState(true);

  const handleToggle = (index) => {
    if (index === 0 || (index === 1 && !isLocked2) || (index === 2 && !isLocked3) || (index === 3 && !isLocked4)) {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  const handleUnlock2 = () => {
    setIsLocked2(false);
    setOpenIndex(1); // Åbn Section 2
  };

  const handleUnlock3 = () => {
    setIsLocked3(false);
    setOpenIndex(2); // Åbn Section 3
  };

  const handleUnlock4 = () => {
    setIsLocked4(false);
    setOpenIndex(3); // Åbn Section 4
  };

  const handleSectionColorChange = (index) => {
    document.getElementById(`section-title-${index}`).style.color = 'green';

    if (index === 3 && !isLocked4) {
      // Navigate to the receipt page when Do Something in Section 4 is clicked
      history.push('/receipt');
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^[1-9]\d*$/.test(value) || value === '') {
      setInputValue(value);
      setIsUnlock2Disabled(!value.trim());
    }
  };

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
    checkUnlock4Conditions();
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
    checkUnlock4Conditions();
  };

  const handlePhoneChange = (e) => {
    setPhoneValue(e.target.value);
    checkUnlock4Conditions();
  };

  const checkUnlock4Conditions = () => {
    setIsUnlock4Disabled(!nameValue.trim() || !emailValue.trim() || !phoneValue.trim());
  };

  const generateTimeOptions = () => {
    const options = [];
    const startTime = 11 * 60 + 30; // Start tidspunktet i minutter (11:30)
    const endTime = 21 * 60; // Slut tidspunktet i minutter (21:00)

    for (let i = startTime; i <= endTime; i += 15) {
      const hours = Math.floor(i / 60);
      const minutes = i % 60;
      const time = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
      options.push(<option key={i} value={time}>{time}</option>);
    }
    return options;
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setInputDate(selectedDate);
    setIsSection3NextDisabled(!selectedDate || !inputTime);
  };

  const handleSection3Next = () => {
    if (!isSection3NextDisabled) {
      handleUnlock4();
      handleSectionColorChange(2);
    }
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
                    onClick={() => {
                      if (!isUnlock2Disabled) {
                        handleUnlock2();
                        handleSectionColorChange(index);
                      }
                    }}
                    disabled={isUnlock2Disabled}
                  >
                    {isUnlock2Disabled ? 'Udfyld felter' : 'Næste'}
                  </button>
                </div>
              )}
              {index === 1 && !isLocked2 && (
                <div>
                  <button onClick={() => { handleUnlock3(); handleSectionColorChange(index); }}>
                    Unlock Section 3
                  </button>
                </div>
              )}
              {index === 2 && !isLocked3 && (
                <div>
                  <div>
                    <label htmlFor="inputDate">Vælg dato: </label>
                    <input
                      type="date"
                      id="inputDate"
                      min={getCurrentDate()}
                      onChange={handleDateChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="inputTime">Vælg klokkeslæt: </label>
                    <select
                      id="inputTime"
                      value={inputTime}
                      onChange={(e) => setInputTime(e.target.value)}
                    >
                      <option value="" disabled>
                        Vælg tidspunkt
                      </option>
                      {generateTimeOptions()}
                    </select>
                  </div>
                  <button
                    onClick={handleSection3Next}
                    disabled={isSection3NextDisabled}
                  >
                    {isSection3NextDisabled ? 'Udfyld felter' : 'Næste'}
                  </button>
                </div>
              )}
              {index === 3 && !isLocked4 && (
                <div>
                  <div>
                    <label htmlFor="inputName">Navn: </label>
                    <input
                      type="text"
                      id="inputName"
                      value={nameValue}
                      onChange={handleNameChange}
                      style={{ border: '1px solid #ccc', padding: '5px' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="inputEmail">Email: </label>
                    <input
                      type="email"
                      id="inputEmail"
                      value={emailValue}
                      onChange={handleEmailChange}
                      style={{ border: '1px solid #ccc', padding: '5px' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="inputPhone">Telefonnr: </label>
                    <input
                      type="tel"
                      id="inputPhone"
                      value={phoneValue}
                      onChange={handlePhoneChange}
                      style={{ border: '1px solid #ccc', padding: '5px' }}
                    />
                  </div>
                  <button
                    onClick={() => isUnlock4Disabled || handleSectionColorChange(index)}
                    disabled={isUnlock4Disabled}
                  >
                    {isUnlock4Disabled ? (
                      <span>Udfyld alle felter</span>
                    ) : (
                      <Link to="/Kvitering">Godkend</Link>
                    )}
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