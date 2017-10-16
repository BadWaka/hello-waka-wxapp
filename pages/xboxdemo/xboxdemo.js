// xboxdemo.js
const app = getApp();

Page({
  data: {
    // 网络数据
    netData: {
      testImgSrc: 'http://img5.imgtn.bdimg.com/it/u=2005158732,1244864729&fm=11&gp=0.jpg',
      // 轮播图
      banners: [{
        imgSrc: '',
      }, {
        imgSrc: '',
      }, {
        imgSrc: '',
      }],
      // 第一段文字
      firstText: '《魔兽世界》（World of Warcraft）是由著名游戏公司暴雪娱乐所制作的第一款网络游戏，属于大型多人在线角色扮演游戏。游戏以该公司出品的即时战略游戏《魔兽争霸》的剧情为历史背景，依托魔兽争霸的历史事件和英雄人物，魔兽世界有着完整的历史背景时间线。玩家在魔兽世界中冒险、完成任务、新的历险、探索未知的世界、征服怪物等。',
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
