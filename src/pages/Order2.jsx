
import React from 'react';
import Accordion from '../components/Accordion2';

function Order2() {
  const accordionItems = [
    {
      title: 'Section 1',
      content: 'Content for section 1.',
    },
    {
      title: 'Section 2',
      content: 'Content for section 2.',
    },
    {
      title: 'Section 3',
      content: 'Content for section 3.',
    },
    {
        title: 'Section 4',
        content: 'Content for section 4.',
      }
  ];

  return (
    <div className="App">
      <Accordion items={accordionItems} />
    </div>
  );
}

export default Order2;