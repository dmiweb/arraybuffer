import Daemon from '../js/Daemon';
import Magician from '../js/Magician';

test('class method test get/set attack', () => {
  const magician = new Magician();
  magician.attack = 2;
  magician.stoned = false;
  const result = magician.attack

  expect(result).toBe(90);
});

test('class method test get/set attack distance error', () => {
  try {
    const deamon = new Daemon();
    deamon.attack = 6;
    deamon.stoned = true;
    deamon.attack;
  } catch (error) {
    expect(error.message).toBe('Расстояние атаки должно быть от 1 до 5');
  }

});

test('class method test get/set stoned attack', () => {
  const deamon = new Daemon();
  deamon.attack = 2;
  deamon.stoned = true;
  const result = deamon.attack;

  expect(result).toBe(85);
});



test('class method test get/set stoned', () => {
  const deamon = new Daemon();
  deamon.stoned = true;
  const result = deamon.stoned;

  expect(result).toBe(true);
});