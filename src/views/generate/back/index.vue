<template>
  <Row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }" class="p-4">
    <Col :span="24">
      <Row>
        <Col :span="24" class="p-6">
          <BasicForm @register="register" ref="formRef">
            <template #add="{ field }">
              <a-button v-if="Number(field) === 0" @click="addField">+</a-button>
              <a-button v-if="field > 0" @click="delField(field)">-</a-button>
            </template>
          </BasicForm>
        </Col>
        <Col :span="6" :offset="18">
          <a-button @click="apply" class="mr-2" color="success"> 应用刷新参数 </a-button>
        </Col>
      </Row>
    </Col>
    <Col :span="24">
      <Tabs v-model:activeKey="state.activeTab" @change="changeTab" animated>
        <TabPane v-for="item in tabs" :key="item.key" :tab="item.title">
          <a-button color="success" @click="handleCopy" class="m-1"> 复制 </a-button>
          <a-button type="primary" @click="download" class="m-1"> 下载 </a-button>
          <pre><code class="hljs m-4" v-html="state.highlightCode"></code></pre>
        </TabPane>
      </Tabs>
    </Col>
  </Row>
</template>

<script lang="ts">
  import { ref, unref, reactive, defineComponent, onMounted } from 'vue';
  import { Row, Col, Tabs } from 'ant-design-vue';
  import { copyText } from '/@/utils/copyTextToClipboard';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { BasicForm, useForm, FormActionType } from '/@/components/Form';
  import { formSchema } from './back.data';
  import { genTemplate } from './template';

  import hljs from 'highlight.js/lib/core';
  import 'highlight.js/styles/stackoverflow-light.css';
  import java from 'highlight.js/lib/languages/java';
  import xml from 'highlight.js/lib/languages/xml';
  import { saveAs } from 'file-saver';

  hljs.registerLanguage('java', java);
  hljs.registerLanguage('xml', xml);

  export default defineComponent({
    name: 'GenBack',
    components: { Row, Col, Tabs, TabPane: Tabs.TabPane, BasicForm },
    setup() {
      const { createMessage } = useMessage();
      const formRef = ref<Nullable<FormActionType>>(null);

      const tabs = [
        { key: 'model', title: '实体表', type: 'java' },
        { key: 'dto', title: '添加修改请求体', type: 'java' },
        { key: 'query', title: '查询参数', type: 'java' },
        { key: 'vo', title: '响应列表', type: 'java' },
        { key: 'mapper', title: 'Mapper接口', type: 'java' },
        { key: 'xml', title: 'mapper.xml', type: 'xml' },
        { key: 'service', title: 'service接口', type: 'java' },
        { key: 'impl', title: 'service实现', type: 'java' },
        { key: 'controller', title: 'controller', type: 'java' },
      ];

      const [register, { appendSchemaByField, removeSchemaByField }] = useForm({
        labelWidth: 110,
        schemas: formSchema,
        showActionButtonGroup: false,
        baseColProps: {
          span: 3,
        },
      });

      const state = reactive({
        activeTab: 'model',
        highlightCode: '',
        code: '',
        fieldSize: 1,
      });

      const buildTemplate = (tab) => {
        const form = formRef.value?.getFieldsValue();
        const code = genTemplate(tab, form);
        state.code = code;
        const result = hljs.highlight(code || '', {
          language: tabs.filter((t) => t.key === tab)[0].type,
          ignoreIllegals: true,
        });
        state.highlightCode = result.value || '&nbsp;';
      };

      /***切换tab页面 */
      const changeTab = (activeKey) => {
        buildTemplate(activeKey);
      };

      /***应用刷新模版参数 */
      const apply = () => {
        buildTemplate(state.activeTab);
      };

      /***添加字段 */
      const addField = () => {
        appendSchemaByField(
          {
            field: `field[${state.fieldSize}].name`,
            component: 'Input',
            label: '字段名',
            defaultValue: 'id',
          },
          undefined,
          false,
        );

        appendSchemaByField(
          {
            field: `field[${state.fieldSize}].doc`,
            component: 'Input',
            label: '字段注释',
            defaultValue: '主键',
            colProps: {
              span: 4,
            },
          },
          undefined,
          false,
        );

        appendSchemaByField(
          {
            field: `field[${state.fieldSize}].type`,
            component: 'Select',
            label: 'java类型',
            defaultValue: 'String',
            componentProps: {
              options: [
                { label: '字符串', value: 'String' },
                { label: 'Integer', value: 'Integer' },
                { label: 'Long', value: 'Long' },
                { label: '时间', value: 'Date' },
                { label: '高精度', value: 'BigDecimal' },
              ],
            },
          },
          undefined,
          false,
        );

        appendSchemaByField(
          {
            field: `field[${state.fieldSize}].sql`,
            component: 'Select',
            label: 'sql类型',
            defaultValue: 'varchar(255)',
            componentProps: {
              options: [
                { label: 'varchar', value: 'varchar(255)' },
                { label: 'text', value: 'text' },
                { label: 'int', value: 'int' },
                { label: 'bigint', value: 'bigint' },
                { label: 'datetime', value: 'datetime' },
                { label: 'decimal', value: 'decimal(65,5)' },
              ],
            },
          },
          undefined,
          false,
        );

        appendSchemaByField(
          {
            field: `field[${state.fieldSize}].vo`,
            label: '列表',
            component: 'RadioButtonGroup',
            defaultValue: '1',
            componentProps: {
              options: [
                { label: '是', value: '1' },
                { label: '否', value: '0' },
              ],
            },
          },
          undefined,
          false,
        );

        appendSchemaByField(
          {
            field: `field[${state.fieldSize}].query`,
            label: '查询',
            component: 'RadioButtonGroup',
            defaultValue: '0',
            componentProps: {
              options: [
                { label: '是', value: '1' },
                { label: '否', value: '0' },
              ],
            },
          },
          undefined,
          false,
        );

        appendSchemaByField(
          {
            field: `field[${state.fieldSize}].edit`,
            label: '修改',
            component: 'RadioButtonGroup',
            defaultValue: '1',
            componentProps: {
              options: [
                { label: '是', value: '1' },
                { label: '否', value: '0' },
              ],
            },
          },
          undefined,
          false,
        );

        appendSchemaByField(
          {
            field: `${state.fieldSize}`,
            component: 'Input',
            label: ' ',
            colProps: {
              span: 1,
            },
            slot: 'add',
          },
          undefined,
          false,
        );

        state.fieldSize += 1;
      };

      /***移除字段 */
      const delField = (field) => {
        removeSchemaByField([
          `field[${field}].name`,
          `field[${field}].doc`,
          `field[${field}].type`,
          `field[${field}].sql`,
          `field[${field}].vo`,
          `field[${field}].query`,
          `field[${field}].edit`,
          `${field}`,
        ]);
        state.fieldSize -= 1;
      };

      /***复制代码 */
      function handleCopy() {
        const value = unref(state.code);
        if (!value) {
          createMessage.warning('请输入要拷贝的内容！');
          return;
        }
        copyText(value);
      }

      /***下载代码 */
      const download = async () => {
        const blob = new Blob([state.code], { type: 'text/plain;charset=utf-8' });
        if (state.activeTab === 'model') {
          const form = formRef.value?.getFieldsValue();
          const { modelName = 'Test' } = form as any;
          await saveAs(blob, `${modelName}.java`);
        } else if (state.activeTab === 'dto') {
          const form = formRef.value?.getFieldsValue();
          const { modelName = 'Test' } = form as any;
          await saveAs(blob, `${modelName}Option.java`);
        } else if (state.activeTab === 'query') {
          const form = formRef.value?.getFieldsValue();
          const { modelName = 'Test' } = form as any;
          await saveAs(blob, `${modelName}ListParams.java`);
        } else if (state.activeTab === 'vo') {
          const form = formRef.value?.getFieldsValue();
          const { modelName = 'Test' } = form as any;
          await saveAs(blob, `${modelName}List.java`);
        } else if (state.activeTab === 'mapper') {
          const form = formRef.value?.getFieldsValue();
          const { modelName = 'Test' } = form as any;
          await saveAs(blob, `${modelName}Mapper.java`);
        } else if (state.activeTab === 'xml') {
          const form = formRef.value?.getFieldsValue();
          const { modelName = 'Test' } = form as any;
          await saveAs(blob, `${modelName}Mapper.xml`);
        } else if (state.activeTab === 'impl') {
          const form = formRef.value?.getFieldsValue();
          const { modelName = 'Test' } = form as any;
          await saveAs(blob, `${modelName}ServiceImpl.java`);
        } else if (state.activeTab === 'controller') {
          const form = formRef.value?.getFieldsValue();
          const { modelName = 'Test' } = form as any;
          await saveAs(blob, `${modelName}Controller.java`);
        }
        createMessage.success('下载成功！');
      };

      onMounted(() => {
        buildTemplate('model');
      });

      return {
        state,
        hljs,
        formRef,
        tabs,
        download,
        register,
        changeTab,
        handleCopy,
        apply,
        addField,
        delField,
      };
    },
  });
</script>

<style scoped></style>
