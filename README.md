# Nebula Kit

![npm](https://img.shields.io/npm/v/@sspopkov/nebula-kit?style=flat-square)
![license](https://img.shields.io/npm/l/@sspopkov/nebula-kit?style=flat-square)
![storybook](https://img.shields.io/badge/storybook-online-orange?style=flat-square)

**Nebula Kit** — это библиотека компонентов UI, созданная на React. Она разработана для упрощения разработки пользовательских интерфейсов, предоставляя готовые, переиспользуемые и настраиваемые компоненты.

---

## 📦 Установка

Установите библиотеку через npm:

```bash
npm install @sspopkov/nebula-kit
```

Или с помощью yarn:

```bash
yarn add @sspopkov/nebula-kit
```

---

## 🚀 Использование

После установки вы можете начать использовать компоненты в своем проекте. Вот пример использования:

```javascript
import React from 'react';
import { Button, Input } from '@sspopkov/nebula-kit';

const App = () => {
  return (
    <div>
      <Button type="primary" onClick={() => alert('Hello!')}>
        Click Me
      </Button>
      <Input placeholder="Enter your name" />
    </div>
  );
};

export default App;
```

---

## 📚 Компоненты

### Button

Кнопка с несколькими вариантами стилей.

#### Пример использования:

```javascript
<Button type="primary" onClick={handleClick}>
  Primary Button
</Button>
```

#### Свойства:

| Свойство   | Тип       | Описание                        | Значение по умолчанию |
|------------|-----------|---------------------------------|------------------------|
| `children` | `node`    | Текст или элементы внутри кнопки | `''`                  |
| `onClick`  | `func`    | Функция-обработчик клика         | `() => {}`            |
| `type`     | `string`  | Тип кнопки (`primary`, `secondary`, `tertiary`) | `'primary'` |

---

### Input

Поле ввода текста.

#### Пример использования:

```javascript
<Input placeholder="Enter text here..." onChange={handleInputChange} />
```

#### Свойства:

| Свойство     | Тип       | Описание                       | Значение по умолчанию |
|--------------|-----------|--------------------------------|------------------------|
| `value`      | `string`  | Значение внутри инпута         | `''`                  |
| `onChange`   | `func`    | Функция-обработчик изменения   | `() => {}`            |
| `placeholder`| `string`  | Плейсхолдер                    | `''`                  |

---

## 🛠️ Разработка

Если вы хотите внести вклад в развитие библиотеки или настроить её под свои нужды, следуйте этим шагам:

### Клонирование репозитория

```bash
git clone https://github.com/sspopkov/nebula-kit.git
cd nebula-kit
```

### Установка зависимостей

```bash
npm install
```

### Запуск Storybook

Storybook используется для разработки и тестирования компонентов:

```bash
npm run storybook
```

Откройте [http://localhost:6006](http://localhost:6006), чтобы увидеть ваши компоненты в Storybook.

### Сборка проекта

Для сборки библиотеки выполните:

```bash
npm run build
```

Скомпилированные файлы будут находиться в папке `dist`.

---

## 🌟 Особенности

- **Переиспользуемость**: Компоненты легко интегрируются в любые проекты.
- **Настраиваемость**: Возможность кастомизации через свойства.
- **Документированность**: Используйте Storybook для просмотра и тестирования компонентов.
- **Совместимость**: Поддержка React 17+ и 18+.

---

## 📖 Документация

Для получения дополнительной информации о каждом компоненте, ознакомьтесь с интерактивной документацией в Storybook. Запустите локально или посетите [онлайн-документацию](#) (если опубликовано).

---

## 🤝 Вклад в проект

Мы приветствуем ваш вклад! Если вы хотите улучшить библиотеку, пожалуйста:

1. Форкните репозиторий.
2. Создайте новую ветку: `git checkout -b feature/my-feature`.
3. Внесите изменения и сделайте коммит: `git commit -m "Добавил новую фичу"`.
4. Запушьте изменения: `git push origin feature/my-feature`.
5. Создайте Pull Request.

---

## 📝 Лицензия

Этот проект лицензирован под лицензией MIT. Подробнее смотрите в файле [LICENSE](./LICENSE).

---

## 📬 Контакты

Если у вас есть вопросы или предложения, свяжитесь со мной:

- **GitHub**: [https://github.com/sspopkov](https://github.com/sspopkov)

Буду рад вашей обратной связи!

---

## 🛠️ Технологии

Проект создан с использованием следующих технологий:

- [React](https://reactjs.org/)
- [Storybook](https://storybook.js.org/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)

---

## 🔗 Полезные ссылки

- [npm-пакет](https://www.npmjs.com/package/@sspopkov/nebula-kit)
- [Storybook (онлайн)](#)
- [GitHub репозиторий](https://github.com/sspopkov/nebula-kit)

---

Спасибо за использование **Nebula Kit**! 😊
