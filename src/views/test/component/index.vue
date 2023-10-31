<template>
  <div>
    <div class="m-t-2">
      <div class="text-lg">上传测试</div>
      <div>
        <BasicUpload
          :maxSize="100"
          :maxNumber="1"
          :api="uploadTestApi"
          :uploadParams="{ module: 'test/upload/compose' }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { BasicUpload } from '/@/components/Upload';
  import { uploadTestApi } from '/@/api/common/upload';
</script>
