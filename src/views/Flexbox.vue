<template>
  <ul>
    <li>
      <p>order：控制 flex 和 grid 项的顺序</p>
      <div class="flex">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box order-first">3</div>
      </div>
    </li>

    <li>
      <p>flex-direction：控制弹性项目方向</p>
      <div class="flex flex-row-reverse justify-end">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
      </div>
    </li>

    <li>
      <p>flex-grow：控制弹性项目如何扩展，单个项目占据的空间，0 表示不扩展保持初始化大小</p>
      <div class="flex">
        <div class="box grow-[0]">1</div>
        <div class="box grow-[1]">2</div>
        <div class="box grow-[2]">3</div>
      </div>
    </li>

    <li>
      <p>flex-shrink：控制弹性项目是否进行收缩，0 为保持本来的宽度</p>
      <div class="flex">
        <div class="box">1</div>
        <div class="box !w-[100px] shrink-0">2</div>
        <div class="box grow">3</div>
      </div>
    </li>

    <li>
      <p>flex-basic：控制弹性项目初始化的大小</p>
      <div class="flex">
        <div class="box basis-[100px]">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
      </div>
    </li>

    <li>
      <p class="text-blue-600">flex：flex-grow, flex-shring, flex-basic 的简写，它的完整形式由三个子属性组成；控制弹性项目的如何增大和缩小</p>
      <p>flex:1：flex:1 1 0;</p>
      <p>flex:auto：flex:1 1 auto;</p>
      <p>flex:none：flex 0 0 auto;（完全固定大小）</p>
      <div class="flex">
        <div class="box flex-1">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
      </div>
    </li>

    <li>
      <p class="text-blue-600">FlexBasic 和 FlexGrow 的区别：</p>
      <p>basic 用于定义项目的初始化大小，auto 为默认，0 则依赖于 grow 分配的空间；如指定 flex-basis: 100px; 则项目初始化宽度为 100px。</p>
      <p>grow 定义项目如何分配空间。</p>
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

<script setup>
import { ref } from 'vue';
</script>
