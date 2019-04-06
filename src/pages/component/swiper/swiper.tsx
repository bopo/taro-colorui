import {
  Block,
  View,
  Text,
  Switch,
  Swiper,
  SwiperItem,
  Image,
  Video
} from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './swiper.scss'

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    cardCur: 0,
    swiperList: [
      {
        id: 0,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
      },
      {
        id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg'
      },
      {
        id: 2,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
      },
      {
        id: 3,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
      },
      {
        id: 4,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
      },
      {
        id: 5,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
      },
      {
        id: 6,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
      }
    ]
  }

  componentWillMount() {
    this.towerSwiper('swiperList')
    // 初始化towerSwiper 传已有的数组名即可
  }

  DotStyle = e => {
    this.setData({
      DotStyle: e.detail.value
    })
  }
  cardSwiper = e => {
    this.setData({
      cardCur: e.detail.current
    })
  }
  towerSwiper = name => {
    let list = this.data[name]
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex =
        parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  }
  towerStart = e => {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  }
  towerMove = e => {
    this.setData({
      direction:
        e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  }
  towerEnd = e => {
    let direction = this.data.direction
    let list = this.data.swiperList
    if (direction == 'right') {
      let mLeft = list[0].mLeft
      let zIndex = list[0].zIndex
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft
      list[list.length - 1].zIndex = zIndex
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft
      let zIndex = list[list.length - 1].zIndex
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft
      list[0].zIndex = zIndex
      this.setData({
        swiperList: list
      })
    }
  }
  config = {}

  render() {
    const {
      DotStyle: DotStyle,
      swiperList: swiperList,
      cardCur: cardCur
    } = this.state
    return (
      <Block>
        <CuCustom
          bgColor="bg-gradual-pink"
          isBack={true}
          renderBackText={
            <Block>
              <View>返回</View>
            </Block>
          }
          renderContent={
            <Block>
              <View>轮播图</View>
            </Block>
          }
        />
        <View className="cu-bar bg-white">
          <View className="action">
            <Text className="icon-title text-pink" />全屏限高轮播
          </View>
          <View className="action">
            <Switch className="sm" onChange={this.DotStyle} />
          </View>
        </View>
        <Swiper
          className={'screen-swiper ' + (DotStyle ? 'square-dot' : 'round-dot')}
          indicatorDots="true"
          circular="true"
          autoplay="true"
          interval="5000"
          duration="500"
        >
          {swiperList.map((item, index) => {
            return (
              <SwiperItem key>
                {item.type == 'image' && (
                  <Image src={item.url} mode="aspectFill" />
                )}
                {item.type == 'video' && (
                  <Video
                    src={item.url}
                    autoplay
                    loop
                    muted
                    showPlayBtn={false}
                    controls={false}
                    objectFit="cover"
                  />
                )}
              </SwiperItem>
            )
          })}
        </Swiper>
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-pink" />卡片式轮播
          </View>
        </View>
        <Swiper
          className={'card-swiper ' + (DotStyle ? 'square-dot' : 'round-dot')}
          indicatorDots="true"
          circular="true"
          autoplay="true"
          interval="5000"
          duration="500"
          onChange={this.cardSwiper}
          indicatorColor="#8799a3"
          indicatorActiveColor="#0081ff"
        >
          {swiperList.map((item, index) => {
            return (
              <SwiperItem key className={cardCur == index ? 'cur' : ''}>
                <View className="swiper-item">
                  {item.type == 'image' && (
                    <Image src={item.url} mode="aspectFill" />
                  )}
                  {item.type == 'video' && (
                    <Video
                      src={item.url}
                      autoplay
                      loop
                      muted
                      showPlayBtn={false}
                      controls={false}
                      objectFit="cover"
                    />
                  )}
                </View>
              </SwiperItem>
            )
          })}
        </Swiper>
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-pink" />堆叠式轮播
          </View>
        </View>
        <View
          className="tower-swiper"
          onTouchMove={this.towerMove}
          onTouchStart={this.towerStart}
          onTouchEnd={this.towerEnd}
        >
          {swiperList.map((item, index) => {
            return (
              <View
                className={'tower-item ' + (item.zIndex == 1 ? 'none' : '')}
                key
                style={'--index:' + item.zIndex + ';--left:' + item.mLeft}
              >
                <View className="swiper-item">
                  {item.type == 'image' && (
                    <Image src={item.url} mode="aspectFill" />
                  )}
                  {item.type == 'video' && (
                    <Video
                      src={item.url}
                      autoplay
                      loop
                      muted
                      showPlayBtn={false}
                      controls={false}
                      objectFit="cover"
                    />
                  )}
                </View>
              </View>
            )
          })}
        </View>
      </Block>
    )
  }
}

export default _C
