const products = [
  {
  name: 'Сибирская  • Мини',
    mountPoint: "#section-catalog-1 .mount-point",
    img: './public/assets/images/catalog/2_4_Metra.jpg',
    description: [
      ['Длина', '4.0 метра'],
      ['Ширина', '2.0 и 2.4 метра'],
      ['Высота', 'до 2.1 метра'],
      ['Профиль', '20х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
     [1, 275],
      [0.67, 289],
      [0.5, 346]
    ],
    onSale: true,
  },
  {
    name: 'Сибирская • Титан ХХL',
    mountPoint: "#section-catalog-1 .mount-point",
    img: './public/assets/images/catalog/1.jpg',
    description: [
      ['Длина', '6.0 метров'],
      ['Ширина', '3.0 метра'],
      ['Высота', '2.1 метра'],
      ['Профиль', '40х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
      [1, 480],
      [0.67, 514],
      [0.5, 548],
    ],
    onSale: true,
  },
  {
    name: 'Сибирская • Двустворчатая',
    mountPoint: "#section-catalog-1 .mount-point",
    img: './public/assets/images/catalog/3_5_metra.jpg',
    description: [
      ['Длина', '8.0 метров'],
      ['Ширина', '3.5 метра'],
      ['Высота', '2.1 метра'],
      ['Профиль', '40х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
      [1, 705],
      [0.67, 750],
      [0.5, 796],
    ],
    onSale: true,
  },
  {
   name: 'Сибирская • Домик',
 mountPoint: "#section-catalog-1 .mount-point",
    img: './public/assets/images/catalog/DK.jpg',
    description: [
      ['Длина', 'от 2 до 10 метров'],
      ['Ширина', '2.85 метра'],
      ['Высота', '2.4 метра'],
      ['Профиль', '20х20 и 40х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
       [1, 600],
      [0.67, 670],
    ],
    onSale: true,
  },
    {
    name: 'Сибирская  • Мини',
    mountPoint: "#section-catalog-5 .mount-point",
    img: './public/assets/images/catalog/2_4_Metra.jpg',
    description: [
      ['Длина', '4.0 метра'],
      ['Ширина', '2.0 и 2.4 метра'],
      ['Высота', 'до 2.1 метра'],
      ['Профиль', '20х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
      [1, 275],
      [0.67, 289],
      [0.5, 319]
    ],
    onSale: true,
  },
  {
    name: 'Сибирская  • Мини',
    mountPoint: "#section-catalog-5 .mount-point",
    img: './public/assets/images/catalog/2_4_Metra.jpg',
    description: [
    ['Длина', '6.0 метров'],
      ['Ширина', '2.0 и 2.4 метра'],
      ['Высота', 'до 2.1 метра'],
      ['Профиль', '20х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
     [1, 356],
     [0.67, 377],
     [0.5, 417],
    ],
    onSale: true,
  },
  {
    name: 'Сибирская  • Мини',
    mountPoint: "#section-catalog-5 .mount-point",
    img: './public/assets/images/catalog/2_4_Metra.jpg',
    description: [
     ['Длина', '8.0 метров'],
      ['Ширина', '2.0 и 2.4 метра'],
      ['Высота', 'до 2.1 метра'],
      ['Профиль', '20х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
      [1, 418],
      [0.67, 465],
      [0.5, 515],
    ],
    onSale: true,
  },
  {
    name: 'Сибирская  • Мини',
    mountPoint: "#section-catalog-5 .mount-point",
    img: './public/assets/images/catalog/2_4_Metra.jpg',
    description: [
     ['Длина', '10.0 метров'],
      ['Ширина', '2.0 и 2.4 метра'],
      ['Высота', 'до 2.1 метра'],
      ['Профиль', '20х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
      [1, 518],
      [0.67, 555],
      [0.5, 612],
    ],
    onSale: true,
  },
  {
    name: 'Сибирская  • Сверхпрочная',
    mountPoint: "#section-catalog-2 .mount-point",
    img: './public/assets/images/catalog/3_Metra_20_20.jpg',
    description: [
      ['Длина', '4.0 метра'],
      ['Ширина', '3.0 метра'],
      ['Высота', '2.1 метра'],
      ['Профиль', '20х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
      [1, 312],
      [0.67, 327],
      [0.5, 344],
    ],
    onSale: true,
  },
  {
    name: 'Сибирская  • Сверхпрочная',
    mountPoint: "#section-catalog-2 .mount-point",
    img: './public/assets/images/catalog/3_Metra_20_20.jpg',
    description: [
    ['Длина', '6.0 метров'],
      ['Ширина', '3.0 метра'],
      ['Высота', '2.1 метра'],
      ['Профиль', '20х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
      [1, 414],
      [0.67, 437],
      [0.5, 462],
    ],
    onSale: true,
  },
  {
    name: 'Сибирская  • Сверхпрочная',
    mountPoint: "#section-catalog-2 .mount-point",
    img: './public/assets/images/catalog/3_Metra_20_20.jpg',
    description: [
      ['Длина', '8.0 метров'],
      ['Ширина', '3.0 метра'],
      ['Высота', '2.1 метра'],
      ['Профиль', '20х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
      [1, 515],
      [0.67, 547],
      [0.5, 578],
    ],
    onSale: true,
  },
  {
    name: 'Сибирская  • Сверхпрочная',
    mountPoint: "#section-catalog-2 .mount-point",
    img: './public/assets/images/catalog/3_Metra_20_20.jpg',
    description: [
      ['Длина', '10.0 метров'],
      ['Ширина', '3.0 метра'],
      ['Высота', '2.1 метра'],
      ['Профиль', '20х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
      [1, 618],
      [0.67, 655],
      [0.5, 694],
    ],
    onSale: true,
  },
  {
    name: 'Сибирская • Титан ХХL',
    mountPoint: "#section-catalog-2 .mount-point",
    img: './public/assets/images/catalog/1.jpg',
    description: [
      ['Длина', '4.0 метра'],
      ['Ширина', '3.0 метра'],
      ['Высота', '2.1 метра'],
      ['Профиль', '40х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
     [1, 370],
      [0.67, 393],
      [0.5, 416],
    ],
    onSale: true,
  },
  {
    name: 'Сибирская • Титан ХХL',
    mountPoint: "#section-catalog-2 .mount-point",
    img: './public/assets/images/catalog/1.jpg',
    description: [
      ['Длина', '6.0 метров'],
      ['Ширина', '3.0 метра'],
      ['Высота', '2.1 метра'],
      ['Профиль', '40х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
      [1, 480],
      [0.67, 514],
      [0.5, 548],
    ],
    onSale: true,
  },
  {
    name: 'Сибирская • Титан ХХL',
    mountPoint: "#section-catalog-2 .mount-point",
    img: './public/assets/images/catalog/1.jpg',
    description: [
      ['Длина', '8.0 метров'],
      ['Ширина', '3.0 метра'],
      ['Высота', '2.1 метра'],
      ['Профиль', '40х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
      [1, 590],
      [0.67, 636],
      [0.5, 683],
    ],
    onSale: true,
  },
  {
    name: 'Сибирская • Титан ХХL',
    mountPoint: "#section-catalog-2 .mount-point",
    img: './public/assets/images/catalog/1.jpg',
    description: [
      ['Длина', '10.0 метров'],
      ['Ширина', '3.0 метра'],
      ['Высота', '2.1 метра'],
      ['Профиль', '40х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
      [1, 700],
      [0.67, 759],
      [0.5, 815],
    ],
    onSale: true,
  },
  {
    name: 'Сибирская • Двустворчатая',
    mountPoint: "#section-catalog-3 .mount-point",
    img: './public/assets/images/catalog/3_5_metra.jpg',
    description: [
      ['Длина', '4.0 метра'],
      ['Ширина', '3.5 метра'],
      ['Высота', '2.1 метра'],
      ['Профиль', '40х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
      [1, 455],
      [0.67, 477],
      [0.5, 500],
    ],
    onSale: true,
  },
  {
    name: 'Сибирская • Двустворчатая',
     mountPoint: "#section-catalog-3 .mount-point",
    img: './public/assets/images/catalog/3_5_metra.jpg',
    description: [
      ['Длина', '6.0 метров'],
      ['Ширина', '3.5 метра'],
      ['Высота', '2.1 метра'],
      ['Профиль', '40х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
      [1, 579],
      [0.67, 614],
      [0.5, 651],
    ],
    onSale: true,
  },
  {
    name: 'Сибирская • Двустворчатая',
     mountPoint: "#section-catalog-3 .mount-point",
    img: './public/assets/images/catalog/3_5_metra.jpg',
    description: [
      ['Длина', '8.0 метров'],
      ['Ширина', '3.5 метра'],
      ['Высота', '2.1 метра'],
      ['Профиль', '40х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
      [1, 705],
      [0.67, 750],
      [0.5, 796],
    ],
    onSale: true,
  },
  {
    name: 'Сибирская • Двустворчатая',
    mountPoint: "#section-catalog-3 .mount-point",
    img: './public/assets/images/catalog/3_5_metra.jpg',
    description: [
      ['Длина', '10.0 метров'],
      ['Ширина', '3.5 метра'],
      ['Высота', '2.1 метра'],
      ['Профиль', '40х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
      [1, 828],
      [0.67, 886],
      [0.5, 942],
    ],
    onSale: true,
  },
  {
    name: 'Сибирская • Двустворчатая',
     mountPoint: "#section-catalog-4 .mount-point",
    img: './public/assets/images/catalog/4_metra.jpg',
    description: [
      ['Длина', '4.0 метра'],
      ['Ширина', '4.0 метра'],
      ['Высота', '2.1 метра'],
      ['Профиль', '40х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
      [1, 447],
      [0.67, 468],
      [0.5, 488],
    ],
    onSale: true,
  },
  {
    name: 'Сибирская • Двустворчатая',
   mountPoint: "#section-catalog-4 .mount-point",
    img: './public/assets/images/catalog/4_metra.jpg',
    description: [
      ['Длина', '6.0 метров'],
      ['Ширина', '4.0 метра'],
      ['Высота', '2.1 метра'],
      ['Профиль', '40х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
      [1, 580],
      [0.67, 616],
      [0.5, 651],
    ],
    onSale: true,
  },
  {
    name: 'Сибирская • Двустворчатая',
 mountPoint: "#section-catalog-4 .mount-point",
    img: './public/assets/images/catalog/4_metra.jpg',
    description: [
      ['Длина', '8.0 метров'],
      ['Ширина', '4.0 метра'],
      ['Высота', '2.1 метра'],
      ['Профиль', '40х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
      [1, 713],
      [0.67, 758],
      [0.5, 803],
    ],
    onSale: true,
  },
  {
    name: 'Сибирская • Двустворчатая',
   mountPoint: "#section-catalog-4 .mount-point",
    img: './public/assets/images/catalog/4_metra.jpg',
    description: [
      ['Длина', '10.0 метров'],
      ['Ширина', '4.0 метра'],
      ['Высота', '2.1 метра'],
      ['Профиль', '40х20 оцинкованный'],
      ['Комплектация', '2 двери, 2 форточки'],
      ['Поликарбонат', 'С защитой от УФ'],
    ],
    prices: [
     [1, 845],
      [0.67, 902],
      [0.5, 959],
    ],
    onSale: true,
  }, 
]