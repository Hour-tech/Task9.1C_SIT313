import { faker } from '@faker-js/faker';

const staffList = [
    {
        "key" : 0,
        "avatar" : faker.image.avatar(),
        "name" : faker.person.fullName(),
        "description" : faker.person.jobTitle(),
        "number" : faker.number.int({ min: 1, max: 5 })
    },
    {
        "key" : 1,
        "avatar" : faker.image.avatar(),
        "name" : faker.person.fullName(),
        "description" : faker.person.jobTitle(),
        "number" : faker.number.int({ min: 1, max: 5 })
    },
    {
        "key" : 2,
        "avatar" : faker.image.avatar(),
        "name" : faker.person.fullName(),
        "description" : faker.person.jobTitle(),
        "number" : faker.number.int({ min: 1, max: 5 })
    },

]

export default staffList;