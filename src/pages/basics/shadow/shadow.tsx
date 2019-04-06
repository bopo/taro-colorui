import { Block, View, Text, Switch } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  SetSize = e => {
    this.setData({
      size: e.detail.value
    })
  }
  config = {}

  render() {
    const { size: size } = this.state
    return (
      <Block>
        <CuCustom
          bgColor="bg-gradual-blue"
          isBack={true}
          renderBackText={
            <Block>
              <View>返回</View>
            </Block>
          }
          renderContent={
            <Block>
              <View>边框阴影</View>
            </Block>
          }
        />
        <View className="cu-bar bg-white solid-bottom">
          <View className="action">
            <Text className="icon-title text-blue" />边框
          </View>
          <View className="action">
            <Switch className="sm" onChange={this.SetSize} />
          </View>
        </View>
        <View className="padding bg-white text-center">
          <View className={'padding solid' + (size ? 's' : '')}>四周</View>
          <View
            className={'padding solid' + (size ? 's' : '') + '-top margin-top'}
          >
            上
          </View>
          <View
            className={
              'padding solid' + (size ? 's' : '') + '-right margin-top'
            }
          >
            右
          </View>
          <View
            className={
              'padding solid' + (size ? 's' : '') + '-bottom margin-top'
            }
          >
            下
          </View>
          <View
            className={'padding solid' + (size ? 's' : '') + '-left margin-top'}
          >
            左
          </View>
        </View>
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />阴影
          </View>
        </View>
        <View className="padding text-center">
          <View className="padding-xl radius shadow bg-white">默认阴影</View>
          <View className="padding-xl radius shadow-lg bg-white margin-top">
            长阴影
          </View>
          <View className="padding-xl radius shadow-warp bg-white margin-top">
            翘边阴影
          </View>
          <View className="padding-xl radius shadow-blur bg-red margin-top">
            根据背景颜色而改变的阴影
          </View>
          <View
            className="padding-xl radius shadow-blur bg-red margin-top bg-img"
            style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"
          >
            <View>根据背景颜色而改变的阴影</View>
          </View>
        </View>
      </Block>
    )
  }
}

export default _C
