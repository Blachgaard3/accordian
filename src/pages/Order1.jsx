
import React from 'react';
import Accordion from '../components/Accordion';

function Order1() {
  const accordionItems = [
    {
      title: 'Vælg antal personer',
      content: '',
    },
    {
      title: 'Vælg dit bord',
      content: '',
    },
    {
      title: 'Vælg dato og tidspunkt',
      content: '',
    },
    {
        title: 'Kontaktoplysninger',
        content: '',
      }
  ];

  return (
    <div className="App">
      <Accordion items={accordionItems} />
    </div>
  );
}

export default Order1;