import { Block, ScrollView, View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './drawer.scss'
//index.js
//获取应用实例
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    hasUserInfo: false,
    canIUse: Taro.canIUse('button.open-type.getUserInfo'),
    TabCur: 1,
    scrollLeft: 0
  }
  getUserInfo = e => {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
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
  tabSelect = e => {
    console.log(e)
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  }
  config = {}

  render() {
    const { modalName: modalName } = this.state
    return (
      <Block>
        <ScrollView
          scrollY
          className={'DrawerPage ' + (modalName == 'viewModal' ? 'show' : '')}
        >
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
                <View>全屏抽屉</View>
              </Block>
            }
          />
          <View className="padding margin text-center">
            <View
              className="cu-btn bg-green lg block shadow radius margin-xl"
              onClick={this.showModal}
              data-target="viewModal"
            >
              打开抽屉
            </View>
          </View>
          <View className="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
            {(20).map((item, index) => {
              return (
                <View className="cu-item arrow" key="index">
                  <View className="content">
                    <Text className="icon-github text-grey" />
                    <Text className="text-grey">{index + 1}</Text>
                  </View>
                </View>
              )
            })}
          </View>
          <View className="padding margin text-center">
            <View
              className="cu-btn bg-green lg block shadow radius margin-xl"
              onClick={this.showModal}
              data-target="viewModal"
            >
              打开抽屉
            </View>
          </View>
        </ScrollView>
        <View
          className={'DrawerClose ' + (modalName == 'viewModal' ? 'show' : '')}
          onClick={this.hideModal}
        >
          <Text className="icon-pullright" />
        </View>
        <ScrollView
          scrollY
          className={'DrawerWindow ' + (modalName == 'viewModal' ? 'show' : '')}
        >
          <View className="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
            {(20).map((item, index) => {
              return (
                <View className="cu-item arrow" key="index">
                  <View className="content">
                    <Text className="icon-github text-grey" />
                    <Text className="text-grey">{index + 1}</Text>
                  </View>
                </View>
              )
            })}
          </View>
        </ScrollView>
      </Block>
    )
  }
}

export default _C
