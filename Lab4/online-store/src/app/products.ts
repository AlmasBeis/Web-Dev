export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  photo: string;
  link: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 14 Pro Max 1Tb Dual Sim черный',
    price: 1_170_000,
    description: `    Технология NFC: Да
      Цвет: черный
      Тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы
      Диагональ: 6.7 дюйм
      Размер оперативной памяти: 6 ГБ
      Процессор: 6-ядерный Apple A16 Bionic
      Объем встроенной памяти: 1024 ГБ
      Емкость аккумулятора: 3095 мАч`,
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h3e/63792875536414/apple-iphone-14-pro-max-1tb-chernyi-107116389-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-dual-sim-chernyi-107116389/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toril9wgzK9_jncbcvkcaEXvpkCtrMlOzFxdbq9WMRr-u0eL5ttOzScnBoC9IkQAvD_BwE#!/item',
    rating: 5.0,
  },
  {
    id: 2,
    name: 'Xiaomi 12 12 ГБ/256 ГБ серый',
    price: 334_990,
    description: `Технология NFC: Да
      Цвет: серый
      Тип экрана: Gorilla Glass Victus
      Диагональ: 6.28 дюйм
      Размер оперативной памяти: 12 ГБ
      Процессор: Snapdragon 8 Gen 1
      Объем встроенной памяти: 256 ГБ
      Емкость аккумулятора: 4500 мАч`,
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hab/hb9/50457569951774/xiaomi-12-12-256gb-seryj-104706995-1.jpg',
    link: 'https://kaspi.kz/shop/p/xiaomi-12-12-gb-256-gb-seryi-104706995/?c=750000000#!/item',
    rating: 5.0,
  },
  {
    id: 3,
    name: 'Google Pixel 7 8 ГБ/128 ГБ белый',
    price: 339_900,
    description: 'A great phone with one of the best cameras',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h03/he6/63411051954206/google-pixel-7-8-gb-128-gb-belyj-106971867-1.jpg',
    link: "https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-belyi-106971867/?c=750000000#!/item",
    rating: 4.9,
  },
  {
    id: 4,
    name: 'Видеокарта Palit GeForce RTX 3060 Dual NE63060019K9-190AD 12GB',
    price: 196_000,
    description: `Серия: GeForce RTX 30 Series
      Частота графического процессора: 1320 МГц
      Объем видеопамяти: 12 ГБ
      Тип видеопамяти: GDDR6
      Рекомендуемая мощность блока питания: 550 Вт`,
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdc/h7d/33720830722078/palit-geforce-rtx-3060-dual-ne63060019k9-190ad-12gb-101214928-1-Container.jpg',
    link: "https://kaspi.kz/shop/p/palit-geforce-rtx-3060-dual-ne63060019k9-190ad-12gb-101214928/?c=750000000#!/item  ",
    rating: 5.0,
  },
  {
    id: 5,
    name: 'Процессор Intel Xeon Xeon-G 6248R OEM',
    price: 2_065_576,
    description: `Тип процессора: Xeon
      Сокет: LGA 3647
      Базовая частота процессора: 3000 МГц
      максимальная частота процессора: 4000 МГц
      Тип поставки: OEM
      Количество ядер: 24`,
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1d/h51/52763708129310/intel-xeon-xeon-g-6248r-oem-105967584-1.jpg',
    link: "https://kaspi.kz/shop/p/intel-xeon-xeon-g-6248r-oem-105967584/?c=750000000#!/item",
    rating: 0.0,
  },
  {
    id: 6,
    name: 'Наушники Apple AirPods 3 белый',
    price: 96_260,
    description: `    Тип: гарнитура
      Вид: внутриканальные
      Подключение: беспроводное
      Тип акустического оформления: открытые
      Тип крепления: без крепления
      Система активного шумоподавления: Нет
      Микрофон: Да`,
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h12/h12/46719106023454/apple-airpods-3-belyj-102667744-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000#!/item',
    rating: 5.0,
  },
  {
    id: 7,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 480_550,
    description: `Диагональ экрана: 13.3 дюйм
      Процессор: Apple M1
      Видеокарта: Apple M1 7 core
      Размер оперативной памяти: 8 ГБ
      Тип жесткого диска: SSD
      Общий объем накопителей: 256 ГБ`,
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    rating: 5.0,
  },
  {
    id: 8,
    name: 'Ноутбук ASUS ROG Zephyrus Duo 16 GX650RX-LO218X 90NR0921-M00EJ0 черный',
    price: 2_399_990,
    description: `Диагональ экрана: 16 дюйм
        Процессор: AMD Ryzen 9 6900HX
        Видеокарта: NVIDIA GeForce RTX 3080 Ti
        Размер оперативной памяти: 64 ГБ
        Тип жесткого диска: SSD
        Общий объем накопителей: 4000 ГБ`,
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h06/67512319311902/asus-rog-zephyrus-duo-16-gx650rx-lo218x-90nr0921-m00ej0-108303725-1.jpg',
    link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-duo-16-gx650rx-lo218x-90nr0921-m00ej0-chernyi-108303725/?c=750000000#!/item',
    rating: 0.0,
  },
  {
    id: 9,
    name: 'Системный блок PartsHome i7 11-Gen 3080 32Gb черный',
    price: 1_000_000,
    description: `Установленная ОС: Win 10
          Процессор: Intel Core i7 11700f
          Размер оперативной памяти: 32 Гб
          Объем SSD: 512 Гб
          Видеопроцессор: NVIDIA GeForce RTX 3080
          Объем HDD: 3000 Гб
          Форм-фактор корпуса: Midi-Tower`,
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h12/hfd/66592658456606/partshome-i7-11-gen-3080-32gb-chernyi-107928964-1.jpg',
    link: 'https://kaspi.kz/shop/p/partshome-i7-11-gen-3080-32gb-chernyi-107928964/?c=750000000#!/item',
    rating: 0.0,
  },
  {
    id: 10,
    name: 'Смартфон Xiaomi Redmi 9A 2 ГБ/32 ГБ серый',
    price: 339_900,
    description: `Технология NFC: Нет
          Цвет: серый
          Тип экрана: сенсорный, мультитач, IPS
          Диагональ: 6.53 дюйм
          Размер оперативной памяти: 2 ГБ
          Процессор: 8-ядерный MediaTek Helio G25
          Объем встроенной памяти: 32 ГБ
          Емкость аккумулятора: 5000 мАч`,
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5d/h2d/31501176963102/xiaomi-redmi-9a-2-32gb-seryj-100399600-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-9a-2-gb-32-gb-seryi-100399600/?c=750000000#!/item',
    rating: 5.0,
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
