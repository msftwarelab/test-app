import React from "react";
import { STATUS } from "../constants/constants";

interface AccordionProps {
  id: number;
  title: string;
  data: Array<{
    id: number;
    data: string;
    selected: boolean;
    status: STATUS;
  }>;
  isOpen: boolean;
  toggleAccordion: () => void;
  onRowSelected: (accordionId: number, rowId: number) => void;
  onDotClick: (accordionId: number, rowId: number) => void;
}

export default function Accordion(props: AccordionProps): JSX.Element {
  const isBroken = props.data.some((d) => d.status === STATUS.BROKEN);
  const isGreen = props.data.every((d) => d.status === STATUS.UNBROKEN);

  return (
    <div className="border border-black">
      <button
        className="w-full p-4 text-left hover:bg-gray-300 transition duration-300 flex justify-between bg-secondary"
        onClick={props.toggleAccordion}
      >
        <div className="flex justify-between w-full text-xl">
          {props.title}
          <div className="flex justify-center items-center gap-2">
            <div
              className={`w-4 h-4 rounded-full border border-black opacity-50 ${
                isBroken ? "bg-red-500" : isGreen ? "bg-green-500" : ""
              }`}
            ></div>
            <span
              className={`float-right transform ${
                props.isOpen ? "rotate-180" : "rotate-0"
              } transition-transform duration-300`}
            >
              &#9660;
            </span>
          </div>
        </div>
      </button>
      {props.isOpen && (
        <div className="bg-primary">
          {props.data &&
            props.data.map((d) => (
              <div
                className={`flex justify-between text-lg h-12 border border-black items-center px-4 cursor-pointer ${
                  d.selected
                    ? "bg-primary text-white hover:bg-primaryHover"
                    : "bg-secondary hover:bg-secondaryHover"
                }`}
                onClick={() => props.onRowSelected(props.id, d.id)}
                key={d.id}
              >
                {d.data}
                <div className="flex justify-center items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full border border-black opacity-50 ${
                      d.status === STATUS.INITIAL
                        ? ""
                        : d.status === STATUS.BROKEN
                        ? "bg-red-500"
                        : "bg-green-500"
                    }`}
                    onClick={() => props.onDotClick(props.id, d.id)}
                  ></div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
