class SortedList {
    constructor() {
        this.items = [];
        this.length = 0;
    }
    add(x) {
        this.items.push(x);
        this.length++;
        this.items.sort((a, b) => {
            return a - b;
        });
    }
    get(pos) {
        return this.items[pos - 1];
    }
    max() {
        return Math.max(...this.items);
    }
    min() {
        return Math.min(...this.items);
    }
    average() {
        return this.sum() / this.length;
    }
    sum() {
        return this.items.reduce(function(acc, currentVal) {
            return acc + currentVal;
        }, 0);
    }
}

module.exports = SortedList;
