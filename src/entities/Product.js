const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: "Product",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        name: {
            type: String
        },
        price: {
            type: String
        },
        desc: {
            type: String
        }
    }
});