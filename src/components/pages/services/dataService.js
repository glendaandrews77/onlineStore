const catalog = [
    {   
        "title" : "Clear Stilettos Fluffy Heels",
        "category": "Sexy Heels",
        "price": 152.99,
        "image" : "clear-stilletos-brownfluff.jpg",
        "_id": "187651351355"
    },
    {
        "title": "6 Inch Brown Heels",
        "category": "Sexy Heels",
        "price": 121.00,
        "image": "6 inch-brown-heels.jpg",
        "_id": "2"
    },
    {
        "title": "6 inch Yellow Heels",
        "category": "Sexy Heels",
        "price": 160.95,
        "image": "image 1.jpg",
        "_id": "3"
    },
    {
        "title": "Black Spiked Heels",
        "category": "Sexy Heels",
        "price": 81.99,
        "image": "Black Spike Sexy Heels.jpg",
        "_id": "4"
    },
    {
        "title": "Black Heels with Strap",
        "category": "Sexy Heels",
        "price": 225.00,
        "image": "sexy-black-heels.jpg",
        "_id": "5"
    },
    {
        "title":"Gold Stilletos with Gems ",
        "category": "Sexy Heels",
        "price": 225.00,
        "image": "Gold Stilletos with Gems.jpg",
        "_id": "6"
    },
    {
        "title":"White Fuzzy Boot Wedges ",
        "category": "Boot Heels",
        "price": 225.00,
        "image": "white fuzzy boot wedges.jpg",
        "_id": "7"
    },
    {
        "title":"Pink Fuzzy Boot Heels ",
        "category": "Boot Heels",
        "price": 225.00,
        "image": "pink fuzzy boot heels.jpg",
        "_id": "8"
    },
    {
        "title":"Black Fuzzy Boot Heels ",
        "category": "Boot Heels",
        "price": 225.00,
        "image": "black fuzzy sexy boot heels.jpg",
        "_id": "9"
    },
    {
        "title":"Red and White Ankle Fuzzy Boots ",
        "category": " Boot Heels",
        "price": 225.00,
        "image": "red and white ankle fuzzy boots.jpg",
        "_id": "10"
    },
    {
        "title":"Back Blaced Laced Sexy Boots ",
        "category": "Boots",
        "price": 225.00,
        "image": "Black Black Laced Sexy Boots.jpg",
        "_id": "11"
    },
    {
        "title":"Shear This High Sequence Boots ",
        "category": "Boots",
        "price": 225.00,
        "image": "Shear Thigh High Sequence Boots.jpg",
        "_id": "12"
    },
    {
        "title":"Sexy Black Front Laced Boot Heels",
        "category": "Boots",
        "price": 225.00,
        "image": "Sexy Black Laced Up Boot Heels.jpg",
        "_id": "13"
    },

    {
        "title":"Green Above the Knee Green Sexy Heel Boots",
        "category": "Boots",
        "price": 225.00,
        "image": "Green Above the Knee Green Sexy Boots.jpg",
        "_id": "14"
    },





];

const category = ["sexy heels", "boots", "Fuzzy Boot Heels"];

class DataService {
    getCatalog() {
        return catalog;
    }

    getProds() {
        return category;
    }
}

export default DataService;