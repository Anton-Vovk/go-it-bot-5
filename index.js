// ----------------------------1----------------------
const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};

const child = Object.create(parent);

child.name = "Jason";
child.age = 27;
console.log(child.hasOwnProperty("name"));
console.log(child.age);
console.log(parent.isPrototypeOf(child));

// ----------------------------2----------------------
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// ----------------------------3----------------------
// function Car(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// // ----------------------------4----------------------
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// // ----------------------------5----------------------
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function () {
//   return this.price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// ----------------------------6----------------------
function Storage (items){
 this.items = items;
}

Storage.prototype.getItems = function(){
return this.items;
}

Storage.prototype.addItem = function(newItem){
 this.items.push(newItem);
}

Storage.prototype.removeItem = function(item) {
    const index = this.items.indexOf(item);

    if (index !== -1) { 
      this.items.splice(index, 1);
    }
  }

const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// ----------------------------7----------------------
