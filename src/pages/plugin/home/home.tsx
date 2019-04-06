import { Block, ScrollView, View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './home.scss'
const app = Taro.getApp()

@withWeapp('Component')
class _C extends Taro.Component {
  static options = {
    addGlobalClass: true
  }
  state = {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [
      {
        title: '索引列表',
        img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
        url: '/indexes/indexes'
      },
      {
        title: '微动画',
        img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
        url: '/animation/animation'
      },
      {
        title: '全屏抽屉',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
        url: '/drawer/drawer'
      },
      {
        title: '垂直导航',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
        url: '/verticalnav/verticalnav'
      }
    ]
  }
  toChild = e => {
    Taro.navigateTo({
      url: '/pages/plugin' + e.currentTarget.dataset.url
    })
  }
  config = {
    component: true
  }

  render() {
    const { list: list } = this.state
    return (
      <ScrollView scrollY className="scrollPage">
        <CuCustom
          bgImage="https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg"
          renderContent={
            <Block>
              <View>
                <Image
                  src={require('../../../images/cjkz.png')}
                  mode="widthFix"
                />
              </View>
            </Block>
          }
        />
        <View className="cu-card">
          {list.map((item, index) => {
            return (
              <View
                className="cu-item bg-img shadow-blur"
                style={'background-image:url(' + item.img + ')'}
                onClick={this.toChild}
                data-url={item.url}
                key
              >
                <View className="cardTitle">{item.title}</View>
              </View>
            )
          })}
        </View>
        <View className="cu-tabbar-height" />
      </ScrollView>
    )
  }
}

export default _C
