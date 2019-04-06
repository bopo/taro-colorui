import { Block, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './about.scss'
const app = Taro.getApp()

@withWeapp('Page')
class About extends Taro.Component {
  state = {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList
  }

  componentWillMount() {}

  pageBack = () => {
    Taro.navigateBack({
      delta: 1
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
              <View>返回</View>
            </Block>
          }
          renderContent={
            <Block>
              <View>关于</View>
            </Block>
          }
        />
        <View className="margin-xl bg-white padding-xl radius shadow-lg">
          <View className="text-center margin-bottom text-lg  text-grey">
            关于ColorUI组件库
          </View>
          <View className="text-content">
            <View>Hi！开发者~欢迎使用ColorUI组件库！</View>
            <View className="margin-top-sm">
              该项目是我个人开发的一款高颜值的微信小程序组件库。这个项目不仅有一些漂亮的基础元素，还有一些实用的组件。扩展中心也会不定期更新一些小程序的解决方案，或者你有一些好的想法可以在GitHub里提交给我，我会加入到扩展里。
            </View>
            <View className="margin-top-sm">
              项目是开源的，不收取任何费用，如果这个项目有帮到你，或者你觉得很赞，可以在GitHub里扫描赞赏码支持一下！
            </View>
            <View className="margin-top-sm">
              该项目你可以用到除组件库小程序的任何项目。作者我也是花了时间和精力的，我不希望你拷贝一份，做一些修改发布就变成了一个独立的项目，当然！扩展再发布是可以的，但前提是注明一下我这个原作者٩(๑❛ᴗ❛๑)۶
            </View>
            <View className="margin-top-sm">更多功能敬请期待！</View>
          </View>
        </View>
      </Block>
    )
  }
}

export default About
