import { Block, View, Text, Image, Button, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import CuCustom from '../../../colorui/components/cu-custom'
import './bar.scss'

@withWeapp('Page')
class _C extends Taro.Component {
  config = {}

  render() {
    return (
      <Block>
        <CuCustom
          bgColor="bg-gradual-pink"
          isCustom={true}
          renderContent={
            <Block>
              <View>操作条</View>
            </Block>
          }
        />
        <View className="cu-bar bg-white margin-top">
          <View className="action">
            <Text className="icon-title text-green" />
            <Text>底部操作条</Text>
          </View>
        </View>
        <View className="box">
          <View className="cu-bar tabbar bg-white">
            <View className="action">
              <View className="icon-cu-image">
                <Image src={require('../../../images/tabbar/basics_cur.png')} />
              </View>
              <View className="text-green">元素</View>
            </View>
            <View className="action">
              <View className="icon-cu-image">
                <Image src={require('../../../images/tabbar/component.png')} />
              </View>
              <View className="text-gray">组件</View>
            </View>
            <View className="action">
              <View className="icon-cu-image">
                <Image src={require('../../../images/tabbar/plugin.png')} />
                <View className="cu-tag badge">99</View>
              </View>
              <View className="text-gray">扩展</View>
            </View>
            <View className="action">
              <View className="icon-cu-image">
                <Image src={require('../../../images/tabbar/about.png')} />
                <View className="cu-tag badge" />
              </View>
              <View className="text-gray">关于</View>
            </View>
          </View>
          <View className="cu-bar tabbar margin-bottom-xl bg-black">
            <View className="action text-orange">
              <View className="icon-homefill" />首页
            </View>
            <View className="action text-gray">
              <View className="icon-similar" />分类
            </View>
            <View className="action text-gray">
              <View className="icon-recharge" />积分
            </View>
            <View className="action text-gray">
              <View className="icon-cart">
                <View className="cu-tag badge">99</View>
              </View>
              购物车
            </View>
            <View className="action text-gray">
              <View className="icon-my">
                <View className="cu-tag badge" />
              </View>
              我的
            </View>
          </View>
          <View className="cu-bar tabbar margin-bottom-xl bg-white">
            <View className="action text-green">
              <View className="icon-homefill" />首页
            </View>
            <View className="action text-gray">
              <View className="icon-similar" />分类
            </View>
            <View className="action text-gray add-action">
              <Button className="cu-btn icon-add bg-green shadow" />发布
            </View>
            <View className="action text-gray">
              <View className="icon-cart">
                <View className="cu-tag badge">99</View>
              </View>
              购物车
            </View>
            <View className="action text-gray">
              <View className="icon-my">
                <View className="cu-tag badge" />
              </View>
              我的
            </View>
          </View>
          <View className="cu-bar tabbar bg-black">
            <View className="action text-green">
              <View className="icon-homefill" />首页
            </View>
            <View className="action text-gray">
              <View className="icon-similar" />分类
            </View>
            <View className="action text-gray add-action">
              <Button className="cu-btn icon-add bg-green shadow" />发布
            </View>
            <View className="action text-gray">
              <View className="icon-cart">
                <View className="cu-tag badge">99</View>
              </View>
              购物车
            </View>
            <View className="action text-gray">
              <View className="icon-my">
                <View className="cu-tag badge" />
              </View>
              我的
            </View>
          </View>
          <View className="cu-bar bg-white tabbar border shop">
            <Button className="action" openType="contact">
              <View className="icon-service text-green">
                <View className="cu-tag badge" />
              </View>
              客服
            </Button>
            <View className="action text-orange">
              <View className="icon-favorfill" />已收藏
            </View>
            <View className="action">
              <View className="icon-cart">
                <View className="cu-tag badge">99</View>
              </View>
              购物车
            </View>
            <View className="bg-red submit">立即订购</View>
          </View>
          <View className="cu-bar bg-white tabbar border shop">
            <Button className="action" openType="contact">
              <View className="icon-service text-green">
                <View className="cu-tag badge" />
              </View>
              客服
            </Button>
            <View className="action">
              <View className="icon-cart">
                <View className="cu-tag badge">99</View>
              </View>
              购物车
            </View>
            <View className="bg-orange submit">加入购物车</View>
            <View className="bg-red submit">立即订购</View>
          </View>
          <View className="cu-bar bg-white tabbar border shop">
            <Button className="action" openType="contact">
              <View className="icon-service text-green">
                <View className="cu-tag badge" />
              </View>
              客服
            </Button>
            <View className="action">
              <View className="icon-shop" />店铺
            </View>
            <View className="action">
              <View className="icon-cart">
                <View className="cu-tag badge">99</View>
              </View>
              购物车
            </View>
            <View className="btn-group">
              <Button className="cu-btn bg-red round shadow-blur">
                立即订购
              </Button>
            </View>
          </View>
          <View className="cu-bar bg-white tabbar border shop">
            <Button className="action" openType="contact">
              <View className="icon-service text-green">
                <View className="cu-tag badge" />
              </View>
              客服
            </Button>
            <View className="action">
              <View className="icon-cart">
                <View className="cu-tag badge">99</View>
              </View>
              购物车
            </View>
            <View className="btn-group">
              <Button className="cu-btn bg-orange round shadow-blur">
                加入购物车
              </Button>
              <Button className="cu-btn bg-red round shadow-blur">
                立即订购
              </Button>
            </View>
          </View>
        </View>
        <View className="cu-bar bg-white">
          <View className="action">
            <Text className="icon-title text-green" />
            <Text>标题操作条</Text>
          </View>
        </View>
        {false && (
          <View className="box">
            <View className="cu-bar justify-center bg-white">
              <View className="action border-title">
                <Text className="text-xl text-bold">关于我们</Text>
                <Text className="bg-grey" style="width:2rem" />
                {/*  底部样式 last-child选择器 */}
              </View>
            </View>
            <View className="cu-bar justify-center bg-white">
              <View className="action border-title">
                <Text className="text-xl text-bold text-blue">关于我们</Text>
                <Text className="bg-gradual-blue" style="width:3rem" />
              </View>
            </View>
            <View className="cu-bar justify-center bg-white">
              <View className="action sub-title">
                <Text className="text-xl text-bold text-green">关于我们</Text>
                <Text className="bg-green" style="width:2rem" />
                {/*  last-child选择器 */}
              </View>
            </View>
            <View className="cu-bar justify-center bg-white">
              <View className="action sub-title">
                <Text className="text-xl text-bold text-blue">关于我们</Text>
                <Text className="text-ABC text-blue">about</Text>
                {/*  last-child选择器 */}
              </View>
            </View>
          </View>
        )}
        <View className="box">
          <View className="cu-bar bg-white">
            <View className="action border-title">
              <Text className="text-xl text-bold">关于我们</Text>
              <Text className="bg-grey" style="width:2rem" />
              {/*  底部样式 last-child选择器 */}
            </View>
          </View>
          <View className="cu-bar bg-white">
            <View className="action border-title">
              <Text className="text-xl text-bold text-blue">关于我们</Text>
              <Text className="bg-gradual-blue" style="width:3rem" />
            </View>
          </View>
          <View className="cu-bar bg-white">
            <View className="action sub-title">
              <Text className="text-xl text-bold text-green">关于我们</Text>
              <Text className="bg-green" />
              {/*  last-child选择器 */}
            </View>
          </View>
          <View className="cu-bar bg-white">
            <View className="action sub-title">
              <Text className="text-xl text-bold text-blue">关于我们</Text>
              <Text className="text-ABC text-blue">about</Text>
              {/*  last-child选择器 */}
            </View>
          </View>
          <View className="cu-bar bg-white">
            <View className="action title-style-3">
              <Text className="text-xl text-bold">关于我们</Text>
              <Text className="text-Abc text-gray self-end margin-left-sm">
                about
              </Text>
            </View>
          </View>
          <View className="cu-bar bg-white">
            <View className="action">
              <Text className="icon-title text-green" />
              <Text className="text-xl text-bold">关于我们</Text>
            </View>
          </View>
          <View className="cu-bar bg-white">
            <View className="action">
              <Text className="icon-titles text-green" />
              <Text className="text-xl text-bold">关于我们</Text>
            </View>
          </View>
        </View>
        <View className="cu-bar bg-white">
          <View className="action">
            <Text className="icon-title text-green" />
            <Text>顶部操作条</Text>
          </View>
        </View>
        <View className="box">
          <View className="cu-bar bg-white">
            <View className="action">
              <Text className="icon-back text-gray" />返回
            </View>
            <View className="content text-bold">操作条</View>
          </View>
          <View className="cu-bar bg-white">
            <View className="action">
              <Text className="icon-homefill text-gray" />首页
            </View>
            <View className="content text-bold">
              鲜亮的高饱和色彩，专注视觉的小程序组件库
            </View>
            <View className="action">
              <Text className="icon-cardboardfill text-grey" />
              <Text className="icon-recordfill text-red" />
            </View>
          </View>
          <View className="cu-bar bg-blue">
            <View className="action">
              <Text className="icon-close" />关闭
            </View>
            <View className="content text-bold">海蓝</View>
          </View>
          <View className="cu-bar bg-black search">
            <View
              className="cu-avatar round"
              style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"
            />
            <View className="content">ColorUI</View>
            <View className="action">
              <Text className="icon-more" />
            </View>
          </View>
        </View>
        <View className="cu-bar bg-white">
          <View className="action">
            <Text className="icon-title text-green" />
            <Text>搜索操作条</Text>
          </View>
        </View>
        <View className="box">
          <View className="cu-bar search bg-white">
            <View className="search-form round">
              <Text className="icon-search" />
              <Input
                type="text"
                placeholder="搜索图片、文章、视频"
                confirmType="search"
              />
            </View>
            <View className="action">
              <Button className="cu-btn bg-green shadow-blur round">
                搜索
              </Button>
            </View>
          </View>
          <View className="cu-bar search bg-white">
            <View
              className="cu-avatar round"
              style="background-image:url(https://image.weilanwl.com/img/square-2.jpg);"
            />
            <View className="search-form round">
              <Text className="icon-search" />
              <Input
                type="text"
                placeholder="搜索图片、文章、视频"
                confirmType="search"
              />
            </View>
            <View className="action">
              <Text>广州</Text>
              <Text className="icon-triangledownfill" />
            </View>
          </View>
          <View className="cu-bar bg-red search">
            <View
              className="cu-avatar round"
              style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"
            />
            <View className="search-form radius">
              <Text className="icon-search" />
              <Input
                type="text"
                placeholder="搜索图片、文章、视频"
                confirmType="search"
              />
            </View>
            <View className="action">
              <Text>广州</Text>
              <Text className="icon-triangledownfill" />
            </View>
          </View>
          <View className="cu-bar bg-cyan search">
            <View className="search-form radius">
              <Text className="icon-search" />
              <Input
                type="text"
                placeholder="搜索图片、文章、视频"
                confirmType="search"
              />
            </View>
            <View className="action">
              <Text className="icon-close" />
              <Text>取消</Text>
            </View>
          </View>
        </View>
        <View className="cu-bar bg-white">
          <View className="action">
            <Text className="icon-title text-green" />
            <Text>操作条按钮组</Text>
          </View>
        </View>
        <View className="box">
          <View className="cu-bar btn-group">
            <Button className="cu-btn bg-green shadow-blur round lg">
              保存
            </Button>
          </View>
          <View className="cu-bar btn-group">
            <Button className="cu-btn bg-green shadow-blur">保存</Button>
            <Button className="cu-btn text-green line-green shadow">
              上传
            </Button>
          </View>
          <View className="cu-bar btn-group">
            <Button className="cu-btn bg-green shadow-blur round">保存</Button>
            <Button className="cu-btn bg-blue shadow-blur round">提交</Button>
          </View>
        </View>
        <View className="cu-bar bg-white">
          <View className="action">
            <Text className="icon-title text-green" />
            <Text>输入操作条</Text>
          </View>
        </View>
        <View className="box">
          <View className="cu-bar input">
            <View className="action">
              <Text className="icon-sound text-grey" />
            </View>
            <Input
              className="solid-bottom"
              focus={false}
              maxlength="300"
              cursorSpacing="10"
            />
            <View className="action">
              <Text className="icon-emojifill text-grey" />
            </View>
            <Button className="cu-btn bg-green shadow-blur">发送</Button>
          </View>
          <View className="cu-bar input">
            <View
              className="cu-avatar round"
              style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"
            />
            <View className="action">
              <Text className="icon-roundaddfill text-grey" />
            </View>
            <Input
              className="solid-bottom"
              maxlength="300"
              cursorSpacing="10"
            />
            <View className="action">
              <Text className="icon-emojifill text-grey" />
            </View>
            <Button className="cu-btn bg-green shadow-blur">发送</Button>
          </View>
        </View>
      </Block>
    )
  }
}

export default _C
