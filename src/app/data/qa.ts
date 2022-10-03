import { qaStructure } from "../models/qaStructure";

const data: qaStructure[] = [
  {
    id: 0,
    question: 'Какую сторону света означает буква "С" на компасе?',
    answers: ['Юг', 'Запад', 'Север', 'Восток'],
    rightAnswer: 'Север',
  },
  {
    id: 1,
    question: '18 + 42 : 2 = ...',
    answers: ['30', '39', '0', '37'],
    rightAnswer: '39',
  },
  {
    id: 2,
    question: 'Год начала Второй Мировой войны',
    answers: ['1941', '1945', '1939', '1914'],
    rightAnswer: '1939',
  },
  {
    id: 3,
    question: '2 * 2 - 15 / 3 + 4 = ...',
    answers: ['0', '2', '3', '4'],
    rightAnswer: '3',
  },
];

export default data;