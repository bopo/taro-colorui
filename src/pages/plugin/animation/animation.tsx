import { Block, View, Text, Button, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './animation.scss'
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [
      {
        name: 'fade',
        color: 'red'
      },
      {
        name: 'scale-up',
        color: 'orange'
      },
      {
        name: 'scale-down',
        color: 'olive'
      },
      {
        name: 'slide-top',
        color: 'green'
      },
      {
        name: 'slide-bottom',
        color: 'cyan'
      },
      {
        name: 'slide-left',
        color: 'blue'
      },
      {
        name: 'slide-right',
        color: 'purple'
      },
      {
        name: 'shake',
        color: 'mauve'
      }
    ],
    toggleDelay: false
  }
  toggle = e => {
    console.log(e)
    var anmiaton = e.currentTarget.dataset.class
    var that = this
    that.setData({
      animation: anmiaton
    })
    setTimeout(function() {
      that.setData({
        animation: ''
      })
    }, 1000)
  }
  toggleDelay = () => {
    var that = this
    that.setData({
      toggleDelay: true
    })
    setTimeout(function() {
      that.setData({
        toggleDelay: false
      })
    }, 1000)
  }
  config = {}

  render() {
    const {
      animation: animation,
      list: list,
      toggleDelay: toggleDelay
    } = this.state
    return (
      <Block>
        <CuCustom
          bgImage="https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg"
          isBack={true}
          renderBackText={
            <Block>
              <View>返回</View>
            </Block>
          }
          renderContent={
            <Block>
              <View>微动画</View>
            </Block>
          }
        />
        <View className="cu-bar bg-white">
          <View className="action">
            <Text className="icon-title text-orange" />默认效果
          </View>
        </View>
        <View className="padding-sm">
          <View className="flex flex-wrap justify-around">
            {list.map((item, index) => {
              return (
                <Button
                  className={
                    'cu-btn bg-' +
                    item.color +
                    ' animation-' +
                    (animation == item.name ? item.name : '') +
                    ' margin-sm basis-sm shadow'
                  }
                  onClick={this.toggle}
                  data-class={item.name}
                  key={index}
                >
                  {item.name}
                </Button>
              )
            })}
          </View>
        </View>
        <View className="cu-bar bg-white">
          <View className="action">
            <Text className="icon-title text-orange" />反向动画
          </View>
        </View>
        <View className="padding-sm">
          <View className="flex flex-wrap justify-around">
            {list.map((item, index) => {
              return (
                <Button
                  className={
                    'cu-btn bg-' +
                    item.color +
                    ' animation-' +
                    (animation == item.name + 's' ? item.name : '') +
                    ' animation-reverse margin-sm basis-sm shadow'
                  }
                  onClick={this.toggle}
                  data-class={item.name + 's'}
                  key={index}
                >
                  {item.name}
                </Button>
              )
            })}
          </View>
        </View>
        <View className="cu-bar bg-white">
          <View className="action">
            <Text className="icon-title text-orange" />延迟执行
          </View>
          <View className="action">
            <Button
              className="cu-btn bg-cyan shadow"
              onClick={this.toggleDelay}
            >
              开始执行
            </Button>
          </View>
        </View>
        <View className="padding-sm">
          <View className="flex flex-wrap justify-around">
            {list.map((item, index) => {
              return (
                <Button
                  className={
                    'bg-' +
                    item.color +
                    ' cu-btn ' +
                    (toggleDelay ? 'animation-slide-bottom' : '') +
                    ' margin-sm basis-sm shadow'
                  }
                  style={'animation-delay: ' + (index + 1) * 0.1 + 's;'}
                  key={index}
                >
                  {'0.' + (index + 1) + 's'}
                </Button>
              )
            })}
          </View>
        </View>
        <View className="cu-bar bg-white">
          <View className="action">
            <Text className="icon-title text-orange" />Gif动画
          </View>
        </View>
        <View className="margin radius bg-gradual-green shadow-blur">
          <Image
            src="https://image.weilanwl.com/gif/wave.gif"
            mode="scaleToFill"
            className="gif-black response"
            style="height:100rpx"
          />
        </View>
        <View className="margin flex">
          <View className="bg-black flex-sub margin-right radius shadow-lg">
            <Image
              src="https://image.weilanwl.com/gif/loading-black.gif"
              mode="aspectFit"
              className="gif-black response"
              style="height:240rpx"
            />
          </View>
          <View className="bg-white flex-sub radius shadow-lg">
            <Image
              src="https://image.weilanwl.com/gif/loading-white.gif"
              mode="aspectFit"
              className="gif-white response"
              style="height:240rpx"
            />
          </View>
        </View>
        <View className="margin flex">
          <View className="bg-gradual-blue flex-sub margin-right radius shadow-lg">
            <Image
              src="https://image.weilanwl.com/gif/rhomb-black.gif"
              mode="aspectFit"
              className="gif-black response"
              style="height:240rpx"
            />
          </View>
          <View className="bg-white flex-sub radius shadow-lg">
            <Image
              src="https://image.weilanwl.com/gif/rhomb-white.gif"
              mode="aspectFit"
              className="gif-white response"
              style="height:240rpx"
            />
          </View>
        </View>
        <View className="margin flex">
          <View className="bg-white flex-sub margin-right radius shadow-lg">
            <Image
              src="https://image.weilanwl.com/gif/loading-1.gif"
              mode="aspectFit"
              className="gif-white response"
              style="height:240rpx"
            />
          </View>
          <View className="bg-black flex-sub radius shadow-lg">
            <Image
              src="https://image.weilanwl.com/gif/loading-2.gif"
              mode="aspectFit"
              className="gif-black response"
              style="height:240rpx"
            />
          </View>
        </View>
      </Block>
    )
  }
}

export default _C
