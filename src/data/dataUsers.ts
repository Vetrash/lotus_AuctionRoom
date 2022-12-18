const users = {
  0: {
    name: 'Участник №1',
    proposal: {
      events: '-',
      productionTime: 80,
      warranty: 24,
      paymentTerms: 0.3,
      price: [
        '3,700,000',
        '-25,000',
        '2,475,000',
      ],
    },
  },
  1: {
    name: 'Участник №2',
    proposal: {
      events: '-',
      productionTime: 90,
      warranty: 24,
      paymentTerms: 1,
      price: [
        '3,200,000',
        '-25,000',
        '2,475,000',
      ],
    },
  },
  2: {
    name: 'Участник №3',
    proposal: {
      events: '-',
      productionTime: 75,
      warranty: 22,
      paymentTerms: 0.6,
      price: [
        '2,800,000',
        '-25,000',
        '2,475,000',
      ],
    },
  },
  3: {
    name: 'Участник №4',
    proposal: {
      events: '-',
      productionTime: 120,
      warranty: 36,
      paymentTerms: 0.5,
      price: [
        '2,500,000',
        '-25,000',
        '2,475,000',
      ],
    },
  },
};

type user = {
  name: string,
  proposal: {
    events: string,
    productionTime: number,
    warranty: number,
    paymentTerms: number,
    price: string[]
  },
}

// eslint-disable-next-line import/prefer-default-export
export const getArrUsers = (): user[] => Object.values(users);
