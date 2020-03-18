// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init();

console.log(123);

const db = cloud.database();
const _ = db.command;


// 云函数入口函数
exports.main = async (event, context) => {
  
  const wxContext = cloud.getWXContext();

  switch(event.action) {
    case 'queryList': {
      return queryList(event);
    }
    default: break
  }
}

const queryList = async ({ page = 1 }) => {
  return db.collection('blog_list')
    .skip((page - 1) * 10)
    .limit(10)
    .field({
      _id: true,
      user: true,
      createTime: true,
      desc: true,
      title: true,
    }).get();
}