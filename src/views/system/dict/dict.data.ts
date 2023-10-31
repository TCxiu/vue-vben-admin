import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { optionDict } from '/@/api/system/dict';

export const searchFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '数据字典主键',
    component: 'Input',
    ifShow: false,
  },
  {
    field: 'label',
    label: '字典名称',
    component: 'Input',
  },
  {
    field: 'value',
    label: '字典值',
    component: 'Input',
  },
  {
    field: 'enabled',
    label: '状态',
    component: 'ApiSelect',
    componentProps: {
      api: optionDict,
      params: {
        dictType: 'enabled',
      },
      numberToString: true,
    },
  },
  {
    field: 'isSystem',
    label: '系统字典',
    component: 'ApiSelect',
    componentProps: {
      api: optionDict,
      params: {
        dictType: 'isSystem',
      },
      numberToString: true,
    },
  },
];

export const columns: BasicColumn[] = [
  {
    title: '数据字典主键',
    dataIndex: 'id',
    ifShow: false,
  },
  {
    title: '字典名称',
    dataIndex: 'label',
    align: 'left',
    width: 200,
  },
  {
    title: '字典值',
    dataIndex: 'value',
    width: 200,
  },
  {
    title: '状态',
    dataIndex: 'enabled',
    width: 200,
    customRender: ({ record }) => {
      const status = record.enabled;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '启用' : '停用';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '系统字典',
    dataIndex: 'isSystem',
    width: 200,
    customRender: ({ record }) => {
      const status = record.isSystem;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '系统' : '自定义';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '等级',
    dataIndex: 'level',
    width: 100,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: '数据字典主键',
    component: 'Input',
    show: false,
  },
  {
    field: 'parentId',
    label: '父级字典',
    component: 'ApiTreeSelect',
    componentProps: ({ formModel, formActionType }) => {
      return {
        api: optionDict,
        valueField: 'id',
        params: {
          dictType: 'all',
        },
        placeholder: '请选择父级字典',
        onSelect: (_e, node) => {
          formModel['endTime'] = null;
          const { setFieldsValue } = formActionType;
          setFieldsValue({
            isSystem: node.isSystem + '',
          });
          // updateSchema({
          //   field: 'isSystem',
          //   show: true,
          // });
        },
      };
    },
    required: false,
  },
  {
    field: 'label',
    label: '字典名称',
    component: 'Input',
    componentProps: {
      maxlength: 32,
      placeholder: '请输入字典名称',
    },
    rules: [
      {
        required: true,
      },
      {
        validator: async (_rule, value) => {
          if (/[\u4E00-\u9FA5]/g.test(value)) {
            return Promise.resolve();
          } else {
            return Promise.reject('字典名称只能使用中文');
          }
        },
        trigger: 'change',
      },
    ],
  },
  {
    field: 'value',
    label: '字典值',
    component: 'Input',
    componentProps: {
      maxlength: 32,
      placeholder: '请输入字典值',
    },
    rules: [
      {
        required: true,
      },
      {
        validator: async (_rule, value) => {
          if (/[\u4E00-\u9FA5]/g.test(value)) {
            return Promise.reject('字典值不能使用中文');
          }
          return Promise.resolve();
        },
        trigger: 'change',
      },
    ],
  },
  {
    field: 'orderNo',
    label: '排序值',
    component: 'InputNumber',
    defaultValue: '1',
    componentProps: {
      min: 0,
      max: 999999,
      placeholder: '请输入排序值',
    },
    required: true,
  },
  {
    field: 'enabled',
    label: '状态',
    component: 'ApiRadioGroup',
    defaultValue: '1',
    componentProps: {
      api: optionDict,
      params: {
        dictType: 'enabled',
      },
      isBtn: true,
      numberToString: true,
    },
    required: true,
  },
  {
    field: 'isSystem',
    label: '系统字典',
    component: 'ApiRadioGroup',
    defaultValue: '1',
    componentProps: {
      api: optionDict,
      params: {
        dictType: 'isSystem',
      },
      isBtn: true,
      numberToString: true,
    },
    required: true,
  },
];
