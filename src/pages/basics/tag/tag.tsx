import { Block, View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    ColorList: app.globalData.ColorList
  }
  config = {}

  render() {
    const { ColorList: ColorList } = this.state
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
              <View>标签</View>
            </Block>
          }
        />
        <View className="cu-bar bg-white solid-bottom">
          <View className="action">
            <Text className="icon-title text-blue" />标签形状
          </View>
        </View>
        <View className="padding bg-white solid-bottom">
          <View className="cu-tag">默认</View>
          <View className="cu-tag round">椭圆</View>
          <View className="cu-tag radius">圆角</View>
        </View>
        <View className="cu-bar bg-white margin-top  solid-bottom">
          <View className="action">
            <Text className="icon-title text-blue" />标签尺寸
          </View>
        </View>
        <View className="padding bg-white">
          <View className="cu-tag radius sm">小尺寸</View>
          <View className="cu-tag radius">普通尺寸</View>
        </View>
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />标签颜色
          </View>
        </View>
        <View className="padding-sm flex flex-wrap">
          {ColorList.map((item, index) => {
            return (
              <View className="padding-xs" key>
                <View className={'cu-tag bg-' + item.name}>{item.title}</View>
              </View>
            )
          })}
          {index < 12 && (
            <Block>
              {ColorList.map((item, index) => {
                return (
                  <View className="padding-xs" key>
                    <View className={'cu-tag bg-' + item.name + ' light'}>
                      {item.title}
                    </View>
                  </View>
                )
              })}
            </Block>
          )}
        </View>
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />镂空标签
          </View>
        </View>
        <View className="padding-sm flex flex-wrap">
          {ColorList.map((item, index) => {
            return (
              <View className="padding-xs" key>
                <View className={'cu-tag line-' + item.name}>{item.title}</View>
              </View>
            )
          })}
        </View>
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />胶囊样式
          </View>
        </View>
        <View className="padding">
          <View className="cu-capsule">
            <View className="cu-tag bg-red">
              <Text className="icon-likefill" />
            </View>
            <View className="cu-tag line-red">12</View>
          </View>
          <View className="cu-capsule round">
            <View className="cu-tag bg-blue">
              <Text className="icon-likefill" />
            </View>
            <View className="cu-tag line-blue">23</View>
          </View>
          <View className="cu-capsule round">
            <View className="cu-tag bg-blue">说明</View>
            <View className="cu-tag line-blue">123</View>
          </View>
          <View className="cu-capsule radius">
            <View className="cu-tag bg-grey">
              <Text className="icon-likefill" />
            </View>
            <View className="cu-tag line-grey">23</View>
          </View>
          <View className="cu-capsule radius">
            <View className="cu-tag bg-brown sm">
              <Text className="icon-likefill" />
            </View>
            <View className="cu-tag line-brown sm">23</View>
          </View>
        </View>
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />数字标签
          </View>
        </View>
        <View className="padding flex justify-between align-center">
          <View className="cu-avatar xl radius">
            港<View className="cu-tag badge">99+</View>
          </View>
          <View
            className="cu-avatar xl radius"
            style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"
          >
            <View className="cu-tag badge">9</View>
          </View>
          <View className="cu-avatar xl radius">
            <View className="cu-tag badge" />
            <Text className="icon-people" />
          </View>
          <View className="cu-avatar xl radius">
            <View className="cu-tag badge">99+</View>
          </View>
        </View>
      </Block>
    )
  }
}

export default _C
