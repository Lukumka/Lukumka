module.exports = {
    env: {
      node: true,
      browser: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended', // Подключаем правила для TypeScript
    ],
    parser: '@typescript-eslint/parser', // Указание парсера для TypeScript
    parserOptions: {
      project: './tsconfig.json', // Путь к tsconfig.json
    },
    plugins: ['@typescript-eslint'], // Плагин для работы с TypeScript
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn', // Пример правила для TypeScript
    },
  };
  