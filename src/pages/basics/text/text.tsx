import { Block, View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    list: [
      {
        title: '嫣红',
        name: 'red',
        color: '#e54d42'
      },
      {
        title: '桔橙',
        name: 'orange',
        color: '#f37b1d'
      },
      {
        title: '明黄',
        name: 'yellow',
        color: '#fbbd08'
      },
      {
        title: '橄榄',
        name: 'olive',
        color: '#8dc63f'
      },
      {
        title: '森绿',
        name: 'green',
        color: '#39b54a'
      },
      {
        title: '天青',
        name: 'cyan',
        color: '#1cbbb4'
      },
      {
        title: '海蓝',
        name: 'blue',
        color: '#0081ff'
      },
      {
        title: '姹紫',
        name: 'purple',
        color: '#6739b6'
      },
      {
        title: '木槿',
        name: 'mauve',
        color: '#9c26b0'
      },
      {
        title: '桃粉',
        name: 'pink',
        color: '#e03997'
      },
      {
        title: '棕褐',
        name: 'brown',
        color: '#a5673f'
      },
      {
        title: '玄灰',
        name: 'grey',
        color: '#8799a3'
      },
      {
        title: '草灰',
        name: 'gray',
        color: '#aaaaaa'
      },
      {
        title: '墨黑',
        name: 'black',
        color: '#333333'
      },
      {
        title: '雅白',
        name: 'white',
        color: '#ffffff'
      }
    ]
  }
  config = {}

  render() {
    const { list: list } = this.state
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
              <View>文本</View>
            </Block>
          }
        />
        <View className="cu-bar bg-white solid-bottom">
          <View className="action">
            <Text className="icon-title text-blue" />文字大小
          </View>
        </View>
        <View className="bg-white padding-lr">
          <View className="solids-bottom padding-xs flex align-center">
            <View className="padding">60</View>
            <View className="flex-sub text-center">
              <View className="solid-bottom text-xsl padding">
                <Text className="icon-roundcheckfill text-green" />
              </View>
              <View className="padding">用于图标、数字等特大显示</View>
            </View>
          </View>
          <View className="solids-bottom padding-xs flex align-center">
            <View className="padding">40</View>
            <View className="flex-sub text-center">
              <View className="solid-bottom text-sl padding">
                <Text className="icon-roundcheckfill text-green" />
              </View>
              <View className="padding">用于图标、数字等较大显示</View>
            </View>
          </View>
          <View className="solids-bottom padding-xs flex align-center">
            <View className="padding">22</View>
            <View className="flex-sub text-center">
              <View className="solid-bottom text-xxl padding">
                <Text className="text-price text-red">80.00</Text>
              </View>
              <View className="padding">用于金额数字等信息</View>
            </View>
          </View>
          <View className="solids-bottom padding-xs flex align-center">
            <View className="padding">18</View>
            <View className="flex-sub text-center">
              <View className="solid-bottom text-xl padding">
                <Text className="text-black text-bold">
                  您的订单已提交成功！
                </Text>
              </View>
              <View className="padding">
                页面大标题，用于结果页等单一信息页
              </View>
            </View>
          </View>
          <View className="solids-bottom padding-xs flex align-center">
            <View className="padding">16</View>
            <View className="flex-sub text-center">
              <View className="solid-bottom text-lg padding">
                <Text className="text-black">ColorUI组件库</Text>
              </View>
              <View className="padding">页面小标题，首要层级显示内容</View>
            </View>
          </View>
          <View className="solids-bottom padding-xs flex align-center">
            <View className="padding">14</View>
            <View className="flex-sub text-center">
              <View className="solid-bottom text-df padding">
                专注视觉的小程序组件库
              </View>
              <View className="padding">页面默认字号，用于摘要或阅读文本</View>
            </View>
          </View>
          <View className="solids-bottom padding-xs flex align-center">
            <View className="padding">12</View>
            <View className="flex-sub text-center">
              <View className="solid-bottom text-sm padding">
                <Text className="text-grey">衬衫的价格是9磅15便士</Text>
              </View>
              <View className="padding">页面辅助信息，次级内容等</View>
            </View>
          </View>
          <View className="padding-xs flex align-center">
            <View className="padding">10</View>
            <View className="flex-sub text-center">
              <View className="solid-bottom text-xs padding">
                <Text className="text-gray">
                  我于杀戮之中绽放 亦如黎明中的花朵
                </Text>
              </View>
              <View className="padding">
                说明文本，标签文字等关注度低的文字
              </View>
            </View>
          </View>
        </View>
        <View className="cu-bar bg-white solid-bottom margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />文字颜色
          </View>
        </View>
        <View className="grid col-5 padding-sm">
          {list.map((item, index) => {
            return (
              <View className="padding-sm" key>
                <View className={'text-' + item.name + ' text-center'}>
                  {item.title}
                </View>
              </View>
            )
          })}
        </View>
        <View className="cu-bar bg-white solid-bottom margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />文字截断
          </View>
        </View>
        <View className="padding bg-white">
          <View className="text-cut padding bg-grey radius" style="width:220px">
            我于杀戮之中绽放 ,亦如黎明中的花朵
          </View>
        </View>
        <View className="cu-bar bg-white solid-bottom margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />文字对齐
          </View>
        </View>
        <View className="padding bg-white">
          <View className="text-left padding">
            我于杀戮之中绽放 ,亦如黎明中的花朵
          </View>
          <View className="text-center padding">
            我于杀戮之中绽放 ,亦如黎明中的花朵
          </View>
          <View className="text-right padding">
            我于杀戮之中绽放 ,亦如黎明中的花朵
          </View>
        </View>
        <View className="cu-bar bg-white solid-bottom margin-top">
          <View className="action">
            <Text className="icon-title text-blue" />特殊文字
          </View>
        </View>
        <View className="padding text-center">
          <View className="padding-lr bg-white">
            <View className="solid-bottom padding">
              <Text className="text-price">80.00</Text>
            </View>
            <View className="padding">价格文本，利用伪元素添加"¥"符号</View>
          </View>
          <View className="padding-lr bg-white margin-top">
            <View className="solid-bottom padding">
              <Text className="text-Abc">color Ui</Text>
            </View>
            <View className="padding">英文单词首字母大写</View>
          </View>
          <View className="padding-lr bg-white margin-top">
            <View className="solid-bottom padding">
              <Text className="text-ABC">color Ui</Text>
            </View>
            <View className="padding">全部字母大写</View>
          </View>
          <View className="padding-lr bg-white margin-top">
            <View className="solid-bottom padding">
              <Text className="text-abc">color Ui</Text>
            </View>
            <View className="padding">全部字母小写</View>
          </View>
        </View>
      </Block>
    )
  }
}

export default _C
