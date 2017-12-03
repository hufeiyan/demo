var ViewModel = function () {
  var isMin = $(window).width() > 750 ? false : true;
  this.isMin = ko.observable(isMin);
  this.isShow = ko.observable(false);
  this.content = ko.observable();
  this.locations = ko.observableArray();
  this.clickPoint = function (point) {
    showPointInfo(point);
  };

  // this.search = function() {
  //     var content = this.content();
  //     search(content, data => {
  //         this.locations(data);
  //         mark(this.locations());
  //     });
  // };
  this.content.extend({ rateLimit: 50 });
  this.content.subscribe((searchContext)=> {
    var self = this;
    search(searchContext, data => {
      self.locations(data);
      mark(self.locations());
    });
  })


  this.show = function () {
    var isMin = this.isMin();
    this.isMin(!isMin);
    this.isShow(isMin);
  };

};
ko.applyBindings(new ViewModel()); // This makes Knockout get to work