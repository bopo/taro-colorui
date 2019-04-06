import {
  Block,
  ScrollView,
  Image,
  View,
  Navigator,
  Text
} from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'

@withWeapp('Component')
class Home extends Taro.Component {
  static options = {
    addGlobalClass: true
  }
  state = {
    elements: [
      {
        title: '布局',
        name: 'layout',
        color: 'cyan',
        icon: 'newsfill'
      },
      {
        title: '背景',
        name: 'background',
        color: 'blue',
        icon: 'colorlens'
      },
      {
        title: '文本',
        name: 'text',
        color: 'purple',
        icon: 'font'
      },
      {
        title: '图标 ',
        name: 'icon',
        color: 'mauve',
        icon: 'icon'
      },
      {
        title: '按钮',
        name: 'button',
        color: 'pink',
        icon: 'btn'
      },
      {
        title: '标签',
        name: 'tag',
        color: 'brown',
        icon: 'tagfill'
      },
      {
        title: '头像',
        name: 'avatar',
        color: 'red',
        icon: 'myfill'
      },
      {
        title: '进度条',
        name: 'progress',
        color: 'orange',
        icon: 'icloading'
      },
      {
        title: '边框阴影',
        name: 'shadow',
        color: 'olive',
        icon: 'copy'
      },
      {
        title: '加载',
        name: 'loading',
        color: 'green',
        icon: 'loading2'
      }
    ]
  }

  componentWillMount() {
    let that = this
    // 获取用户信息
    Taro.getSetting({
      success: res => {
        if (!res.authSetting['scope.userInfo']) {
          Taro.redirectTo({
            url: '/pages/auth/auth'
          })
        }
      }
    })
  }

  showModal = e => {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  }
  hideModal = e => {
    this.setData({
      modalName: null
    })
  }
  onShareAppMessage = () => {
    return {
      title: 'ColorUI-高颜值的小程序UI组件库',
      imageUrl: 'https://image.weilanwl.com/color2.0/share2215.jpg',
      path: '/pages/basics/home/home'
    }
  }
  config = {
    component: true
  }

  render() {
    const { elements: elements } = this.state
    return (
      <ScrollView scrollY className="scrollPage">
        <Image
          src={require('../../../images/BasicsBg.png')}
          mode="widthFix"
          className="png"
          style="width:100%;height:486rpx"
        />
        <View className="nav-list">
          {elements.map((item, index) => {
            return (
              <Navigator
                openType="navigate"
                hoverClass="none"
                url={'/pages/basics/' + item.name + '/' + item.name}
                className={'nav-li bg-' + item.color}
                key
              >
                <View className="nav-title">{item.title}</View>
                <View className="nav-name">{item.name}</View>
                <Text className={'icon-' + item.icon} />
              </Navigator>
            )
          })}
        </View>
        <View className="cu-tabbar-height" />
      </ScrollView>
    )
  }
}

export default Home
