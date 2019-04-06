import { Block, View, Text, Switch, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar
  }
  isCard = e => {
    this.setData({
      isCard: e.detail.value
    })
  }
  config = {}

  render() {
    const { isCard: isCard } = this.state
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
              <View>卡片</View>
            </Block>
          }
        />
        <View className="cu-bar bg-white solid-bottom">
          <View className="action">
            <Text className="icon-titles text-orange" />案例类卡片
          </View>
          <View className="action">
            <Switch className="sm" checked={isCard} onChange={this.isCard} />
          </View>
        </View>
        <View className={'cu-card case ' + (isCard ? 'no-card' : '')}>
          <View className="cu-item shadow">
            <View className="image">
              <Image
                src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
                mode="widthFix"
              />
              <View className="cu-tag bg-blue">史诗</View>
              <View className="cu-bar bg-shadeBottom">
                <Text className="text-cut">
                  我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
                </Text>
              </View>
            </View>
            <View className="cu-list menu-avatar">
              <View className="cu-item">
                <View
                  className="cu-avatar round lg"
                  style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
                />
                <View className="content flex-sub">
                  <View className="text-grey">正义天使 凯尔</View>
                  <View className="text-gray text-sm flex justify-between">
                    十天前
                    <View className="text-gray text-sm">
                      <Text className="icon-attentionfill margin-lr-xs" />10
                      <Text className="icon-appreciatefill margin-lr-xs" />20
                      <Text className="icon-messagefill margin-lr-xs" />30
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          className={
            'cu-bar bg-white solid-bottom ' + (isCard ? 'margin-top' : '')
          }
        >
          <View className="action">
            <Text className="icon-titles text-orange" />动态类卡片
          </View>
          <View className="action">
            <Switch className="sm" checked={isCard} onChange={this.isCard} />
          </View>
        </View>
        <View className={'cu-card dynamic ' + (isCard ? 'no-card' : '')}>
          <View className="cu-item shadow">
            <View className="cu-list menu-avatar">
              <View className="cu-item">
                <View
                  className="cu-avatar round lg"
                  style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
                />
                <View className="content flex-sub">
                  <View>凯尔</View>
                  <View className="text-gray text-sm flex justify-between">
                    2019年12月3日
                  </View>
                </View>
              </View>
            </View>
            <View className="text-content">
              折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！
            </View>
            <View
              className={
                'grid flex-sub padding-lr ' +
                (isCard ? 'col-3 grid-square' : 'col-1')
              }
            >
              {(isCard ? 9 : 1).map((item, index) => {
                return (
                  <View
                    className={'bg-img ' + (isCard ? '' : 'only-img')}
                    style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
                    key={index}
                  />
                )
              })}
            </View>
            <View className="text-gray text-sm text-right padding">
              <Text className="icon-attentionfill margin-lr-xs" />10
              <Text className="icon-appreciatefill margin-lr-xs" />20
              <Text className="icon-messagefill margin-lr-xs" />30
            </View>
            <View className="cu-list menu-avatar comment solids-top">
              <View className="cu-item">
                <View
                  className="cu-avatar round"
                  style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"
                />
                <View className="content">
                  <View className="text-grey">莫甘娜</View>
                  <View className="text-gray text-content text-df">
                    凯尔，你被自己的光芒变的盲目。
                  </View>
                  <View className="bg-grey padding-sm radius margin-top-sm  text-sm">
                    <View className="flex">
                      <View>凯尔：</View>
                      <View className="flex-sub">
                        妹妹，你在帮他们给黑暗找借口吗?
                      </View>
                    </View>
                  </View>
                  <View className="margin-top-sm flex justify-between">
                    <View className="text-gray text-df">2018年12月4日</View>
                    <View>
                      <Text className="icon-appreciatefill text-red" />
                      <Text className="icon-messagefill text-gray margin-left-sm" />
                    </View>
                  </View>
                </View>
              </View>
              <View className="cu-item">
                <View
                  className="cu-avatar round"
                  style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
                />
                <View className="content">
                  <View className="text-grey">凯尔</View>
                  <View className="text-gray text-content text-df">
                    妹妹，如果不是为了飞翔，我们要这翅膀有什么用?
                  </View>
                  <View className="bg-grey padding-sm radius margin-top-sm  text-sm">
                    <View className="flex">
                      <View>莫甘娜：</View>
                      <View className="flex-sub">
                        如果不能立足于大地，要这双脚又有何用?
                      </View>
                    </View>
                  </View>
                  <View className="margin-top-sm flex justify-between">
                    <View className="text-gray text-df">2018年12月4日</View>
                    <View>
                      <Text className="icon-appreciate text-gray" />
                      <Text className="icon-messagefill text-gray margin-left-sm" />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className="cu-bar bg-white solid-bottom margin-top">
          <View className="action">
            <Text className="icon-titles text-orange" />文章类卡片
          </View>
          <View className="action">
            <Switch className="sm" checked={isCard} onChange={this.isCard} />
          </View>
        </View>
        <View className={'cu-card article ' + (isCard ? 'no-card' : '')}>
          <View className="cu-item shadow">
            <View className="title">
              <View className="text-cut">
                无意者
                烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。
              </View>
            </View>
            <View className="content">
              <Image
                src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
                mode="aspectFill"
              />
              <View className="desc">
                <View className="text-content">
                  折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！
                </View>
                <View>
                  <View className="cu-tag bg-red light sm round">正义天使</View>
                  <View className="cu-tag bg-green light sm round">史诗</View>
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
