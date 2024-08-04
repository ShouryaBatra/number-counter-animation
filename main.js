const createOdometer = (el, value) => {
  const odometer = new Odometer({
    el: el,
    value: 0,
  });

  let hasRun = false;

  const options = {
    threshold: [0, 0.9],
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!hasRun) {
          odometer.update(value);
          hasRun = true;
        }
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(el);
};


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;   

}


const firstNumberOdometer = document.querySelector(".first-number");
createOdometer(firstNumberOdometer, getRandomInt(0, 10000000));

const secondNumberOdometer = document.querySelector(".second-number");
createOdometer(secondNumberOdometer, 489234);

const thirdNumberOdometer = document.querySelector(".third-number");
createOdometer(thirdNumberOdometer, 3);
