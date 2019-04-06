import { Block, View, Navigator, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './gradual.scss'
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar
  }
  config = {}

  render() {
    const { CustomBar: CustomBar, StatusBar: StatusBar } = this.state
    return (
      <View className="cu-custom" style={'height:' + CustomBar + 'px;'}>
        <View
          className="cu-bar fixed bg-gradual-orange"
          style={'height:' + CustomBar + 'px;padding-top:' + StatusBar + 'px;'}
        >
          <Navigator
            className="action"
            openType="navigateBack"
            delta="1"
            hoverClass="none"
          >
            <Text className="icon-back" />渐变
          </Navigator>
        </View>
      </View>
    )
  }
}

export default _C
