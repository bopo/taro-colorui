import { Block, View, Image, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './auth.scss'
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList
  }
  onGetUserInfo = e => {
    if (!this.logged && e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      Taro.switchTab({
        url: '/pages/basics/home/home'
      })
    }
  }
  config = {}

  render() {
    return (
      <Block>
        <View className="UCenter-bg">
          <Image
            src={require('../../images/logo.png')}
            className="png"
            mode="widthFix"
          />
          <View className="text-xl">
            ColorUI组件库<Text className="text-df">v2.0</Text>
          </View>
          <View className="margin-top-sm">
            <Text>By:文晓港</Text>
          </View>
        </View>
        <View className="padding-xl">
          <Button
            className="cu-btn  bg-green shadow lg block"
            openType="getUserInfo"
            onGetuserinfo={this.onGetUserInfo}
          >
            微信登录
          </Button>
        </View>
      </Block>
    )
  }
}

export default _C
