function renderMap() {
    var markers = [];
    // 创建地图对象
    var map = new AMap.Map('map', {
        center: [116.397428, 39.90923],
        zoom: 11
    });

    // 添加 工具条
    map.plugin(["AMap.ToolBar"], function() {
        map.addControl(new AMap.ToolBar());
    });

    // 创建 默认信息窗体
    var infoWindow = new AMap.InfoWindow({
        offset: new AMap.Pixel(0, -30)
    });

    // 添加标记并绑定标记事件
    for (var i = 0; i < locations.length; i++) {
        var position = locations[i].position;
        var title = locations[i].title;

        var marker = new AMap.Marker({
            map: map,
            position: position,
            title: title,
            offset: new AMap.Pixel(-12, -36)
        });

        markers.push(marker);
        markers[i].setMap(null);
        marker.content = '我是' + title;
        marker.on('click', markerClick);
        marker.setAnimation('AMAP_ANIMATION_DROP');
    }

    // 点击事件方法主体
    function markerClick(e) {
        infoWindow.setContent(e.target.content);
        infoWindow.open(map, e.target.getPosition());
    }

    // 显示标记方法主体
    function showListings() {
        console.log('mark', markers);
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
        map.setFitView();
    }

    // 隐藏标记方法主体
    function hideListings() {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
    }

    showPointInfo = function(point){
      if(point && point.title){
        var self = this;
        console.log('markers', markers);
        var thePoint = markers.filter(function(e){
          return e.content === "我是"+point.title
        })[0];
        console.log('thePoint', thePoint);
        infoWindow.setContent(thePoint.content);
        infoWindow.open(map, thePoint.getPosition());
      }
    }
    showListings();
}
