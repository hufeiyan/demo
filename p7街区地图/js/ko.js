var ViewModel = function() {
    var isMin = $(window).width() > 750 ? false : true;
	this.isMin = ko.observable(isMin);
    this.isShow = ko.observable(false);
    this.content = ko.observable("杭州");
    this.locations = ko.observableArray();
    this.clickPoint = function(point) {
        showPointInfo(point);
    };

    this.search = function() {
        var content = this.content();
        search(content, data => {
            this.locations(data);
            mark(this.locations());
        });
    };

    this.show = function() {
        var isMin = this.isMin();
        this.isMin(!isMin);
        this.isShow(isMin);
    };

};
ko.applyBindings(new ViewModel()); // This makes Knockout get to work
