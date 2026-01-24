# Инструкция: Как использовать компонент Toast.jsx

## 1. Установка библиотеки react-toastify

Для работы Toast необходимо установить библиотеку:

```bash
npm install react-toastify
```

## 2. Все настройки и примеры взяты из официальной документации библиотеки:
https://www.npmjs.com/package/react-toastify

Мы вынесли ToastContainer в отдельный компонент, чтобы:
- не дублировать код
- иметь единое место для настройки уведомлений
- использовать Toast во всей AdminPanel

## 3. Создаём файл Toast.jsx:

```jsx
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Контейнер для уведомлений
export const Toast = () => {
  return (
    <ToastContainer
      position="top-center"  // расположение уведомлений
      autoClose={2000}       // время закрытия уведомления (мс)
      pauseOnHover={false}   // уведомление не останавливается при наведении
      newestOnTop            // новые уведомления показываются сверху
    />
  );
};
```
## 4. Создаём файл index.js для реэкспорта:
```js
export * from "./Toast";
```

## 5. Использование уведомлений в компоненте MyForm
### Создаём компонент MyForm.jsx:
```jsx
import { useState } from "react";
import { toast } from "react-toastify";

export const MyForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    // Проверка данных
    if (!email) {
      toast.error("Введите email");
      return;
    }

    // INFO — процесс начался
    toast.info("Отправка данных...");

    try {
      // Имитация запроса
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // SUCCESS — успешный результат
      toast.success("Данные успешно сохранены");
      setEmail("");
    } catch {
      // ERROR — ошибка запроса
      toast.error("Ошибка сервера");
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Введите email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Отправить
      </button>
    </div>
  );
};
```
## 6. Подключение Toast в верхнем компоненте страницы
### Компонент Toast нужно подключить один раз на странице, например в AdminPanel:
```jsx
import { Toast } from "../../shared/ui/Toast";
import { MyForm } from "./MyForm";

export const AdminPanel = () => {
  return (
    <>
      <MyForm />
      <Toast />
    </>
  );
};
```
## 7. Добавляем AdminPanel в App.jsx:
```jsx
import { AdminPanel } from "./page/AdminPanel/AdminPanel";
import "./App.css";

function App() {
  return (
    <div>
      <AdminPanel />
    </div>
  );
}

export default App;
```
## 8. Как работать с компонентом Toast:
1. Добавьте ``` <Toast /> ```один раз в App.js или AdminPanel — это контейнер для уведомлений.
2. Вызывайте уведомления через функции toast.success(), toast.error(), toast.info().
3. Примеры использования:
   ```jsx
   toast.success("Успешно!");   // зеленое уведомление
   toast.error("Ошибка!");      // красное уведомление
   toast.info("Информация");    // синее уведомление
   ```
4. Можно менять текст и использовать уведомления в любых местах AdminPanel (например, после успешного запроса или ошибки).