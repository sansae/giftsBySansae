// define a cart class that creates a cart object for us
// this cart class can add items to our cart and remove items from it

export default class {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    let extraItem = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === item.name) {
        this.items[i].count += 1;
        extraItem = true;
      }
    }

    if (!extraItem) {
      this.items.push(item);
    }
  }

  removeItem(item) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === item.name) {
        this.items.splice(i, 1);
      }
    }
  }
}
