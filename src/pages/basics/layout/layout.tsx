import { Block, View, ScrollView, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './layout.scss'
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    tabNav: ['Flex布局', 'Grid布局', '辅助布局']
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
    const { CustomBar: CustomBar, TabCur: TabCur, tabNav: tabNav } = this.state
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
              <View>布局</View>
            </Block>
          }
        />
        <ScrollView
          scrollX
          className="bg-white nav text-center fixed"
          style={'top:' + CustomBar + 'px'}
        >
          {tabNav.map((item, index) => {
            return (
              <View
                className={
                  'cu-item ' + (index == TabCur ? 'text-blue cur' : '')
                }
                key
                onClick={this.tabSelect}
                data-id={index}
              >
                {tabNav[index]}
              </View>
            )
          })}
        </ScrollView>
        {TabCur == 0 && (
          <Block>
            <View className="cu-bar bg-white solid-bottom margin-top">
              <View className="action">
                <Text className="icon-title text-blue" />固定尺寸
              </View>
            </View>
            <View className="padding bg-white">
              <View className="flex flex-wrap">
                <View className="basis-xs bg-grey margin-xs padding-sm radius">
                  xs(20%)
                </View>
                <View className="basis-df" />
                <View className="basis-sm bg-grey margin-xs padding-sm radius">
                  sm(40%)
                </View>
                <View className="basis-df" />
                <View className="basis-df bg-grey margin-xs padding-sm radius">
                  sub(50%)
                </View>
                <View className="basis-lg bg-grey margin-xs padding-sm radius">
                  lg(60%)
                </View>
                <View className="basis-xl bg-grey margin-xs padding-sm radius">
                  xl(80%)
                </View>
              </View>
            </View>
            <View className="cu-bar bg-white margin-top solid-bottom">
              <View className="action">
                <Text className="icon-title text-blue" />比例布局
              </View>
            </View>
            <View className="padding bg-white">
              <View className="flex">
                <View className="flex-sub bg-grey padding-sm margin-xs radius">
                  1
                </View>
                <View className="flex-sub bg-grey padding-sm margin-xs radius">
                  1
                </View>
              </View>
              <View className="flex  p-xs margin-bottom-sm mb-sm">
                <View className="flex-sub bg-grey padding-sm margin-xs radius">
                  1
                </View>
                <View className="flex-twice bg-grey padding-sm margin-xs radius">
                  2
                </View>
              </View>
              <View className="flex  p-xs margin-bottom-sm mb-sm">
                <View className="flex-sub bg-grey padding-sm margin-xs radius">
                  1
                </View>
                <View className="flex-twice bg-grey padding-sm margin-xs radius">
                  2
                </View>
                <View className="flex-treble bg-grey padding-sm margin-xs radius">
                  3
                </View>
              </View>
            </View>
            <View className="cu-bar bg-white margin-top solid-bottom">
              <View className="action">
                <Text className="icon-title text-blue" />水平对齐(justify)
              </View>
            </View>
            <View className="bg-white">
              <View className="flex solid-bottom padding justify-start">
                <View className="bg-grey padding-sm margin-xs radius">
                  start
                </View>
                <View className="bg-grey padding-sm margin-xs radius">
                  start
                </View>
              </View>
              <View className="flex solid-bottom padding justify-end">
                <View className="bg-grey padding-sm margin-xs radius">end</View>
                <View className="bg-grey padding-sm margin-xs radius">end</View>
              </View>
              <View className="flex solid-bottom padding justify-center">
                <View className="bg-grey padding-sm margin-xs radius">
                  center
                </View>
                <View className="bg-grey padding-sm margin-xs radius">
                  center
                </View>
              </View>
              <View className="flex solid-bottom padding justify-between">
                <View className="bg-grey padding-sm margin-xs radius">
                  between
                </View>
                <View className="bg-grey padding-sm margin-xs radius">
                  between
                </View>
              </View>
              <View className="flex solid-bottom padding justify-around">
                <View className="bg-grey padding-sm margin-xs radius">
                  around
                </View>
                <View className="bg-grey padding-sm margin-xs radius">
                  around
                </View>
              </View>
            </View>
            <View className="cu-bar bg-white margin-top solid-bottom">
              <View className="action">
                <Text className="icon-title text-blue" />垂直对齐(align)
              </View>
            </View>
            <View className="bg-white">
              <View className="flex solid-bottom padding align-start">
                <View className="bg-grey padding-lg margin-xs radius">
                  ColorUi
                </View>
                <View className="bg-grey padding-sm margin-xs radius">
                  start
                </View>
              </View>
              <View className="flex solid-bottom padding align-end">
                <View className="bg-grey padding-lg margin-xs radius">
                  ColorUi
                </View>
                <View className="bg-grey padding-sm margin-xs radius">end</View>
              </View>
              <View className="flex solid-bottom padding align-center">
                <View className="bg-grey padding-lg margin-xs radius">
                  ColorUi
                </View>
                <View className="bg-grey padding-sm margin-xs radius">
                  center
                </View>
              </View>
            </View>
          </Block>
        )}
        {TabCur == 1 && (
          <Block>
            <View className="cu-bar bg-white margin-top solid-bottom">
              <View className="action">
                <Text className="icon-title text-blue" />等分列
              </View>
              <View className="action" />
            </View>
            <View className="bg-white padding">
              {(5).map((item, index) => {
                return (
                  <View
                    className={
                      'grid col-' + (index + 1) + ' margin-bottom text-center'
                    }
                    key
                  >
                    {((index + 1) * 2).map((item, index) => {
                      return (
                        <View
                          className={
                            (index % 2 == 0 ? 'bg-cyan' : 'bg-blue') +
                            ' padding'
                          }
                          key
                        >
                          {index + 1}
                        </View>
                      )
                    })}
                  </View>
                )
              })}
            </View>
            <View className="cu-bar bg-white margin-top solid-bottom">
              <View className="action">
                <Text className="icon-title text-blue" />等高
              </View>
              <View className="action" />
            </View>
            <View className="bg-white padding">
              <View className="grid col-4 grid-square">
                {(4).map((item, index) => {
                  return (
                    <View
                      className="bg-img"
                      key
                      style={
                        'background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big1000' +
                        (index + 1) +
                        '.jpg);'
                      }
                    />
                  )
                })}
              </View>
            </View>
          </Block>
        )}
        {TabCur == 2 && (
          <Block>
            <View className="cu-bar bg-white margin-top solid-bottom">
              <View className="action">
                <Text className="icon-title text-blue" />浮动
              </View>
            </View>
            <View className="bg-white padding">
              <View className="cf padding-sm">
                <View className="bg-grey radius fl padding-sm">ColorUi fl</View>
                <View className="bg-grey radius fr padding-sm">ColorUi fr</View>
              </View>
            </View>
            <View className="cu-bar bg-white margin-top solid-bottom">
              <View className="action">
                <Text className="icon-title text-blue" />内外边距
              </View>
            </View>
            <View className="bg-white">
              <View className="padding bg-gray">
                {'{'}size{'}'}的尺寸有xs/sm/df/lg/xl
              </View>
              <View className="flex flex-wrap padding solid-top">
                <View className="basis-df padding-bottom-xs">外边距</View>
                <View className="basis-df padding-bottom-xs">内边距</View>
                <View className="basis-df">
                  .margin-{'{'}size{'}'}
                </View>
                <View className="basis-df">
                  .padding-{'{'}size{'}'}
                </View>
              </View>
              <View className="flex flex-wrap padding solid-top">
                <View className="basis-df padding-bottom-xs">
                  水平方向外边距
                </View>
                <View className="basis-df padding-bottom-xs">
                  水平方向内边距
                </View>
                <View className="basis-df">
                  .margin-lr-{'{'}size{'}'}
                </View>
                <View className="basis-df">
                  .padding-lr-{'{'}size{'}'}
                </View>
              </View>
              <View className="flex flex-wrap padding solid-top">
                <View className="basis-df padding-bottom-xs">
                  垂直方向外边距
                </View>
                <View className="basis-df padding-bottom-xs">
                  垂直方向内边距
                </View>
                <View className="basis-df">
                  .margin-tb-{'{'}size{'}'}
                </View>
                <View className="basis-df">
                  .padding-tb-{'{'}size{'}'}
                </View>
              </View>
              <View className="flex flex-wrap padding solid-top">
                <View className="basis-df padding-bottom-xs">上外边距</View>
                <View className="basis-df padding-bottom-xs">上内边距</View>
                <View className="basis-df">
                  .margin-top-{'{'}size{'}'}
                </View>
                <View className="basis-df">
                  .padding-top-{'{'}size{'}'}
                </View>
              </View>
              <View className="flex flex-wrap padding solid-top">
                <View className="basis-df padding-bottom-xs">右外边距</View>
                <View className="basis-df padding-bottom-xs">右内边距</View>
                <View className="basis-df">
                  .margin-right-{'{'}size{'}'}
                </View>
                <View className="basis-df">
                  .padding-right-{'{'}size{'}'}
                </View>
              </View>
              <View className="flex flex-wrap padding solid-top">
                <View className="basis-df padding-bottom-xs">下外边距</View>
                <View className="basis-df padding-bottom-xs">下内边距</View>
                <View className="basis-df">
                  margin-bottom-{'{'}size{'}'}
                </View>
                <View className="basis-df">
                  .padding-bottom-{'{'}size{'}'}
                </View>
              </View>
              <View className="flex flex-wrap padding solid-top">
                <View className="basis-df padding-bottom-xs">左外边距</View>
                <View className="basis-df padding-bottom-xs">左内边距</View>
                <View className="basis-df">
                  .margin-left-{'{'}size{'}'}
                </View>
                <View className="basis-df">
                  .padding-left-{'{'}size{'}'}
                </View>
              </View>
            </View>
          </Block>
        )}
      </Block>
    )
  }
}

export default _C
