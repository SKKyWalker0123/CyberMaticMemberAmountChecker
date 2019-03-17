<template>
  <div>
    <Content :style="{padding: '10px 50px'}">
      <Card>
        <div style="min-height: 200px;">
           <h1>欢迎使用编程社专用点名系统。</h1>
           <p>点击上方开始点名来开始点名。</p>
        </div>
      </Card>
    </Content>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  export default {
    name: 'home',
    components: {
      HelloWorld
    }
  }
</script>