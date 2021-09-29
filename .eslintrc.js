// "off"或0- 关闭规则
// "warn"或1- 打开规则作为警告（不影响退出代码）
// "error"或2- 将规则作为错误打开（退出代码将为 1）
module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  globals: {},
  rules: {
    'no-console': 'error',
    'no-debugger': 'error',
    'no-whitespace-before-property': 'error', // 禁止属性前有空白
    'no-const-assign': 'error', // 禁止修改const声明的变量
    'prettier/prettier': 'error',
  },
};
