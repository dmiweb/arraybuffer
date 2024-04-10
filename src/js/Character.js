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

  set attack(attack) {
    if (attack <= 5 && attack > 0) {
      this._attack = attack;
    } else {
      throw new Error('Атака должна быть от 1 до 5');
    }
  }

  get attack() {
    if (!this._stoned) {
      return this._damage = this.damage * this.damageReduction[this._attack] / 100;
    } else {
      const reducedAttack = this.damage * this.damageReduction[this._attack] / 100;
      return this._damage = reducedAttack - Math.log2(this._attack) * 5;
    }
  }

  set stoned(select) {
    if (select) {
      this._stoned = select;
    }
  }

  get stoned() {
    return this._stoned
  }
}