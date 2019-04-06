import { Block, View, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './filter.scss'

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
    const { scrollLeft: scrollLeft, TabCur: TabCur } = this.state
    return (
      <Block>
        <CuCustom
          bgColor="bg-gradual-green"
          isBack={true}
          renderBackText={
            <Block>
              <View>filter：blur引起的ios花屏测试</View>
            </Block>
          }
        />
        <ScrollView
          scrollX
          className="bg-white nav"
          scrollWithAnimation
          scrollLeft={scrollLeft}
        >
          {(10).map((item, index) => {
            return (
              <View
                className={
                  'cu-item ' + (index == TabCur ? 'text-green cur' : '')
                }
                key
                onClick={this.tabSelect}
                data-id={index}
              >
                {'Tab' + index}
              </View>
            )
          })}
        </ScrollView>
        <View className="padding margin">
          <View
            className="shadow-blur bg-red ABox"
            style="animation: show 1s 1;-webkit-animation: show 1s 1;"
          >
            阴影层
          </View>
        </View>
        <View className="padding margin">
          <View className="shadow-blur bg-orange ABox">去掉动画</View>
        </View>
        <View className="padding margin">
          <View
            className="shadow-blur bg-blue Box"
            style="animation: show 1s 1;-webkit-animation: show 1s 1;"
          >
            去掉after
          </View>
        </View>
        <View className="padding margin">
          <View className="shadow-blur bg-green Box">去掉动画和after</View>
        </View>
      </Block>
    )
  }
}

export default _C
