import {
  Block,
  View,
  Button,
  Text,
  Switch,
  RadioGroup,
  Label,
  Radio
} from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './design.scss'
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    ColorList: app.globalData.ColorList
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
  SetRound = e => {
    this.setData({
      round: e.detail.value
    })
  }
  SetSize = e => {
    this.setData({
      size: e.detail.value
    })
  }
  SetColor = e => {
    this.setData({
      color: e.currentTarget.dataset.color,
      modalName: null
    })
  }
  SetShadow = e => {
    this.setData({
      shadow: e.detail.value
    })
  }
  SetBorder = e => {
    this.setData({
      border: e.detail.value
    })
    if (!e.detail.value) {
      this.setData({
        bordersize: false
      })
    }
  }
  SetBorderSize = e => {
    this.setData({
      bordersize: e.detail.value
    })
  }
  SetBlock = e => {
    this.setData({
      block: e.detail.value
    })
  }
  config = {}

  render() {
    const {
      block: block,
      border: border,
      bordersize: bordersize,
      color: color,
      round: round,
      size: size,
      shadow: shadow,
      modalName: modalName,
      ColorList: ColorList
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
              <View>按钮 / 设计</View>
            </Block>
          }
        />
        <View className="padding-xl">
          <View
            className={
              'box bg-white text-center radius ' +
              (block ? 'flex-direction' : '')
            }
          >
            <Button
              className={
                'cu-btn ' +
                (border ? 'line' : 'bg') +
                (bordersize ? bordersize : '') +
                '-' +
                color +
                ' ' +
                (round ? 'round' : '') +
                ' ' +
                size +
                ' ' +
                (shadow ? 'shadow' : '') +
                ' ' +
                (block ? 'block' : '')
              }
            >
              我是一个按钮
            </Button>
          </View>
          <View className="padding text-center">
            class="cu-btn
            {color && (
              <Text>
                {(border ? 'line' : 'bg') +
                  (bordersize ? bordersize : '') +
                  '-' +
                  color +
                  ' ' +
                  (round ? 'round' : '') +
                  ' ' +
                  size +
                  ' ' +
                  (shadow ? 'shadow' : '') +
                  ' ' +
                  (block ? 'block' : '')}
              </Text>
            )}
            "
          </View>
        </View>
        <View
          className="cu-form-group margin-top"
          onClick={this.showModal}
          data-target="ColorModal"
        >
          <View className="title">选择颜色</View>
          <View
            className={'padding-sm bg-' + color + ' solid radius shadow-blur'}
          />
        </View>
        <View className="cu-form-group">
          <View className="title">是否圆角</View>
          <Switch className="sm" onChange={this.SetRound} />
        </View>
        <View className="cu-form-group">
          <View className="title">选择尺寸</View>
          <RadioGroup onChange={this.SetSize}>
            <Label className="margin-left-sm">
              <Radio className="blue sm radio" value="sm" />
              <Text>小</Text>
            </Label>
            <Label className="margin-left-sm">
              <Radio className="blue sm radio" value checked />
              <Text>中</Text>
            </Label>
            <Label className="margin-left-sm">
              <Radio className="blue sm radio" value="lg" />
              <Text>大</Text>
            </Label>
          </RadioGroup>
        </View>
        <View className="cu-form-group">
          <View className="title">是否添加阴影</View>
          <Switch className="sm" onChange={this.SetShadow} />
        </View>
        <View className="cu-form-group">
          <View className="title">是否镂空</View>
          <Switch className="sm" onChange={this.SetBorder} />
        </View>
        {border && (
          <View className="cu-form-group">
            <View className="title">边框大小</View>
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
        )}
        <View
          className={'cu-modal ' + (modalName == 'ColorModal' ? 'show' : '')}
        >
          <View className="cu-dialog">
            <View className="cu-bar justify-end solid-bottom">
              <View className="content">选择颜色</View>
              <View className="action" onClick={this.hideModal}>
                <Text className="icon-close text-red" />
              </View>
            </View>
            <View className="grid col-5 padding">
              {ColorList.map((item, index) => {
                return (
                  <View
                    className="padding-xs"
                    key
                    onClick={this.SetColor}
                    data-color={item.name}
                  >
                    <View className={'padding-tb bg-' + item.name + ' radius'}>
                      {item.title}
                    </View>
                  </View>
                )
              })}
            </View>
          </View>
        </View>
      </Block>
    )
  }
}

export default _C
