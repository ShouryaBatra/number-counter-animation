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

const firstNumberOdometer = document.querySelector(".first-number");
createOdometer(firstNumberOdometer, 50);

const secondNumberOdometer = document.querySelector(".second-number");
createOdometer(secondNumberOdometer, 489234);

const thirdNumberOdometer = document.querySelector(".third-number");
createOdometer(thirdNumberOdometer, 3);
