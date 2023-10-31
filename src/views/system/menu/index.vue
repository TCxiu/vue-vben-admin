<template>
  <div>
    <BasicTable @register="registerTable" @fetch-success="handleTableLoad">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增菜单 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:plus-circle-outlined',
                onClick: handleCreate.bind(null, record),
              },
              {
                icon: 'clarity:note-edit-line',
                color: 'success',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
        <template v-else-if="column.key === 'wapIcon'">
          <TableImg
            :size="24"
            :simpleShow="true"
            :imgList="record.wapIcon ? [record.wapIcon] : []"
          />
        </template>
        <template v-else-if="column.key === 'linkIcon'">
          <TableImg
            :size="24"
            :simpleShow="true"
            :imgList="record.linkIcon ? [record.linkIcon] : []"
          />
        </template>
      </template>
    </BasicTable>
    <MenuDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>

<script lang="ts" setup>
  import { ref, nextTick } from 'vue';
  import { BasicTable, useTable, TableAction, TableImg } from '/@/components/Table';
  import { searchFormSchema, columns } from './menu.data';
  import { useDrawer } from '/@/components/Drawer';
  import MenuDrawer from './MenuDrawer.vue';
  import { getMenuList, getMenuInfo, delMenu } from '/@/api/system/menu';
  import { listToTree } from '/@/utils/helper/treeHelper';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useI18n } from '/@/hooks/web/useI18n';

  const { createMessage } = useMessage();
  //国际化
  const { t } = useI18n();

  const { refreshRoutes } = usePermission();

  // 抽屉
  const [registerDrawer, { openDrawer }] = useDrawer();

  const defauleExpandedList = ref<any>([]);

  //表格
  const [registerTable, { reload, expandRows }] = useTable({
    title: '菜单列表',
    api: getMenuList,
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
    },
    afterFetch: (data) => {
      defauleExpandedList.value = ['1', '2'];
      return listToTree(data, { label: 'title' });
    },
    rowKey: 'id',
    isTreeTable: true,
    pagination: false,
    striped: false,
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: false,
    canResize: false,
    actionColumn: {
      width: 120,
      title: '操作',
      dataIndex: 'action',
      fixed: 'right',
    },
  });

  //表格数据获取完毕后
  const handleTableLoad = () => {
    nextTick(() => {
      expandRows(['1', '2']);
    });
  };

  //新增
  function handleCreate(record: Recordable) {
    openDrawer(true, {
      parentId: record?.id,
      terminal: record?.terminal,
      isUpdate: false,
    });
  }

  //修改操作
  const handleEdit = async (record: Recordable) => {
    const { id } = record;
    const info = await getMenuInfo(id);
    openDrawer(true, {
      info,
      isUpdate: true,
    });
  };

  //删除操作
  const handleDelete = async (record: Recordable) => {
    const { id } = record;
    await delMenu(id);
    await reload();
    await refreshRoutes();
  };

  //抽屉完成后回调
  const handleSuccess = async () => {
    createMessage.success(t('common.operateSuccess'));
    await reload();
    await refreshRoutes();
  };
</script>
