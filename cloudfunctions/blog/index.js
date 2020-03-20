// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init();

console.log(123);

const db = cloud.database();
const _ = db.command;


// 云函数入口函数
exports.main = async (event, context) => {

  switch (event.action) {
    //  请求list
    case 'queryList': {
      return queryList(event);
    }

    case 'queryDetail': {
      return queryDetail(event);
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
      commentTatal: true,
      likeTotal: true,
      fileType: true,
      fileID: true,
    }).get();

};

const queryDetail = async ({ fileID }) => {
  // return db.collection('blog_list').doc(id).get()
  const res = await cloud.downloadFile({
    fileID,
  });
  const buffer = res.fileContent;

  return buffer.toString('utf8');
}