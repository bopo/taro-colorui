import { Block, View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'

@withWeapp('Page')
class _C extends Taro.Component {
  config = {}

  render() {
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
              <View>时间轴</View>
            </Block>
          }
        />
        <View className="cu-timeline">
          <View className="cu-time">昨天</View>
          <View className="cu-item cur icon-noticefill">
            <View className="content bg-green shadow-blur">
              <Text>22:22</Text>【广州市】快件已到达地球
            </View>
          </View>
          <View className="cu-item text-red icon-attentionforbidfill">
            <View className="content bg-red shadow-blur">
              这是第一次，我家的铲屎官走了这么久。久到足足有三天！！
            </View>
          </View>
          <View className="cu-item text-grey icon-evaluate_fill">
            <View className="content bg-grey shadow-blur">
              这是第一次，我家的铲屎官走了这么久。
            </View>
          </View>
          <View className="cu-item text-blue">
            <View className="bg-blue content">
              <Text>20:00</Text>【月球】快件已到达月球，准备发往地球
            </View>
            <View className="bg-cyan content">
              <Text>10:00</Text>【银河系】快件已到达银河系，准备发往月球
            </View>
          </View>
        </View>
        <View className="cu-timeline">
          <View className="cu-time">06-17</View>
          <View className="cu-item">
            <View className="content">
              <Text>01:30</Text>【喵星】 MX-12138 已揽收，准备发往银河系
            </View>
          </View>
        </View>
        <View className="cu-timeline">
          <View className="cu-time">06-17</View>
          <View className="cu-item">
            <View className="content">
              <View className="cu-capsule radius">
                <View className="cu-tag bg-cyan">上午</View>
                <View className="cu-tag line-cyan">10:00</View>
              </View>
              <View className="margin-top">
                这是第一次，我家的铲屎官走了这么久。久到足足有三天！！
                在听到他的脚步声响在楼梯间的那一刻，我简直想要破门而出，对着他狠狠地吼上10分钟，然后再看心情要不要他进门。
              </View>
            </View>
          </View>
          <View className="cu-item text-blue">
            <View className="bg-blue shadow-blur content">
              <View className="cu-list menu-avatar radius">
                <View className="cu-item">
                  <View
                    className="cu-avatar round lg"
                    style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
                  />
                  <View className="content">
                    <View className="text-grey">文晓港</View>
                    <View className="text-gray text-sm">
                      <Text className="icon-infofill text-red" />消息未送达
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
                    style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
                  >
                    <View className="cu-tag badge">99+</View>
                  </View>
                  <View className="content">
                    <View className="text-grey">
                      文晓港<View className="cu-tag round orange sm">SVIP</View>
                    </View>
                    <View className="text-gray text-sm">
                      <Text className="icon-redpacket_fill text-red" />收到红包
                    </View>
                  </View>
                  <View className="action">
                    <View className="text-grey text-xs">22:20</View>
                    <Text className="icon-notice_forbid_fill text-gray" />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Block>
    )
  }
}

export default _C
