export const mockIngredients = {
  ingredients: [
    
     {
        _id: "643d69a5c3f7b9001cfa093c",
        name: "Краторная булка N-200i",
        type: "bun",
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v: 0
      },
      {
        _id: "643d69a5c3f7b9001cfa093e",
        name: "Филе Люминесцентного тетраодонтимформа",
        type: "main",
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: "https://code.s3.yandex.net/react/code/meat-03.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
        __v: 0
      },
      {
      _id: "643d69a5c3f7b9001cfa0943",
      name: "Соус фирменный Space Sauce",
      type: "sauce",
      proteins: 50,
      fat: 22,
      carbohydrates: 11,
      calories: 14,
      price: 80,
      image: "https://code.s3.yandex.net/react/code/sauce-04.png",
      image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
      __v: 0
      }
  ],
  loading: false,
  error: null
};

export const mockUser = {
  user: {
    email: 'Pushok_vit@mail.ru',
    name: 'Настя'
  }
};

export const mockFeed = {
  orders: [
    {
      _id: '6762dd29750864001d372503',
      number: 79054,
      name: 'Краторный био-марсианский бургер',
      status: 'done',
      updatedAt: '2025-05-27T14:51:13.288Z',
      createdAt: '2025-05-27T14:51:17.144Z',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093c'
      ]
    }   
  ],
  total: 78952,
  totalToday: 203
};

export const mockOrderByNumber = {
  orders: [
    {
      _id: '6692eecd119d45001b4f8b19',
      number: 45713,
      name: 'Краторный spicy био-марсианский бургер',
      status: 'done',
      updatedAt: '2025-05-27T22:50:50.662Z',
      createdAt: '2025-05-27T22:50:50.190Z',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa093c'
      ]
    }
  ]
};

export const mockOrders = [
  {
    _id: '6692eecd119d45001b4f8b19',
    number: 45713,
    name: 'Краторный spicy био-марсианский бургер',
    status: 'done',
    updatedAt: '2025-05-27T22:50:50.662Z',
    createdAt: '2025-05-27T22:50:50.190Z',
    ingredients: [
      '643d69a5c3f7b9001cfa093c',
      '643d69a5c3f7b9001cfa0941',
      '643d69a5c3f7b9001cfa0942',
      '643d69a5c3f7b9001cfa093c'
    ]
  },
  {
    _id: '6679b63f856777001bb1d735',
    number: 44134,
    name: 'Флюоресцентный люминесцентный био-марсианский бургер',
    status: 'done',
    updatedAt: '2025-05-26T18:09:04.004Z',
    createdAt: '2025-05-26T18:09:03.528Z',
    ingredients: [
      '643d69a5c3f7b9001cfa093d',
      '643d69a5c3f7b9001cfa0941',
      '643d69a5c3f7b9001cfa093e',
      '643d69a5c3f7b9001cfa093d'
    ]
  }
];

export const mockOrder = {
  _id: '6696c323119d45001b4f94a0',
  ingredients: ['643d69a5c3f7b9001cfa093c', '643d69a5c3f7b9001cfa093c'],
  status: 'done',
  name: 'Краторный бургер',
  number: 45988,
  updatedAt: '2025-05-26T18:59:48.340Z',
  createdAt: '2025-05-26T18:59:47.886Z'
};

export const mockBun = {
  _id: '643d69a5c3f7b9001cfa093c',
  name: 'Краторная булка N-200i',
  type: 'bun',
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: 'https://code.s3.yandex.net/react/code/bun-02.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png'
};

export const mockTopping = {
        _id: "643d69a5c3f7b9001cfa093e",
        name: "Филе Люминесцентного тетраодонтимформа",
        type: "main",
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: "https://code.s3.yandex.net/react/code/meat-03.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
};
