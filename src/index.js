class Sorter {
  constructor() {
    // your implementation
	this.arr = new Array();
  }

  add(element) {
    // your implementation
	this.arr.push(element);
  }

  at(index) {
    // your implementation
	return this.arr[index];
  }

  get length() {
    // your implementation
	return this.arr.length;
  }

  toArray() {
    // your implementation
	return this.arr;
  }

  sort(indices) {
    // your implementation
	var f = function (a, b) {
	return a - b;
	};
	
	if (this.func === undefined) {
	f();
	} else {
	this.func;
	}
	
	var arrN = [];
    for (var i = 0; i < indices.length; i++) {
    arrN.push(this.arr[indices[i]]);
    };
	
	indices.sort();
    arrN.sort(this.func);
	
	for (var i=0; i < indices.length; i++) {
	this.arr.forEach(function(elem,ind,array) {
	if (ind==indices[i]) {
	array[ind]=arrN[i];
	}
	});
	}

  }

  setComparator(compareFunction) {
    // your implementation
	this.func = compareFunction;
  }
}

module.exports = Sorter;