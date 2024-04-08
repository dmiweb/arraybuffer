// import Character from '../js/Character';
import Daemon from '../js/Daemon';
import Magician from '../js/Magician';

test.each([
  ['attack', 2, 90],
  ['attack', 6, 0],

])(
  ('testing class method get/set attack for %s attack with %i distance'),
  (_, distance, expected) => {
    const magician = new Magician();
    magician.attack = distance;
    const result = magician.attack

    expect(result).toBe(expected);
  }
);


test.each([
  ['stoned', 2, 85],
  ['stoned', 0, 0],

])(
  ('testing class method get/set stoned for %s stoned with %i distance'),
  (_, distance, expected) => {
    const deamon = new Daemon();
    deamon.stoned = distance;
    const result = deamon.stoned;

    expect(result).toBe(expected);
  }
);