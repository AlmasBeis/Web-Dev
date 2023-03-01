export interface Category {

  id: number;
  name: string;
  imageLink: string;
  listOfProduct: number[];

}
export const categories = [
  {id: 1, name: 'Все',  imageLink: "https://kaspi.kz/img/main_logo.svg", listOfProduct:[1,2,3,4,5,6,7,8,9,10,11,12,13,14]},
  {id: 2,name: 'Smartphone', imageLink: "https://kaspi.kz/img/Phone.png",listOfProduct:[1,2,3,10]},
  {id: 3,name: 'Компьютеры и оргтехника', imageLink: "https://kaspi.kz/img/Computer.png",listOfProduct:[4,5,7,8,9]},
  {id: 4,name: 'Аудио и видео', imageLink: "https://kaspi.kz/img/TV.png",listOfProduct:[6]},
  {id: 5,name: 'Бытовая техника', imageLink: "https://kaspi.kz/img/HomeApp.png",listOfProduct:[14]},
  {id: 6,name: 'Мебель', imageLink: "https://kaspi.kz/img/Furniture1.png",listOfProduct:[12]},
  {id: 7,name: 'Красота и здоровье', imageLink: "https://kaspi.kz/img/Beauty1.png",listOfProduct:[13]},
  {id: 8,name: 'Спорт и туризм', imageLink: "https://kaspi.kz/img/Sport1.png",listOfProduct:[11]},
];
