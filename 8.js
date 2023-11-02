console.log("Завдання: 8 ==============================");

function task8() {
  // Створюємо функцію fetchFakeData, яка симулює запит до сервера та повертає "дані" через Promise.resolve().
  // Створюємо fakeData константу з данними { name: "John",age: 30}
  // Використовуємо Promise.resolve(fakeData) для того, щоб створити вже зарезолвлений проміс.
  // Викликаємо функцію fetchFakeData
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
  const promise = new Promise((resolve, reject) => {
    let seconds = 0;

    const intervalId = setInterval(() => {
      const currentDate = new Date();
      seconds = currentDate.getSeconds();
      console.log(`Поточні секунди: ${seconds}`);

      if (seconds % 10 === 0) {
        clearInterval(intervalId);
        resolve("Поточні секунди кратні 10!");
      } else if (seconds % 3 === 0) {
        clearInterval(intervalId);
        reject("Поточні секунди кратні 3!");
      }
    }, 1000);
  });

  promise
    .then((value) => {
      console.log(`Проміс зарезолвився з значенням: ${value}`);
    })
    .catch((error) => {
      console.error(`Проміс відхилився з помилкою: ${error}`);
    })
    .finally(() => {
      console.log("Проміс завершено");
    });
}

// Викликаємо функцію task8
task8();
