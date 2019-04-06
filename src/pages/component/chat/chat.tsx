import { Block, View, Text, Image, Input, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './chat.scss'

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    InputBottom: 0
  }
  InputFocus = e => {
    this.setData({
      InputBottom: e.detail.height
    })
  }
  InputBlur = e => {
    this.setData({
      InputBottom: 0
    })
  }
  config = {}

  render() {
    const { InputBottom: InputBottom } = this.state
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
              <View>聊天</View>
            </Block>
          }
        />
        <View className="cu-chat">
          <View className="cu-item self">
            <View className="main">
              <View className="content bg-green shadow">
                <Text>喵喵喵！喵喵喵！喵喵喵！喵喵！喵喵！！喵！喵喵喵！</Text>
              </View>
            </View>
            <View
              className="cu-avatar radius"
              style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"
            />
            <View className="date">2018年3月23日 13:23</View>
          </View>
          <View className="cu-info round">对方撤回一条消息!</View>
          <View className="cu-item">
            <View
              className="cu-avatar radius"
              style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"
            />
            <View className="main">
              <View className="content shadow">
                <Text>喵喵喵！喵喵喵！</Text>
              </View>
            </View>
            <View className="date">13:23</View>
          </View>
          <View className="cu-info">
            <Text className="icon-roundclosefill text-red" />对方拒绝了你的消息
          </View>
          <View className="cu-info">
            对方开启了好友验证，你还不是他(她)的好友。请先发送好友验证请求，对方验证通过后，才能聊天。
            <Text className="text-blue">发送好友验证</Text>
          </View>
          <View className="cu-item self">
            <View className="main">
              <Image
                src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
                className="radius"
                mode="widthFix"
              />
            </View>
            <View
              className="cu-avatar radius"
              style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"
            />
            <View className="date">13:23</View>
          </View>
          <View className="cu-item self">
            <View className="main">
              <View className="action text-bold text-grey">3"</View>
              <View className="content shadow">
                <Text className="icon-sound text-xxl padding-right-xl" />
              </View>
            </View>
            <View
              className="cu-avatar radius"
              style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"
            />
            <View className="date">13:23</View>
          </View>
          <View className="cu-item self">
            <View className="main">
              <View className="action">
                <Text className="icon-locationfill text-orange text-xxl" />
              </View>
              <View className="content shadow">喵星球，喵喵市</View>
            </View>
            <View
              className="cu-avatar radius"
              style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"
            />
            <View className="date">13:23</View>
          </View>
          <View className="cu-item">
            <View
              className="cu-avatar radius"
              style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"
            />
            <View className="main">
              <View className="content shadow">@#$^&**</View>
              <View className="action text-grey">
                <Text className="icon-warnfill text-red text-xxl" />
                <Text className="text-sm margin-left-sm">翻译错误</Text>
              </View>
            </View>
            <View className="date">13:23</View>
          </View>
        </View>
        <View
          className="cu-bar foot input"
          style={'bottom:' + InputBottom + 'px'}
        >
          <View className="action">
            <Text className="icon-sound text-grey" />
          </View>
          <Input
            className="solid-bottom"
            onFocus={this.InputFocus}
            onBlur={this.InputBlur}
            adjustPosition={false}
            focus={false}
            maxlength="300"
            cursorSpacing="10"
          />
          <View className="action">
            <Text className="icon-emojifill text-grey" />
          </View>
          <Button className="cu-btn bg-green shadow">发送</Button>
        </View>
      </Block>
    )
  }
}

export default _C
