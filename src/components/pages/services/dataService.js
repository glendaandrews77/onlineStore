const catalog = [
    {   
        "title" : "Clear Stilettos Fluff Heels",
        "category": "shoes",
        "price": 152.99,
        "image" : "clear-stilletos-brownfluff.jpg",
        "_id": "187651351355"
    },
    {
        "title": "6 Inch Brown Heels",
        "category": "shoes",
        "price": 121.00,
        "image": "6 inch-brown-heels.jpg",
        "_id": "2"
    },
    {
        "title": "6 inch Yellow Heels",
        "category": "shoes",
        "price": 160.95,
        "image": "image 1.jpg",
        "_id": "3"
    },
    {
        "title": "Black Buckled Black Heels",
        "category": "shoes",
        "price": 81.99,
        "image": "image 2.jpg",
        "_id": "4"
    },
    {
        "title": "6 Inch White Heels",
        "category": "shoes",
        "price": 95.99,
        "image": "image 3.jpg",
        "_id": "5"
    },
    {
        "title": "sSexy Black Heels",
        "category": "shoes",
        "price": 225.00,
        "image": "sexy-black-heels.jpg",
        "_id": "6"
    },
    {
        "title": "Sexy Gold & Black Heels",
        "category": "shoes",
        "price": 250.00,
        "image": "sexy-gold-black-heels.jpg",
        "_id": "7"
    }
];

class DataService{

    getCatalog(){
           //TODO: get the cataog from the server 
           return catalog;
    };
}

export default DataService;