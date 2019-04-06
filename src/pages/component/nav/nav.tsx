import { Block, View, Text, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    TabCur: 0,
    scrollLeft: 0
  }
  tabSelect = e => {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  }
  config = {}

  render() {
    const { TabCur: TabCur, scrollLeft: scrollLeft } = this.state
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
              <View>导航栏</View>
            </Block>
          }
        />
        {index == TabCur && (
          <Block>
            {(10).map((item, index) => {
              return (
                <View key className="bg-grey padding margin text-center">
                  {'Tab' + index}
                </View>
              )
            })}
          </Block>
        )}
        <View className="cu-bar bg-white solid-bottom">
          <View className="action">
            <Text className="icon-titles text-orange" />默认
          </View>
        </View>
        <ScrollView
          scrollX
          className="bg-white nav"
          scrollWithAnimation
          scrollLeft={scrollLeft}
        >
          {(10).map((item, index) => {
            return (
              <View
                className={
                  'cu-item ' + (index == TabCur ? 'text-green cur' : '')
                }
                key
                onClick={this.tabSelect}
                data-id={index}
              >
                {'Tab' + index}
              </View>
            )
          })}
        </ScrollView>
        <View className="cu-bar bg-white margin-top solid-bottom">
          <View className="action">
            <Text className="icon-title text-orange" />居中
          </View>
        </View>
        <ScrollView scrollX className="bg-white nav text-center">
          {(3).map((item, index) => {
            return (
              <View
                className={
                  'cu-item ' + (index == TabCur ? 'text-blue cur' : '')
                }
                key
                onClick={this.tabSelect}
                data-id={index}
              >
                {'Tab' + index}
              </View>
            )
          })}
        </ScrollView>
        <View className="cu-bar bg-white margin-top solid-bottom">
          <View className="action">
            <Text className="icon-title text-orange" />平分
          </View>
        </View>
        <ScrollView scrollX className="bg-white nav">
          <View className="flex text-center">
            {(4).map((item, index) => {
              return (
                <View
                  className={
                    'cu-item flex-sub ' +
                    (index == TabCur ? 'text-orange cur' : '')
                  }
                  key
                  onClick={this.tabSelect}
                  data-id={index}
                >
                  {'Tab' + index}
                </View>
              )
            })}
          </View>
        </ScrollView>
        <View className="cu-bar bg-white margin-top solid-bottom">
          <View className="action">
            <Text className="icon-title text-orange" />背景
          </View>
        </View>
        <ScrollView scrollX className="bg-red nav text-center">
          {(3).map((item, index) => {
            return (
              <View
                className={
                  'cu-item ' + (index == TabCur ? 'text-white cur' : '')
                }
                key
                onClick={this.tabSelect}
                data-id={index}
              >
                {'Tab' + index}
              </View>
            )
          })}
        </ScrollView>
        <View className="cu-bar bg-white margin-top solid-bottom">
          <View className="action">
            <Text className="icon-title text-orange" />图标
          </View>
        </View>
        <ScrollView scrollX className="bg-green nav text-center">
          <View
            className={'cu-item ' + (0 == TabCur ? 'text-white cur' : '')}
            onClick={this.tabSelect}
            data-id="0"
          >
            <Text className="icon-camerafill" />数码
          </View>
          <View
            className={'cu-item ' + (1 == TabCur ? 'text-white cur' : '')}
            onClick={this.tabSelect}
            data-id="1"
          >
            <Text className="icon-upstagefill" />排行榜
          </View>
          <View
            className={'cu-item ' + (2 == TabCur ? 'text-white cur' : '')}
            onClick={this.tabSelect}
            data-id="2"
          >
            <Text className="icon-clothesfill" />皮肤
          </View>
        </ScrollView>
      </Block>
    )
  }
}

export default _C
