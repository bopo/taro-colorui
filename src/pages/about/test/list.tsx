import { Block, View, Navigator, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    scrollLeft: 0,
    TabCur: 0
  }
  tabSelect = e => {
    console.log(e)
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  }
  config = {}

  render() {
    return (
      <Block>
        <CuCustom
          bgColor="bg-gradual-green"
          isBack={true}
          renderBackText={
            <Block>
              <View>测试</View>
            </Block>
          }
        />
        <View className="padding margin">
          <Navigator url="filter" className="bg-grey padding radius">
            <Text>filter：blur引起的ios花屏测试</Text>
          </Navigator>
        </View>
      </Block>
    )
  }
}

export default _C
