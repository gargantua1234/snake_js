function Fruit() {
    this.x = floor(random() * (width - 40) + scl);
    this.y = floor(random() * (height - 40) + scl);
    this.foto = loadImage("assets/fruit.png");

    this.show = function() {
        image(this.foto, this.x, this.y, scl, scl);
    }

    this.setX = function() {
        return floor(random() * (width - 60) + scl);
    }
    this.setY = function() {
        return floor(random() * (height - 60) + scl);
    }

    this.pickLocation = function() {
        this.x = this.setX();
        this.y = this.setY();
    }

}
