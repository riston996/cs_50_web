class MySet extends Set {
    constructor(arr) {
        super(arr)
        this.originalArray = arr
    }

    add(val) {
        super.add(val);
        console.log(`added ${val} to the set`);

    }

    delete(val) {
        super.delete(val)
        console.log(`deleted ${val} to the set`);
    }

    has(val) {
        return super.has(val)
    }

    
}

const s = new MySet([1,2,3,4,5]);
s.add(1);
s.add(6);
console.log(s.arr);
s.delete(5);
console.log(s.arr);
