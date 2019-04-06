import { Block, View, Text, Button, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './steps.scss'

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    basicsList: [
      {
        icon: 'usefullfill',
        name: '开始'
      },
      {
        icon: 'radioboxfill',
        name: '等待'
      },
      {
        icon: 'roundclosefill',
        name: '错误'
      },
      {
        icon: 'roundcheckfill',
        name: '完成'
      }
    ],
    basics: 0,
    numList: [
      {
        name: '开始'
      },
      {
        name: '等待'
      },
      {
        name: '错误'
      },
      {
        name: '完成'
      }
    ],
    num: 0,
    scroll: 0
  }
  basicsSteps = () => {
    this.setData({
      basics:
        this.data.basics == this.data.basicsList.length - 1
          ? 0
          : this.data.basics + 1
    })
  }
  numSteps = () => {
    this.setData({
      num: this.data.num == this.data.numList.length - 1 ? 0 : this.data.num + 1
    })
  }
  scrollSteps = () => {
    this.setData({
      scroll: this.data.scroll == 9 ? 0 : this.data.scroll + 1
    })
  }
  config = {}

  render() {
    const {
      basics: basics,
      basicsList: basicsList,
      num: num,
      numList: numList,
      scroll: scroll
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
              <View>步骤条</View>
            </Block>
          }
        />
        <View className="cu-bar bg-white solid-bottom">
          <View className="action">
            <Text className="icon-title text-orange" />基本用法
          </View>
          <View className="action">
            <Button
              className="cu-btn bg-green shadow"
              onClick={this.basicsSteps}
            >
              下一步
            </Button>
          </View>
        </View>
        <View className="bg-white padding">
          <View className="cu-steps">
            {basicsList.map((item, index) => {
              return (
                <View
                  className={'cu-item ' + (index > basics ? '' : 'text-red')}
                  key
                >
                  <Text className={'icon-' + item.icon} />
                  {item.name}
                </View>
              )
            })}
          </View>
        </View>
        <View className="bg-white padding margin-top-xs">
          <View className="cu-steps">
            {basicsList.map((item, index) => {
              return (
                <View
                  className={'cu-item ' + (index > basics ? '' : 'text-orange')}
                  key
                >
                  <Text
                    className={'icon-' + (index > basics ? 'title' : item.icon)}
                  />
                  {item.name}
                </View>
              )
            })}
          </View>
        </View>
        <View className="bg-white padding  margin-top-xs">
          <View className="cu-steps steps-arrow">
            {basicsList.map((item, index) => {
              return (
                <View
                  className={'cu-item ' + (index > basics ? '' : 'text-blue')}
                  key
                >
                  <Text className={'icon-' + item.icon} />
                  {item.name}
                </View>
              )
            })}
          </View>
        </View>
        <View className="cu-bar bg-white solid-bottom margin-top">
          <View className="action">
            <Text className="icon-title text-orange" />数字完成
          </View>
          <View className="action">
            <Button className="cu-btn bg-green shadow" onClick={this.numSteps}>
              下一步
            </Button>
          </View>
        </View>
        <View className="bg-white padding">
          <View className="cu-steps">
            {numList.map((item, index) => {
              return (
                <View
                  className={'cu-item ' + (index > num ? '' : 'text-blue')}
                  key
                >
                  <Text
                    className={'num ' + (index == 2 ? 'err' : '')}
                    data-index={index + 1}
                  />
                  {item.name}
                </View>
              )
            })}
          </View>
        </View>
        <View className="cu-bar bg-white solid-bottom margin-top">
          <View className="action">
            <Text className="icon-title text-orange" />多级显示
          </View>
          <View className="action">
            <Button
              className="cu-btn bg-green shadow"
              onClick={this.scrollSteps}
            >
              下一步
            </Button>
          </View>
        </View>
        <ScrollView
          scrollX
          className="bg-white padding response cu-steps steps-bottom"
          scrollIntoView={'scroll-' + scroll}
          scrollWithAnimation
        >
          {(10).map((item, index) => {
            return (
              <View
                className={
                  'cu-item ' +
                  (index > scroll ? '' : 'text-blue') +
                  ' padding-lr-xl'
                }
                key
                id={'scroll-' + index}
              >
                {'Level ' + (index + 1)}
                <Text className="num" data-index={index + 1} />
              </View>
            )
          })}
        </ScrollView>
      </Block>
    )
  }
}

export default _C
