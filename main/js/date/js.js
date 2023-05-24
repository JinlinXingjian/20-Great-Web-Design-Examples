$(window).load(function(){$(".loading").fadeOut()})  
$(function () {

echarts_2()
echarts_3()
echarts_4()
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
 var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6", "#F57474", "#56D0E3", "#F8B448", "#1089E7"];
  
  // 2. 指定配置和数据
  var option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012"],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#de2910ff"
        }
      },
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: [0, 551, 1660, 3046, 4335, 5575,7017, 8249, 9899],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          // 此时的color 可以修改柱子的颜色
          color: function(params) {
            // params 传进来的是柱子对象
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 15,
        // 显示柱子内的文字
        label: {
          show: true,
          position: "inside",
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: "{c}"
        }
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });


    }
	function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));
var yearData = [
    {
      year: "2009", // 年份
      data: [
        // 两个数组是因为有两条线
        [1650,1232,1442,1240,1289,1386,1109],  //活立木总蓄积量164.33
//        [69.5, 68.2, 62.4, 59.8, 61.9, 64.2, 68.3, 62.6, 59.4, 57.2, 58.8, 64.7]   //碳排放总量756.8
      ]
    },
//    {
//      year: "2010", // 年份
//      data: [
//        // 两个数组是因为有两条线
//        [164.73, 165.17, 165.62, 165.91, 166.36, 166.69, 166.95, 167.23, 167.64, 168.05, 168.47, 168.96],  //168.96
////        [75.4, 74.8, 69.6, 67.9, 67.4, 69.6, 70.2, 72.6, 68.3, 68.1, 69.5, 71.8]   //845.2
//      ]
//    },
//    {
//      year: "2011", // 年份
//      data: [
//        // 两个数组是因为有两条线
//        [169.27, 169.62, 170.15, 170.47, 170.92, 171.32, 171.79, 172.12, 172.55, 172.96, 173.02, 173.31],  //173.31
////        [81.2, 80.5, 78.8, 77.3, 75.3, 76.6, 78.4, 79.2, 73.5, 72.1, 76.4, 78.2]  //927.5
//      ]
//    },
//    {
//      year: "2012", // 年份
//      data: [
//        // 两个数组是因为有两条线
//        [173.86, 174.25, 174.67, 175.14, 175.62, 176.06, 176.48, 176.89, 177.48, 177.93, 178.31, 178.87],  //178.87
////        [85.1, 84.6, 83.3, 82.2, 80.7, 80.6, 82.4, 84.7, 80.3, 80.6, 79.1, 82.3]     //985.9
//      ]
//    },
//    {
//      year: "2013", // 年份
//      data: [
//        // 两个数组是因为有两条线
//        [179.26, 179.78, 180.34, 180.88, 181.28, 181.69, 182.17, 182.52, 182.99, 183.51, 183.97, 184.39],   //184.39
////        [86.6, 85.7, 86.9, 83.1, 84.6, 85.1, 85.8, 86.2, 82.7, 82.1, 81.5, 84.2]      //1014.5
//      ]
//    },
//    {
//      year: "2014", // 年份
//      data: [
//        // 两个数组是因为有两条线
//        [184.87, 185.48, 185.86, 186.27, 186.68, 187.15, 187.74, 188.42, 188.94, 189.37, 189.71, 190.07],    //190.07
////        [85.4, 84.6, 83.2, 82.6, 82.1, 82.4, 84.4, 85.6, 84.1, 82.3, 81.2, 84.7]     //1002.6
//      ]
//    },
//    {
//      year: "2015", // 年份
//      data: [
//        // 两个数组是因为有两条线
//        [190.52, 191.03, 191.66, 192.21, 192.68, 193.06, 193.48, 193.89, 194.32, 194.69, 194.98, 195.27],     //195.27
////        [84.1, 83.6, 82.8, 81.2, 79.7, 79.6, 81.4, 83.7, 79.3, 80.6, 79.1, 82.3]     //977.4
//      ]
//    },
//    {
//      year: "2016", // 年份
//      data: [
//        // 两个数组是因为有两条线
//        [192.64, 192.99, 193.81, 194.38, 194.81, 195.35, 195.91, 196.46, 196.96, 197.67, 198.37, 199.69],        //199.69
////        [84.1, 82.6, 81.3, 81.2, 79.7, 79.6, 81.4, 83.7, 79.3, 80.6, 79.1, 81.3]    //973.9
//      ]
//    },
//    {
//      year: "2017", // 年份
//      data: [
//        // 两个数组是因为有两条线
//        [201.23, 201.52, 201.93, 202.34, 202.85, 203.24, 203.55, 203.87, 204.13, 204.48, 204.83, 205.31],        //205.31
////        [85.9, 85.1, 83.7, 82.6, 83.1, 83.4, 84.4, 85.6, 84.1, 82.3, 81.6, 85.7]    //1007.5
//      ]
//    },
//    {
//      year: "2018", // 年份
//      data: [
//        // 两个数组是因为有两条线
//        [205.68, 205.92, 206.27, 206.61, 206.94, 207.38, 207.73, 208.07, 208.56, 209.04, 209.68, 210.74],       //210.74
//        [88.1, 88.2, 87.4, 84.6, 86.1, 86.6, 87.5, 87.9, 84.2, 83.6, 83.4, 85.7]     //1033.3
//      ]
//    },
//    {
//      year: "2019", // 年份
//      data: [
//        // 两个数组是因为有两条线
//        [211.15, 211.59, 212.01, 212.42, 212.86, 213.23, 213.47, 213.72, 214.14, 214.53, 214.96, 215.29],        //215.29
////        [90.3, 90.2, 89.4, 86.6, 87.1, 88.6, 89.5, 89.9, 85.4, 84.6, 85.4, 88.7]    //1055.7
//      ]
//    },
//    {
//      year: "2020", // 年份
//      data: [
//        // 两个数组是因为有两条线
//        [215.53, 215.84, 216.14, 216.49, 216.74, 216.99, 217.37, 217.68, 217.95, 218.37, 218.87, 219.71],       //219.71
////        [89.1, 89.2, 88.4, 85.6, 87.1, 87.6, 88.5, 88.9, 85.4, 84.6, 84.4, 86.7]     //1045.5
//      ]
//    },
  ];
 
  // 2.指定配置
  var option = {
    // 通过这个color修改两条线的颜色
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      trigger: "axis"
    },
    legend: {
      // 如果series 对象有name 值，则 legend可以不用写data
      // 修改图例组件 文字颜色
      textStyle: {
        color: "#4c9bfd"
      },
      // 这个10% 必须加引号
      right: "10%"
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true, // 显示边框
      borderColor: "#012f4a", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "2013年",
        "2014年",
        "2015年",
        "2016年",
        "2017年",
        "2018年",
        "2019年"
      ],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a" // 分割线颜色
        }
      }
    },
    series: [
      {
        name: "年均脱贫人口（单位/万人）",
        type: "line",
        // true 可以让我们的折线显示带有弧度
        smooth: true,
        data: yearData[0].data[0]
      },
//      {
//        name: "活立木总蓄积量(亿立方米)",
//        type: "line",
//        smooth: true,
//        data: yearData[0].data[1]
//      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });

  // 5.点击切换效果
  $(".tit").on("click", "a", function() {
    // alert(1);
    // console.log($(this).index());
    // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
//    option.series[1].data = obj.data[1];
  
    
    // 需要重新渲染
    myChart.setOption(option);
  });
    }
	function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        var option = {       
            grid: {
                    left: '0',
            		top: '30',
                    right: '0',
                    bottom: '10',
                    containLabel: true
                },
            legend: {

                    top: 0,
                    textStyle: {
                        color: "#de2910ff",
                },

        itemWidth: 10,  // 设置宽度

        itemHeight: 10, // 设置高度

        },

        tooltip: {

            trigger: 'axis',

            axisPointer: { // 坐标轴指示器，坐标轴触发有效

                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

            }

        },

        xAxis: {

            type: 'category',

            data: ["2012年","2013年","2014年","2015年","2016年","2017年","2018年","2019年","2020年"],

            axisTick: { //---坐标轴 刻度

                show: true, //---是否显示

            },

            axisLine: { //---坐标轴 轴线

                show: true, //---是否显示

                lineStyle: {

                    color: 'de2910ff',

                    width: 1,

                    type: 'dotted',

                },

            },

            axisLabel: {//X轴文字

                textStyle: {

                    fontSize: 8,

                    color: '#de2910ff'

                },

            },

        },

        yAxis: {

            type: 'value',

            splitLine: {//分割线

                show: true,

                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                    width: 1,
                    type: 'dotted'

                }

            },

            axisLabel: {//Y轴刻度值

                formatter: '{value}',

                textStyle: {

                    fontSize: 12,

                    color: '#de2910ff'

                },

            },

            axisLine: { //---坐标轴 轴线

                show: false, //---是否显示

            },

        },

        series: [ {

            name: '贫困发生率（%）',

            type: 'bar',

            data: [10.2, 8.5, 7.2, 5.7, 4.5, 3.1, 1.7, 0.6, 0],

            barWidth: 15, //柱图宽度
	
            itemStyle: {

                normal: { //设置颜色的渐变
            barBorderRadius: 50,
                    color: "#4fb69d",

                }

            },

        }]

    };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})



		
		
		


		









