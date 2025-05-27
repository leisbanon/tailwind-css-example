<template>
  <ul>
    <li>
      <p class="text-blue-600">使用工具类的好处</p>
      <p>更快的完成工作，无需花费时间想出类名</p>
      <p>维护项目更加容易</p>
      <p>轻松复制粘贴，代码更容易移植</p>
    </li>

    <li>
      <p>使用工具类比内联样式的好处</p>
      <p>可以从预定设计样式中选择</p>
      <p>悬停，聚焦，媒体查询内联样式无法编写</p>
    </li>

    <li>
      <p class="text-blue-600">主题变量</p>
      <p>主题变量使用 @theme 指定定义的特殊 CSS 变量</p>
      <p class="text-error">A. Hello Tailwilld Css</p>
      <p class="box !bg-primary"></p>
    </li>

    <li>
      <p class="text-blue-600">夜间模式 dark:</p>
      <div class="flex items-center justify-center w-[150px] h-[150px] border border-gray-400 border-solid bg-gray-300 dark:bg-gray-800">
        <span class="dark:text-white">Hello Tailwind Css</span>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped lang="scss"></style>
