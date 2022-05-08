<!--
 * @Description:
 * @Author: 张泽雨
 * @Date: 2022-04-22 12:21:32
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-24 20:38:20
 * @FilePath: \unlimitedfe\src\views\Home\index.vue
-->
<template>
  <div>
    <el-button type="primary">你好</el-button>
    <div class="box">
      <button type="primary" class="btn">hahah</button>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'

export default {
  name: 'Home',
  data() {
    return {
      socket: null
    }
  },
  mounted() {
    let device_id = '11'
    this.socket = io('http://127.0.0.1:8080', {
      transports: ['websocket'],
      query: { device_id: device_id },
      autoConnect: false
    })
    // 控制socket开始连接
    this.socket.open()

    this.socket.on('connect', () => {
      console.log('connect')
    })

    this.socket.on('online', msg => {
      console.log('online', msg)
    })
    // 系统事件
    this.socket.on('disconnect', msg => {
      console.log('#disconnect', msg)
    })

    this.socket.on('disconnecting', () => {
      console.log('#disconnecting')
    })

    this.socket.on('error', () => {
      console.log('#error')
    })
  }
}
</script>

<style lang="scss">
$color: #f00;
@mixin button($color) {
    width: 200px;
    height: 20px;
    background-color:$color;
}

.btn {
 @include button($color) ;
}

</style>
