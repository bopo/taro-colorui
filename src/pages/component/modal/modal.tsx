import {
  Block,
  View,
  Text,
  Button,
  RadioGroup,
  Label,
  Radio
} from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    CustomBar: app.globalData.CustomBar,
    checkbox: [
      {
        value: 0,
        name: '10元',
        checked: false,
        hot: false
      },
      {
        value: 1,
        name: '20元',
        checked: true,
        hot: false
      },
      {
        value: 2,
        name: '30元',
        checked: true,
        hot: true
      },
      {
        value: 3,
        name: '60元',
        checked: false,
        hot: true
      },
      {
        value: 4,
        name: '80元',
        checked: false,
        hot: false
      },
      {
        value: 5,
        name: '100元',
        checked: false,
        hot: false
      }
    ]
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
  ChooseCheckbox = e => {
    let items = this.data.checkbox
    let values = e.currentTarget.dataset.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      if (items[i].value == values) {
        items[i].checked = !items[i].checked
        break
      }
    }
    this.setData({
      checkbox: items
    })
  }
  config = {}

  render() {
    const {
      modalName: modalName,
      checkbox: checkbox,
      CustomBar: CustomBar
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
              <View>模态窗口</View>
            </Block>
          }
        />
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-orange" />普通窗口
          </View>
          <View className="action">
            <Button
              className="cu-btn bg-green shadow"
              onClick={this.showModal}
              data-target="Modal"
            >
              Modal
            </Button>
          </View>
        </View>
        <View className={'cu-modal ' + (modalName == 'Modal' ? 'show' : '')}>
          <View className="cu-dialog">
            <View className="cu-bar bg-white justify-end">
              <View className="content">Modal标题</View>
              <View className="action" onClick={this.hideModal}>
                <Text className="icon-close text-red" />
              </View>
            </View>
            <View className="padding-xl">Modal 内容。</View>
          </View>
        </View>
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-orange" />底部窗口
          </View>
          <View className="action">
            <Button
              className="cu-btn bg-green shadow"
              onClick={this.showModal}
              data-target="bottomModal"
            >
              Bottom
            </Button>
          </View>
        </View>
        <View
          className={
            'cu-modal bottom-modal ' +
            (modalName == 'bottomModal' ? 'show' : '')
          }
        >
          <View className="cu-dialog">
            <View className="cu-bar bg-white">
              <View className="action text-green">确定</View>
              <View className="action text-blue" onClick={this.hideModal}>
                取消
              </View>
            </View>
            <View className="padding-xl">Modal 内容。</View>
          </View>
        </View>
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-orange" />对话窗口
          </View>
          <View className="action">
            <Button
              className="cu-btn bg-green shadow"
              onClick={this.showModal}
              data-target="DialogModal1"
            >
              Dialog
            </Button>
            <Button
              className="cu-btn bg-blue shadow margin-left"
              onClick={this.showModal}
              data-target="DialogModal2"
            >
              Dialog
            </Button>
          </View>
        </View>
        <View
          className={'cu-modal ' + (modalName == 'DialogModal1' ? 'show' : '')}
        >
          <View className="cu-dialog">
            <View className="cu-bar bg-white justify-end">
              <View className="content">Modal标题</View>
              <View className="action" onClick={this.hideModal}>
                <Text className="icon-close text-red" />
              </View>
            </View>
            <View className="padding-xl">Modal 内容。</View>
            <View className="cu-bar bg-white justify-end">
              <View className="action">
                <Button
                  className="cu-btn line-green text-green"
                  onClick={this.hideModal}
                >
                  取消
                </Button>
                <Button
                  className="cu-btn bg-green margin-left"
                  onClick={this.hideModal}
                >
                  确定
                </Button>
              </View>
            </View>
          </View>
        </View>
        <View
          className={'cu-modal ' + (modalName == 'DialogModal2' ? 'show' : '')}
        >
          <View className="cu-dialog">
            <View className="cu-bar bg-white justify-end">
              <View className="content">Modal标题</View>
              <View className="action" onClick={this.hideModal}>
                <Text className="icon-close text-red" />
              </View>
            </View>
            <View className="padding-xl">Modal 内容。</View>
            <View className="cu-bar bg-white">
              <View
                className="action margin-0 flex-sub text-green"
                onClick={this.hideModal}
              >
                <Text className="icon-moneybag" />微信支付
              </View>
              <View
                className="action margin-0 flex-sub text-green solid-left"
                onClick={this.hideModal}
              >
                取消
              </View>
              <View
                className="action margin-0 flex-sub  solid-left"
                onClick={this.hideModal}
              >
                确定
              </View>
            </View>
          </View>
        </View>
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-orange" />图片窗口
          </View>
          <View className="action">
            <Button
              className="cu-btn bg-green shadow"
              onClick={this.showModal}
              data-target="Image"
            >
              Image
            </Button>
          </View>
        </View>
        <View className={'cu-modal ' + (modalName == 'Image' ? 'show' : '')}>
          <View className="cu-dialog">
            <View
              className="bg-img"
              style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg');height:200px;"
            >
              <View className="cu-bar justify-end text-white">
                <View className="action" onClick={this.hideModal}>
                  <Text className="icon-close" />
                </View>
              </View>
            </View>
            <View className="cu-bar bg-white">
              <View
                className="action margin-0 flex-sub  solid-left"
                onClick={this.hideModal}
              >
                我知道了
              </View>
            </View>
          </View>
        </View>
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-orange" />单选窗口
          </View>
          <View className="action">
            <Button
              className="cu-btn bg-green shadow"
              onClick={this.showModal}
              data-target="RadioModal"
            >
              Radio
            </Button>
          </View>
        </View>
        <View
          className={'cu-modal ' + (modalName == 'RadioModal' ? 'show' : '')}
          onClick={this.hideModal}
        >
          <View className="cu-dialog" onClick>
            <RadioGroup className="block">
              <View className="cu-list menu text-left">
                {(5).map((item, index) => {
                  return (
                    <View className="cu-item" key>
                      <Label className="flex justify-between align-center flex-sub">
                        <View className="flex-sub">
                          {'Item ' + (index + 1)}
                        </View>
                        <Radio className="round" />
                      </Label>
                    </View>
                  )
                })}
              </View>
            </RadioGroup>
          </View>
        </View>
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-orange" />多选窗口
          </View>
          <View className="action">
            <Button
              className="cu-btn bg-green shadow"
              onClick={this.showModal}
              data-target="ChooseModal"
            >
              Choose
            </Button>
          </View>
        </View>
        <View
          className={
            'cu-modal bottom-modal ' +
            (modalName == 'ChooseModal' ? 'show' : '')
          }
          onClick={this.hideModal}
        >
          <View className="cu-dialog" onClick>
            <View className="cu-bar bg-white">
              <View className="action text-blue" onClick={this.hideModal}>
                取消
              </View>
              <View className="action text-green" onClick={this.hideModal}>
                确定
              </View>
            </View>
            <View className="grid col-3 padding-sm">
              {checkbox.map((item, index) => {
                return (
                  <View className="padding-xs" key={index}>
                    <Button
                      className={
                        'cu-btn orange lg block ' +
                        (item.checked ? 'bg-orange' : 'line-orange')
                      }
                      onClick={this.ChooseCheckbox}
                      data-value={item.value}
                    >
                      {item.name}
                      {item.hot && (
                        <View
                          className={
                            'cu-tag sm round ' +
                            (item.checked
                              ? 'bg-white text-orange'
                              : 'bg-orange')
                          }
                        >
                          HOT
                        </View>
                      )}
                    </Button>
                  </View>
                )
              })}
            </View>
          </View>
        </View>
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-orange" />侧边抽屉
          </View>
          <View className="action">
            <Button
              className="cu-btn bg-green shadow"
              onClick={this.showModal}
              data-target="DrawerModalL"
            >
              Left
            </Button>
            <Button
              className="cu-btn bg-blue shadow margin-left"
              onClick={this.showModal}
              data-target="DrawerModalR"
            >
              Right
            </Button>
          </View>
        </View>
        <View
          className={
            'cu-modal drawer-modal justify-start ' +
            (modalName == 'DrawerModalL' ? 'show' : '')
          }
          onClick={this.hideModal}
        >
          <View
            className="cu-dialog basis-lg"
            onClick
            style={
              'top:' + CustomBar + 'px;height:calc(100vh - ' + CustomBar + 'px)'
            }
          >
            <View className="cu-list menu text-left">
              {(5).map((item, index) => {
                return (
                  <View className="cu-item arrow" key>
                    <View className="content">
                      <View>{'Item ' + (index + 1)}</View>
                    </View>
                  </View>
                )
              })}
            </View>
          </View>
        </View>
        <View
          className={
            'cu-modal drawer-modal justify-end ' +
            (modalName == 'DrawerModalR' ? 'show' : '')
          }
          onClick={this.hideModal}
        >
          <View
            className="cu-dialog basis-lg"
            onClick
            style={
              'top:' + CustomBar + 'px;height:calc(100vh - ' + CustomBar + 'px)'
            }
          >
            <View className="cu-list menu text-left">
              {(5).map((item, index) => {
                return (
                  <View className="cu-item arrow" key>
                    <View className="content">
                      <View>{'Item ' + (index + 1)}</View>
                    </View>
                  </View>
                )
              })}
            </View>
          </View>
        </View>
      </Block>
    )
  }
}

export default _C
