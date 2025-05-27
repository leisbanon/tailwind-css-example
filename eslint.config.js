module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: ['plugin:vue/vue3-recommended', '@vue/eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // 强制在逗号后面使用空格
    'comma-spacing': ['error', { before: false, after: true }],

    // 强制在 v-for 指令中使用 key 属性
    'vue/require-v-for-key': 'error',

    // 强制使用小驼峰命名法（camelCase）
    // camelcase: ['error', { properties: 'always' }],

    // 关闭要求组件名称必须是多个单词的规则
    'vue/multi-word-component-names': 'off',

    // 强制组件名称使用大驼峰命名法（PascalCase）
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],

    // 生产环境下使用 console 给出警告，开发环境下关闭此规则
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 生产环境下使用 debugger 给出警告，开发环境下关闭此规则
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 强制使用单引号
    quotes: ['error', 'single'],

    // 要求在多行的逗号分隔的语法结构中，在最后一行添加尾随逗号
    'comma-dangle': ['error', 'always-multiline'],

    // 强制使用 2 个空格缩进
    indent: ['error', 2],

    // Vue 模板中使用 2 个空格缩进
    'vue/html-indent': ['error', 2],

    // 强制在语句末尾使用分号
    semi: ['error', 'always'],
    // 强制使用 === 和 !==
    // eqeqeq: ['error', 'always'],

    'default-case': 'off',
    'no-fallthrough': 'off',
    // Prettier 格式化配置
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // 使用单引号
        trailingComma: 'all', // 所有可能的地方都添加尾随逗号
        tabWidth: 2, // 缩进宽度为 2 个空格
        semi: true, // 语句末尾使用分号
        printWidth: 200,
        proseWrap: 'preserve',
      },
    ],
  },
};
