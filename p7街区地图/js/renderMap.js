function renderMap() {
    // 创建地图对象
    var map = new AMap.Map('map', {
        center: [116.397428, 39.90923],
        zoom: 11
    });
    var infoWindow = new AMap.InfoWindow({
        offset: new AMap.Pixel(0, -30)
    });

    mark = function(locations) {
            markers = [];
            map = new AMap.Map('map', {
                center: [116.397428, 39.90923],
                zoom: 11
            });
            for (var i = 0; i < locations.length; i++) {
                var position = locations[i].lnglat;
                var title = locations[i].name;
                var marker = new AMap.Marker({
                    map: map,
                    position: position,
                    title: title,
                    offset: new AMap.Pixel(-12, -36)
                });
                marker.content = '我是' + title;
                marker.on('click', markerClick);
                marker.setAnimation('AMAP_ANIMATION_DROP');
                markers.push(marker);
            }
            map.setFitView();
        }
        // 点击事件方法主体
    function markerClick(e) {
        handleClick(e.target);
    }

    function handleClick(marker) {
        marker.setAnimation('AMAP_ANIMATION_BOUNCE');
        // 约 2 秒钟后停止动画
        window.setTimeout(function() {
            marker.setAnimation(null);
        }, 2300);
        infoWindow.setContent(marker.content);
        infoWindow.open(map, marker.getPosition());
    }

    search = function(text, callback) {
        AMap.service('AMap.PlaceSearch', function() { //回调函数
            //实例化PlaceSearch
            placeSearch = new AMap.PlaceSearch();
            //关键字查询
            var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
                pageSize: 5,
                pageIndex: 1,
                city: "010", //城市
            });
            placeSearch.search(text, function(status, result) {
                if (result.info === "OK" && result.poiList.count > 0) {
                    var pois = result.poiList.pois
                    var arr = [];
                    pois.map(e => {
                        lnglat = [];
                        lnglat.push(e.location.lng);
                        lnglat.push(e.location.lat);
                        arr.push({
                            name: e.name,
                            lnglat: lnglat
                        })
                    })
                    callback(arr);
                }
            });
        })
    }

    //显示标记信息
    showPointInfo = function(point) {
        if (point && point.name) {
            var clickedMarker = markers.filter((e) => {
                return e.content === "我是" + point.name;
            })[0];
            handleClick(clickedMarker);
            map.setFitView();
        }
    }

}
