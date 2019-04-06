import { Block, View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import About from '../about/home/home'
import Plugin from '../plugin/home/home'
import Component from '../component/home/home'
import Basics from '../basics/home/home'
import './index.scss'

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    PageCur: 'basics'
  }
  NavChange = e => {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  }
  config = {}

  render() {
    const { PageCur: PageCur } = this.state
    return (
      <Block>
        {PageCur == 'basics' && <Basics />}
        {PageCur == 'component' && <Component />}
        {PageCur == 'plugin' && <Plugin />}
        {PageCur == 'about' && <About />}
        <View className="cu-bar tabbar bg-white shadow foot">
          <View className="action" onClick={this.NavChange} data-cur="basics">
            <View className="icon-cu-image">
              <Image
                src={
                  '/images/tabbar/basics' +
                  (PageCur == 'basics' ? '_cur' : '') +
                  '.png'
                }
              />
            </View>
            <View className={PageCur == 'basics' ? 'text-green' : 'text-gray'}>
              元素
            </View>
          </View>
          <View
            className="action"
            onClick={this.NavChange}
            data-cur="component"
          >
            <View className="icon-cu-image">
              <Image
                src={
                  '/images/tabbar/component' +
                  (PageCur == 'component' ? '_cur' : '') +
                  '.png'
                }
              />
            </View>
            <View
              className={PageCur == 'component' ? 'text-green' : 'text-gray'}
            >
              组件
            </View>
          </View>
          <View className="action" onClick={this.NavChange} data-cur="plugin">
            <View className="icon-cu-image">
              <Image
                src={
                  '/images/tabbar/plugin' +
                  (PageCur == 'plugin' ? '_cur' : '') +
                  '.png'
                }
              />
            </View>
            <View className={PageCur == 'plugin' ? 'text-green' : 'text-gray'}>
              扩展
            </View>
          </View>
          <View className="action" onClick={this.NavChange} data-cur="about">
            <View className="icon-cu-image">
              <Image
                src={
                  '/images/tabbar/about' +
                  (PageCur == 'about' ? '_cur' : '') +
                  '.png'
                }
              />
            </View>
            <View className={PageCur == 'about' ? 'text-green' : 'text-gray'}>
              关于
            </View>
          </View>
        </View>
      </Block>
    )
  }
}

export default _C
