<template>
  <div class="m-4 mr-0 overflow-hidden bg-white">
    <BasicTree
      title="机构列表"
      ref="siteTreeRef"
      toolbar
      search
      treeWrapperClassName="h-[calc(100%-35px)] overflow-auto"
      :clickRowToExpand="false"
      :treeData="treeData"
      :fieldNames="{ key: 'id', title: 'label' }"
      @select="handleSelect"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick } from 'vue';
  import { BasicTree, TreeItem, TreeActionType } from '/@/components/Tree';
  import { selectSite } from '/@/api/system/site';
  import { listToTree } from '/@/utils/helper/treeHelper';

  export default defineComponent({
    name: 'SiteTree',
    components: { BasicTree },
    emits: ['select'],
    setup(_, { emit }) {
      const siteTreeRef = ref<Nullable<TreeActionType>>(null);
      const treeData = ref<TreeItem[]>([]);

      async function fetch() {
        treeData.value = listToTree(await selectSite()) as unknown as TreeItem[];
        nextTick(() => {
          siteTreeRef.value?.expandAll(true);
        });
      }
      const handleSelect = (keys) => {
        emit('select', keys[0]);
      };

      const unSelect = (key) => {
        siteTreeRef.value?.setSelectedKeys([key]);
      };

      return {
        fetch,
        handleSelect,
        unSelect,
        treeData,
        siteTreeRef,
      };
    },
    mounted() {
      this.fetch();
    },
  });
</script>
