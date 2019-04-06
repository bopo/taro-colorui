import { Block, View, Text, Switch, Button, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './loading.scss'
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    CustomBar: app.globalData.CustomBar,
    loadProgress: 0
  }
  isLoading = e => {
    this.setData({
      isLoad: e.detail.value
    })
  }
  loadModal = () => {
    this.setData({
      loadModal: true
    })
    setTimeout(() => {
      this.setData({
        loadModal: false
      })
    }, 2000)
  }
  loadProgress = () => {
    this.setData({
      loadProgress: this.data.loadProgress + 3
    })
    if (this.data.loadProgress < 100) {
      setTimeout(() => {
        this.loadProgress()
      }, 100)
    } else {
      this.setData({
        loadProgress: 0
      })
    }
  }
  config = {}

  render() {
    const {
      isLoad: isLoad,
      loadModal: loadModal,
      loadProgress: loadProgress,
      CustomBar: CustomBar
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
              <View>加载</View>
            </Block>
          }
          renderRight={
            <Block>
              <View className="action">
                <View
                  className={
                    'cu-load load-icon ' + (!isLoad ? 'loading' : 'over')
                  }
                />
              </View>
            </Block>
          }
        />
        <View className="cu-bar bg-white">
          <View className="action">
            <Text className="icon-title text-blue" />背景
          </View>
        </View>
        <View className={'cu-load bg-blue ' + (!isLoad ? 'loading' : 'over')} />
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />加载状态
          </View>
          <View className="action">
            <Switch className="sm" onChange={this.isLoading} />
          </View>
        </View>
        <View className={'cu-load bg-grey ' + (!isLoad ? 'loading' : 'over')} />
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />加载错误
          </View>
        </View>
        <View className="cu-load bg-red erro" />
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />弹框加载
          </View>
          <View className="action">
            <Button className="cu-btn bg-green shadow" onClick={this.loadModal}>
              点我
            </Button>
          </View>
        </View>
        {loadModal && (
          <View className="cu-load load-modal">
            {/*  <view class='icon-emojifill text-orange'></view>  */}
            <Image
              src={require('../../../images/logo.png')}
              className="png"
              mode="aspectFit"
            />
            <View className="gray-text">加载中...</View>
          </View>
        )}
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />进度条加载
          </View>
          <View className="action">
            <Button
              className="cu-btn bg-green shadow"
              onClick={this.loadProgress}
            >
              点我
            </Button>
          </View>
        </View>
        <View
          className={'load-progress ' + (loadProgress != 0 ? 'show' : 'hide')}
          style={'top:' + CustomBar + 'px;'}
        >
          <View
            className="load-progress-bar bg-green"
            style={
              'transform: translate3d(-' +
              (100 - loadProgress) +
              '%, 0px, 0px);'
            }
          />
          <View className="load-progress-spinner text-green" />
        </View>
      </Block>
    )
  }
}

export default _C
