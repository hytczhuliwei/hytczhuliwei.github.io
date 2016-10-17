---
layout: post
title:  "百度地图开发小结-移动端"
date:   2016-10-17
desc: "百度地图在H5中的应用"
keywords: "map、js、baidu"
categories: [js]
tags: [js,map]
icon: icon-javascript-alt
---

开发之前我们需要引用百度地图的js

``` stylus
<script type="text/javascript" src="//api.map.baidu.com/library/GeoUtils/1.2/src/GeoUtils.js"></script>
<script type="text/javascript" src="//api.map.baidu.com/api?v=2.0&ak=indoIhs26rpCLkg5A5ojdtsG&s=1"></script>
```

第一个是解析用的，如果用不到可以不解析，第二个是百度地图的。

首先，创建一个地图的实例

``` stylus
  var position_point = new BMap.Point(121.481139,31.235301);
  // 创建Map实例,设置地图允许的最小/大级别  缩放级别：V2.0之前支持（3-18），V2.0之后多一级（3-19）
  var map = new BMap.Map("map",{minZoom:5,maxZoom:19}); 
  map.centerAndZoom(position_point,17);
```

当然，我们还可以为它添加一些控制器，比如

``` stylus
  map.addControl(new BMap.NavigationControl());//放大缩小指示器
  map.addControl(new BMap.ScaleControl());//放大尺寸显示
  map.addControl(new BMap.OverviewMapControl());//显示缩略图指示
  map.addControl(new BMap.MapTypeControl());//地图类型装换 地图/卫星/三维
```

还有一些方法

``` stylus
map.enableScrollWheelZoom();//允许滚轮放大缩小
map.panTo(new BMap.Point(113.262232,23.154345));   //移动地图  移动到广州
map.setZoom(14);//设置缩放寄别 放大到14级
```
地图定位：

``` stylus
		var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
                var mk = new BMap.Marker(r.point);
                if(typeof(mk) != "undefined"){
                    var position_point = new BMap.Point(r.point.lng, r.point.lat);
                    map.centerAndZoom(position_point,17);
                    getAroundPosition(r.point);
                    //var myIcon = new BMap.Icon("http://127.0.0.1/positionIcon.png", new BMap.Size(20,30));
                    //var marker = new BMap.Marker(position_point,{icon:myIcon}); // 创建标注
                    //map.addOverlay(marker);// 将标注添加到地图中
                    //marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
                    //marker.enableDragging();//设置标注可拖拽
                }
            }
        });
```

信息检索：

``` stylus
var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
	{"input" : "suggestId"
	,"location" : map
});
```
选中一条信息

``` stylus
		var myValue;
        ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
            var _value = e.item.value;
            myValue = _value.city +  _value.district +  _value.street +  _value.business;
            searchInfo("confirm");//根据结果获取周围信息的自定义方法
        });
        function searchInfo(action){
            function myFun(){
                var localResult = local.getResults();
                //console.log(localResult);
                var pp = localResult.getPoi(0).point;    //获取第一个智能搜索的结果
                if(action == "confirm") {//关闭地图窗口
                    $($page).find("input[name='address-s']").val(localResult.keyword);
                    $($page).find("input[name='addressInfo-address']").val(myValue);
                    $($page).find("input[name='addressInfo-lat']").val(pp.lat);
                    $($page).find("input[name='addressInfo-lng']").val(pp.lng);
                    $.closeModal(".popup-map");
                }
                map.centerAndZoom(pp, 18);
                getAroundPosition(pp);//检索信息
            }
            var local = new BMap.LocalSearch(map, { //智能搜索
                onSearchComplete: myFun
            });
            local.search(myValue);	
        }
        function getAroundPosition(point){
            var point_string = point.lat + "," + point.lng;
            geoc.getLocation(point, function(rs){
                var addComp = rs.addressComponents;
                $("input[name='addressInfo-cityName']").val(addComp.city);
                $("input[name='addressInfo-districtName']").val(addComp.district);
            });
            $.ajax({
                type:'POST',
                url:'action/api.php',
                data:{
                    'action':'getBmapPositionInfo',
                    'query':'写字楼$小区$学校',
                    'location':point_string,
                    'radius':'2000'
                },
                dataType:'json',
                success:function(data){
                    if(data.status == 0 && data.results){
                        var results = data.results;
                        var resultsLength = results.length;
                        if(resultsLength>0){//处理返回的结果
                            var html = '';
                            for(var i = 0; i<resultsLength;i++){
                                var res = results[i];
                                html += '<li class="address-map-relatePosition-item">';
                                html += '<i></i>';
                                html += '<span>'+res['name']+'</span>';
                                html += '<input type="hidden" name="address-map-item-name" value="'+res['name']+'">';
                                html += '<input type="hidden" name="address-map-item-address" value="'+res['address']+'">';
                                html += '<input type="hidden" name="address-map-item-lat" value="'+res['location']['lat']+'">';
                                html += '<input type="hidden" name="address-map-item-lng" value="'+res['location']['lng']+'">';
                                html += '</li>';
                            }
                            $(".address-map-relatePosition-list").html(html);
                        }
                    }else{
                        $(".address-map-relatePosition-list").html("");
                    }
                }
            });
        }
```
php调用百度接口的代码：

``` stylus
    //百度地图获取位置信息
	public function getBmapPositionInfo(){
		$query = $_POST['query'];//查询条件
		$location  = $_POST['location'];//以某个点开始
		$radius  = $_POST['radius'];//检索范围
		$output  = 'json';//返回数据格式
		$scope = 2;
		$filter = "sort_name:distance|sort_rule:1";//条件筛选，此处是按距离排序，从近到远
		$page_size = 20;//返回的数据条数
		$ak  = 'K79XEmKkbtOGh3f5HE2HZtwF';
		$url ='http://api.map.baidu.com/place/v2/search?query='.$query.'&location='.$location.'&radius='.$radius.'&scope='.$scope.'&filter='.$filter.'&page_size='.$page_size.'&output='.$output.'&ak='.$ak;
		$ch = curl_init($url) ;
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true) ; // 获取数据返回
		curl_setopt($ch, CURLOPT_BINARYTRANSFER, true) ; // 在启用 CURLOPT_RETURNTRANSFER 时候将获取数据返回
		$output = curl_exec($ch) ;
		return $output;
	}
```

重新定位：

``` stylus
		//拖动结束事件
        map.addEventListener("dragend",function(){
            locate();
        });
        //缩放结束事件
        map.addEventListener("zoomend", function () {
            locate();
        });
        //定位中心点
        function locate(){
            var centerPoint=map.getCenter();
            getAroundPosition(centerPoint);
        }
```









