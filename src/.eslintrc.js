module.exports = {
  globals: {
    navigateTo: 'readonly', // 将 navigateTo 设为只读全局变量，避免 no-undef 错误
    window: 'readonly', // 将 window 设为只读全局变量
    console: 'readonly', // 将 window 设为只读全局变量
    setTimeout: 'readonly', // 将 window 设为只读全局变量
    HTMLDivElement: 'readonly',
    require: 'readonly',
    process: 'readonly',
    clearTimeout: 'readonly',
    document: 'readonly',
    HTMLInputElement: 'readonly',
    location: 'readonly',
    URLSearchParams: 'readonly',
    length: 'readonly',
    AndroidWebkit: 'readonly',
    JSX: 'readonly',
    File: 'readonly',
    URL: 'readonly',
    HTMLElement: 'readonly',
    ImageData: 'readonly',
    FileReader: 'readonly',
    localStorage:'readonly',
    Image:'readonly',
    clearInterval: 'readonly',
    cancelAnimationFrame: 'readonly',
    requestAnimationFrame: 'readonly',
    FormData: 'readonly',
    sessionStorage: 'readonly',
    setInterval: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    // 添加你想要的规则
    "@typescript-eslint/no-unused-vars": "off", // 忽略未使用的变量
    "@typescript-eslint/no-var-requires": "off", // 允许使用 require 语句
    "@typescript-eslint/no-explicit-any": "off", // 允许使用 any 类型
    "no-unsafe-optional-chaining": "off", // 忽略不安全的可选链使用错误
    "no-constant-condition": "off", // 忽略常量条件的错误
    "prefer-const": "off", // 忽略应使用 const 的建议
    "no-case-declarations": "off", // 允许在 case 语句中使用变量声明
    "no-extra-boolean-cast": "off", // 忽略多余的布尔转换
    "no-extra-semi": "off", // 忽略多余的分号
    "no-empty": "off", // 忽略空代码块错误
    "no-empty-pattern": "off", // 忽略空对象模式错误
      // 添加具体规则
      "no-undef": "error", // 检查未定义变量
      //"@typescript-eslint/no-unused-vars": "warn", // 检查未使用的变量
  }
};
