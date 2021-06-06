# RS School REST service

1. Задание https://github.com/rolling-scopes-school/basic-nodejs-2021Q2/blob/master/descriptions/typescript-basics.md
2. Дата сдачи 30.05.2021 / дата дэдлайна 30.05.2021
3. 
для установки необходимых пакетов выполнить 
```
npm i
```

### Первая часть
Для генерации jsdoc документации добавлен скрипт doc
запуск скрипта

```
npm run doc
```

в папке ./out будет сгенерирована документация в виде html, точка входа для просмотра index.html

самооценка
все функции покрыты описанием, скрипт геренрации создан - 60 баллов.

github tag : jsdoc
https://github.com/Thipdev/rss-nodejs-express/tree/jsdoc


## Вторая часть
все тесты успешны - 170
линтер для TS добавлен, tsconfig.json есть - 20
есть 5 any типов - минус 100
итого 90


итог за обе части 150


## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging
