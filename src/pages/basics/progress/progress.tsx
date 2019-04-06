import { Block, View, Text, Switch } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    ColorList: app.globalData.ColorList,
    color: 'red'
  }

  componentWillMount() {
    let that = this
    setTimeout(function() {
      that.setData({
        loading: true
      })
    }, 500)
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
  SetColor = e => {
    this.setData({
      color: e.currentTarget.dataset.color,
      modalName: null
    })
  }
  SetActive = e => {
    this.setData({
      active: e.detail.value
    })
  }
  config = {}

  render() {
    const {
      loading: loading,
      color: color,
      active: active,
      modalName: modalName,
      ColorList: ColorList
    } = this.state
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
              <View>进度条</View>
            </Block>
          }
        />
        <View className="cu-bar bg-white solid-bottom">
          <View className="action">
            <Text className="icon-title text-blue" />进度条形状
          </View>
        </View>
        <View className="padding bg-white">
          <View className="cu-progress">
            <View
              className="bg-red"
              style={'width:' + (loading ? '61.8%' : '') + ';'}
            >
              61.8%
            </View>
          </View>
          <View className="cu-progress radius margin-top">
            <View
              className="bg-red"
              style={'width:' + (loading ? '61.8%' : '') + ';'}
            >
              61.8%
            </View>
          </View>
          <View className="cu-progress round margin-top">
            <View
              className="bg-red"
              style={'width:' + (loading ? '61.8%' : '') + ';'}
            >
              61.8%
            </View>
          </View>
        </View>
        <View className="cu-bar bg-white solid-bottom margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />进度条尺寸
          </View>
        </View>
        <View className="padding bg-white">
          <View className="cu-progress round">
            <View
              className="bg-red"
              style={'width:' + (loading ? '61.8%' : '') + ';'}
            />
          </View>
          <View className="cu-progress round margin-top sm">
            <View
              className="bg-red"
              style={'width:' + (loading ? '61.8%' : '') + ';'}
            />
          </View>
          <View className="cu-progress round margin-top xs">
            <View
              className="bg-red"
              style={'width:' + (loading ? '61.8%' : '') + ';'}
            />
          </View>
        </View>
        <View
          className="cu-bar bg-white solid-bottom margin-top"
          onClick={this.showModal}
          data-target="ColorModal"
        >
          <View className="action">
            <Text className="icon-title text-blue" />进度条颜色
          </View>
          <View className="action">
            <View
              className={'padding-sm bg-' + color + ' solid radius shadow-blur'}
            />
          </View>
        </View>
        <View
          className={'padding ' + (color == 'white' ? 'bg-grey' : 'bg-white')}
        >
          <View className="cu-progress round">
            <View
              className={'bg-' + color}
              style={'width:' + (loading ? '61.8%' : '') + ';'}
            />
          </View>
        </View>
        <View className="cu-bar bg-white solid-bottom margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />进度条条纹
          </View>
          <Switch className="sm margin-right-sm" onChange={this.SetActive} />
        </View>
        <View className="padding bg-white">
          <View
            className={
              'cu-progress round sm striped ' + (active ? 'active' : '')
            }
          >
            <View
              className="bg-green"
              style={'width:' + (loading ? '60%' : '') + ';'}
            />
          </View>
          <View
            className={
              'cu-progress round sm margin-top-sm striped ' +
              (active ? 'active' : '')
            }
          >
            <View
              className="bg-black"
              style={'width:' + (loading ? '40%' : '') + ';'}
            />
          </View>
        </View>
        <View className="cu-bar bg-white solid-bottom margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />进度条比例
          </View>
        </View>
        <View className="padding bg-white">
          <View className="cu-progress radius striped active">
            <View
              className="bg-red"
              style={'width:' + (loading ? '30%' : '') + ';'}
            >
              30%
            </View>
            <View
              className="bg-olive"
              style={'width:' + (loading ? '45%' : '') + ';'}
            >
              45%
            </View>
            <View
              className="bg-cyan"
              style={'width:' + (loading ? '25%' : '') + ';'}
            >
              25%
            </View>
          </View>
        </View>
        <View className="cu-bar bg-white solid-bottom margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />进度条布局
          </View>
        </View>
        <View className="padding bg-white">
          <View className="flex">
            <View className="cu-progress round">
              <View
                className="bg-green"
                style={'width:' + (loading ? '100%' : '') + ';'}
              />
            </View>
            <Text className="icon-roundcheckfill text-green margin-left-sm" />
          </View>
          <View className="flex margin-top">
            <View className="cu-progress round">
              <View
                className="bg-green"
                style={'width:' + (loading ? '80%' : '') + ';'}
              />
            </View>
            <Text className="margin-left">80%</Text>
          </View>
        </View>
        <View
          className={'cu-modal ' + (modalName == 'ColorModal' ? 'show' : '')}
        >
          <View className="cu-dialog">
            <View className="cu-bar justify-end solid-bottom">
              <View className="content">选择颜色</View>
              <View className="action" onClick={this.hideModal}>
                <Text className="icon-close text-red" />
              </View>
            </View>
            <View className="grid col-5 padding">
              {item.name != 'gray' && (
                <Block>
                  {ColorList.map((item, index) => {
                    return (
                      <View
                        className="padding-xs"
                        key
                        onClick={this.SetColor}
                        data-color={item.name}
                      >
                        <View
                          className={'padding-tb bg-' + item.name + ' radius'}
                        >
                          {item.title}
                        </View>
                      </View>
                    )
                  })}
                </Block>
              )}
            </View>
          </View>
        </View>
      </Block>
    )
  }
}

export default _C
