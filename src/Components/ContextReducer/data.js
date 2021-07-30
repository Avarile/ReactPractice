import faker from "faker";

export const pages = [
  {
    id: 1,
    text: faker.lorem.sentence()
  },
  {
    id: 2,
    text: faker.lorem.sentence()
  },
  {
    id: 3,
    text: faker.lorem.sentence()
  },
  {
    id: 4,
    text: faker.lorem.sentence()
  },
  {
    id: 5,
    text: faker.lorem.sentence()
  },
  {
    id: 6,
    text: faker.lorem.sentence()
  },
  {
    id: 7,
    text: faker.lorem.sentence()
  }
];

export const chapters = [
  {
    id: 1,
    title: "chapter1",
    pages: [1, 2]
  },
  {
    id: 2,
    title: "chapter3",
    pages: [3, 4, 5]
  },
  {
    id: 1,
    title: "chapter3",
    pages: [6, 7]
  },
]