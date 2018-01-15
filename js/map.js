function Map() {
    this.init = function (t) {
        this.defaultParams = {
            selector: "#map",
            zoom: 7,
            center: [55.76, 37.64],
            placemarks: []
        }, this.finalParams = this.defaultParams;
        for (var e in t)t.hasOwnProperty(e) && void 0 !== t[e] && (this.finalParams[e] = t[e]);
        this.options = this.finalParams, ymaps.ready(this.run.bind(this))
    }, this.run = function () {
        if ("string" == typeof this.options.center) {
            ymaps.geocode(this.options.center).done(function (t) {
                this.map = new ymaps.Map(this.getMapBox(), {
                    center: [t.geoObjects.get(0).geometry.getCoordinates()[0], t.geoObjects.get(0).geometry.getCoordinates()[1]],
                    zoom: this.options.zoom
                }), this.printPlacemarks()
            }.bind(this), function () {
                console.log("РџСЂРѕРёР·РѕС€Р»Р° РѕС€РёР±РєР°.")
            })
        } else this.map = new ymaps.Map(this.getMapBox(), {center: this.options.center, zoom: this.options.zoom})
    }, this.printPlacemarks = function () {
        this.options.placemarks.forEach(function (t) {
            this.addPlacemark(t.address, t.properties, t.options)
        }.bind(this))
    }, this.addPlacemark = function (t, e, o) {
        var s = ymaps.geoQuery(ymaps.geocode(t)).slice(0, 1);
        s.then(function () {
            o && o.forEach(function (t) {
                s.setOptions(t.key, t.value)
            }), e && e.forEach(function (t) {
                s.setProperties(t.key, t.value)
            }), s.addToMap(this.map)
        }.bind(this))
    }, this.getMapBox = function () {
        return "object" == typeof this.options.selector ? this.options.selector : "#" == this.options.selector[0] ? document.getElementById(this.options.selector.slice(1)) : document.getElementsByClassName(this.options.selector.slice(1))
    }
}