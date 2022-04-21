import faker from "@faker-js/faker";

export const fakeName = Array.from(Array(1000), () => {
  return faker.name.findName();
});
