<template>
  <Row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }" class="p-4">
    <Col :span="8">
      <Row>
        <Col :span="24" class="p-6">
          <BasicForm @register="register" ref="formRef" />
        </Col>
        <Col :span="6" :offset="18">
          <a-button @click="apply" class="mr-2" color="success"> 绑定值到右边 </a-button>
        </Col>
      </Row>
    </Col>
    <Col :span="16">
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
  import { formSchema } from './front.data';
  import { genTemplate } from './template';

  import hljs from 'highlight.js/lib/core';
  import 'highlight.js/styles/stackoverflow-light.css';
  import java from 'highlight.js/lib/languages/java';
  import xml from 'highlight.js/lib/languages/xml';
  import javascript from 'highlight.js/lib/languages/javascript';
  import sql from 'highlight.js/lib/languages/sql';

  import { saveAs } from 'file-saver';
  import { upperFirst } from 'lodash-es';

  hljs.registerLanguage('java', java);
  hljs.registerLanguage('xml', xml);
  hljs.registerLanguage('html', xml);
  hljs.registerLanguage('vue', xml);
  hljs.registerLanguage('javascript', javascript);
  hljs.registerLanguage('sql', sql);

  export default defineComponent({
    name: 'GenFront',
    components: { Row, Col, Tabs, TabPane: Tabs.TabPane, BasicForm },
    setup() {
      const { createMessage } = useMessage();
      const formRef = ref<Nullable<FormActionType>>(null);

      const tabs = [
        { key: 'index', title: 'index页', type: 'vue' },
        { key: 'mock', title: '模拟接口', type: 'javascript' },
        { key: 'api', title: '接口', type: 'javascript' },
        { key: 'schema', title: '表单表格内容', type: 'javascript' },
        { key: 'drawer', title: '增改抽屉', type: 'vue' },
      ];

      const [register] = useForm({
        labelWidth: 120,
        schemas: formSchema,
        showActionButtonGroup: false,
        baseColProps: {
          span: 24,
        },
      });

      const state = reactive({
        activeTab: 'index',
        highlightCode: '',
        code: '',
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
        if (state.activeTab === 'index') {
          await saveAs(blob, 'index.vue');
        } else if (state.activeTab === 'mock' || state.activeTab === 'api') {
          const form = formRef.value?.getFieldsValue();
          const { page } = form as any;
          await saveAs(blob, `${page}.ts`);
        } else if (state.activeTab === 'schema') {
          const form = formRef.value?.getFieldsValue();
          const { page } = form as any;
          await saveAs(blob, `${page}.data.ts`);
        } else if (state.activeTab === 'drawer') {
          const form = formRef.value?.getFieldsValue();
          const { page } = form as any;
          await saveAs(blob, `${upperFirst(page)}Drawer.vue`);
        }
        createMessage.success('下载成功！');
      };

      onMounted(() => {
        buildTemplate('index');
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
      };
    },
  });
</script>

<style scoped></style>
