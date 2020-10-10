const faker = require("faker");
const data = [];
const categories = ["Watersports", "Soccer", "Chess", "Running"];
faker.seed(100);

for (let i = 1; i <= 503; i++) {
    let category = faker.helpers.randomize(categories);
    data.push({
        id: i,
        name: faker.commerce.productName(),
        category,
        description: `${category}: ${faker.lorem.sentence(3)}`,
        price: Number(faker.commerce.price())
    })
}

module.exports = function () {
    return {
            categories,
            products: data,
            orders: []
    }
}