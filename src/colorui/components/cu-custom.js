import { Block, View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './cu-custom.scss'
const app = Taro.getApp()

@withWeapp('Component')
class CuCustom extends Taro.Component {
  static options = {
    addGlobalClass: true,
    multipleSlots: true
  }
  _observeProps = []
  state = {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom
  }
  BackPage = () => {
    Taro.navigateBack({
      delta: 1
    })
  }
  toHome = () => {
    Taro.reLaunch({
      url: '/pages/index/index'
    })
  }
  config = {
    component: true
  }

  render() {
    const {
      bgColor: bgColor,
      isCustom: isCustom,
      isBack: isBack,
      bgImage: bgImage
    } = this.props
    const {
      CustomBar: CustomBar,
      StatusBar: StatusBar,
      Custom: Custom
    } = this.state
    return (
      <View className="cu-custom" style={'height:' + CustomBar + 'px'}>
        <View
          className={
            'cu-bar fixed ' +
            (bgImage != '' ? 'none-bg text-white bg-img' : '') +
            ' ' +
            bgColor
          }
          style={
            'height:' +
            CustomBar +
            'px;padding-top:' +
            StatusBar +
            'px;' +
            (bgImage ? 'background-image:url(' + bgImage + ')' : '')
          }
        >
          {isBack && (
            <View className="action" onClick={this.BackPage}>
              <Text className="icon-back" />
              {this.props.renderBackText}
            </View>
          )}
          {isCustom && (
            <View
              className="action border-custom"
              style={
                'width:' +
                Custom.width +
                'px;height:' +
                Custom.height +
                'px;margin-left:calc(750rpx - ' +
                Custom.right +
                'px)'
              }
            >
              <Text className="icon-back" onClick={this.BackPage} />
              <Text className="icon-homefill" onClick={this.toHome} />
            </View>
          )}
          <View className="content" style={'top:' + StatusBar + 'px'}>
            {this.props.renderContent}
          </View>
          {this.props.renderRight}
        </View>
      </View>
    )
  }
}

export default CuCustom
