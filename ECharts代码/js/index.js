
// 自执行函数(立即调用函数表达式)
// 防止变量污染，减少命名冲突


// 左侧柱状图模块
(function () {

  //  基于准备好的dom，初始化echarts实例  
  let myChart = echarts.init(document.querySelector(".bar .chart"))

  //  指定图表的配置项和数据     (option)
  let option = {
    color: ['#2f89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器配置项 坐标轴触发有效
        type: 'shadow'        // 默认为直线
      }
    },
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['旅游', '教育', '游戏', '医疗', '电商', '社交', '金融'],
        axisTick: {
          alignWithLabel: true
        },
        // 坐标轴刻度标签的相关设置 (样式)
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        },
        // 坐标轴轴线相关设置
        axisLine: {
          show: true,   // 是否显示坐标轴轴线
          lineStyle: {  //单独设置轴线样式
            color: "red",
            width: 1,
            type: "solid"
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        // 坐标轴刻度标签的相关设置 (样式)
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        },
        // 坐标轴轴线相关设置
        axisLine: {
          show: true,   // 是否显示坐标轴轴线
          lineStyle: {  //单独设置轴线样式
            color: "red",
            width: 1,
            type: "solid"
          }
        },
        // 坐标轴在 grid 区域中的分隔线
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '35%',
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          barBorderRadius: 5, // 统一设置四个角的圆角大小
        }
      }
    ],
  }

  //  使用刚指定的配置项和数据显示图表  
  myChart.setOption(option)

  // 让图表随着屏幕自适应
  // resize 屏幕尺寸发生变化
  window.addEventListener('resize', () => {
    myChart.resize();
  })
})();

// 右侧柱状图模型
(function () {
  let myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"]

  //  基于准备好的dom，初始化echarts实例  
  let myChart = echarts.init(document.querySelector(".bar2 .chart"))

  //  指定图表的配置项和数据     (option)
  let option = {
    grid: {
      left: '22%',
      top: '10%',
      bottom: '10%',
      containLabel: false  // 是否显示刻度标签
    },
    xAxis: {
      show: false

    },
    yAxis: [ //两组数据
      {
        type: 'category',
        data: ['Java', 'H5', 'CSS3', 'vue', 'react', 'node'],
        inverse: true,  //  是否是反向坐标轴
        // 坐标轴轴线相关设置
        axisLine: {
          show: false,   // 是否显示坐标轴轴线
        },
        // 坐标轴刻度(轴线上的短线)  相关设置
        axisTick: {
          show: false
        },
        //  坐标轴刻度标签的相关设置
        axisLabel: {
          // 刻度标签文字的颜色，默认取 axisLine.lineStyle.color,支持回调函数，格式如下
          color: "#fff",
          fontSize: 10
        }
      },
      {
        show: true,
        data: [702, 350, 610, 793, 664, 555],
        inverse: true,  //  是否是反向坐标轴
        // 坐标轴轴线相关设置
        axisLine: {
          show: false,   // 是否显示坐标轴轴线
        },
        // 坐标轴刻度(轴线上的短线)  相关设置
        axisTick: {
          show: false
        },
        //  坐标轴刻度标签的相关设置
        axisLabel: {
          // 刻度标签文字的颜色，默认取 axisLine.lineStyle.color,支持回调函数，格式如下
          color: "#fff",
          fontSize: 10
        }
      }],
    series: [
      // 两组柱子，第二组框住第一组
      {
        name: '条',
        type: 'bar',
        data: [70, 35, 61, 79, 66, 56],
        yAxisIndex: 0,
        barCategoryGap: 50,
        barWidth: 10,
        itemStyle: {
          barBorderRadius: 20, // 统一设置四个角的圆角大小
          color: params => {
            let length = myColor.length
            return myColor[params.dataIndex % length]
          }
        },
        //   图形上的文本标签
        label: {
          show: true,
          position: "inside", //  图型内显示
          formatter: "{c}%"   // 标签内容格式器 --->  {c}：数据值
        }
      },
      {
        name: '框',
        type: 'bar',
        data: [100, 100, 100, 100, 100, 100],
        yAxisIndex: 1,
        barCategoryGap: 50,
        barWidth: 13.5,
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        },

      }
    ]
  };

  //  使用刚指定的配置项和数据显示图表  
  myChart.setOption(option)

  // 让图表随着屏幕自适应
  // resize 屏幕尺寸发生变化
  window.addEventListener('resize', () => {
    myChart.resize();
  })

})();

// 左侧折线图
(function () {

  // 两个年份的数据
  let yearData = [
    {
      year: '2020', // 年份
      data: [
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 200, 180, 79]
      ]
    },
    {
      year: '2021', // 年份
      data: [
        [123, 175, 112, 197, 167, 220, 67, 98, 100, 121, 22, 38],
        [160, 200, 140, 220, 100, 180, 50, 70, 65, 80, 30, 50]
      ]
    }
  ]

  //  基于准备好的dom，初始化echarts实例 
  let myChart = echarts.init(document.querySelector(".line .chart"))

  //  指定图表的配置项和数据     （option）
  option = {
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['fans', 'tourists',],
      right: '10%', //图例组件离容器右侧的距离
      textStyle: {  // 图例的公用文本样式
        color: '#4c9bfd'
      }
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true, // 显示边框
      borderColor: 'blue', // 边框颜色
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      // 坐标轴刻度(轴线上的短线)  相关设置
      axisTick: {
        show: false
      },
      //  坐标轴刻度标签的相关设置
      axisLabel: {
        // 刻度标签文字的颜色，默认取 axisLine.lineStyle.color,支持回调函数，格式如下
        color: "#4c9bfd",
        fontSize: 10
      },
      // 坐标轴轴线相关设置
      axisLine: {
        show: false,   // 是否显示坐标轴轴线
      },
    },
    yAxis: {
      type: 'value',
      // 坐标轴刻度(轴线上的短线)  相关设置
      axisTick: {
        show: false
      },
      //  坐标轴刻度标签的相关设置
      axisLabel: {
        // 刻度标签文字的颜色，默认取 axisLine.lineStyle.color,支持回调函数，格式如下
        color: "#4c9bfd",
      },
      // 坐标轴轴线相关设置
      axisLine: {
        show: false,   // 是否显示坐标轴轴线
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a'
        }
      }
    },
    series: [
      {
        name: 'fans',
        type: 'line',
        data: yearData[0].data[0],
        smooth: true
      },
      {
        name: 'tourists',
        type: 'line',
        data: yearData[0].data[1],
        smooth: true
      },
    ]
  };

  //  使用刚指定的配置项和数据显示图表  
  myChart.setOption(option)

  // 让图表随着屏幕自适应
  // resize 屏幕尺寸发生变化
  window.addEventListener('resize', () => {
    myChart.resize();
  })

  // //点击切换效果
  document.querySelectorAll('.line h2 .aLink').forEach((item, index) => {
    item.addEventListener('click', () => {
      option.series[0].data = yearData[index].data[0]
      option.series[1].data = yearData[index].data[1]
      //重新渲染
      myChart.setOption(option)
    })
  })
})();

// 右侧折线图
(function () {

  //  基于准备好的dom，初始化echarts实例  
  let myChart = echarts.init(document.querySelector(".line2 .chart"))

  //  指定图表的配置项和数据     （option）
  let option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['邮件营销', '联盟广告',],
      textStyle: {  // 图例的公用文本样式
        color: 'rgba(255,255,255,.5)',
        fontSize: 12
      }

    },
    grid: {
      left: 10,
      right: 10,
      bottom: 10,
      top: 30,
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10",
          "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
          "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
        //  坐标轴刻度标签的相关设置
        axisLabel: {
          // 刻度标签文字的颜色，默认取 axisLine.lineStyle.color,支持回调函数，格式如下
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        },
        // 坐标轴轴线相关设置
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)",
          }
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        // 坐标轴刻度(轴线上的短线)  相关设置
        axisTick: {
          show: false
        },
        //  坐标轴刻度标签的相关设置
        axisLabel: {
          // 刻度标签文字的颜色，默认取 axisLine.lineStyle.color,支持回调函数，格式如下
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        },
        // 坐标轴轴线相关设置
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.3)",
          }
        },
        //  坐标轴在 grid 区域中的分隔线
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }
      }
    ],
    series: [
      {
        name: '播放量',
        type: 'line',
        data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40,
          30, 40, 30, 40, 30, 40, 30, 60, 20, 40,
          30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
        areaStyle: { // 区域填充样式
          // 渐变
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [{
              offset: 0,
              color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
            },
            {
              offset: 0.8,
              color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
            }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)" // 阴影颜色
        },
        smooth: true,
        lineStyle: { // 线条样式
          color: "#0184d5",
          width: 2
        },
        symbol: "circle", //标记的图形(拐点)
        symbolSize: 5, // symbolSize
        showSymbol: false,
        itemStyle: { // 折线拐点标志的样式
          color: "#0184d5",
          borderColor: "rgba(221,220,107,.1)",
          borderWidth: 12
        }
      },
      {
        name: '转发量',
        type: 'line',
        data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40,
          90, 40, 20, 140, 30, 40, 130, 20, 20, 40,
          80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
        areaStyle: { // 区域填充样式
          // 渐变
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [{
              offset: 0,
              color: "rgba(0, 216, 135, 0.4)" // 渐变色的起始颜色
            },
            {
              offset: 0.8,
              color: "rgba(0, 216, 135, 0.1)" // 渐变线的结束颜色
            }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)" // 阴影颜色
        },
        smooth: true,
        lineStyle: { // 折线线条样式
          color: "#00d887",
          width: 2
        },
        symbol: "circle", //标记的图形(拐点)
        symbolSize: 5, // symbolSize
        showSymbol: false,
        itemStyle: { // 折线拐点标志的样式
          color: "#00d887",
          borderColor: "rgba(221,220,107,.1)",
          borderWidth: 12
        }
      },
    ]
  };

  //  使用刚指定的配置项和数据显示图表  
  myChart.setOption(option)

  // 让图表随着屏幕自适应
  // resize 屏幕尺寸发生变化
  window.addEventListener('resize', () => {
    myChart.resize();
  })
})();

//左侧饼图
(function () {

  //  基于准备好的dom，初始化echarts实例  
  let myChart = echarts.init(document.querySelector(".pie .chart"))

  //  指定图表的配置项和数据     (option)
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'  // 提示框浮层内容格式器
    },
    legend: {
      orient: 'horizontal', // 图例列表的布局朝向
      bottom: '0%',
      itemWidth: 10, //图例标记的图形宽度
      itemHeight: 10,
      textStyle: { // 图例的公用文本样式
        color: "rgba(255,255,255,.5)",
        fontSize: 12
      }
    },

    series: [
      {
        name: '年龄分布',
        type: 'pie',
        center: ["50%", "42.5%"], // 饼图的中心（圆心）坐标
        radius: ['40%', '70%'], // 饼图的半径 内，外
        avoidLabelOverlap: false, // 是否启用防止标签重叠策略，默认开
        label: { // 饼图图形上的文本标签，可用于说明图形的一些数据信息
          show: false,
          position: 'center'
        },
        emphasis: { // 高亮的扇区和标签样式
          label: {
            show: true,
            fontSize: '16',
            fontWeight: 'bold'
          }
        },
        labelLine: { // 标签的视觉引导线样式
          show: false
        },
        data: [
          { value: 1, name: '20岁以下' },
          { value: 4, name: '20-29岁' },
          { value: 2, name: '30-39岁' },
          { value: 2, name: '40-49岁' },
          { value: 1, name: '50以上' }
        ]
      }
    ]
  };

  //  使用刚指定的配置项和数据显示图表  
  myChart.setOption(option)

  // 让图表随着屏幕自适应
  // resize 屏幕尺寸发生变化
  window.addEventListener('resize', () => {
    myChart.resize();
  })
})();

// 右侧饼图 --> 南丁格尔玫瑰图
(function () {

  //  基于准备好的dom，初始化echarts实例 
  let myChart = echarts.init(document.querySelector(".pie2 .chart"))

  //  指定图表的配置项和数据     (option)
  let option = {
    color: ["#006cff", "#60cda0", "#ed8884", "#ff9f7f",
      "#0096ff", "#9fe6b8", "#32c5e9", "#1d9dff"],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: '0%',
      itemWidth: 10, //图例标记的图形宽度
      itemHeight: 10,
      textStyle: { // 图例的公用文本样式
        color: "rgba(255,255,255,.5)",
        fontSize: 12
      }
    },
    series: [
      {
        name: '地区分布',
        type: 'pie',
        radius: ['10%', "70%"], // 饼图的半径 内，外
        center: ['50%', '42.5%'], // 饼图的中心（圆心）坐标
        roseType: 'radius',  // 是否展示成南丁格尔图  area/radius,
        label: { // 饼图图形上的文本标签，可用于说明图形的一些数据信息
          fontsize: 10
        },
        labelLine: { // 标签的视觉引导线样式
          length: 6,
          length2: 8 //文字
        },
        data: [
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
        ]
      }
    ]
  };

  //  使用刚指定的配置项和数据显示图表  
  myChart.setOption(option)

  // 让图表随着屏幕自适应
  // resize 屏幕尺寸发生变化
  window.addEventListener('resize', () => {
    myChart.resize();
  })

})();

// 地图模块
(function () {

  //  基于准备好的dom，初始化echarts实例  
  let myChart = echarts.init(document.querySelector(".map .chart"))

  //  指定图表的配置项和数据     (option)
  var geoCoordMap = {
    '上海': [121.4648, 31.2891],
    '东莞': [113.8953, 22.901],
    '东营': [118.7073, 37.5513],
    '中山': [113.4229, 22.478],
    '临汾': [111.4783, 36.1615],
    '临沂': [118.3118, 35.2936],
    '丹东': [124.541, 40.4242],
    '丽水': [119.5642, 28.1854],
    '乌鲁木齐': [87.9236, 43.5883],
    '佛山': [112.8955, 23.1097],
    '保定': [115.0488, 39.0948],
    '兰州': [103.5901, 36.3043],
    '包头': [110.3467, 41.4899],
    '北京': [116.4551, 40.2539],
    '北海': [109.314, 21.6211],
    '南京': [118.8062, 31.9208],
    '南宁': [108.479, 23.1152],
    '南昌': [116.0046, 28.6633],
    '南通': [121.1023, 32.1625],
    '厦门': [118.1689, 24.6478],
    '台州': [121.1353, 28.6688],
    '合肥': [117.29, 32.0581],
    '呼和浩特': [111.4124, 40.4901],
    '咸阳': [108.4131, 34.8706],
    '哈尔滨': [127.9688, 45.368],
    '唐山': [118.4766, 39.6826],
    '嘉兴': [120.9155, 30.6354],
    '大同': [113.7854, 39.8035],
    '大连': [122.2229, 39.4409],
    '天津': [117.4219, 39.4189],
    '太原': [112.3352, 37.9413],
    '威海': [121.9482, 37.1393],
    '宁波': [121.5967, 29.6466],
    '宝鸡': [107.1826, 34.3433],
    '宿迁': [118.5535, 33.7775],
    '常州': [119.4543, 31.5582],
    '广州': [113.5107, 23.2196],
    '廊坊': [116.521, 39.0509],
    '延安': [109.1052, 36.4252],
    '张家口': [115.1477, 40.8527],
    '徐州': [117.5208, 34.3268],
    '德州': [116.6858, 37.2107],
    '惠州': [114.6204, 23.1647],
    '成都': [103.9526, 30.7617],
    '扬州': [119.4653, 32.8162],
    '承德': [117.5757, 41.4075],
    '拉萨': [91.1865, 30.1465],
    '无锡': [120.3442, 31.5527],
    '日照': [119.2786, 35.5023],
    '昆明': [102.9199, 25.4663],
    '杭州': [119.5313, 29.8773],
    '枣庄': [117.323, 34.8926],
    '柳州': [109.3799, 24.9774],
    '株洲': [113.5327, 27.0319],
    '武汉': [114.3896, 30.6628],
    '汕头': [117.1692, 23.3405],
    '江门': [112.6318, 22.1484],
    '沈阳': [123.1238, 42.1216],
    '沧州': [116.8286, 38.2104],
    '河源': [114.917, 23.9722],
    '泉州': [118.3228, 25.1147],
    '泰安': [117.0264, 36.0516],
    '泰州': [120.0586, 32.5525],
    '济南': [117.1582, 36.8701],
    '济宁': [116.8286, 35.3375],
    '海口': [110.3893, 19.8516],
    '淄博': [118.0371, 36.6064],
    '淮安': [118.927, 33.4039],
    '深圳': [114.5435, 22.5439],
    '清远': [112.9175, 24.3292],
    '温州': [120.498, 27.8119],
    '渭南': [109.7864, 35.0299],
    '湖州': [119.8608, 30.7782],
    '湘潭': [112.5439, 27.7075],
    '滨州': [117.8174, 37.4963],
    '潍坊': [119.0918, 36.524],
    '烟台': [120.7397, 37.5128],
    '玉溪': [101.9312, 23.8898],
    '珠海': [113.7305, 22.1155],
    '盐城': [120.2234, 33.5577],
    '盘锦': [121.9482, 41.0449],
    '石家庄': [114.4995, 38.1006],
    '福州': [119.4543, 25.9222],
    '秦皇岛': [119.2126, 40.0232],
    '绍兴': [120.564, 29.7565],
    '聊城': [115.9167, 36.4032],
    '肇庆': [112.1265, 23.5822],
    '舟山': [122.2559, 30.2234],
    '苏州': [120.6519, 31.3989],
    '莱芜': [117.6526, 36.2714],
    '菏泽': [115.6201, 35.2057],
    '营口': [122.4316, 40.4297],
    '葫芦岛': [120.1575, 40.578],
    '衡水': [115.8838, 37.7161],
    '衢州': [118.6853, 28.8666],
    '西宁': [101.4038, 36.8207],
    '西安': [109.1162, 34.2004],
    '贵阳': [106.6992, 26.7682],
    '连云港': [119.1248, 34.552],
    '邢台': [114.8071, 37.2821],
    '邯郸': [114.4775, 36.535],
    '郑州': [113.4668, 34.6234],
    '鄂尔多斯': [108.9734, 39.2487],
    '重庆': [107.7539, 30.1904],
    '金华': [120.0037, 29.1028],
    '铜川': [109.0393, 35.1947],
    '银川': [106.3586, 38.1775],
    '镇江': [119.4763, 31.9702],
    '长春': [125.8154, 44.2584],
    '长沙': [113.0823, 28.2568],
    '长治': [112.8625, 36.4746],
    '阳泉': [113.4778, 38.0951],
    '青岛': [120.4651, 36.3373],
    '韶关': [113.7964, 24.7028]
  };

  var XAData = [
    [{ name: '上海' }, { name: '北京', value: 100 }],
    [{ name: '西安' }, { name: '上海', value: 100 }],
    [{ name: '西安' }, { name: '广州', value: 100 }],
    [{ name: '西安' }, { name: '西宁', value: 100 }],
    [{ name: '西安' }, { name: '银川', value: 100 }]
  ];

  var XNData = [
    [{ name: '西宁' }, { name: '北京', value: 100 }],
    [{ name: '西宁' }, { name: '上海', value: 100 }],
    [{ name: '西宁' }, { name: '广州', value: 100 }],
    [{ name: '西宁' }, { name: '西安', value: 100 }],
    [{ name: '西宁' }, { name: '银川', value: 100 }]
  ];

  var YCData = [
    [{ name: '银川' }, { name: '北京', value: 100 }],
    [{ name: '银川' }, { name: '广州', value: 100 }],
    [{ name: '银川' }, { name: '上海', value: 100 }],
    [{ name: '银川' }, { name: '西安', value: 100 }],
    [{ name: '银川' }, { name: '西宁', value: 100 }],
  ];

  var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
  //var planePath = 'arrow';
  var convertData = function (data) {

    var res = [];
    for (var i = 0; i < data.length; i++) {

      var dataItem = data[i];

      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value
        });
      }
    }
    return res;

  };

  var color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
  var series = [];
  [['西安', XAData], ['西宁', XNData], ['银川', YCData]].forEach(function (item, i) {
    series.push({
      name: item[0] + ' Top3',
      type: 'lines',
      zlevel: 1,
      effect: {
        show: true,
        period: 6,
        trailLength: 0.7,
        color: 'red',   //arrow箭头的颜色
        symbolSize: 3
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 0,
          curveness: 0.2
        }
      },
      data: convertData(item[1])
    },
      {
        name: item[0] + ' Top3',
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + ' Top3',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          brushType: 'stroke'
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: '{b}'
          }
        },
        symbolSize: function (val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i],
          },
          emphasis: {
            areaColor: '#2B91B7'
          }
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          };
        })
      });
  });
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: function (params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return "线路：" + params.data.name + "" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
        } else {
          return params.name;
        }
      }
    },
    legend: {
      orient: 'vertical',
      top: 'bottom',
      left: 'right',
      data: ['西安 Top3', '西宁 Top3', '银川 Top3'],
      textStyle: {
        color: '#fff'
      },
      selectedMode: 'multiple'
    },
    geo: {
      map: 'china',
      zoom:1.2,
      label: {
        emphasis: {
          show: true,
          color: '#fff'
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: 'rgba(20, 41, 87,.5)',
          borderColor: '#195BB9',
          borderWidth: 1,
        },
        emphasis: {
          areaColor: '#2B91B7'
        }
      }
    },
    series: series
  };

  //  使用刚指定的配置项和数据显示图表  
  myChart.setOption(option)

  // 让图表随着屏幕自适应
  // resize 屏幕尺寸发生变化
  window.addEventListener('resize', () => {
    myChart.resize();
  })
})()