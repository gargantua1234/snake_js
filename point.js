function Point() {
    this.pointPlaceHolder = document.querySelector("h1 span");
    this.points = 10;

    this.grant = function() {
        var actual = parseInt(this.pointPlaceHolder.textContent) + this.points;
        this.pointPlaceHolder.innerHTML = actual;
    }

    this.reset = function() {
        this.pointPlaceHolder.innerHTML = 0;
    }
}
