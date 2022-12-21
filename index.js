class Base {
  constructor(input) {
    this.input = input;
  }
  plus(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
      const arrayuNum = numbers[i];
      this.input = this.input + arrayuNum;
    }
    return this;
  }
  get() {
    return this.input;
  }
  multiply(n) {
    if (typeof this.input === "number") {
      let { input } = this;
      input = this.input * n;
      this.input = input;
      return this;
    } else {
      let { input } = this;
      input = this.input.repeat(n);
      this.input = input;
      return this;
    }
  }
  divide(n) {
    if (typeof this.input === "number") {
      let { input } = this;
      input = this.input / n;
      this.input = input;
      return this;
    } else {
      let { input } = this;
      let k = Math.floor(this.input.length / n);
      input = this.input.slice(0, k);
      this.input = input;
      return this;
    }
  }
  minus(...n) {
    if (typeof this.input === "number") {
      let { input } = this;
      for (let i = 0; i < n.length; i++) {
        input = input -= n[i];
        this.input = input;
      }
      return this;
    } else {
      let { input } = this;
      input = input.substring(0, input.length - n);
      this.input = input;
      return this;
    }
  }
}

class IntBuilder extends Base {
  constructor(input) {
    super(input);
    this.input = input;
  }
  mod(n) {
    let { input } = this;
    input = this.input % n;
    this.input = input;
    return this;
  }
  static random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
}

function StringBuilder(input = '') {
  this.input = input;
}

StringBuilder.prototype = Object.create(Base.prototype);

StringBuilder.prototype.remove = function (n) {
  let { input } = this;
  let strNew = input.split("").filter((char) => char !== n);
  this.input = strNew.join("");
  return this;
};
StringBuilder.prototype.sub = function (from, to) {
  let { input } = this;
  input = input.split("").splice(from, to).join("");
  this.input = input;
  return this;
};

const allNums = new IntBuilder(10);
const allStrs = new StringBuilder("Hello");
