<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <SiteTree ref="siteTreeRef" class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" :searchInfo="searchParams" class="w-3/4 xl:w-4/5">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增管理账号 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                tooltip: '修改',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: '删除',
                ifShow: record.id != userId,
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <UserDrawer @register="registerDrawer" @success="handleSuccess" />
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import SiteTree from './SiteTree.vue';
  import { searchFormSchema, columns } from './user.data';
  import { useDrawer } from '/@/components/Drawer';
  import UserDrawer from './UserDrawer.vue';
  import { getUserList, getUserInfo, delUser } from '/@/api/system/user';
  import { useUserStore } from '/@/store/modules/user';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useI18n } from '/@/hooks/web/useI18n';

  const { createMessage } = useMessage();
  //国际化
  const { t } = useI18n();

  const userStore = useUserStore();

  const searchParams = reactive<Recordable>({});
  const siteId = ref('');
  const siteTreeRef = ref();
  const userId = ref<any>('');
  userId.value = userStore.getUserInfo?.userId;

  // 抽屉
  const [registerDrawer, { openDrawer }] = useDrawer();

  // 表格
  const [registerTable, { reload }] = useTable({
    title: '管理账号列表',
    api: getUserList,
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
      baseColProps: { xs: 24, sm: 6, xxl: 6 },
    },
    isTreeTable: false,
    pagination: true,
    striped: false,
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: false,
    canResize: false,
    actionColumn: {
      width: 80,
      title: '操作',
      dataIndex: 'action',
      fixed: 'right',
    },
  });

  const handleSelect = (id = '') => {
    searchParams.siteId = id;
    siteId.value = id;
    reload();
  };

  //新增
  const handleCreate = () => {
    openDrawer(true, {
      siteId: siteId.value,
      isUpdate: false,
    });
  };

  //修改操作
  const handleEdit = async (record: Recordable) => {
    const { id } = record;
    const info = await getUserInfo(id);
    openDrawer(true, {
      info,
      isUpdate: true,
    });
  };

  //删除操作
  const handleDelete = async (record: Recordable) => {
    const { id } = record;
    await delUser(id);
    reload();
  };

  //抽屉完成后回调
  function handleSuccess() {
    createMessage.success(t('common.operateSuccess'));
    reload();
  }
</script>
