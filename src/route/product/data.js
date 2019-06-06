export const products = [
    {
        index: 1,
        img: "",
        name: "SK-II Facial Treatment Essence",
        rating: 4,
        type: "",
        description: {
            brand: "",
            price: 100,
            quantities: "10g",
            skin: "",
            using: "ss"
        },
        filter: [
            "fil4"
        ],
        hot: true
    },
    {
        index: 2,
        img: "",
        name: "BIOTHERM Life Plankton Essence",
        rating: 5,
        type: "",
        description: {
            brand: "",
            price: 150,
            quantities: "10g",
            skin: "",
            using: "ss"
        },
        filter: [
            "fil2",
            "fil3"
        ],
        hot: true
    },
    {
        index: 3,
        img: "",
        name: "ESTEE LAUDER Advanced Night Repair Synchronized Recovery Complex II",
        rating: 3.5,
        type: "",
        description: {
            brand: "",
            price: 70,
            quantities: "10g",
            skin: "",
            using: "ss"
        },
        filter: [
            "fil1",
            "fil4"
        ],
        hot: true
    },
    {
        index: 4,
        img: "",
        name: "It's Skin Power 10 Formula VC Effecto",
        rating: 4.5,
        type: "",
        description: {
            brand: "",
            price: 130,
            quantities: "10g",
            skin: "",
            using: "ss"
        },
        filter: [
            "fil2",
            "fil4"
        ],
        hot: true
    },
    {
        index: 5,
        img: "",
        name: "SK-II Facial Treatment Essence",
        rating: 4,
        type: "",
        description: {
            brand: "",
            price: 100,
            quantities: "10g",
            skin: "",
            using: "ss"
        },
        filter: [
            "fil4"
        ],
        hot: false
    },
    {
        index: 6,
        img: "",
        name: "BIOTHERM Life Plankton Essence",
        rating: 5,
        type: "",
        description: {
            brand: "",
            price: 150,
            quantities: "10g",
            skin: "",
            using: "ss"
        },
        filter: [
            "fil2",
            "fil3"
        ],
        hot: false
    },
    {
        index: 7,
        img: "",
        name: "ESTEE LAUDER",
        rating: 3.5,
        type: "",
        description: {
            brand: "",
            price: 70,
            quantities: "10g",
            skin: "",
            using: "ss"
        },
        filter: [
            "fil1",
            "fil4"
        ],
        hot: false
    },
    {
        index: 8,
        img: "",
        name: "It's Skin Power 10 Formula VC Effecto",
        rating: 4.5,
        type: "",
        description: {
            brand: "",
            price: 130,
            quantities: "10g",
            skin: "",
            using: "ss"
        },
        filter: [
            "fil2",
            "fil4"
        ],
        hot: false
    },
    {
        index: 9,
        img: "",
        name: "SK-II Facial Treatment Essence",
        rating: 4,
        type: "",
        description: {
            brand: "",
            price: 100,
            quantities: "10g",
            skin: "",
            using: "ss"
        },
        filter: [
            "fil4"
        ],
        hot: true
    }
]

function filterHotProduct() {
    let hot_products = products.filter(items => items.hot === true)
    return hot_products
}

export const hot_products = filterHotProduct()
