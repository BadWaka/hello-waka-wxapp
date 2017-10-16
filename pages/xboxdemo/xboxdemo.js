// xboxdemo.js
const app = getApp();

Page({
  data: {
    // 网络数据
    netData: {
      // 轮播图
      banner: {
        interval: 3000,
        list: [
          {
            imgSrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=306909169,3063192169&fm=11&gp=0.jpg',
          }, {
            imgSrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=668201338,186087245&fm=27&gp=0.jpg',
          }, {
            imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=250022733,635522919&fm=27&gp=0.jpg',
          }
        ]
      },
      // 第一段文字
      richTextNodes: [{
        name: 'span',
        attrs: {
          style: 'color: #FBB43F;'
        },
        children: [{
          type: 'text',
          text: '优享生活（北京）科技有限公司',
        }]
      }, {
        name: 'span',
        attrs: {
          style: ''
        },
        children: [{
          type: 'text',
          text: '成立于2015年6月成立于2015年6月成立于2015年6月成立于2015年6月成立于2015年6月成立于2015年6月成立于2015年6月成立于2015年6月成立于2015年6月成立于2015年6月成立于2015年6月成立于2015年6月成立于2015年6月成立于20',
        }]
      },],
      // 行
      lines: [
        {
          // 图标路径
          iconSrc: 'http://www.easyicon.net/api/resizeApi.php?id=1159879&size=96',
          // 左侧文本
          textLeft: '地址',
          // 右侧文本
          textRight: '咨询电话'
        }, {
          // 图标路径
          iconSrc: 'http://www.easyicon.net/api/resizeApi.php?id=1159879&size=96',
          // 左侧文本
          textLeft: '地址',
          // 右侧文本
          textRight: '咨询电话'
        }, {
          // 图标路径
          iconSrc: 'http://www.easyicon.net/api/resizeApi.php?id=1159879&size=96',
          // 左侧文本
          textLeft: '地址',
          // 右侧文本
          textRight: '咨询电话'
        }
      ],
      // 最新咨询
      news: {
        label: '最新咨询',
        list: [
          {
            imgSrc: 'http://img0.imgtn.bdimg.com/it/u=697494317,2695775305&fm=27&gp=0.jpg',
            title: '这是一个标题',
            row2Left: '3898次浏览',
            row2Right: '3小时前'
          },
          {
            imgSrc: 'http://img0.imgtn.bdimg.com/it/u=697494317,2695775305&fm=27&gp=0.jpg',
            title: '这是一个标题',
            row2Left: '3898次浏览',
            row2Right: '3小时前'
          },
          {
            imgSrc: 'http://img0.imgtn.bdimg.com/it/u=697494317,2695775305&fm=27&gp=0.jpg',
            title: '这是一个标题',
            row2Left: '3898次浏览',
            row2Right: '3小时前'
          },
          {
            imgSrc: 'http://img0.imgtn.bdimg.com/it/u=697494317,2695775305&fm=27&gp=0.jpg',
            title: '这是一个标题',
            row2Left: '3898次浏览',
            row2Right: '3小时前'
          },
        ],
      }
    }
  },
});
