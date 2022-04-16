<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-13 16:23:52
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-16 16:48:49
 * @FilePath: \unlimitedfe\src\components\HelloWorld.vue
-->

<template>
  <h1>{{ msg }}</h1>
  <h1>{{ userName }}</h1>
  <a-form
    :model="formState"
    name="horizontal_login"
    layout="inline"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
    <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item>
      <a-button 
      :disabled="disabled"
      type="primary"
      html-type="submit">
        Log in
        </a-button>
    </a-form-item>
  </a-form>
</template>


<script  lang="ts">
import { inject,defineComponent, reactive, toRefs ,computed} from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
// defineProps<{ msg: string }>()
interface FormState {
  username: string;
  password: string;
}
const HelloWorld = defineComponent({
  props:{
    msg: String
  },
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
  const userLocation = inject('location')
  
  const state = reactive({
      userName:"zhangzeyuan"
    })
  const formState = reactive<FormState>({
      username: '',
      password: '',
    });
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    const disabled = computed(() => {
      return !(formState.username && formState.password);
    });

    return {
       formState,
       disabled,
       onFinish,
       onFinishFailed,
      ...toRefs(state),
      userLocation
      }
  }
  
})

export default HelloWorld
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
