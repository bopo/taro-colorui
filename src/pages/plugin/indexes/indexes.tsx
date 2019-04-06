import {
  Block,
  View,
  Text,
  Input,
  Button,
  ScrollView
} from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './indexes.scss'
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true
  }

  componentWillMount() {
    let list = []
    for (let i = 0; i < 26; i++) {
      list[i] = String.fromCharCode(65 + i)
    }
    this.setData({
      list: list,
      listCur: list[0]
    })
  }

  componentDidMount() {
    let that = this
    Taro.createSelectorQuery()
      .select('.indexBar-box')
      .boundingClientRect(function(res) {
        that.setData({
          boxTop: res.top
        })
      })
      .exec()
    Taro.createSelectorQuery()
      .select('.indexes')
      .boundingClientRect(function(res) {
        that.setData({
          barTop: res.top
        })
      })
      .exec()
  }

  getCur = e => {
    this.setData({
      hidden: false,
      listCur: this.data.list[e.target.id]
    })
  }
  setCur = e => {
    this.setData({
      hidden: true,
      listCur: this.data.listCur
    })
  }
  tMove = e => {
    let y = e.touches[0].clientY,
      offsettop = this.data.boxTop,
      that = this
    //判断选择区域,只有在选择区才会生效
    if (y > offsettop) {
      let num = parseInt((y - offsettop) / 20)
      this.setData({
        listCur: that.data.list[num]
      })
    }
  }
  tStart = () => {
    this.setData({
      hidden: false
    })
  }
  tEnd = () => {
    this.setData({
      hidden: true,
      listCurID: this.data.listCur
    })
  }
  indexSelect = e => {
    let that = this
    let barHeight = this.data.barHeight
    let list = this.data.list
    let scrollY = Math.ceil((list.length * e.detail.y) / barHeight)
    for (let i = 0; i < list.length; i++) {
      if (scrollY < i + 1) {
        that.setData({
          listCur: list[i],
          movableY: i * 20
        })
        return false
      }
    }
  }
  config = {}

  render() {
    const {
      CustomBar: CustomBar,
      listCurID: listCurID,
      list: list,
      hidden: hidden,
      listCur: listCur
    } = this.state
    return (
      <Block>
        <CuCustom
          bgImage="https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg"
          isBack={true}
          renderBackText={
            <Block>
              <View>返回</View>
            </Block>
          }
          renderContent={
            <Block>
              <View>索引</View>
            </Block>
          }
        />
        <View
          className="cu-bar bg-white search fixed"
          style={'top:' + CustomBar + 'px;'}
        >
          <View className="search-form round">
            <Text className="icon-search" />
            <Input
              type="text"
              placeholder="输入搜索的关键词"
              confirmType="search"
            />
          </View>
          <View className="action">
            <Button className="cu-btn bg-gradual-green shadow-blur round">
              搜索
            </Button>
          </View>
        </View>
        <ScrollView
          scrollY
          className="indexes"
          scrollIntoView={'indexes-' + listCurID}
          style={'height:calc(100vh - ' + CustomBar + 'px - 50px)'}
          scrollWithAnimation="true"
          enableBackToTop="true"
        >
          {list.map((item, index) => {
            return (
              <Block key>
                <View
                  className={'padding indexItem-' + list[index]}
                  id={'indexes-' + list[index]}
                  data-index={list[index]}
                >
                  {list[index]}
                </View>
                <View className="cu-list menu-avatar no-padding">
                  {(2).map((item, sub) => {
                    return (
                      <View className="cu-item" key>
                        <View className="cu-avatar round lg">
                          {list[index]}
                        </View>
                        <View className="content">
                          <View className="text-grey">
                            {list[index]}
                            <Text className="text-abc">{list[sub]}</Text>君
                          </View>
                          <View className="text-gray text-sm">
                            {'有' + (sub + 2) + '个主子需要伺候'}
                          </View>
                        </View>
                      </View>
                    )
                  })}
                </View>
              </Block>
            )
          })}
        </ScrollView>
        <View
          className="indexBar"
          style={'height:calc(100vh - ' + CustomBar + 'px - 50px)'}
        >
          <View
            className="indexBar-box"
            onTouchStart={this.tStart}
            onTouchEnd={this.tEnd}
            onTouchMove={this.tMove}
          >
            {list.map((item, index) => {
              return (
                <View
                  className="indexBar-item"
                  key
                  id={index}
                  onTouchStart={this.getCur}
                  onTouchEnd={this.setCur}
                >
                  {list[index]}
                </View>
              )
            })}
          </View>
        </View>
        {/* 选择显示 */}
        <View hidden={hidden} className="indexToast">
          {listCur}
        </View>
      </Block>
    )
  }
}

export default _C
