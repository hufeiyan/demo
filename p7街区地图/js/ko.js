//store the initial location
var initLocations = [{
    title: '天安门',
    position: [116.39756, 39.908808]
}, {
    title: '前门',
    position: [116.397994, 39.900085]
}, {
    title: '天坛公园',
    position: [116.410886, 39.881998]
}, {
    title: '颐和园',
    position: [116.272852, 39.992273]
}, {
    title: '鸟巢',
    position: [116.396203, 39.993575]
}];

var locations = initLocations;

var ViewModel = function() {
    this.content = ko.observable("");
    this.locations = ko.observableArray(initLocations);
    this.clickPoint = function(point){
      console.log('clickPoint', point);
      showPointInfo(point);
    };
    this.result = ko.computed(function(){
      var self = this;
      var filterArr = this.locations().filter(function(e){
        return e.title.indexOf(self.content())>=0
      });
      locations = filterArr;
      renderMap();
      return filterArr;
    }, this)
};

ko.applyBindings(new ViewModel()); // This makes Knockout get to work
