import {
  Block,
  View,
  Form,
  Input,
  Text,
  Button,
  Picker,
  Switch,
  RadioGroup,
  Radio,
  Checkbox,
  Textarea
} from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './form.scss'
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    index: null,
    picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
    multiArray: [
      ['无脊柱动物', '脊柱动物'],
      ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
      ['猪肉绦虫', '吸血虫']
    ],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '无脊柱动物'
        },
        {
          id: 1,
          name: '脊柱动物'
        }
      ],
      [
        {
          id: 0,
          name: '扁性动物'
        },
        {
          id: 1,
          name: '线形动物'
        },
        {
          id: 2,
          name: '环节动物'
        },
        {
          id: 3,
          name: '软体动物'
        },
        {
          id: 3,
          name: '节肢动物'
        }
      ],
      [
        {
          id: 0,
          name: '猪肉绦虫'
        },
        {
          id: 1,
          name: '吸血虫'
        }
      ]
    ],
    multiIndex: [0, 0, 0],
    time: '12:01',
    date: '2018-12-25',
    region: ['广东省', '广州市', '海珠区'],
    imgList: [],
    modalName: null,
    textareaAValue: '',
    textareaBValue: ''
  }
  PickerChange = e => {
    console.log(e)
    this.setData({
      index: e.detail.value
    })
  }
  MultiChange = e => {
    this.setData({
      multiIndex: e.detail.value
    })
  }
  MultiColumnChange = e => {
    let data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    }
    data.multiIndex[e.detail.column] = e.detail.value
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = [
              '扁性动物',
              '线形动物',
              '环节动物',
              '软体动物',
              '节肢动物'
            ]
            data.multiArray[2] = ['猪肉绦虫', '吸血虫']
            break
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物']
            data.multiArray[2] = ['鲫鱼', '带鱼']
            break
        }
        data.multiIndex[1] = 0
        data.multiIndex[2] = 0
        break
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['猪肉绦虫', '吸血虫']
                break
              case 1:
                data.multiArray[2] = ['蛔虫']
                break
              case 2:
                data.multiArray[2] = ['蚂蚁', '蚂蟥']
                break
              case 3:
                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓']
                break
              case 4:
                data.multiArray[2] = [
                  '昆虫',
                  '甲壳动物',
                  '蛛形动物',
                  '多足动物'
                ]
                break
            }
            break
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼']
                break
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼']
                break
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎']
                break
            }
            break
        }
        data.multiIndex[2] = 0
        break
    }
    this.setData(data)
  }
  TimeChange = e => {
    this.setData({
      time: e.detail.value
    })
  }
  DateChange = e => {
    this.setData({
      date: e.detail.value
    })
  }
  RegionChange = e => {
    this.setData({
      region: e.detail.value
    })
  }
  ChooseImage = () => {
    Taro.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: res => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    })
  }
  ViewImage = e => {
    Taro.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    })
  }
  DelImg = e => {
    Taro.showModal({
      title: '召唤师',
      content: '确定要删除这段回忆吗？',
      cancelText: '再看看',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1)
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  }
  textareaAInput = e => {
    this.setData({
      textareaAValue: e.detail.value
    })
  }
  textareaBInput = e => {
    this.setData({
      textareaBValue: e.detail.value
    })
  }
  config = {}

  render() {
    const {
      picker: picker,
      multiIndex: multiIndex,
      multiArray: multiArray,
      time: time,
      date: date,
      region: region,
      customItem: customItem,
      imgList: imgList,
      modalName: modalName,
      textareaAValue: textareaAValue,
      textareaBValue: textareaBValue
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
              <View>表单</View>
            </Block>
          }
        />
        <Form>
          <View className="cu-form-group margin-top">
            <View className="title">邮件</View>
            <Input placeholder="两字短标题" />
          </View>
          <View className="cu-form-group">
            <View className="title">输入框</View>
            <Input placeholder="三字标题" />
          </View>
          <View className="cu-form-group">
            <View className="title">收货地址</View>
            <Input placeholder="统一标题的宽度" />
          </View>
          <View className="cu-form-group">
            <View className="title">收货地址</View>
            <Input placeholder="输入框带个图标" />
            <Text className="icon-locationfill text-orange" />
          </View>
          <View className="cu-form-group">
            <View className="title">验证码</View>
            <Input placeholder="输入框带个按钮" />
            <Button className="cu-btn bg-green shadow">验证码</Button>
          </View>
          <View className="cu-form-group">
            <View className="title">手机号码</View>
            <Input placeholder="输入框带标签" />
            <View className="cu-capsule radius">
              <View className="cu-tag bg-blue">+86</View>
              <View className="cu-tag line-blue">中国大陆</View>
            </View>
          </View>
          <View className="cu-form-group margin-top">
            <View className="title">普通选择</View>
            <Picker onChange={this.PickerChange} value={index} range={picker}>
              <View className="picker">
                {index
                  ? picker[index]
                  : '禁止换行，超出容器部分会以 ... 方式截断'}
              </View>
            </Picker>
          </View>
          <View className="cu-form-group">
            <View className="title">多列选择</View>
            <Picker
              mode="multiSelector"
              onChange={this.MultiChange}
              onColumnChange={this.MultiColumnChange}
              value={multiIndex}
              range={multiArray}
            >
              <View className="picker">
                {multiArray[0][multiIndex[0]] +
                  '，' +
                  multiArray[1][multiIndex[1]] +
                  '，' +
                  multiArray[2][multiIndex[2]]}
              </View>
            </Picker>
          </View>
          <View className="cu-form-group">
            <View className="title">时间选择</View>
            <Picker
              mode="time"
              value={time}
              start="09:01"
              end="21:01"
              onChange={this.TimeChange}
            >
              <View className="picker">{time}</View>
            </Picker>
          </View>
          <View className="cu-form-group">
            <View className="title">日期选择</View>
            <Picker
              mode="date"
              value={date}
              start="2015-09-01"
              end="2020-09-01"
              onChange={this.DateChange}
            >
              <View className="picker">{date}</View>
            </Picker>
          </View>
          <View className="cu-form-group">
            <View className="title">地址选择</View>
            <Picker
              mode="region"
              onChange={this.RegionChange}
              value={region}
              customItem={customItem}
            >
              <View className="picker">
                {region[0] + '，' + region[1] + '，' + region[2]}
              </View>
            </Picker>
          </View>
          <View className="cu-form-group margin-top">
            <View className="title">开关选择</View>
            <Switch />
          </View>
          <View className="cu-form-group">
            <View className="title">定义颜色</View>
            <Switch className="red sm" checked />
          </View>
          <View className="cu-form-group">
            <Switch className="switch-sex" checked />
            <View className="title">定义图标</View>
          </View>
          <View className="cu-form-group">
            <View className="title">方形开关</View>
            <Switch className="orange radius sm" checked />
          </View>
          <RadioGroup className="block">
            <View className="cu-form-group margin-top">
              <View className="title">单选操作(radio)</View>
              <Radio checked />
            </View>
            <View className="cu-form-group">
              <View className="title">定义样式</View>
              <Radio className="radio" />
            </View>
            <View className="cu-form-group">
              <View className="title">定义颜色</View>
              <View>
                <Radio className="blue radio" />
                <Radio className="red margin-left-sm" />
              </View>
            </View>
          </RadioGroup>
          <View className="cu-form-group margin-top">
            <View className="title">复选选操作(checkbox)</View>
            <Checkbox />
          </View>
          <View className="cu-form-group">
            <View className="title">定义形状</View>
            <Checkbox className="round" checked />
          </View>
          <View className="cu-form-group">
            <View className="title">定义颜色</View>
            <Checkbox className="round blue" checked />
          </View>
          <View className="cu-bar bg-white margin-top">
            <View className="action">图片上传</View>
            <View className="action">{imgList.length + '/4'}</View>
          </View>
          <View className="cu-form-group">
            <View className="grid col-4 grid-square flex-sub">
              {imgList.map((item, index) => {
                return (
                  <View
                    className="padding-xs bg-img"
                    style={'background-image:url(' + imgList[index] + ')'}
                    key={index}
                    onClick={this.ViewImage}
                    data-url={imgList[index]}
                  >
                    <View
                      className="cu-tag bg-red"
                      onClick={this.DelImg}
                      data-index={index}
                    >
                      <Text className="icon-close" />
                    </View>
                  </View>
                )
              })}
              {imgList.length < 4 && (
                <View className="padding-xs solids" onClick={this.ChooseImage}>
                  <Text className="icon-cameraadd" />
                </View>
              )}
            </View>
          </View>
          {/*  !!!!! placeholder 在ios表现有偏移 建议使用 第一种样式  */}
          <View className="cu-form-group margin-top">
            <Textarea
              data-placeholder="多行文本输入框"
              maxlength="-1"
              disabled={modalName != null}
              placeholderClass="placeholder"
              className={textareaAValue ? 'value' : ''}
              onInput={this.textareaAInput}
            />
          </View>
          <View className="cu-form-group top">
            <View className="title">点文本框</View>
            <Textarea
              data-placeholder="多行文本输入框"
              maxlength="-1"
              disabled={modalName != null}
              placeholderClass="placeholder"
              className={textareaBValue ? 'value' : ''}
              onInput={this.textareaBInput}
            />
          </View>
        </Form>
      </Block>
    )
  }
}

export default _C
