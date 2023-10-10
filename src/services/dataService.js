import axios from "axios";
const catalog = [
  {
    title: "No Place Like Home Heels",
    category: "Special Occasion",
    price: 152.99,
    image: "NoplaceLikeHome.jpg",
    _id: "187651351355",
  },
  {
    title: "Get'em Girl Heels",
    category: "sexy Heels",
    price: 121.00,
    image: "blackStrapHeels.jpg",
    _id: "2",
  },
  {
    title: "That's Right Heels",
    category: "sexy Heels",
    price: 221.00,
    image: "6 inch-brown-heels.jpg",
    _id: "3",
  },
  {
    title: "Its Your Night Heels",
    category: "sexy Heels",
    price: 160.95,
    image: "Red Sexy Heels.jpg",
    _id: "4",
  },

  {
    title: "Step'In Out Heels",
    category: "sexy Heels",
    price: 225.00,
    image: "sexy-black-heels.jpg",
    _id: "5",
  },
  {
    title: "Cowgirl Night Boots",
    category: "Wide Calf Boots",
    price: 200.0,
    image: "buckle wide calf heel boots.jpg",
    _id: "19",
  },
  {
    title: "Classy Lady Heels ",
    category: "sexy Heels",
    price: 300.0,
    image: "Gold Stilletos with Gems.jpg",
    _id: "6",
  },
  {
    title: "Stomp The Yard Boot Heels ",
    category: "Boot Heels",
    price: 285.0,
    image: "whiteBootHeels.jpg",
    _id: "7",
  },
  {
    title: "Pinky Sexy Boot Heels ",
    category: "Boot Heels",
    price: 255.0,
    image: "pink fuzzy boot heels.jpg",
    _id: "8",
  },
  {
    title: "Black Fur Boot Heels",
    category: "Boot Heels",
    price: 325.0,
    image: "black fuzzy sexy boot heels.jpg",
    _id: "9",
  },
  {
    title: "Foxy Brown Fur Boot Heels",
    category: "Boot Heels",
    price: 450.0,
    image: "fauxbrownblkbootheels.jpg",
    _id: "10",
  },
  {
    title: "Way High Thigh Boot Heels",
    category: "Boot Heels",
    price: 289.5,
    image: "High Boot Heels.jpg",
    _id: "11",
  },
  {
    "title": "It's Cold Outside Ankle Fur Boots ",
    "category": "Boot Heels",
    "price": 253.50,
        "image": "red and white ankle fuzzy boots.jpg",
    "_id": "12"
  },
  {
    title: "Watch Out Now Thigh High Boots ",
    category: "Boot Heels",
    price: 205.0,
    image: "Black Black Laced Sexy Boots.jpg",
    _id: "13",
  },
  {
    title: "She Ready Boot Heels ",
    category: "Boot Heels",
    price: 185.0,
    image: "blackCausualBoots.jpg",
    _id: "14",
  },
  {
    title: "Ride Him Cowgirl Yellow Belt Boot Heels ",
    category: "Boot Heels",
    price: 215.0,
    image: "beltThighHighBoots.jpg",
    _id: "15",
  },
  {
    title: "Silky Green Velvet Boot Heels",
    category: "Boot Heels",
    price: 195.0,
    image: "velvetbootheels.jpg",
    _id: "16",
  },
  {
    title: "Sexy Yellow Heels",
    category: "sexy Heels",
    price: 250.95,
    image: "image 1.jpg",
    _id: "17",
  },
  {
    title: "Lady Bug Sexy Heels",
    category: "sexy Heels",
    price: 200.0,
    image: "bi color seilletos.jpg",
    _id: "20",
  },
  {
    title: "Leapord Lady Heels",
    category: "sexy Heels",
    price: 195.0,
    image: "leapord heels.jpg",
    _id: "21",
  },
  {
    title: "Stay Ready Wide Calf Boots",
    category: "Wide Calf Boots",
    price: 225.0,
    image: "zip up wide calf boots.jpg",
    _id: "22",
  },
  {
    title: "Sexy Brown Boot Heels",
    category: "sexy Heels",
    price: 345.0,
    image: "fauxbrnheels.jpg",
    _id: "23",
  },
  {
    title: "No Excuses Tonight Red Bottoms Heels",
    category: "sexy Heels",
    price: 485.0,
    image: "blackHighRedBottomsHeels.jpg",
    _id: "24",
  },
  {
    title: "Thick'um's Wide Calf Boots",
    category: "Wide Calf Boots",
    price: 300.0,
    image: "leather wide calf boots.jpg",
    _id: "25",
  },

  {
    title: "Sock It 2 Him Fur Boot Heels ",
    category: "Boot Heels",
    price: 350.0,
    image: "blackGrayFurBoots.jpg",
    _id: "26",
  },
  {
    title: "Jazzy Sexy Heels ",
    category: "sexy Heels",
    price: 350.0,
    image: "pianoheels.jpg",
    _id: "27",
  },
  {
    title: "East Coast Tim Boot Heels ",
    category: "Boot Heels",
    price: 255.0,
    image: "TimBootHeels.jpg",
    _id: "29",
  },
  {
    title: "Rock'em Hard Ankle Boot Heels",
    category: "Boot Heels",
    price: 295.0,
    image: "grayBootsHeels.jpg",
    _id: "30",
  },
  {
    title: "Thic Thighs Boots",
    category: "Wide Calf Boots",
    price: 325.0,
    image: "tan wide calf boots.jpg",
    _id: "31",
  },
  {
    title: "You Cant Handle Me Boot Heels",
    category: "Boot Heels",
    price: 405.0,
    image: "Tan fuzzy boot heels.jpg",
    _id: "32",
  },
  {
    title: "2 Hot 2 Handle Boots",
    category: "Wide Calf Boots",
    price: 405.0,
    image: "2 Hot 2 Handle Boots.jpg",
    _id: "33",
  },
  {
    title: "Trust Ur Not Ready Boots",
    category: "Wide Calf Boots",
    price: 515.0,
    image: "TrustUrNotReadyBoots.jpg",
    _id: "34",
  },
  {
    title: "Peachy Queen Heels",
    category: "sexy Heels",
    price: 250.0,
    image: "PinkHeels.jpg",
    _id: "35",
  },
  {
    title: "Soldier Girl High Thigh Boot Heels",
    category: "Boot Heels",
    price: 380.0,
    image: "camoboots.jpg",
    _id: "36",
  },
  {
    title: "Jeanie Boot Heels",
    category: "Boot Heels",
    price: 420.0,
    image: "jeanbootheel.jpg",
    _id: "37",
  },
  {
    title: "Sexy Silvia Stilletos",
    category: "Sexy Heels",
    price: 380.0,
    image: "silver stilletos.jpg",
    _id: "38",
  },
];

const category = ["sexy heels", "Boots", "Boot Heels", "Wide Calf Boots"];

class DataService {
  serverURL = "http://127.0.0.1:5000";
  async getProducts() {
    // to work with hardcoded vaules
    // return catalog;
    // call the server

    const response = await axios.get(this.serverURL + "/api/products");
    return response.data;
  }

  async saveProduct(product) {
    let response = await axios.post(this.serverURL + "/api/products", product);
    return response.data;
  }
}

export default DataService;
