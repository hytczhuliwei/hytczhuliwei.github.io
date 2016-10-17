---
layout: post
title:  "百度地图开发小结-PC端"
date:   2016-10-17
desc: "百度地图在PC中的应用"
keywords: "map、js、baidu"
categories: [js]
tags: [js,map]
icon: icon-javascript-alt
---

开发之前我们需要引用百度地图的js

``` stylus
<!--百度地图加载鼠标绘制工具-->
<script type="text/javascript" src="http://api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.js"></script>
<script type="text/javascript" src="http://api.map.baidu.com/library/DistanceTool/1.2/src/DistanceTool_min.js"></script>
<link rel="stylesheet" href="http://api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.css" />
<!--百度地图加载检索信息窗口-->
<script type="text/javascript" src="http://api.map.baidu.com/library/SearchInfoWindow/1.4/src/SearchInfoWindow_min.js"></script>
<link rel="stylesheet" href="http://api.map.baidu.com/library/SearchInfoWindow/1.4/src/SearchInfoWindow_min.css" />
<script type="text/javascript" src="http://api.map.baidu.com/library/GeoUtils/1.2/src/GeoUtils.js"></script>

```

首先，我们仍然需要先实例化一个地图对象，并加载相关控制器。

``` stylus
	var map = new BMap.Map("allmap"); 
	map.centerAndZoom(City, 13);
	map.addControl(new BMap.NavigationControl());//放大缩小指示器
  	map.addControl(new BMap.ScaleControl());//放大尺寸显示
 	map.addControl(new BMap.OverviewMapControl());//显示缩略图指示
 	map.addControl(new BMap.MapTypeControl());//地图类型装换 地图/卫星/三维
	map.enableScrollWheelZoom();//滚轮放大缩小
```
打开鼠标测距：

``` stylus
	//打开鼠标测距
	var myDis = new BMapLib.DistanceTool(map);
	$(".mouseDis").click(function(){
		myDis.open();  //开启鼠标测距
		//myDis.close();  //关闭鼠标测距大
	});
```
搜索地址：

``` stylus
	//搜索地址
	$("button.searchByAddress").click(function(){
		var address=$("input[name='address']").val();
		var pointInfo;
		var myGeo = new BMap.Geocoder();
		var local = new BMap.LocalSearch(map, {
			renderOptions:{map: map}
		});
		local.search(address);
		//标注搜索地点
		myGeo.getPoint(address, function(point){
			if (point) {
				map.centerAndZoom(point, 15);
				map.addOverlay(new BMap.Marker(point));//添加标注点
			}
		}, "全国");
	});
```

添加右键菜单：

``` stylus
//添加右击菜单
	function initMenu(){
		var contextMenu = new BMap.ContextMenu();
		var txtMenuItem = [
		  { text:'放大', callback:function(){map.zoomIn()} },
		  { text:'缩小',callback:function(){map.zoomOut()} },
		  { text:'放置到最大级',callback:function(){map.setZoom(18)} },
		  { text:'查看全国',callback:function(){map.setZoom(4)} },
		  { text:'在此添加点',
			   callback:function(p){
				    var marker = new BMap.Marker(p), px = map.pointToPixel(p);
					marker.enableDragging();
					marker.addEventListener("click", newMarker);  //点击填写新增点
				    //marker.addEventListener("dragend", markerDragend);
				    map.addOverlay(marker);
			   }
		  }];
		 for(var i=0; i < txtMenuItem.length; i++){
			  contextMenu.addItem(new BMap.MenuItem(txtMenuItem[i].text,txtMenuItem[i].callback,100));
			  if(i==1 || i==3) {
			   contextMenu.addSeparator();
			  }
		}
		map.addContextMenu(contextMenu);
	}
```

添加多边形区域（因业务需求，多边形未使用百度地图提供的多边形绘制工具绘制，而是采用线条绘制，最后由程序将线条围成多边形，所以这里显示也需要先将线条中的点拆为多边形。另一方面又需要多单个多边形操作，所以需要为它指定名称）：

``` stylus
var points = new Array();
$.each(item['polygon'],function(index,line){
	points[index] = new BMap.Point(line['lng'], line['lat']);
});
eval( " window.polygon_"+ item['id'] +" = new BMap.Polygon(points, styleOptions)");
map.addOverlay(eval( "polygon_"+ item['id']));
```
多边形样式：

``` stylus
	//多边形样式
	var styleOptions = {
		strokeColor:"transparent",    //边线颜色。
		fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
		strokeWeight: 3,       //边线的宽度，以像素为单位。
		strokeOpacity: 0.8,	   //边线透明度，取值范围0 - 1。
		fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
		strokeStyle: 'solid' //边线的样式，solid或dashed。
	}
```
实例化鼠标绘制工具：

``` stylus
	var drawingManager = new BMapLib.DrawingManager(map, {
		isOpen: false, //是否开启绘制模式
		enableDrawingTool: true, //是否显示工具栏
		drawingToolOptions: {
			anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
			offset: new BMap.Size(5, 5), //偏离值
			//工具栏上可以选择出现的绘制模式,将需要显示的DrawingType以数组型形式传入，如[BMAP_DRAWING_MARKER, BMAP_DRAWING_CIRCLE] 将只显示画点和画圆的选项
			drawingModes : [BMAP_DRAWING_POLYLINE],
		},
		circleOptions: styleOptions, //圆的样式
		polylineOptions: styleOptions, //线的样式
		polygonOptions: styleOptions, //多边形的样式
		rectangleOptions: styleOptions //矩形的样式
	});
    drawingManager.setDrawingMode(BMAP_DRAWING_POLYLINE);//设置绘制模式为画线
```
绘制多边形（其实是绘制线段，不过目标是多边形~）：

``` stylus
	//一个绘制动作完成后
    var overlaycomplete = function(e){
        if(e.overlay && e.overlay.toString() == "[object Polyline]"){//判断是否绘制线段
            e.overlay.addEventListener("mouseover", function () {//为覆盖物添加mouseover事件
                e.overlay.setStrokeColor("blue");
            });
            e.overlay.addEventListener("mouseout", function () {//为覆盖物添加mouseout事件
                e.overlay.setStrokeColor("red");
            });
            var sContent = '';
            //console.log(e.overlay);
            var path = e.overlay.getPath();//获取线段的路径
            //console.log(path);
            var points = new Array(path.length);
            var pointsJson = "[";
            for(var i =0; i<path.length;i++){//提取线段路径中的点
                var jsonTemp = "{";
                jsonTemp += '"lat":"' + path[i]['lat'] + '",';
                jsonTemp += '"lng":"' + path[i]['lng'] + '"},';
                pointsJson += jsonTemp;
            }
            pointsJson = pointsJson.substring(0,pointsJson.length-1);
            pointsJson += "]";
            //	console.log(pointsJson);
            $.ajax({//将线段路径中的点传到后台处理
                type: "POST",
                async:false,
                url: "__URL__/updatePolyline",
                data: 'points='+pointsJson+"&action=addline",
                success: function(msg){
                    if(msg.status == "1001"){
                        //sContent += msg.substr(2);
                    }else{
                        alert(msg.data);
                        return false;
                    }
                }
            });
            e.overlay.enableEditing = true;
        }
    }
	//添加鼠标绘制工具监听事件，用于获取绘制结果
	drawingManager.addEventListener('overlaycomplete', overlaycomplete);
    //鼠标右键判断删除线段
	map.addEventListener("rightclick",function(e){
		if(e.overlay && e.overlay.toString() == "[object Polyline]"){
			var path = e.overlay.getPath();
			//console.log(path);
			var points = new Array(path.length);
			var pointsJson = "[";
			for(var i =0; i<path.length;i++){
				var jsonTemp = "{";
				jsonTemp += '"lat":"' + path[i]['lat'] + '",';
				jsonTemp += '"lng":"' + path[i]['lng'] + '"},';
				pointsJson += jsonTemp;
			}
			pointsJson = pointsJson.substring(0,pointsJson.length-1);
			pointsJson += "]";
			//	console.log(pointsJson);
			$.ajax({
				type: "POST",
				async:false,
				url: "__URL__/updatePolyline",
				data: 'points='+pointsJson+"&action=deleteline",//action与添加的不同以示区别
				success: function(msg){
					if(msg.status == "1001"){
						//sContent += msg.substr(2);
					}else{
						alert(msg.data);
						return false;
					}
				}
			});
			map.removeOverlay(e.overlay);
		}
	});
```

附后台处理代码（这里的思路是：添加线段时，先判断是否已存在线段，如果没有则直接添加，否则根据线段的开始结束点，与已存在的线段进行比较，判断出最近的两点，然后将新增线段与已有的拼成一个整体。）：

``` stylus
    //更新临时线段组
    public function updatePolyline(){
    	//将绘制的线段点存到session中，绘制完成后提交session内容
        if(!isset($_SESSION["polyline"]) || !isset($_SESSION["changeStationId"])){
			unset($_SESSION['polyline']);
			unset($_SESSION['changeStationId']);
            $this->ajaxReturn("请先选择要修改的网点","","1002");
            exit();
        }
        $action = $_POST["action"];
        $points = $_POST["points"];
        $points = json_decode($points,true);//传递过来的线段信息
		$pointsSize = count($points) - 1;//线段中点的数量
        $startPoint = $points[0];//获取线段开始点
        $endPoint = $points[$pointsSize];//获取线段结束点
        $currenPoints = $_SESSION["polyline"];//session中的线段信息
		switch($action){
			case "addline"://添加线段
				if(!empty($currenPoints)){
					$mindis = 100000000;//最小距离
					$insertkey = 0;
                    $beforeinsertflag = 0;//判断是否在在线段前插入
					$turnLineflag = 0;//判断是否翻转线段
					foreach($currenPoints as $key=>$curVal){
						//判断两条线段的位置
						$sdis = $this->getDis($curVal[0]['lng'],$curVal[0]['lat'],$startPoint['lng'],$startPoint['lat']);//两开始点的距离
						$edis = $this->getDis($curVal[(count($curVal)-1)]['lng'],$curVal[(count($curVal)-1)]['lat'],$endPoint['lng'],$endPoint['lat']);//两结束点距离
						$sedis1 = $this->getDis($curVal[(count($curVal)-1)]['lng'],$curVal[(count($curVal)-1)]['lat'],$startPoint['lng'],$startPoint['lat']);//开始点与结束点距离
						$sedis2 = $this->getDis($curVal[0]['lng'],$curVal[0]['lat'],$endPoint['lng'],$endPoint['lat']);//开始点与结束点距离
						if($sedis1 < $mindis){//如果开始结束点的距离比最小距离小
							$mindis = $sedis1;
							$insertkey = $key;
							$beforeinsertflag = 0;
							$turnLineflag = 0;
						}
						if($sedis2 < $mindis){//如果开始结束点的距离比最小距离小
							$mindis = $sedis2;
							$insertkey = $key;
							$beforeinsertflag = 1;
							$turnLineflag = 0;
						}
						if($sdis < $mindis){//如果两开始点的距离比最小距离小
							$mindis = $sdis;
							$insertkey = $key;
							$beforeinsertflag = 1;
							$turnLineflag = 1;
						}
						if($edis < $mindis){//如果两结束点的距离比最小距离小
							$mindis = $edis;
							$insertkey = $key;
							$beforeinsertflag = 0;
							$turnLineflag = 1;
						}
					}
						if($turnLineflag){//翻转线段，将线段头尾对调
						$arrTemp = array();$n = 0;
						for($j = $pointsSize; $j >= 0; $j--){
							$arrTemp[$n++] = $points[$j];
						}
						$points = $arrTemp;
					}
					$newLines = array();//修改后的线段合集
					$changeFlag = false;//是否在此处插入新线段
					foreach($currenPoints as $k=>$curVal){
						if($k == $insertkey){//判断是否在插入点
							$changeFlag = true;
                            if($beforeinsertflag){//在线段前插入
                                $newLines[$k] = $points;
                                $curkey = $k + 1;
                                $newLines[$curkey] = $curVal;
                            }else{
                                $newLines[$k] = $curVal;
                                $curkey = $k + 1;
                                $newLines[$curkey] = $points;
                            }
							continue;
						}
						if($changeFlag){//判断是否已经插入新线段
							$curkey = $k + 1;
						}else{
							$curkey = $k;
						}
                        $newLines[$curkey] = $curVal;
					}
					$_SESSION["polyline"] = $newLines;//session中的线段信息
					$this->ajaxReturn("","","1001");
				}else{
					$currenPoints[0] = $points;
					$_SESSION["polyline"] = $currenPoints;
					$this->ajaxReturn("","","1001");
				}
				$this->ajaxReturn("success","","1001");
				break;
			case "deleteline":
                if(!empty($currenPoints)){
                    $delKey = 0;
                    foreach($currenPoints as $key=>$curVal){
						$curSize = count($curVal) - 1;
                        if(($points[0] == $curVal[0] && $points[$pointsSize] == $curVal[$curSize]) || ($points[0] == $curVal[$curSize] && $points[$pointsSize] == $curVal[0])){//比较两个坐标数组是否相同
                            $delKey = $key;
                        }else{
                            continue;
                        }
                    }
                    $newLines = array();//修改后的线段合集
                    $changeFlag = false;//是否在此处删除新线段
                    foreach($currenPoints as $k=>$curVal){
                        if($k == $delKey){//判断是否在删除点
                            $changeFlag = true;
                            continue;
                        }
                        if($changeFlag){//判断是否已经插入新线段
                            $curkey = $k - 1;
                        }else{
                            $curkey = $k;
                        }
                        $newLines[$curkey] = $curVal;
                    }
                    $_SESSION["polyline"] = $newLines;//session中的线段信息
                    $this->ajaxReturn("","","1001");
                }else{
                    $this->ajaxReturn("没有可删除的线段了，请添加","","1002");
                }
                $this->ajaxReturn("success","","1001");
				break;
			default:
				$this->ajaxReturn("类型错误，请重试","","1002");
				break;
		}
    }
```











