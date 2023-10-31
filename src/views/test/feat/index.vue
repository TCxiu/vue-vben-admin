<template>
  <div>
    <div class="m-t-2">
      <a-button color="success" @click="addUser">添加嵌套数组对象</a-button>
      <div class="m-t-2">
        <BasicForm @register="register" @submit="handleSubmit" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { useMessage } from '/@/hooks/web/useMessage';

  const { createMessage } = useMessage();

  const state = reactive({
    size: 1,
  });

  const schemas: FormSchema[] = [
    {
      field: 'user[0].name',
      component: 'Input',
      label: '姓名',
      defaultValue: '张三',
      rules: [{ required: true, message: '姓名必填' }],
      colProps: {
        span: 12,
      },
    },
    {
      field: 'user[0].age',
      component: 'Input',
      label: '年龄',
      defaultValue: '18',
      rules: [{ required: true, message: '年龄必写' }],
      colProps: {
        span: 12,
      },
    },
  ];

  const [register, { validate, clearValidate, removeSchemaByField, appendSchemaByField }] = useForm(
    {
      labelWidth: 120,
      schemas,
      actionColOptions: {
        span: 24,
      },
    },
  );

  const addUser = () => {
    state.size++;
    clearValidate();
    for (let index = 0; index < state.size; index++) {
      removeSchemaByField(`user[${index}].name`);
      removeSchemaByField(`user[${index}].age`);
    }

    for (let index = 0; index < state.size; index++) {
      appendSchemaByField(
        {
          field: `user[${index}].name`,
          component: 'Input',
          label: '姓名',
          defaultValue: '张三',
          rules: [{ required: true, message: '姓名必填' }],
          colProps: {
            span: 12,
          },
        },
        undefined,
        false,
      );
      appendSchemaByField(
        {
          field: `user[${index}].age`,
          component: 'Input',
          label: '年龄',
          defaultValue: '18',
          rules: [{ required: true, message: '年龄必写' }],
          colProps: {
            span: 12,
          },
        },
        undefined,
        false,
      );
    }
  };

  const handleSubmit = async (values) => {
    try {
      await validate();
      createMessage.success('表单内容' + JSON.stringify(values));
    } finally {
    }
  };
</script>
