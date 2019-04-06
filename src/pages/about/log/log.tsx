import { Block, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './log.scss'
const app = Taro.getApp()

@withWeapp('Page')
class Log extends Taro.Component {
  state = {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList
  }

  componentWillMount() {}

  pageBack = () => {
    Taro.navigateBack({
      delta: 1
    })
  }
  config = {}

  render() {
    return (
      <Block>
        <CuCustom
          bgColor="bg-gradual-green"
          isBack={true}
          renderBackText={
            <Block>
              <View>返回</View>
            </Block>
          }
          renderContent={
            <Block>
              <View>日志</View>
            </Block>
          }
        />
        <View className="cu-timeline">
          <View className="cu-item text-green">
            <View className="bg-gradual-green content shadow-blur">
              <View className="cu-capsule radius">
                <View className="cu-tag bg-white text-green">v2.1.2</View>
                <View className="cu-tag line-white">2019/03/28</View>
              </View>
              <View className="margin-top-sm text-content">
                <View>1.图标修改了字体名称，避免冲突</View>
                <View>2.优化了消息列表</View>
                <View>3.更改自定义Tabbar的方案</View>
                <View>4.修复列表组件样式</View>
                <View>5.轮播图支持视频(ios/兼容差，暂时去掉)</View>
                <View>6.优化堆叠轮播图</View>
                <View>7.优化聊天页输入框聚焦问题</View>
                <View>8.表单多图上传优化，文本框优化</View>
                <View>9.优化全屏抽屉扩展</View>
                <View>10.全屏垂直导航支持双向联动</View>
                <View>11.优化源码细节，精简代码</View>
                <View />
                <View>
                  *ColorUI支持UniApp开发了!UniApp版本请移步官方插件市场
                  https://ext.dcloud.net.cn/plugin?id=239
                </View>
              </View>
            </View>
          </View>
          <View className="cu-item text-green">
            <View className="bg-green content shadow-blur">
              <View className="cu-capsule radius">
                <View className="cu-tag bg-white text-green">v2.0.7</View>
                <View className="cu-tag line-white">2019/02/25</View>
              </View>
              <View className="margin-top-sm text-content">
                <View>1.新增操作条胶囊样式，优化全屏操作条</View>
                <View>2.优化iPhone X的Tabbar样式</View>
                <View>3.新增全屏抽屉插件</View>
                <View>4.新增垂直导航插件</View>
              </View>
            </View>
          </View>
          <View className="cu-item text-green">
            <View className="bg-green content shadow-blur">
              <View className="cu-capsule radius">
                <View className="cu-tag bg-white text-green">v2.0.6</View>
                <View className="cu-tag line-white">2019/02/09</View>
              </View>
              <View className="margin-top-sm text-content">
                <View>1.修复行距带来的垂直不居中问题</View>
                <View>2.优化操作条组件，新增多种样式</View>
                <View>
                  3.优化背景颜色（某些组件的默认背景调整,移除一些important）
                </View>
                <View>4.更新动画扩展</View>
                <View>5.优化按钮,标签,头像的大小</View>
              </View>
            </View>
          </View>
          <View className="cu-item text-green">
            <View className="bg-green content shadow-blur">
              <View className="cu-capsule radius">
                <View className="cu-tag bg-white text-green">v2.0.5</View>
                <View className="cu-tag line-white">2019/01/13</View>
              </View>
              <View className="margin-top-sm text-content">
                <View>1.修复时间线图标显示问题</View>
                <View>2.switch、radio、checkbox单位改成px，抛弃小尺寸</View>
                <View>3.更新多种窗口组件</View>
                <View>4.更新多种动画</View>
                <View>5.新增步骤条组件</View>
                <View>6.优化列表组件，新增左滑操作</View>
                <View>7.优化图标搜索</View>
              </View>
            </View>
          </View>
          <View className="cu-item text-green">
            <View className="bg-green content shadow-blur">
              <View className="cu-capsule radius">
                <View className="cu-tag bg-white text-green">v2.0.4</View>
                <View className="cu-tag line-white">2019/01/10</View>
              </View>
              <View className="margin-top-sm text-content">
                <View>1.抛弃标签选择器，改成类名选择器</View>
                <View>2.动画改成Gif，并新增动画</View>
                <View>3.修复一些图标错位问题</View>
                <View>4.修复头像文字显示问题</View>
                <View>* 建议先备份，再全局替换标签。</View>
              </View>
            </View>
          </View>
          <View className="cu-item text-green">
            <View className="bg-green content shadow-blur">
              <View className="cu-capsule radius">
                <View className="cu-tag bg-white text-green">v2.0.3</View>
                <View className="cu-tag line-white">2019/01/06</View>
              </View>
              <View className="margin-top-sm text-content">
                <View>1.修复一些单位错误（带输入框的操作条）</View>
                <View>2.纠正一些单词拼写...</View>
                <View>3.抛弃icon标签，改回text标签的写法</View>
                <View>4.抛弃px单位的样式文件</View>
                <View>5.优化一些组件的字体大小</View>
                <View>6.新增两种加载样式</View>
              </View>
            </View>
          </View>
          <View className="cu-item text-green">
            <View className="bg-green content shadow-blur">
              <View className="cu-capsule radius">
                <View className="cu-tag bg-white text-green">v2.0.2</View>
                <View className="cu-tag line-white">2018/12/24</View>
              </View>
              <View className="margin-top-sm text-content">
                <View>1.首页增加分享</View>
                <View>2.卡片页修复switch开关问题</View>
                <View>3.优化首页动画效果（ios表现不佳）</View>
                <View>4.表单新增Picker</View>
                <View>5.增加赞赏码！请多多支持！</View>
                <View>6.新增反馈与Bug测试</View>
                <View>7.优化轮播组件</View>
                <View>8.优化Bar组件文字描述过多的场景</View>
              </View>
            </View>
          </View>
          <View className="cu-item text-green">
            <View className="bg-green content shadow-blur">
              <View className="cu-capsule radius">
                <View className="cu-tag bg-white text-green">v2.0.1</View>
                <View className="cu-tag line-white">2018/12/20</View>
              </View>
              <View className="margin-top-sm text-content">2.0新版本上线</View>
            </View>
          </View>
        </View>
      </Block>
    )
  }
}

export default Log
