import {
  Block,
  ScrollView,
  View,
  Image,
  Text,
  Navigator,
  Button
} from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './home.scss'

@withWeapp('Component')
class Home extends Taro.Component {
  static options = {
    addGlobalClass: true
  }
  state = {
    starCount: 0,
    forksCount: 0,
    visitTotal: 0
  }
  attached = () => {
    console.log('success')
    let that = this
    Taro.showLoading({
      title: '数据加载中',
      mask: true
    })
    let i = 0
    numDH()
    function numDH() {
      if (i < 20) {
        setTimeout(function() {
          that.setData({
            starCount: i,
            forksCount: i,
            visitTotal: i
          })
          i++
          numDH()
        }, 20)
      } else {
        that.setData({
          starCount: that.coutNum(999),
          forksCount: that.coutNum(8888),
          visitTotal: that.coutNum(77777)
        })
      }
    }
    Taro.hideLoading()
  }
  coutNum = e => {
    if (e > 1000 && e < 10000) {
      e = (e / 1000).toFixed(1) + 'k'
    }
    if (e > 10000) {
      e = (e / 10000).toFixed(1) + 'W'
    }
    return e
  }
  CopyLink = e => {
    Taro.setClipboardData({
      data: e.currentTarget.dataset.link,
      success: res => {
        Taro.showToast({
          title: '已复制',
          duration: 1000
        })
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
  showQrcode = () => {
    Taro.previewImage({
      urls: ['https://image.weilanwl.com/color2.0/zanCode.jpg'],
      current: 'https://image.weilanwl.com/color2.0/zanCode.jpg' // 当前显示图片的http链接
    })
  }
  config = {
    component: true
  }

  render() {
    const {
      visitTotal: visitTotal,
      starCount: starCount,
      forksCount: forksCount
    } = this.state
    return (
      <ScrollView scrollY className="scrollPage">
        <View className="UCenter-bg">
          <Image
            src={require('../../../images/logo.png')}
            className="png"
            mode="widthFix"
          />
          <View className="text-xl">
            ColorUI组件库<Text className="text-df">v2.0</Text>
          </View>
          <View className="margin-top-sm">
            <Text>By:文晓港</Text>
          </View>
          <Image
            src="https://image.weilanwl.com/gif/wave.gif"
            mode="scaleToFill"
            className="gif-wave"
          />
        </View>
        <View className="padding flex text-center text-grey bg-white shadow-warp">
          <View className="flex flex-sub flex-direction solid-right">
            <View className="text-xxl text-orange">{visitTotal}</View>
            <View className="margin-top-sm">
              <Text className="icon-attentionfill" />View
            </View>
          </View>
          <View className="flex flex-sub flex-direction solid-right">
            <View className="text-xxl text-blue">{starCount}</View>
            <View className="margin-top-sm">
              <Text className="icon-favorfill" />Star
            </View>
          </View>
          <View className="flex flex-sub flex-direction">
            <View className="text-xxl text-green">{forksCount}</View>
            <View className="margin-top-sm">
              <Text className="icon-fork" />Fork
            </View>
          </View>
        </View>
        <View className="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg radius">
          <View className="cu-item arrow">
            <View
              className="content"
              onClick={this.CopyLink}
              data-link="https://github.com/weilanwl/ColorUI"
            >
              <Text className="icon-github text-grey" />
              <Text className="text-grey">GitHub</Text>
            </View>
          </View>
          <View className="cu-item arrow">
            <Navigator
              className="content"
              url="/pages/about/about/about"
              hoverClass="none"
            >
              <Image
                src={require('../../../images/logo.png')}
                className="png"
                mode="aspectFit"
              />
              <Text className="text-grey">关于ColorUI组件库</Text>
            </Navigator>
          </View>
          <View className="cu-item arrow">
            <Navigator
              className="content"
              url="/pages/about/log/log"
              hoverClass="none"
            >
              <Text className="icon-formfill text-green" />
              <Text className="text-grey">日志</Text>
            </Navigator>
          </View>
          <View className="cu-item arrow">
            <View className="content" onClick={this.showQrcode}>
              <Text className="icon-appreciatefill text-red" />
              <Text className="text-grey">赞赏支持</Text>
            </View>
          </View>
          <View className="cu-item arrow">
            <Button className="cu-btn content" openType="feedback">
              <Text className="icon-writefill text-cyan" />
              <Text className="text-grey">意见反馈</Text>
            </Button>
          </View>
          <View className="cu-item arrow">
            <Navigator className="content" url="/pages/about/test/list" hoverClass="none">
              <Text className="icon-creativefill text-orange" />
              <Text className="text-grey">Bug测试</Text>
            </Navigator>
          </View>
        </View>
        <View className="cu-tabbar-height" />
      </ScrollView>
    )
  }
}

export default Home
