import {
  Block,
  View,
  Text,
  Navigator,
  Button,
  Switch,
  RadioGroup,
  Label,
  Radio
} from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    ColorList: app.globalData.ColorList
  }
  SetShadow = e => {
    this.setData({
      shadow: e.detail.value
    })
  }
  SetBorderSize = e => {
    this.setData({
      bordersize: e.detail.value
    })
  }
  config = {}

  render() {
    const {
      ColorList: ColorList,
      shadow: shadow,
      bordersize: bordersize
    } = this.state
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
              <View>按钮</View>
            </Block>
          }
        />
        <View className="cu-bar bg-white solid-bottom">
          <View className="action">
            <Text className="icon-title text-blue" />按钮形状
          </View>
          <Navigator className="action" url="design" hoverClass="none">
            <Text className="icon-skinfill" />
            <Text className="text-df">设计</Text>
          </Navigator>
        </View>
        <View className="padding flex flex-wrap justify-between align-center bg-white">
          <Button className="cu-btn">默认</Button>
          <Button className="cu-btn round">圆角</Button>
          <Button className="cu-btn icon">
            <Text className="icon-emojifill" />
          </Button>
        </View>
        <View className="cu-bar margin-top bg-white solid-bottom">
          <View className="action">
            <Text className="icon-title text-blue" />按钮尺寸
          </View>
        </View>
        <View className="padding flex flex-wrap justify-between align-center bg-white">
          <Button className="cu-btn round sm">小尺寸</Button>
          <Button className="cu-btn round">默认</Button>
          <Button className="cu-btn round lg">大尺寸</Button>
        </View>
        <View className="cu-bar margin-top bg-white">
          <View className="action">
            <Text className="icon-title text-blue" />按钮颜色
          </View>
          <View className="action">
            <Text className="text-df margin-right-sm">阴影</Text>
            <Switch className="sm" onChange={this.SetShadow} />
          </View>
        </View>
        <View className="grid col-5 padding-sm">
          {ColorList.map((item, index) => {
            return (
              <View className="margin-tb-sm text-center" key>
                <Button
                  className={
                    'cu-btn round bg-' +
                    item.name +
                    ' ' +
                    (shadow ? 'shadow' : '')
                  }
                >
                  {item.title}
                </Button>
              </View>
            )
          })}
        </View>
        <View className="cu-bar margin-top bg-white">
          <View className="action">
            <Text className="icon-title text-blue" />镂空按钮
          </View>
          <View className="action">
            <RadioGroup onChange={this.SetBorderSize}>
              <Label className="margin-left-sm">
                <Radio className="blue sm radio" value checked />
                <Text>小</Text>
              </Label>
              <Label className="margin-left-sm">
                <Radio className="blue sm radio" value="s" />
                <Text>大</Text>
              </Label>
            </RadioGroup>
          </View>
        </View>
        <View className="grid col-5 padding-sm">
          {ColorList.map((item, index) => {
            return (
              <View className="margin-tb-sm text-center" key>
                <Button
                  className={
                    'cu-btn round line' +
                    (bordersize ? bordersize : '') +
                    '-' +
                    item.name +
                    ' ' +
                    (shadow ? 'shadow' : '')
                  }
                >
                  {item.title}
                </Button>
              </View>
            )
          })}
        </View>
        <View className="cu-bar margin-top bg-white">
          <View className="action">
            <Text className="icon-title text-blue" />块状按钮
          </View>
        </View>
        <View className="padding flex flex-direction">
          <Button className="cu-btn bg-grey lg">玄灰</Button>
          <Button className="cu-btn bg-red margin-tb-sm lg">嫣红</Button>
        </View>
        <View className="cu-bar margin-top bg-white">
          <View className="action">
            <Text className="icon-title text-blue" />无效状态
          </View>
        </View>
        <View className="padding">
          <Button
            className="cu-btn block bg-blue margin-tb-sm lg"
            disabled
            type
          >
            无效状态
          </Button>
          <Button className="cu-btn block line-blue margin-tb-sm lg" disabled>
            无效状态
          </Button>
        </View>
        <View className="cu-bar margin-top bg-white">
          <View className="action">
            <Text className="icon-title text-blue" />按钮加图标
          </View>
        </View>
        <View className="padding-xl">
          <Button className="cu-btn block line-orange lg">
            <Text className="icon-upload" />图标
          </Button>
          <Button className="cu-btn block bg-blue margin-tb-sm lg">
            <Text className="icon-loading2 iconfont-spin" />加载
          </Button>
          <Button className="cu-btn block bg-black margin-tb-sm lg" loading>
            微信加载
          </Button>
        </View>
      </Block>
    )
  }
}

export default _C
