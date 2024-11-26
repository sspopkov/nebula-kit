const path = require('path');

module.exports = {
    entry: './src/index.js', // Точка входа в вашу библиотеку
    output: {
        path: path.resolve('dist'), // Папка для сборки
        filename: 'index.js', // Имя итогового файла
        libraryTarget: 'commonjs2' // Формат экспорта библиотеки
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/, // Обработка файлов .js и .jsx
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /.css$/, // Обработка CSS-файлов
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    externals: {
        react: 'react' // Исключаем React из сборки
    }
};
