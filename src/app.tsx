import Taro from '@tarojs/taro'
import './app.scss'

class App extends Taro.Component {
  componentWillMount() {
    this.$app.globalData = this.globalData

    Taro.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight
      }
    })
  }

  globalData = {
    ColorList: [
      {
        title: '嫣红',
        name: 'red',
        color: '#e54d42'
      },
      {
        title: '桔橙',
        name: 'orange',
        color: '#f37b1d'
      },
      {
        title: '明黄',
        name: 'yellow',
        color: '#fbbd08'
      },
      {
        title: '橄榄',
        name: 'olive',
        color: '#8dc63f'
      },
      {
        title: '森绿',
        name: 'green',
        color: '#39b54a'
      },
      {
        title: '天青',
        name: 'cyan',
        color: '#1cbbb4'
      },
      {
        title: '海蓝',
        name: 'blue',
        color: '#0081ff'
      },
      {
        title: '姹紫',
        name: 'purple',
        color: '#6739b6'
      },
      {
        title: '木槿',
        name: 'mauve',
        color: '#9c26b0'
      },
      {
        title: '桃粉',
        name: 'pink',
        color: '#e03997'
      },
      {
        title: '棕褐',
        name: 'brown',
        color: '#a5673f'
      },
      {
        title: '玄灰',
        name: 'grey',
        color: '#8799a3'
      },
      {
        title: '草灰',
        name: 'gray',
        color: '#aaaaaa'
      },
      {
        title: '墨黑',
        name: 'black',
        color: '#333333'
      },
      {
        title: '雅白',
        name: 'white',
        color: '#ffffff'
      }
    ]
  }
  config = {
    pages: [
      'pages/index/index',
      'pages/basics/home/home',
      'pages/basics/layout/layout',
      'pages/basics/button/button',
      'pages/basics/button/design',
      'pages/basics/tag/tag',
      'pages/basics/avatar/avatar',
      'pages/basics/progress/progress',
      'pages/basics/shadow/shadow',
      'pages/basics/background/background',
      'pages/basics/text/text',
      'pages/basics/icon/icon',
      'pages/basics/loading/loading',
      'pages/component/home/home',
      'pages/component/list/list',
      'pages/component/bar/bar',
      'pages/component/timeline/timeline',
      'pages/component/chat/chat',
      'pages/component/form/form',
      'pages/component/nav/nav',
      'pages/component/card/card',
      'pages/component/swiper/swiper',
      'pages/component/modal/modal',
      'pages/component/steps/steps',
      'pages/plugin/home/home',
      'pages/plugin/indexes/indexes',
      'pages/plugin/gradual/gradual',
      'pages/plugin/animation/animation',
      'pages/auth/auth',
      'pages/about/about/about',
      'pages/about/log/log',
      'pages/about/test/list',
      'pages/about/test/filter',
      'pages/about/home/home',
      'pages/plugin/drawer/drawer',
      'pages/plugin/verticalnav/verticalnav'
      // 'colorui/components/cu-custom'
    ],
    window: {
      navigationBarBackgroundColor: '#39b54a',
      navigationBarTitleText: 'Color UI',
      navigationStyle: 'custom',
      navigationBarTextStyle: 'white'
    },
    usingComponents: {
      'cu-custom': '/colorui/components/cu-custom'
    }
  }

  render() {
    return null
  }
} //app.js

export default App
Taro.render(<App/>, document.getElementById('app'))
