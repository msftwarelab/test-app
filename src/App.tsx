import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import Accordion from "./components/accordion";
import { mockup, STATUS } from "./constants/constants";

interface AccordionData {
  key: number;
  title: string;
  data: Array<{
    id: number;
    data: string;
    status: number;
    selected: boolean;
  }>;
  isOpen: boolean;
}

function App(): JSX.Element {
  const backgroundStyle = {
    background: `url(/images/bg-image.jpg) no-repeat center center / cover`,
  };

  const [accordions, setAccordion] = useState<AccordionData[]>(mockup);
  const [scenario, setScenario] = useState<string>("FZkBxP08kvp3");

  const toggleAccordion = (accordionkey: number): void => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  const onRowSelected = (accordionkey: number, rowId: number): void => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        accord.data = accord.data.map((item) => ({
          ...item,
          selected: item.id === rowId,
          status:
            item.id === rowId && item.status === STATUS.INITIAL
              ? STATUS.UNBROKEN
              : item.status,
        }));
        return { ...accord };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  const onDotClick = (accordionkey: number, rowId: number): void => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        accord.data = accord.data.map((item) => ({
          ...item,
          status:
            item.id === rowId
              ? item.status === STATUS.INITIAL
                ? STATUS.UNBROKEN
                : item.status === STATUS.UNBROKEN
                ? STATUS.BROKEN
                : STATUS.UNBROKEN
              : item.status,
        }));
        return { ...accord };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  const onGenerateRandom = (): void => {
    const accordionkey = getRandomElement(accordions).key;
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        const rowId = getRandomElement(accord.data).id;
        accord.data = accord.data.map((item) => ({
          ...item,
          selected: item.id === rowId,
          status:
            item.id === rowId && item.status === STATUS.INITIAL
              ? STATUS.UNBROKEN
              : item.status,
        }));
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  const generateRandomString = (length: number): string => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const getRandomElement = (array: any[]): any => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const onGenerateScenario = (): void => {
    setScenario(generateRandomString(12));
  };

  const onCopyClipboard = (): void => {
    navigator.clipboard.writeText(scenario);
    toast("Copied.");
  };

  const onReset = (): void => {
    setAccordion([...mockup]);
  };

  return (
    <div className="app" style={backgroundStyle}>
      <div className="block sm:flex h-screen bebas-neue text-xl">
        <div className="w-80 xs:w-96">
          <div>
            <button
              className="w-80 xs:w-96 text-xl bg-primary hover:bg-primaryHover h-12 border border-black text-white"
              onClick={onGenerateRandom}
            >
              Generate random
            </button>
            <button
              className="w-80 xs:w-96 text-xl bg-primary hover:bg-primaryHover h-12 border border-black text-white"
              onClick={onReset}
            >
              Reset settings
            </button>
          </div>
          <div>
            {accordions.map((accordion) => (
              <Accordion
                id={accordion.key}
                title={accordion.title}
                data={accordion.data}
                isOpen={accordion.isOpen}
                toggleAccordion={() => toggleAccordion(accordion.key)}
                onRowSelected={onRowSelected}
                onDotClick={onDotClick}
              />
            ))}
          </div>
        </div>
        <div className="block td:flex">
          <button
            className="w-80 xs:w-96 text-xl h-12 border bg-primary hover:bg-primaryHover text-white border-black"
            onClick={onGenerateScenario}
          >
            New scenario
          </button>
          <div className="flex w-80 xs:w-96">
            <div className="text-xl w-80 h-12 border bg-secondary border-black items-center flex justify-center">
              {scenario}
            </div>
            <div
              className="bg-secondary w-16 h-12 flex items-center justify-center border border-black p-1 cursor-pointer"
              onClick={onCopyClipboard}
            >
              <img
                src="/icons/1x/copy.png"
                className="w-10 h-10"
                alt="clipboard"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 flex p-8 gap-9 bebas-neue">
        <div className="cursor-pointer">
          <img
            src="/icons/svg/left_click.svg"
            alt="rotate"
            className="w-12 h-12 mx-auto"
          />
          <p className="text-sm text-center">Rotate</p>
        </div>
        <div className="cursor-pointer">
          <img
            src="/icons/svg/scroll.svg"
            alt="rotate"
            className="w-12 h-12 mx-auto"
          />
          <p className="text-sm text-center">Zoom</p>
        </div>
        <div className="cursor-pointer">
          <img
            src="/icons/svg/right_click.svg"
            alt="rotate"
            className="w-12 h-12 mx-auto"
          />
          <p className="text-sm text-center">Move</p>
        </div>
        <div className="cursor-pointer">
          <img
            src="/icons/svg/reset_camera.svg"
            alt="rotate"
            className="w-12 h-12 mx-auto"
          />
          <p className="text-sm text-center">Reset Camera</p>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
