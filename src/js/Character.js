export default class Character {
  constructor() {
    this.damage = 100;
    this.damageReduction = {
      1: 100,
      2: 90,
      3: 80,
      4: 70,
      5: 60
    };
  }

  set attack(distance) {
    if (Object.keys(this.damageReduction).includes(String(distance))) {
      this._damage = this.damage * this.damageReduction[distance] / 100;
    } else {
      this._damage = 0;
    }
  }

  get attack() {
    return this._damage;
  }

  set stoned(distance) {
    if (Object.keys(this.damageReduction).includes(String(distance))) {
      const reducedAttack = this.damage * this.damageReduction[distance] / 100;
      this._damage = reducedAttack - Math.log2(distance) * 5;
    } else {
      this._damage = 0;
    }
  }

  get stoned() {
    return this._damage;
  }
}