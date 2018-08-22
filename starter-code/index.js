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
        if (this.length === 0) {
            throw new Error('EmptySortedList');
        }
        // return this.items[this.length-1]
        return this.get(this.length);
    }
    min() {
        if (this.length === 0) throw new Error('EmptySortedList');
        return this.items[0];
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
