import {
  Block,
  ScrollView,
  View,
  Text,
  Button,
  RadioGroup,
  Label,
  Radio,
  Switch,
  Image,
  Navigator
} from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './list.scss'
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    iconList: [
      {
        icon: 'cardboardfill',
        color: 'red',
        badge: 120,
        name: 'VR'
      },
      {
        icon: 'recordfill',
        color: 'orange',
        badge: 1,
        name: '录像'
      },
      {
        icon: 'picfill',
        color: 'yellow',
        badge: 0,
        name: '图像'
      },
      {
        icon: 'noticefill',
        color: 'olive',
        badge: 22,
        name: '通知'
      },
      {
        icon: 'upstagefill',
        color: 'cyan',
        badge: 0,
        name: '排行榜'
      },
      {
        icon: 'clothesfill',
        color: 'blue',
        badge: 0,
        name: '皮肤'
      },
      {
        icon: 'discoverfill',
        color: 'purple',
        badge: 0,
        name: '发现'
      },
      {
        icon: 'questionfill',
        color: 'mauve',
        badge: 0,
        name: '帮助'
      },
      {
        icon: 'commandfill',
        color: 'purple',
        badge: 0,
        name: '问答'
      },
      {
        icon: 'brandfill',
        color: 'mauve',
        badge: 0,
        name: '版权'
      }
    ],
    gridCol: 3,
    skin: false
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
  gridchange = e => {
    this.setData({
      gridCol: e.detail.value
    })
  }
  gridswitch = e => {
    this.setData({
      gridBorder: e.detail.value
    })
  }
  menuBorder = e => {
    this.setData({
      menuBorder: e.detail.value
    })
  }
  menuArrow = e => {
    this.setData({
      menuArrow: e.detail.value
    })
  }
  menuCard = e => {
    this.setData({
      menuCard: e.detail.value
    })
  }
  switchSex = e => {
    this.setData({
      skin: e.detail.value
    })
  }
  ListTouchStart = e => {
    this.setData({
      ListTouchStart: e.touches[0].pageX
    })
  }
  ListTouchMove = e => {
    this.setData({
      ListTouchDirection:
        e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
    })
  }
  ListTouchEnd = e => {
    if (this.data.ListTouchDirection == 'left') {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    } else {
      this.setData({
        modalName: null
      })
    }
    this.setData({
      ListTouchDirection: null
    })
  }
  config = {}

  render() {
    const {
      modalName: modalName,
      gridCol: gridCol,
      gridBorder: gridBorder,
      iconList: iconList,
      menuBorder: menuBorder,
      menuCard: menuCard,
      menuArrow: menuArrow
    } = this.state
    return (
      <ScrollView
        scrollY={modalName == null}
        className={'page ' + (modalName != null ? 'show' : '')}
      >
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
              <View>列表</View>
            </Block>
          }
        />
        <View className="cu-bar bg-white solid-bottom margin-top">
          <View className="action">
            <Text className="icon-title text-orange" />宫格列表
          </View>
          <View className="action">
            <Button
              className="cu-btn bg-green shadow"
              onClick={this.showModal}
              data-target="gridModal"
            >
              设置
            </Button>
          </View>
        </View>
        <View
          className={'cu-modal ' + (modalName == 'gridModal' ? 'show' : '')}
          onClick={this.hideModal}
        >
          <View className="cu-dialog" onClick>
            <RadioGroup className="block" onChange={this.gridchange}>
              <View className="cu-list menu text-left">
                {(3).map((item, index) => {
                  return (
                    <View className="cu-item" key>
                      <Label className="flex justify-between align-center flex-sub">
                        <View className="flex-sub">{index + 3 + ' 列'}</View>
                        <Radio
                          className="round"
                          value={index + 3}
                          checked={gridCol == index + 3}
                        />
                      </Label>
                    </View>
                  )
                })}
              </View>
            </RadioGroup>
            <View className="cu-list menu text-left solid-top">
              <View className="cu-item">
                <View className="content">
                  <Text className="text-grey">边框</Text>
                </View>
                <View className="action">
                  <Switch onChange={this.gridswitch} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          className={
            'cu-list grid col-' +
            gridCol +
            ' ' +
            (gridBorder ? '' : 'no-border')
          }
        >
          {index < gridCol * 2 && (
            <Block>
              {iconList.map((item, index) => {
                return (
                  <View className="cu-item" key>
                    <View
                      className={'icon-' + item.icon + ' text-' + item.color}
                    >
                      {item.badge != 0 && (
                        <View className="cu-tag badge">
                          {item.badge != 1 && (
                            <Block>
                              {item.badge > 99 ? '99+' : item.badge}
                            </Block>
                          )}
                        </View>
                      )}
                    </View>
                    <Text>{item.name}</Text>
                  </View>
                )
              })}
            </Block>
          )}
        </View>
        <View className="cu-bar bg-white solid-bottom margin-top">
          <View className="action">
            <Text className="icon-title text-orange" />菜单列表
          </View>
          <View className="action">
            <Button
              className="cu-btn bg-green shadow"
              onClick={this.showModal}
              data-target="menuModal"
            >
              Modal
            </Button>
          </View>
        </View>
        <View
          className={'cu-modal ' + (modalName == 'menuModal' ? 'show' : '')}
          onClick={this.hideModal}
        >
          <View className="cu-dialog" onClick>
            <ScrollView scrollY style="height:300rpx">
              <View className="cu-list menu text-left solid-top">
                <View className="cu-item">
                  <View className="content">
                    <Text className="text-grey">短边框</Text>
                  </View>
                  <View className="action">
                    <Switch onChange={this.menuBorder} />
                  </View>
                </View>
                <View className="cu-item">
                  <View className="content">
                    <Text className="text-grey">箭头</Text>
                  </View>
                  <View className="action">
                    <Switch onChange={this.menuArrow} />
                  </View>
                </View>
                <View className="cu-item">
                  <View className="content">
                    <Text className="text-grey">卡片</Text>
                  </View>
                  <View className="action">
                    <Switch onChange={this.menuCard} />
                  </View>
                </View>
                <View className="cu-item">
                  <View className="content">
                    <Text className="text-grey">短边框</Text>
                  </View>
                  <View className="action">
                    <Switch onChange={this.menuBorder} />
                  </View>
                </View>
                <View className="cu-item">
                  <View className="content">
                    <Text className="text-grey">箭头</Text>
                  </View>
                  <View className="action">
                    <Switch onChange={this.menuArrow} />
                  </View>
                </View>
                <View className="cu-item">
                  <View className="content">
                    <Text className="text-grey">卡片</Text>
                  </View>
                  <View className="action">
                    <Switch onChange={this.menuCard} />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        <View
          className={
            'cu-list menu ' +
            (menuBorder ? 'sm-border' : '') +
            ' ' +
            (menuCard ? 'card-menu margin-top' : '')
          }
        >
          <View className={'cu-item ' + (menuArrow ? 'arrow' : '')}>
            <View className="content">
              <Text className="icon-circlefill text-grey" />
              <Text className="text-grey">图标 + 标题</Text>
            </View>
          </View>
          <View className={'cu-item ' + (menuArrow ? 'arrow' : '')}>
            <View className="content">
              <Image
                src={require('../../../images/logo.png')}
                className="png"
                mode="aspectFit"
              />
              <Text className="text-grey">图片 + 标题</Text>
            </View>
          </View>
          <View className={'cu-item ' + (menuArrow ? 'arrow' : '')}>
            <Button className="cu-btn content" openType="contact">
              <Text className="icon-btn text-olive" />
              <Text className="text-grey">Open-type 按钮</Text>
            </Button>
          </View>
          <View className={'cu-item ' + (menuArrow ? 'arrow' : '')}>
            <Navigator
              className="content"
              hoverClass="none"
              url="../list/list"
              openType="redirect"
            >
              <Text className="icon-discoverfill text-orange" />
              <Text className="text-grey">Navigator 跳转</Text>
            </Navigator>
          </View>
          <View className={'cu-item ' + (menuArrow ? 'arrow' : '')}>
            <View className="content">
              <Text className="icon-emojiflashfill text-pink" />
              <Text className="text-grey">头像组</Text>
            </View>
            <View className="action">
              <View className="cu-avatar-group">
                <View
                  className="cu-avatar round sm"
                  style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg);"
                />
                <View
                  className="cu-avatar round sm"
                  style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg);"
                />
                <View
                  className="cu-avatar round sm"
                  style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10002.jpg);"
                />
                <View
                  className="cu-avatar round sm"
                  style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"
                />
              </View>
              <Text className="text-grey text-sm">4 人</Text>
            </View>
          </View>
          <View className={'cu-item ' + (menuArrow ? 'arrow' : '')}>
            <View className="content">
              <Text className="icon-btn text-green" />
              <Text className="text-grey">按钮</Text>
            </View>
            <View className="action">
              <Button className="cu-btn round bg-green shadow">
                <Text className="icon-upload" />上传
              </Button>
            </View>
          </View>
          <View className={'cu-item ' + (menuArrow ? 'arrow' : '')}>
            <View className="content">
              <Text className="icon-tagfill text-red" />
              <Text className="text-grey">标签</Text>
            </View>
            <View className="action">
              <View className="cu-tag round bg-orange light">音乐</View>
              <View className="cu-tag round bg-olive light">电影</View>
              <View className="cu-tag round bg-blue light">旅行</View>
            </View>
          </View>
          <View className={'cu-item ' + (menuArrow ? 'arrow' : '')}>
            <View className="content">
              <Text className="icon-warn text-green" />
              <Text className="text-grey">文本</Text>
            </View>
            <View className="action">
              <Text className="text-grey text-sm">小目标还没有实现！</Text>
            </View>
          </View>
          <View className="cu-item">
            <View className="content padding-tb-sm">
              <View>
                <Text className="icon-clothesfill text-blue margin-right-xs" />
                多行Item
              </View>
              <View className="text-gray text-sm">
                <Text className="icon-infofill margin-right-xs" />
                小目标还没有实现！
              </View>
            </View>
            <View className="action">
              <Switch className="switch-sex sm" onChange={this.switchSex} />
            </View>
          </View>
        </View>
        <View className="cu-bar bg-white solid-bottom margin-top">
          <View className="action">
            <Text className="icon-title text-orange" />消息列表
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
                <View className="cu-tag round bg-orange sm">战士</View>
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
                <Text className="text-cut">凯尔，你被自己的光芒变的盲目！</Text>
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
                <View className="cu-tag round bg-orange sm">断开连接...</View>
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
        <View className="cu-bar bg-white solid-bottom margin-top">
          <View className="action">
            <Text className="icon-title text-orange" />列表左滑
          </View>
        </View>
        <View className="cu-list menu-avatar">
          {(4).map((item, index) => {
            return (
              <View
                className={
                  'cu-item ' +
                  (modalName == 'move-box-' + index ? 'move-cur' : '')
                }
                key
                onTouchStart={this.ListTouchStart}
                onTouchMove={this.ListTouchMove}
                onTouchEnd={this.ListTouchEnd}
                data-target={'move-box-' + index}
              >
                <View
                  className="cu-avatar round lg"
                  style={
                    'background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100' +
                    (index + 1) +
                    '.jpg);'
                  }
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
                <View className="move">
                  <View className="bg-grey">置顶</View>
                  <View className="bg-red">删除</View>
                </View>
              </View>
            )
          })}
        </View>
      </ScrollView>
    )
  }
}

export default _C
