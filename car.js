// Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл.
// двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад
// (ввод информации о скорости движения), расчет пройденных километров.

// Закомментировал в index.html при подключении этот скрипт

const Car = function () {
  let _speed = 0;

  return {
    switch: false,

    speedometr: 0,

    info: {
      carModel: null,
      carNumber: null,
    },

    set carInfo(info) {
      Object.assign(this.info, info);
    },

    get carInfo() {
      return this.info;
    },

    setSwitch() {
      this.switch = !this.switch;
    },

    gas() {
      if (!this.switch) console.log('машина заглушена!');
      _speed += 10;
    },

    brake() {
      if (!this.switch) console.log('машина заглушена!');
      _speed -= 10;
    },

    distanceTraveledCalculation() {
      if (_speed < 1) return console.log('стоим на месте');
      if (!this.switch) console.log('машина заглушена!');

      setTimeout(() => {
        console.clear();
        this.speedometr += (_speed * 1000) / 3600;
        console.log(`проехали ${this.speedometr.toFixed(2)} метров`);
        console.log(`едем на жесткой сокрости: ${_speed} км/час`);
        this.distanceTraveledCalculation();
      }, 1000);
    },
  };
};

const mySummerCar = new Car();

mySummerCar.setSwitch();

mySummerCar.carInfo = { carModel: 'Datsun 100A/Nissan Cherry E10' };
mySummerCar.carInfo = { carNumber: 'AB 9704-7' };
console.log(mySummerCar.carInfo);
mySummerCar.gas();
mySummerCar.gas();
mySummerCar.gas();
mySummerCar.distanceTraveledCalculation();
