<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","padding":"7% 0 100px","alignItems":"flex-start","background":"url(http://codegen.caihongy.cn/20230328/2745bc5a915a47bd8e53ea6684305093.jpg) no-repeat center bottom / 100% 100%","display":"flex","width":"100%","justifyContent":"flex-end"}'>
			<el-form v-if="pageFlag=='register'" :style='{"padding":"40px 0px 20px 40px","margin":"0 7% 0 0","borderRadius":"50px","flexWrap":"wrap","background":"rgba(255,255,255,.96)","display":"flex","width":"650px","position":"relative","float":"right","justifyContent":"center","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm">
				<div v-if="true" :style='{"padding":"10px 0","margin":"0 auto 40px","borderColor":"#ddd","color":"#333","textAlign":"center","borderRadius":"50px","top":"-60px","left":"5%","background":"#e8e6d4","borderWidth":"0px","width":"90%","fontSize":"20px","position":"absolute","borderStyle":"solid","textShadow":"0px 0px 0px rgba(64, 158, 255, .5)","height":"50px"}' class="title">健美操评分系统注册</div>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='caipanyuan'">
					<div v-if="true" :style='{"color":"#7e7a59","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"600"}' class="lable">裁判账号</div>
					<el-input  v-model="ruleForm.caipanzhanghao"  autocomplete="off" placeholder="裁判账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='caipanyuan'">
					<div v-if="true" :style='{"color":"#7e7a59","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"600"}' class="lable">密码</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='caipanyuan'">
					<div v-if="true" :style='{"color":"#7e7a59","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"600"}' class="lable">确认密码</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='caipanyuan'">
					<div v-if="true" :style='{"color":"#7e7a59","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"600"}' class="lable">裁判员</div>
					<el-input  v-model="ruleForm.caipanyuan"  autocomplete="off" placeholder="裁判员"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='caipanyuan'">
					<div v-if="true" :style='{"color":"#7e7a59","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"600"}' class="lable">性别</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in caipanyuanxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='caipanyuan'">
					<div v-if="true" :style='{"color":"#7e7a59","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"600"}' class="lable">照片</div>
                    <file-upload
                        tip="点击上传照片"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.zhaopian?ruleForm.zhaopian:''"
                        @change="caipanyuanzhaopianUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='caipanyuan'">
					<div v-if="true" :style='{"color":"#7e7a59","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"600"}' class="lable">裁判电话</div>
					<el-input  v-model="ruleForm.caipandianhua"  autocomplete="off" placeholder="裁判电话"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"color":"#7e7a59","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"600"}' class="lable">用户名</div>
					<el-input  v-model="ruleForm.yonghuming"  autocomplete="off" placeholder="用户名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"color":"#7e7a59","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"600"}' class="lable">姓名</div>
					<el-input  v-model="ruleForm.xingming"  autocomplete="off" placeholder="姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"color":"#7e7a59","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"600"}' class="lable">密码</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"color":"#7e7a59","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"600"}' class="lable">确认密码</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"color":"#7e7a59","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"600"}' class="lable">性别</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in yonghuxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"color":"#7e7a59","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"600"}' class="lable">联系电话</div>
					<el-input  v-model="ruleForm.lianxidianhua"  autocomplete="off" placeholder="联系电话"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"color":"#7e7a59","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"600"}' class="lable">头像</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="yonghutouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<button :style='{"border":"0","cursor":"pointer","padding":"0 40px","boxShadow":"0px 0px 0px #f9d7b5","margin":"0px auto 0px","color":"#333","bottom":"-60px","display":"block","outline":"none","borderRadius":"50px","background":"#e8e6d4","width":"50%","fontSize":"18px","position":"absolute","height":"50px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"0","color":"rgba(159, 159, 159, 1)","textAlign":"right","display":"inline-block","width":"60%","lineHeight":"1","fontSize":"16px","textDecoration":"underline"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			ruleForm: {
                xingbie: '',
                xingbie: '',
			},

            pageFlag : '',
			tableName:"",
			rules: {},
            caipanyuanxingbieOptions: [],
            yonghuxingbieOptions: [],
		};
	},
	mounted(){
        this.pageFlag = this.$storage.get("pageFlag");
		let table = this.$storage.get("loginTable");
		this.tableName = table;
        this.caipanyuanxingbieOptions = "男,女".split(',')
        this.yonghuxingbieOptions = "男,女".split(',')
	},
	created() {
    
	},
	destroyed() {
		  	},
	methods: {
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
        caipanyuanzhaopianUploadChange(fileUrls) {
            this.ruleForm.zhaopian = fileUrls;
        },
        yonghutouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.caipanzhanghao) && `caipanyuan` == this.tableName){
						this.$message.error(`裁判账号不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.mima) && `caipanyuan` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `caipanyuan` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.caipanyuan) && `caipanyuan` == this.tableName){
						this.$message.error(`裁判员不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
            if(this.ruleForm.zhaopian!=null) {
                this.ruleForm.zhaopian = this.ruleForm.zhaopian.replace(new RegExp(this.$base.url,"g"),"");
            }
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`caipanyuan` == this.tableName && this.ruleForm.caipandianhua&&(!this.$validate.isMobile(this.ruleForm.caipandianhua))){
						this.$message.error(`裁判电话应输入手机格式`);
						return
					}
					
					
					
					
				
					if((!this.ruleForm.yonghuming) && `yonghu` == this.tableName){
						this.$message.error(`用户名不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.xingming) && `yonghu` == this.tableName){
						this.$message.error(`姓名不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.mima) && `yonghu` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `yonghu` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`yonghu` == this.tableName && this.ruleForm.lianxidianhua&&(!this.$validate.isMobile(this.ruleForm.lianxidianhua))){
						this.$message.error(`联系电话应输入手机格式`);
						return
					}
					
					
					
					
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					
					
					
					
					
					
					
					
					
					
				
			
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20230328/2745bc5a915a47bd8e53ea6684305093.jpg) no-repeat center bottom / 100% 100%;

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 30px;
						padding: 0 10px;
						margin: 0px 0px 0px  0px;
						color: #999;
						width: 100%;
						font-size: 14px;
						border-color: #ddd;
						border-width: 1px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 0;
						border-radius: 30px;
						padding: 0 10px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #999;
						width: 288px;
						font-size: 14px;
						border-color: #ddd;
						border-width: 1px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 0;
						border-radius: 30px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #999;
						width: 288px;
						font-size: 14px;
						border-color: #ddd;
						border-width: 1px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 0;
						border-radius: 30px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #999;
						width: 288px;
						font-size: 14px;
						border-color: #ddd;
						border-width: 1px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 1px solid #ddd;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  margin: 10px 0px 10px 10px;
		  		  color: #ccc;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px solid #ddd;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  margin: 10px 0px 10px 10px;
		  		  color: #ccc;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px solid #ddd;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  margin: 10px 0px 10px 10px;
		  		  color: #ccc;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
	}
</style>
