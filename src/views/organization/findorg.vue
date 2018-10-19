<template>
<div>
    <Header :title="this.$route.meta.title" style="height:1rem"></Header>
    <div class="map-container" id="bmap-container">
    </div>
</div>
  
</template>

<script>
export default {
  name:'',
  data() {
    return {

    }
  },
  components: {

  },
  methods: {
    initMap() {
      const BMap = window.BMap
      var map = new BMap.Map("bmap-container");          // 创建地图实例  
      var point = new BMap.Point(114.16, 33.24);  // 创建点坐标 
      map.centerAndZoom(point,5.5);
      
      map.addControl(new BMap.NavigationControl({
        anchor: window.BMAP_ANCHOR_TOP_LEFT
      }));

      let startIcon = new BMap.Icon('/static/start_point.png', new BMap.Size(36,42), {
        imageSize: new BMap.Size(36,42)
      })
      let endIcon = new BMap.Icon('/static/end_point.png', new BMap.Size(36,42), {
        imageSize: new BMap.Size(36,42)
      })
      let startPoint = new BMap.Point(114.16, 33.24); // 创建起始点
      let startMarker = new BMap.Marker(startPoint ,{icon: startIcon}) // 添加起始点标注
      let endPoint = new BMap.Point(116.404, 39.915); // 创建结束点
      let endMarker = new BMap.Marker(endPoint, {icon: endIcon}); // 添加结束点标注

      var opts = {
        position : startPoint,    // 指定文本标注所在的地理位置
        offset   : new BMap.Size(15, -50)    //设置文本偏移量
      }

      var opts2 = {
        position : startPoint,    // 指定文本标注所在的地理位置
        offset   : new BMap.Size(15, -28)    //设置文本偏移量
      }

      let label = new BMap.Label('信息工程学院党总支 总支书记：柳晓阳 电话：0396-285032',opts);
      let label1 = new BMap.Label('信息工程学院学生党支部支部书记：杨鑫 电话：0396-2853187',opts2);
      let label2 = new BMap.Label('信息工程学院学生流动党支部支部书记：高洋 电话：13526395586',{
        offset: new BMap.Size(30, -10)
      });
      label2.setStyle({
        border: '1px solid #ff6700',
        borderRadius: '2px',
        height:'30px',
        lineHeight: '25px'
      })


      endMarker.setLabel(label2)
      map.addOverlay(label)
      map.addOverlay(label1)

      map.addOverlay(startMarker);
      map.addOverlay(endMarker);

      // 添加定位控件    
      var geoCtrl = new BMap.GeolocationControl({    
      showAddressBar       : true //是否显示    
      , enableAutoLocation : false //首次是否进行自动定位    
      , offset             : new BMap.Size(10,25)    
      //, locationIcon     : icon //定位的icon图标    
      });    
      //监听定位成功事件    
      geoCtrl.addEventListener("locationSuccess",function(e){    
        console.log(e);    
      });    
      //监听定位失败事件    
      geoCtrl.addEventListener("locationError",function(e){    
        console.log(e);    
      });    
      // 将定位控件添加到地图    
      map.addControl(geoCtrl);
      
      
    }
  },
  mounted() {
    this.initMap()
  }
}
</script>

<style scoped lang="scss">
.map-container {
  margin-top: 1rem;
  width: 100vw;
  height: 92.25vh;
}
</style>
