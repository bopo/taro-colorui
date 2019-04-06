import { Block, View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    ColorList: app.globalData.ColorList,
    avatar: [
      'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
      'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
      'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
      'https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg'
    ]
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
              <View>头像</View>
            </Block>
          }
        />
        <View className="cu-bar bg-white">
          <View className="action">
            <Text className="icon-title text-blue" />头像形状
          </View>
        </View>
        <View className="padding">
          <View
            className="cu-avatar round"
            style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"
          />
          <View
            className="cu-avatar radius margin-left"
            style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"
          />
        </View>
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />头像尺寸
          </View>
        </View>
        <View className="padding">
          <View
            className="cu-avatar sm round margin-left"
            style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"
          />
          <View
            className="cu-avatar round margin-left"
            style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"
          />
          <View
            className="cu-avatar lg round margin-left"
            style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"
          />
          <View
            className="cu-avatar xl round margin-left"
            style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);"
          />
        </View>
        <View className="padding">
          <View className="cu-avatar sm round margin-left bg-red">A</View>
          <View className="cu-avatar round margin-left bg-red">B</View>
          <View className="cu-avatar lg round margin-left bg-red">C</View>
          <View className="cu-avatar xl round margin-left bg-red">D</View>
        </View>
        <View className="padding">
          <View className="cu-avatar sm round margin-left bg-red">蔚</View>
          <View className="cu-avatar round margin-left bg-red">蓝</View>
          <View className="cu-avatar lg round margin-left bg-red">
            <Text>wl</Text>
          </View>
          <View className="cu-avatar xl round margin-left bg-red">
            <Text className="avatar-text">网络</Text>
          </View>
        </View>
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />内嵌文字(图标)
          </View>
        </View>
        <View className="padding">
          <View className="cu-avatar radius">
            <Text className="icon-people" />
          </View>
          <View className="cu-avatar radius  margin-left">
            <Text>港</Text>
          </View>
        </View>
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />头像颜色
          </View>
        </View>
        <View className="padding-sm">
          {ColorList.map((item, index) => {
            return (
              <View
                className={'cu-avatar round lg bg-' + item.name + ' margin-xs'}
                key
              >
                <Text className="avatar-text">{item.name}</Text>
              </View>
            )
          })}
        </View>
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />头像组
          </View>
        </View>
        <View className="padding">
          <View className="cu-avatar-group">
            {(4).map((item, index) => {
              return (
                <View
                  className="cu-avatar round lg"
                  key
                  style={
                    'background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big1000' +
                    (index + 1) +
                    '.jpg);'
                  }
                />
              )
            })}
          </View>
        </View>
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />头像标签
          </View>
        </View>
        <View className="padding">
          {(4).map((item, index) => {
            return (
              <View
                className="cu-avatar round lg margin-left"
                key
                style={
                  'background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big1000' +
                  (index + 1) +
                  '.jpg);'
                }
              >
                <View
                  className={
                    'cu-tag badge ' +
                    (index % 2 == 0
                      ? 'icon-female bg-pink'
                      : 'icon-male bg-blue')
                  }
                />
              </View>
            )
          })}
        </View>
      </Block>
    )
  }
}

export default _C
