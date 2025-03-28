export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除"],"menu":"裁判员","menuJump":"列表","tableName":"caipanyuan"}],"menu":"裁判员管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["新增","查看","修改","删除"],"menu":"视频分类","menuJump":"列表","tableName":"shipinfenlei"}],"menu":"视频分类管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除","查看评论"],"menu":"健美操","menuJump":"列表","tableName":"jianmeicao"}],"menu":"健美操管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","修改","删除"],"menu":"评分","menuJump":"列表","tableName":"pingfen"}],"menu":"评分管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":" 健美操资讯","tableName":"news"},{"appFrontIcon":"cuIcon-paint","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","查看评论","评价"],"menu":"健美操列表","menuJump":"列表","tableName":"jianmeicao"}],"menu":"健美操模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看","查看评论","评价","评分"],"menu":"健美操","menuJump":"列表","tableName":"jianmeicao"}],"menu":"健美操管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","修改","删除"],"menu":"评分","menuJump":"列表","tableName":"pingfen"}],"menu":"评分管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","查看评论","评价"],"menu":"健美操列表","menuJump":"列表","tableName":"jianmeicao"}],"menu":"健美操模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"否","roleName":"裁判员","tableName":"caipanyuan"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除","查看评论"],"menu":"健美操","menuJump":"列表","tableName":"jianmeicao"}],"menu":"健美操管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看"],"menu":"评分","menuJump":"列表","tableName":"pingfen"}],"menu":"评分管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","查看评论","评价"],"menu":"健美操列表","menuJump":"列表","tableName":"jianmeicao"}],"menu":"健美操模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
