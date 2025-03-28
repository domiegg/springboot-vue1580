<template>
  <div>
    <div class="container" :style='{"minHeight":"100vh","padding":"7% 0 100px","alignItems":"flex-start","background":"url(http://codegen.caihongy.cn/20230328/2745bc5a915a47bd8e53ea6684305093.jpg) no-repeat center bottom / 100% 100%","display":"flex","width":"100%","justifyContent":"flex-end"}'>

      <el-form :style='{"padding":"60px 0px 40px 40px","margin":"0 7% 0 0","borderRadius":"50px","background":"rgba(255,255,255,.96)","width":"650px","position":"relative","float":"right","height":"auto"}'>
        <div v-if="true" :style='{"padding":"10px 0","margin":"0 0 40px 0","borderColor":"#266bb6","color":"#333","textAlign":"center","borderRadius":"50px","top":"-60px","left":"5%","background":"#e8e6d4","borderWidth":"0px","width":"90%","fontSize":"20px","position":"absolute","borderStyle":"solid","textShadow":"0px 0px 0px rgba(64, 158, 255, .5)","height":"50px"}' class="title-container">健美操评分系统登录</div>
        <div v-if="loginType==1" class="list-item" :style='{"width":"55%","margin":"0 auto 40px","position":"relative","alignItems":"center","flexWrap":"wrap","display":"flex"}'>
          <div v-if="true" class="lable" :style='{"color":"#7e7a59","left":"-100px","textAlign":"right","width":"100px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>用户名：</div>
          <input :style='{"padding":"0 10px","borderColor":"#ddd","color":"#333","borderRadius":"30px","borderWidth":"1px","width":"100%","fontSize":"16px","borderStyle":"solid","height":"44px"}' placeholder="请输入用户名" name="username" type="text" v-model="rulesForm.username">
        </div>
        <div v-if="loginType==1" class="list-item" :style='{"width":"55%","margin":"0 auto 40px","position":"relative","alignItems":"center","flexWrap":"wrap","display":"flex"}'>
          <div v-if="true" class="lable" :style='{"color":"#7e7a59","left":"-100px","textAlign":"right","width":"100px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>密码：</div>
          <input :style='{"padding":"0 10px","borderColor":"#ddd","color":"#333","borderRadius":"30px","borderWidth":"1px","width":"100%","fontSize":"16px","borderStyle":"solid","height":"44px"}' placeholder="请输入密码" name="password" type="password" v-model="rulesForm.password">
        </div>
        <div :style='{"width":"55%","margin":"40px auto"}' v-if="roles.length>1" prop="loginInRole" class="list-type">
          <el-radio v-for="item in roles" v-bind:key="item.roleName" v-model="rulesForm.role" :label="item.roleName">{{item.roleName}}</el-radio>
        </div>
        <div :style='{"width":"90%","margin":"20px auto 0","alignItems":"center","flexWrap":"wrap","justifyContent":"center","display":"flex"}'>
          <el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 40px","margin":"5px 0px 0px 0px","color":"#333","bottom":"-60px","outline":"none","borderRadius":"50px","background":"#e8e6d4","width":"50%","fontSize":"18px","position":"absolute","height":"44px"}' type="primary" @click="login()" class="loginInBt">登录</el-button>
        </div>
      </el-form>

    </div>
  </div>
</template>
<script>

import menu from "@/utils/menu";
export default {
  data() {
    return {
      baseUrl:this.$base.url,
      loginType: 1,
      rulesForm: {
        username: "",
        password: "",
        role: "",
        code: '',
      },
      menus: [],
      roles: [],
      tableName: "",
      codes: [{
        num: 1,
        color: '#000',
        rotate: '10deg',
        size: '16px'
      },{
        num: 2,
        color: '#000',
        rotate: '10deg',
        size: '16px'
      },{
        num: 3,
        color: '#000',
        rotate: '10deg',
        size: '16px'
      },{
        num: 4,
        color: '#000',
        rotate: '10deg',
        size: '16px'
      }],
    };
  },
  mounted() {
    let menus = menu.list();
    this.menus = menus;

    for (let i = 0; i < this.menus.length; i++) {
      if (this.menus[i].hasBackLogin=='是') {
        this.roles.push(this.menus[i])
      }
    }

  },
  created() {
    this.getRandCode()
  },
  destroyed() {
	    },
  components: {
  },
  methods: {

    //注册
    register(tableName){
		this.$storage.set("loginTable", tableName);
        this.$storage.set("pageFlag", "register");
		this.$router.push({path:'/register'})
    },
    // 登陆
    login() {

		if (!this.rulesForm.username) {
			this.$message.error("请输入用户名");
			return;
		}
		if (!this.rulesForm.password) {
			this.$message.error("请输入密码");
			return;
		}
		if(this.roles.length>1) {
			if (!this.rulesForm.role) {
				this.$message.error("请选择角色");
				return;
			}

			let menus = this.menus;
			for (let i = 0; i < menus.length; i++) {
				if (menus[i].roleName == this.rulesForm.role) {
					this.tableName = menus[i].tableName;
				}
			}
		} else {
			this.tableName = this.roles[0].tableName;
			this.rulesForm.role = this.roles[0].roleName;
		}

		this.$http({
			url: `${this.tableName}/login?username=${this.rulesForm.username}&password=${this.rulesForm.password}`,
			method: "post"
		}).then(({ data }) => {
			if (data && data.code === 0) {
				this.$storage.set("Token", data.token);
				this.$storage.set("role", this.rulesForm.role);
				this.$storage.set("sessionTable", this.tableName);
				this.$storage.set("adminName", this.rulesForm.username);
				this.$router.replace({ path: "/index/" });
			} else {
				this.$message.error(data.msg);
			}
		});
    },
    getRandCode(len = 4){
		this.randomString(len)
    },
    randomString(len = 4) {
      let chars = [
          "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
          "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
          "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G",
          "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
          "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2",
          "3", "4", "5", "6", "7", "8", "9"
      ]
      let colors = ["0", "1", "2","3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
      let sizes = ['14', '15', '16', '17', '18']

      let output = [];
      for (let i = 0; i < len; i++) {
        // 随机验证码
        let key = Math.floor(Math.random()*chars.length)
        this.codes[i].num = chars[key]
        // 随机验证码颜色
        let code = '#'
        for (let j = 0; j < 6; j++) {
          let key = Math.floor(Math.random()*colors.length)
          code += colors[key]
        }
        this.codes[i].color = code
        // 随机验证码方向
        let rotate = Math.floor(Math.random()*60)
        let plus = Math.floor(Math.random()*2)
        if(plus == 1) rotate = '-'+rotate
        this.codes[i].rotate = 'rotate('+rotate+'deg)'
        // 随机验证码字体大小
        let size = Math.floor(Math.random()*sizes.length)
        this.codes[i].size = sizes[size]+'px'
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
      background: url(http://codegen.caihongy.cn/20230328/2745bc5a915a47bd8e53ea6684305093.jpg) no-repeat center bottom / 100% 100%;
        
  .list-item /deep/ .el-input .el-input__inner {
		border-radius: 30px;
		padding: 0 10px;
		color: #333;
		width: 100%;
		font-size: 16px;
		border-color: #ddd;
		border-width: 1px;
		border-style: solid;
		height: 44px;
	  }
  
  .list-code /deep/ .el-input .el-input__inner {
  	  	border: 0px solid rgba(64, 158, 255, 1);
  	  	border-radius: 30px;
  	  	padding: 0 10px;
  	  	outline: none;
  	  	color: #333;
  	  	width: calc(100% - 100px);
  	  	font-size: 16px;
  	  	border-color: #ddd;
  	  	border-width: 1px;
  	  	border-style: solid;
  	  	height: 44px;
  	  }

  .list-type /deep/ .el-radio__input .el-radio__inner {
		border-radius: 20px;
		background: rgba(53, 53, 53, 0);
		border-color: #666666;
	  }
  .list-type /deep/ .el-radio__input.is-checked .el-radio__inner {
        border-radius: 20px;
        background: #7e7a59;
        border-color: #7e7a59;
      }
  .list-type /deep/ .el-radio__label {
		color: #666666;
		font-size: 16px;
	  }
  .list-type /deep/ .el-radio__input.is-checked+.el-radio__label {
        color: #7e7a59;
        font-size: 16px;
      }
}
</style>
