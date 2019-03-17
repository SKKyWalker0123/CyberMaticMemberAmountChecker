<style>
  .froum_object {
    margin: 10px 5px 15px 20px
  }
</style>

<template>
  <div>
    <Content :style="{padding: '10px 50px'}">
      <Card>
        <div style="min-height: 200px; ">
          <h1>添加一位新的学生</h1>
          <p>你可以在这里添加/删除学生.</p>
          <br>
          <Form :model="formItem" :label-width="80">
            <FormItem class="froum_object" label="名字">
              <Input  v-model="formItem.name" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem class="froum_object" label="年级">
              <Input  v-model="formItem.grade" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem class="froum_object" label="班级">
              <Input  v-model="formItem.class" placeholder="Enter something..."></Input>
            </FormItem>
            <Button v-on:click="addStudent">添加</Button>
          </Form>
          <br>
        </div>
      </Card>
    </Content>
    <Modal @on-ok="ok" @on-cancel="ok" v-model="modalOpen" draggable scrollable title="Modal 1">
        <div>添加成功</div>
    </Modal>
  </div>
</template>

<script>
  // @ is an alias to /src
  var wilddog = require('wilddog')
  var config = {
    syncURL: "https://wd1667711543rdnzpv.wilddogio.com" //输入节点 URL
  };
  wilddog.initializeApp(config);
  var ref = wilddog.sync().ref('student_list/');
  export default {
    name: 'home',
    data() {
      return {
        formItem: {
          name: '',
          grade: '',
          class: ''
        },
        modalOpen: false
      }
    },
    methods: {
      addStudent: function() {
        var _this = this
        ref.push({chinese_name: this.formItem.name, entel_class: this.formItem.class, entel_grade: this.formItem.grade}).then(function() {
          _this.modalOpen = true
        })
      },
      ok: function() {
        this.$router.push('/student')
      }
    }

  }
</script>