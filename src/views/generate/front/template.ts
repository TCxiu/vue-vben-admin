import { isEmpty } from '/@/utils/is';
import { upperFirst } from 'lodash-es';

const indexTemplate = (hasLeft, page, pageDesc, api) => {
  if (hasLeft === '0') {
    return `<template>
    <div>
      <BasicTable @register="registerTable">
        <template #toolbar>
          <a-button type="primary" @click="handleCreate"> 新增${pageDesc} </a-button>
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
      <${upperFirst(page)}Drawer @register="registerDrawer" @success="handleSuccess" />
    </div>
  </template>
  
  <script lang="ts" setup>
    import { BasicTable, useTable, TableAction } from '/@/components/Table';
    import { searchFormSchema, columns } from './${page}.data';
    import { useDrawer } from '/@/components/Drawer';
    import ${upperFirst(page)}Drawer from './${upperFirst(page)}Drawer.vue';
    import { get${upperFirst(page)}List, get${upperFirst(page)}Info, del${upperFirst(
      page,
    )} } from '/@/api/${api}';
  
    // 抽屉
    const [registerDrawer, { openDrawer }] = useDrawer();
  
    // 表格
    const [registerTable, { reload }] = useTable({
      title: '${pageDesc}列表',
      api: get${upperFirst(page)}List,
      columns,
      formConfig: {
        labelWidth: 120,
        schemas: searchFormSchema,
        baseColProps: { xs: 24, sm: 12, xxl: 6 },
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
  
    //新增
    function handleCreate() {
      openDrawer(true, {
        isUpdate: false,
      });
    }
  
    //修改操作
    const handleEdit = async (record: Recordable) => {
      const { id } = record;
      const info = await get${upperFirst(page)}Info(id);
      openDrawer(true, {
        info,
        isUpdate: true,
      });
    };
  
    //删除操作
    const handleDelete = async (record: Recordable) => {
      const { id } = record;
      await del${upperFirst(page)}(id);
      reload();
    };
  
    //抽屉完成后回调
    function handleSuccess() {
      reload();
    }
  </script>
    `;
  } else {
    return `fdsfdsfds`;
  }
};

const mockTemplate = (page, mock) => {
  return `import { resultPageSuccess, resultSuccess } from '../_util';
  import { MockMethod } from 'vite-plugin-mock';
  
  const ${page}List = (() => {
    const result: any[] = [];
    for (let index = 0; index < 20; index++) {
      result.push({
        id: '@guid',
        createTime: '@datetime',
      });
    }
    return result;
  })();
  
  const ${page}Info = {};
  
  export default [
    {
      url: '/basic-api/${mock}',
      method: 'get',
      response: ({ query }) => {
        const { pageNo = 1, pageSize = 10 } = query;
        return resultPageSuccess(pageNo, pageSize, ${page}List);
      },
    },
    {
      url: '/basic-api/${mock}',
      method: 'post',
      response: () => {
        return resultSuccess({});
      },
    },
    {
      url: '/basic-api/${mock}/:id',
      method: 'get',
      response: () => {
        return resultSuccess(${page}Info);
      },
    },
    {
      url: '/basic-api/${mock}/:id',
      method: 'put',
      response: () => {
        return resultSuccess({});
      },
    },
    {
      url: '/basic-api/${mock}/:id',
      method: 'delete',
      response: () => {
        return resultSuccess({});
      },
    },
  ] as MockMethod[];  
  `;
};

const apiTemplate = (page, pageDesc, api) => {
  return `import { defHttp } from '/@/utils/http/axios';

  enum Api {
    Get${upperFirst(page)}List = '/${api}',
    Get${upperFirst(page)}Info = '/${api}/',
    Create${upperFirst(page)} = '/${api}',
    Edit${upperFirst(page)} = '/${api}/',
    Del${upperFirst(page)} = '/${api}/',
  }
  
  /**
   * @description: ${pageDesc}列表
   */
  export function get${upperFirst(page)}List(params) {
    return defHttp.get<any>({ url: Api.Get${upperFirst(page)}List, params });
  }
  
  /**
   * @description: 添加${pageDesc}
   */
  export function create${upperFirst(page)}(data) {
    return defHttp.post<any>({ url: Api.Create${upperFirst(page)}, data });
  }
  
  /**
   * @description: ${pageDesc}详情
   */
  export function get${upperFirst(page)}Info(id) {
    return defHttp.get<any>({ url: Api.Get${upperFirst(page)}Info + id });
  }
  
  /**
   * @description: 修改${pageDesc}
   */
  export function edit${upperFirst(page)}(id, data) {
    return defHttp.put<any>({ url: Api.Edit${upperFirst(page)} + id, data });
  }
  
  /**
   * @description: 删除${pageDesc}
   */
  export function del${upperFirst(page)}(id) {
    return defHttp.delete<any>({ url: Api.Del${upperFirst(page)} + id });
  }  
`;
};

const schemaTemplate = () => {
  return `import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const searchFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '主键',
    component: 'Input',
    ifShow: false,
  },
  {
    field: 'name',
    label: '名称',
    component: 'Input',
  },
  {
    field: 'enabled',
    label: '是否启用',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: '1' },
        { label: '停用', value: '0' },
      ],
    },
  },
];

export const columns: BasicColumn[] = [
  {
    title: '主键',
    dataIndex: 'id',
    ifShow: false,
  },
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '是否启用',
    dataIndex: 'enabled',
    customRender: ({ record }) => {
      const status = record.enabled;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '启用' : '停用';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: '主键',
    component: 'Input',
    show: false,
  },
  {
    field: 'name',
    label: '名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'enabled',
    label: '是否启用',
    component: 'RadioButtonGroup',
    defaultValue: '1',
    componentProps: {
      options: [
        { label: '启用', value: '1' },
        { label: '停用', value: '0' },
      ],
    },
  },
];
`;
};

const drawerTemplate = (page, pageDesc, api) => {
  return `<template>
<BasicDrawer
  v-bind="$attrs"
  @register="registerDrawer"
  showFooter
  :title="getTitle"
  width="50%"
  @ok="handleSubmit"
>
  <BasicForm @register="registerForm" />
</BasicDrawer>
</template>
<script lang="ts">
import { defineComponent, ref, computed, unref } from 'vue';
import { BasicForm, useForm } from '/@/components/Form/index';
import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
import { formSchema } from './${page}.data';
import { create${upperFirst(page)}, edit${upperFirst(page)} } from '/@/api/${api}';

export default defineComponent({
  name: '${upperFirst(page)}Drawer',
  components: { BasicDrawer, BasicForm },
  emits: ['success', 'register'],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
      labelWidth: 100,
      schemas: formSchema,
      showActionButtonGroup: false,
      baseColProps: { lg: 12, md: 24 },
    });
    const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
      resetFields();
      setDrawerProps({ confirmLoading: false });
      isUpdate.value = !!data?.isUpdate;

      if (unref(isUpdate)) {
        setFieldsValue({
          ...data.info,
        });
      }
    });
    const getTitle = computed(() => (!unref(isUpdate) ? '新增${pageDesc}' : '编辑${pageDesc}'));
    async function handleSubmit() {
      try {
        const values = await validate();
        setDrawerProps({ confirmLoading: true });
        if (!unref(isUpdate)) {
          await create${upperFirst(page)}(values);
        } else {
          await edit${upperFirst(page)}(values.id, values);
        }

        closeDrawer();
        emit('success');
      } finally {
        setDrawerProps({ confirmLoading: false });
      }
    }
    return { registerDrawer, registerForm, getTitle, handleSubmit };
  },
});
</script>
`;
};

export const genTemplate = (tab, form) => {
  if (tab === 'index') {
    if (!isEmpty(form)) {
      const { hasLeft, page, pageDesc, api } = form;
      return indexTemplate(hasLeft, page, pageDesc, api);
    }
  }

  if (tab === 'mock') {
    if (!isEmpty(form)) {
      const { page, mock } = form;
      return mockTemplate(page, mock);
    }
  }

  if (tab === 'api') {
    if (!isEmpty(form)) {
      const { page, pageDesc, api } = form;
      return apiTemplate(page, pageDesc, api);
    }
  }

  if (tab === 'schema') {
    return schemaTemplate();
  }

  if (tab === 'drawer') {
    if (!isEmpty(form)) {
      const { page, pageDesc, api } = form;
      return drawerTemplate(page, pageDesc, api);
    }
  }

  return `<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增测试页 </a-button>
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
    <ProtocolDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>

<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { searchFormSchema, columns } from './test.data';
  import { useDrawer } from '/@/components/Drawer';
  import TestDrawer from './TestDrawer.vue';
  import { getTestList, getTestInfo, delTest } from '/@/api/template/test';

  // 抽屉
  const [registerDrawer, { openDrawer }] = useDrawer();

  // 表格
  const [registerTable, { reload }] = useTable({
    title: '测试页列表',
    api: getTestList,
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
      baseColProps: { xs: 24, sm: 12, xxl: 6 },
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

  //新增
  function handleCreate() {
    openDrawer(true, {
      isUpdate: false,
    });
  }

  //修改操作
  const handleEdit = async (record: Recordable) => {
    const { id } = record;
    const info = await getTestInfo(id);
    openDrawer(true, {
      info,
      isUpdate: true,
    });
  };

  //删除操作
  const handleDelete = async (record: Recordable) => {
    const { id } = record;
    await delTest(id);
    reload();
  };

  //抽屉完成后回调
  function handleSuccess() {
    reload();
  }
</script>
  `;
};
