var sum = function() {
  var args = Array.prototype.slice.call(arguments);
  var total = 0;
  args.forEach(function (num) { total += num; });
  return total;
}

var myBind = function() {
  var args = Array.prototype.slice.call(arguments);
  var obj = args.shift();
  var that = this;
  return function() { return that.apply(obj, args) }
}

var curriedSum = function(numArgs) {
  var numbers = [];

  var _curriedSum = function(number) {
    numbers.push(number);
    if (numbers.length == numArgs) {
      var total = 0;
      numbers.forEach(function(num) { total += num; });
      return total;
    }
    else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}


Function.prototype.curry = function(numArgs) {
  var args = [];
  var that = this;

  var _curried = function(arg) {
    args.push(arg);
    console.log(args);
    console.log(that);
    if (args.length === numArgs) {
      return that.apply({}, args);
    }
    else {
      return _curried;
    }
  }

  return _curried;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}


console.log(sumThree.curry(3)(4)(20)(3));