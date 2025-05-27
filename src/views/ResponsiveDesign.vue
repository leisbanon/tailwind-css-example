<template>
  <ul>
    <li>
      <p>响应式设计 - 断点</p>
      <div>
        <p>每个工具类都可以在断点的不同条件应用，Tailwind 使用移动端断点优先，接收分辨率，默认的5个断点：</p>
        <p>sm：640px</p>
        <p>md：768px</p>
        <p>lg：1024px</p>
        <p>xl：1280px</p>
        <p>2xl：1536px</p>
      </div>
    </li>

    <li>
      <p class="text-blue-600">针对移动端屏幕：sm:flex-row</p>
      <p>断点在 640px 范围外应用</p>
      <div class="flex flex-col sm:flex-row">
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <pre>
        <code>
        @media (min-width: 640px) {
            .sm\:flex-row {
                flex-direction: row;
            }
        }
        </code>
      </pre>
    </li>

    <li>
      <p class="text-blue-600">针对断点范围，指定范围内应用样式：max-sm:flex</p>
      <p>断点在 640px 范围内应用</p>
      <div class="max-sm:flex">
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <pre>
        <code>
        @media not all and (min-width: 640px) {
            .max-sm\:flex {
              display: flex;
            }
        }
        </code>
      </pre>
    </li>

    <li>
      <p class="text-blue-600">针对单个断点：sm:max-lg:flex</p>
      <div class="sm:max-lg:flex">
        <div class="box"></div>
        <div class="box"></div>
      </div>

      <pre>
        <code>
        @media (min-width: 640px) {
          @media not all and (min-width: 1024px) {
            .sm\:max-lg\:flex {
                display: flex;
            }
          }
        }
        </code>
      </pre>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped lang="scss"></style>
