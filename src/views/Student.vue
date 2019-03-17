
<template>
  <div>
    <Content :style="{padding: '10px 50px'}">
      <Card>
        <div style="min-height: 200px; ">
          <h1>这是学生管理页面</h1>
          <p>你可以在这里添加/删除学生.</p>
          <br>
          <Button v-on:click="addStudent" >添加新的学生</Button>
          <Table style="margin:10px 5px 15px 20px" :columns="columns1" :data="studentData"></Table>
        </div>
      </Card>
    </Content>

    <Modal @on-ok="ok" v-model="modalOpen" draggable scrollable title="危险的操作">
        <div>你确定要把它删除嘛？</div>
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
        columns1: [{
            title: '名字',
            key: 'name'
          },
          {
            title: '年级',
            key: 'grade'
          },
          {
            title: '班级',
            key: 'class'
          },
          {
            title: 'Action',
            key: 'action',
            width: 300,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.edit(params.index)
                    }
                  }
                }, '修改信息'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除学生')
              ]);
            }
          }
        ],
        studentData: [],
        modalOpen: false,
        theOneDel: null
      }
    },
    methods: {
      addStudent: function() {
        this.$router.push('/student/add')
      },
      edit: function(index) {
        
      },
      remove: function(index) {
        this.theOneDel = index
        this.modalOpen = true
      },
      ok: function() {
        console.log(this.theOneDel)
        
      }
    },
    created() {
      var _this = this;
      ref.on("value", (snapshot) => {
        snapshot.forEach((student_information) => {
          _this.studentData.push({code: student_information.val(),name: student_information.val().chinese_name, grade: student_information.val().entel_grade, class: student_information.val().entel_class})
        })
      })
    }

  }
</script>