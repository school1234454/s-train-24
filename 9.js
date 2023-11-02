console.log("Завдання: 9 ==============================");

function task9() {
  // Створюємо функцію fetchWithError, яка симулює помилку при запиті до сервера.
  // Створюємо константу errorMessage в яку записуємо рядок "Помилка при з'єднанні з сервером"
  // Використовуємо Promise.reject(errorMessage) для створення вже відхиленого промісу.
  // Викликаємо функцію fetchWithError
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
  function fetchFakeData() {
    const fakeData = { name: "John", age: 30 };
    return Promise.resolve(fakeData);
  }

  fetchFakeData()
    .then((data) => {
      console.log("Отримані дані:", data);
    })
    .catch((error) => {
      console.error("Помилка:", error);
    });
}

// Викликаємо функцію task10
task9();
