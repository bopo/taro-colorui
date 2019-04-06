import {
  Block,
  View,
  Navigator,
  Text,
  Swiper,
  SwiperItem,
  Image,
  ScrollView
} from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './verticalnav.scss'
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [],
    load: true
  }

  componentWillMount() {
    Taro.showLoading({
      title: '加载中...',
      mask: true
    })
    let list = [{}]
    for (let i = 0; i < 26; i++) {
      list[i] = {}
      list[i].name = String.fromCharCode(65 + i)
      list[i].id = i
    }
    this.setData({
      list: list,
      listCur: list[0]
    })
  }

  componentDidMount() {
    Taro.hideLoading()
  }

  tabSelect = e => {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  }
  VerticalMain = e => {
    let that = this
    let list = this.data.list
    let tabHeight = 0
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = Taro.createSelectorQuery().select('#main-' + list[i].id)
        view
          .fields(
            {
              size: true
            },
            data => {
              list[i].top = tabHeight
              tabHeight = tabHeight + data.height
              list[i].bottom = tabHeight
            }
          )
          .exec()
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
    }
  }
  config = {}

  render() {
    const {
      CustomBar: CustomBar,
      StatusBar: StatusBar,
      VerticalNavTop: VerticalNavTop,
      TabCur: TabCur,
      list: list,
      MainCur: MainCur
    } = this.state
    return (
      <Block>
        <View className="cu-custom">
          <View
            className="cu-bar fixed bg-shadeTop"
            style={
              'height:' + CustomBar + 'px;padding-top:' + StatusBar + 'px;'
            }
          >
            <Navigator
              className="action"
              openType="navigateBack"
              delta="1"
              hoverClass="none"
            >
              <Text className="icon-back" />返回
            </Navigator>
            <View className="content" style={'top:' + StatusBar + 'px;'}>
              Tab索引
            </View>
          </View>
        </View>
        <Swiper
          className="screen-swiper round-dot"
          indicatorDots="true"
          circular="true"
          autoplay="true"
          interval="5000"
          duration="500"
        >
          {(4).map((item, index) => {
            return (
              <SwiperItem key>
                <Image
                  src={
                    'https://image.weilanwl.com/img/4x3-' + (index + 1) + '.jpg'
                  }
                  mode="aspectFill"
                />
              </SwiperItem>
            )
          })}
        </Swiper>
        <View className="VerticalBox">
          <ScrollView
            className="VerticalNav nav"
            scrollY
            scrollWithAnimation
            scrollTop={VerticalNavTop}
            style="height:calc(100vh - 375rpx)"
          >
            {list.map((item, index) => {
              return (
                <View
                  className={
                    'cu-item ' + (index == TabCur ? 'text-green cur' : '')
                  }
                  key
                  onClick={this.tabSelect}
                  data-id={index}
                >
                  {'Tab-' + item.name}
                </View>
              )
            })}
          </ScrollView>
          <ScrollView
            className="VerticalMain"
            scrollY
            scrollWithAnimation
            style="height:calc(100vh - 375rpx)"
            scrollIntoView={'main-' + MainCur}
            onScroll={this.VerticalMain}
          >
            {list.map((item, index) => {
              return (
                <View
                  className="padding-top padding-lr"
                  key
                  id={'main-' + index}
                >
                  <View className="cu-bar solid-bottom bg-white">
                    <View className="action">
                      <Text className="icon-title text-green" />
                      {'Tab-' + item.name}
                    </View>
                  </View>
                  <View className="cu-list menu-avatar">
                    <View className="cu-item">
                      <View
                        className="cu-avatar round lg"
                        style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"
                      />
                      <View className="content">
                        <View className="text-grey">凯尔</View>
                        <View className="text-gray text-sm flex">
                          <Text className="text-cut">
                            <Text className="icon-infofill text-red  margin-right-xs" />
                            我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
                          </Text>
                        </View>
                      </View>
                      <View className="action">
                        <View className="text-grey text-xs">22:20</View>
                        <View className="cu-tag round bg-grey sm">5</View>
                      </View>
                    </View>
                    <View className="cu-item">
                      <View
                        className="cu-avatar round lg"
                        style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);"
                      >
                        <View className="cu-tag badge">99+</View>
                      </View>
                      <View className="content">
                        <View className="text-grey">
                          <Text className="text-cut">瓦洛兰之盾-塔里克</Text>
                          <View className="cu-tag round bg-orange sm">
                            战士
                          </View>
                        </View>
                        <View className="text-gray text-sm flex">
                          <Text className="text-cut">
                            塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。
                          </Text>
                        </View>
                      </View>
                      <View className="action">
                        <View className="text-grey text-xs">22:20</View>
                        <View className="icon-notice_forbid_fill text-gray" />
                      </View>
                    </View>
                    <View className="cu-item">
                      <View
                        className="cu-avatar radius lg"
                        style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"
                      />
                      <View className="content">
                        <View className="text-pink">
                          <Text className="text-cut">莫甘娜</Text>
                        </View>
                        <View className="text-gray text-sm flex">
                          <Text className="text-cut">
                            凯尔，你被自己的光芒变的盲目！
                          </Text>
                        </View>
                      </View>
                      <View className="action">
                        <View className="text-grey text-xs">22:20</View>
                        <View className="cu-tag round bg-red sm">5</View>
                      </View>
                    </View>
                    <View className="cu-item grayscale">
                      <View
                        className="cu-avatar radius lg"
                        style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg);"
                      />
                      <View className="content">
                        <View>
                          <Text className="text-cut">伊泽瑞尔</Text>
                          <View className="cu-tag round bg-orange sm">
                            断开连接...
                          </View>
                        </View>
                        <View className="text-gray text-sm flex">
                          <Text className="text-cut">等我回来一个打十个</Text>
                        </View>
                      </View>
                      <View className="action">
                        <View className="text-grey text-xs">22:20</View>
                        <View className="cu-tag round bg-red sm">5</View>
                      </View>
                    </View>
                    <View className="cu-item cur">
                      <View
                        className="cu-avatar radius lg"
                        style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg);"
                      >
                        <View className="cu-tag badge" />
                      </View>
                      <View className="content">
                        <View>
                          <Text className="text-cut">
                            瓦罗兰大陆-睡衣守护者-新手保护营
                          </Text>
                          <View className="cu-tag round bg-orange sm">6人</View>
                        </View>
                        <View className="text-gray text-sm flex">
                          <Text className="text-cut">
                            伊泽瑞尔：
                            <Text className="icon-locationfill text-orange margin-right-xs" />
                            传送中...
                          </Text>
                        </View>
                      </View>
                      <View className="action">
                        <View className="text-grey text-xs">22:20</View>
                        <View className="icon-notice_forbid_fill text-gray" />
                      </View>
                    </View>
                  </View>
                </View>
              )
            })}
          </ScrollView>
        </View>
      </Block>
    )
  }
}

export default _C
