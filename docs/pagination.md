# Инструкция: Как использовать компонент Pagination.jsx

## 1. Установка библиотеки react-paginate

Для работы Toast необходимо установить библиотеку:

npm install react-paginate --save

## 2. Все настройки и примеры взяты из официальной документации библиотеки

https://www.npmjs.com/package/react-paginate

Pagination создан как отдельный компонент, чтобы:

- не дублировать код;
- иметь возможность переиспользовать пагинацию;
- использовать в компоненте Slider в карточке компонента Portfolio - PortfolioCard

## 3. Создаём файлы Pagination.jsx, Pagination.module.scss

```jsx
import ReactPaginate from "react-paginate"
import styles from "./Pagination.module.scss";
import { getStyles } from "../../lib"

```

## 4. Создаём файл index.js для реэкспорта

```js
export * from "./Pagination";
```

## 5. Создаём конфигурацию пропсов, которые будем передавать в компонент ReactPaginate

ReactPaginate - компоненти из библиотеки react-paginate, который принимает пропсы и в соотвествии с ними формирует дизайн компонента пагинации

```jsx
const DEFAULT_PAGINATION_CONFIG = {
    breakThreshold: 6,    // после какого кол-ва страниц показывать многоточие "…"
    centerPageRange: 3,   // сколько страниц показывать в центре страницы
    edgePageRange: 1,     // сколько страниц всегда видно по краям
};
```

## 5. Создаем компонент Pagination и передаем в него пропсы из родительского компонента

В данном случае родительским компонентом является компонент Slider, который в свою очередь передан в карточке портфолио PortfolioCard

```jsx
export const Pagination = ({
    totalItems, // массив, представляющий собой длину массива изображений из компонента Slider
    itemsPerPage, // количество изображений, которые будут показаны в слайдере
    onPageChange, // функция, позволяющая переключать слайды (может передаваться через пропс, API, localStorage, useState/UseEffect)
    selectedPage, // 0 based - номер исходного слайда, или индекс выбранного слайда
}) => {
    const pageCount = Math.ceil(totalItems / itemsPerPage); // определяет сколько слайдов будет в данном слайдере с учетом того, сколько изображений отражается на слайде. Напр.: 5=5/1

    const shouldShowBreak = pageCount > DEFAULT_PAGINATION_CONFIG.breakThreshold; // булевое значение. Показать прерывание (...), если слайдов больше значения pageCount (например, 5 - false, 6- true)

        const pageRangeDisplayed = shouldShowBreak 
        ? DEFAULT_PAGINATION_CONFIG.centerPageRange
        : pageCount; // определяет место, где нужно показать разрыв в пагинации (...). Если shouldShowBreak - true, то разрыв будет показан после элемента пагинации под номером centerPageRange, если false - то будет показано количество слайдов

    if (pageCount <= 1) return null;

    return (...)
}
```

## 6. Передаем заданные константы и пропсы в return в компонент библиотеки react-paginate - ReactPaginate

```jsx
return (
        <ReactPaginate
            pageCount={pageCount} // количество страниц слайдера
            forcePage={selectedPage} // индекс выбранной страницы (или персоначальной)
            onPageChange={({ selected }) => onPageChange(selected)} // функция переключения слайдов
            previousLabel="‹" // значок кнопки переключения
            nextLabel="›" //...
            previousAriaLabel="Prev page" // метки для элементов многоточия
            nextAriaLabel="Next page" //...
            pageRangeDisplayed={pageRangeDisplayed} // начиная с какой страницы показать многоточие
            marginPagesDisplayed={DEFAULT_PAGINATION_CONFIG.edgePageRange} // сколько страниц всегда видно по краям
            containerClassName={getStyles(styles.paginationContainer, {}, [])} // передача строки стилей для контейнера пагинации
            pageClassName={styles.indicator} // стили тега li в списке пагинации
            activeClassName={styles.active} // стили добавляются к активной/ выбранной странице
            breakLabel={shouldShowBreak ? "…" : null} // вид представления разрыва - многоточие или отсутствие, если разрыв не нужен
            breakClassName={styles.breakItem} // стиль тега li для элемента многоточия 
            renderOnZeroPageCount={null} // если изобрежений нет, что и кнопки переключения будут не видны (если передан null), если ничего не передано, то кнопки < > будут отображены
        />
    );
    ```

```

## 7. Подключение компонента и его место в структуре приложения

Компонент полключается в компоненте Slider во взаимодействии с компонентом из одноименной библиотеки Swiper.

```jsx
import { Pagination } from "@/shared/ui/Pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export const Slider = ({
}) => {
    …
    …
        return (
        <Swiper>…<Swiper/>

        <Pagination
                    totalItems={allSlides.length}
                    itemsPerPage={1}
                    onPageChange={handlePageChange}
                    selectedPage={activeIndex}
        />
    )}

```

Компонент сущности Slider подключается в виджете Portfolio через компонент PortfolioCard. 

В свою очерень Portfolio подключается на странице MainPage, путь к которой указан в App.js

## 8. Как работать с компонентом Toast:
1. Добавьте ``` <Pagination /> ``` в любой компонент (родительский компонент), где требуется пагинация
2. Добавьте Swiper и свяжите его с Pagination при помощи пропсов, переданных из родительского компонента
3. Переключайте станицы через элементы Pagination
4. Примеры дизайна элементов пагинации:
   
   _ _ _ ... _
   1 2 3 ... 10
   1 2 ... 21 22 23
   
   и т.д.

Можно менять дизайн элементов пагинации, менять количество страниц на слайде, добавлять в любые компоненты, где есть списки и требуется последовательное переключение между элементами