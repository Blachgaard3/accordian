import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export function DefaultAccordion() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
    <section className="box-border h-16 w- fixed top-0 left-0 right-0">
      <Accordion open={open === 1} className="	position: absolute; bg-teal-200  rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`  ${
            open === 1 ? "" : ""
          }`}
        >
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
        
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="	position: relative; bg-teal-200 mb- rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={` ${
            open === 2 ? "" : ""
          }`}
        >
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly

        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="	position: relative; bg-teal-200 mb- rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={` ${
            open === 2 ? "" : ""
          }`}
        >
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly

        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} className="	position: relative; bg-teal-200 mb- rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={` ${
            open === 2 ? "" : ""
          }`}
        >
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly

        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} className="	position: relative; bg-teal-200 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className={` ${
            open === 3 ? "" : ""
          }`}
        >
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody className={`pt-0 text-base font-normal ${open !== 5 && "hidden"}`}>
  We&apos;re not always in the position that we want to be at. We&apos;re constantly
</AccordionBody>

      </Accordion>
      </section>
    </>
  );
}