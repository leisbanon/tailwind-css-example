<template>
  <ul>
    <li>
      <p>aspect-ratio：用户控制元素的纵横比</p>
      <div class="w-[100px] bg-gray-300 flex items-center justify-center aspect-[1/1]">1比1</div>
    </li>

    <li>
      <p class="text-blue-600">columns：控制元素内列的工具（纵向排列）</p>
      <p>5列：columns: 5;</p>
      <p>列之间的间距：gap: 12px;</p>
      <div class="columns-5 gap-[12px]">
        <div v-for="(item, index) of new Array(10)" class="box !m-0 !mb-[12px]">{{ index + 1 }}</div>
      </div>
    </li>

    <li>
      <p>box-sizing：在指定宽度或者高度时，控制浏览器如何计算元素的总大小；</p>
      <div class="flex">
        <div class="box !w-[100px] !h-[100px] border-2 border-solid border-blue-600 box-content">box-content</div>
        <div class="box !w-[100px] !h-[100px] border-2 border-solid border-blue-600 box-border">box-border</div>
      </div>
    </li>

    <li>
      <p class="text-blue-600">clear：清除浮动，用户指定元素的一侧不允许出现浮动</p>
      <p>clear-left：强制当前元素换行，左测没有浮动，当前元素会换行到浮动元素下方</p>
      <article>
        <img class="w-[200px] object-cover mb-[6px] float-left" src="@/assets/imgs/bg.jpg" />
        <img class="w-[500px] object-cover float-right" src="@/assets/imgs/bg.jpg" />
        <p class="clear-left">
          Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at
          the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines
          and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your
          kicks. You and your good-time buddies.
        </p>
      </article>
    </li>

    <li>
      <p class="text-blue-600">object-fit：控制元素内容适应其容器的大小</p>
      <img class="w-[200px] aspect-square object-cover object-right" src="@/assets/imgs/bg.jpg" />
    </li>

    <li>
      <p>☆</p>
      <div class="">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
</script>
