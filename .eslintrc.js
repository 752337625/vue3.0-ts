module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  parserOptions: {
    //指定ESLint可以解析tsx,jsx语法
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      tsx: true,
      jsx: true,
    },
  },
  env: {
    //指定代码的运行环境
    browser: true,
    node: true,
  },

  extends: ['plugin:@typescript-eslint/recommended', 'prettier'], //定义文件继承的子规范
  plugins: ['@typescript-eslint', 'prettier'], //定义了该eslint文件所依赖的插件
  // plugins: ['@typescript-eslint', 'prettier', 'import'],
  // extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: ['**/__tests__/**'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
  rules: {
    'no-var': 'error', // 禁止使用 var
    // 优先使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], //@typescript-eslint/consistent-type-definitions 是 @typescript-eslint/eslint-plugin 新增的规则。
  },
};
