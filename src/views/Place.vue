<template>
  <ul>
    <li>
      <p class="text-blue-600">line-clamp：用户将文本限制为特定的行数</p>
      <p class="line-clamp-2">
        Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in
        quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna
        pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.
      </p>
    </li>

    <li>
      <p>text-transform：控制文本的大写</p>
      <p class="uppercase">全文大写：Hello Taillwind Css</p>
      <p class="lowercase">全文小写：Hello Taillwind Css</p>
      <p class="capitalize">大写：hello taillwind css</p>
    </li>

    <li>
      <p>text-overflow：文本溢出处理省略号</p>
      <p class="border-b w-[400px] truncate">truncate 截断文本；truncate 截断文本；truncate 截断文本；truncate 截断文本；truncate 截断文本；</p>
    </li>

    <li>
      <p>text-wrap：控制文本在元素内换行</p>
      <p>text-nowrap：文本强制不换行，允许文本溢出</p>
      <p class="border-b w-[400px] text-nowrap">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt.</p>
    </li>

    <li>
      <p class="text-red-600">white-space：用于控制元素空白属性</p>
      <p class="text-blue-600">whitespace-normal：取消换行符号和空格，换行</p>
      <pre class="whitespace-normal">
        Hello
        Tailwind Css

        Hello
        Tailwind Css

        Hello
        Tailwind Css
      </pre>

      <p class="text-blue-600">whitespace-pre-wrap：保留换行符和空格，换行</p>
      <pre class="whitespace-pre-wrap">
        Hello
        Tailwind Css Tailwind Css Tailwind Css Tailwind Css Tailwind Css Tailwind Css Tailwind Css Tailwind Css
      </pre>

      <p class="text-blue-600">whitespace-nowrap：取消换行符和空格，不换行</p>
      <pre class="whitespace-nowrap">
        Hello
        Tailwind Css

        Hello
        Tailwind Css

        Hello
        Tailwind Css
      </pre>

      <p class="text-blue-600">whitespace-pre：保留换行符和空格，不换行</p>
      <pre class="whitespace-pre">
        Hello
        Tailwind Css Tailwind Css Tailwind Css Tailwind Css Tailwind Css Tailwind Css Tailwind Css Tailwind Css </pre
      >

      <p class="text-blue-600">whitespace-pre-line：保留换行符，但是不保留空格，换行</p>
      <pre class="whitespace-pre-line">
        Hello
        Tailwind Css Tailwind Css Tailwind Css Tailwind Css Tailwind Css Tailwind Css Tailwind Css Tailwind Css
      </pre>
    </li>

    <li>
      <p>☆</p>
      <div class="flex">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
      </div>
    </li>
  </ul>
</template>

<script setup></script>

<style scoped lang="scss">
pre {
  border: 1px #e5e7eb solid;
  width: 400px;
  margin-bottom: 12px;
}
</style>
