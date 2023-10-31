import { resultSuccess } from '../_util';
import { MockMethod } from 'vite-plugin-mock';

const code = `<template>
  <div class="p-4">
    <a-button color="success" @click="toPreview">预览</a-button>
  </div>
</template>

<script setup>
import { previewCode } from "/@/api/generate/front";

const toPreview = async()=>{
  const res = await previewCode({name: '测试页'})
  console.log(res)
}
</script>

<style lang="scss" scoped>

</style>
`;

export default [
  {
    url: '/basic-api/generate/front/preview',
    method: 'post',
    response: () => {
      return resultSuccess({ code: code });
    },
  },
] as MockMethod[];
