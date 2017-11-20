var pageStart = Date.now();
var navSupport = !(!('performance' in window) || !('timing' in window.performance) || !('navigation' in window.performance));

function imageLoadTime() {
    var lapsed = navSupport ? window.performance.now() : Date.now() - pageStart;
    document.getElementById("imgTiming").innerHTML = ((lapsed) / 1000).toFixed(2)
}