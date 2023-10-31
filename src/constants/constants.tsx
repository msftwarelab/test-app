enum STATUS {
    INITIAL = 0,
    UNBROKEN = 1,
    BROKEN = 2,
  }
  
  interface MockupItem {
    id: number;
    data: string;
    status: STATUS;
    selected: boolean;
  }
  
  interface AccordionItem {
    key: number;
    title: string;
    data: MockupItem[];
    isOpen: boolean;
  }
  
  const mockup: AccordionItem[] = [
    {
      key: 1,
      title: "Wheels",
      data: [
        {
          id: 1,
          data: "Front Left Wheel",
          status: STATUS.INITIAL,
          selected: false,
        },
        {
          id: 2,
          data: "Front Right Wheel",
          status: STATUS.INITIAL,
          selected: false,
        },
        {
          id: 3,
          data: "Middle Right Wheel",
          status: STATUS.INITIAL,
          selected: false,
        },
        {
          id: 4,
          data: "Rear Right Wheel",
          status: STATUS.INITIAL,
          selected: false,
        },
        {
          id: 5,
          data: "Rear Left Wheel",
          status: STATUS.INITIAL,
          selected: false,
        },
      ],
      isOpen: false,
    },
    {
      key: 2,
      title: "Lights",
      data: [
        {
          id: 1,
          data: "Front Left Lights",
          status: STATUS.INITIAL,
          selected: false,
        },
        {
          id: 2,
          data: "Front Right Lights",
          status: STATUS.INITIAL,
          selected: false,
        },
        {
          id: 3,
          data: "Back Left Lights",
          status: STATUS.INITIAL,
          selected: false,
        },
        {
          id: 4,
          data: "Back Right Lights",
          status: STATUS.INITIAL,
          selected: false,
        },
      ],
      isOpen: false,
    },
    {
      key: 3,
      title: "Cargo",
      data: [
        {
          id: 1,
          data: "Cargo",
          status: STATUS.INITIAL,
          selected: false,
        },
        // Add other data items for Cargo
      ],
      isOpen: false,
    },
  ];
  
  export { STATUS, mockup };
  