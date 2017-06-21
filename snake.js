function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 1;
    this.ySpeed = 0;
    this.speedValue = 5;
    this.points = new Point();
    this.snakePhoto = loadImage("assets/head.png");
    this.tailPhoto = loadImage("assets/tail.png");
    this.total = 0;
    this.tail = [];

    this.direction = function(x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }

    this.show = function() {
        for (var i = 0; i < this.tail.length; i++)
            image(this.tailPhoto, this.tail[i].x, this.tail[i].y, scl, scl);

        image(this.snakePhoto, this.x, this.y, scl, scl);
    }

    this.update = function() {
        if (this.total === this.tail.length)
            for (var i = 0; i < this.tail.length - 1; i++)
                this.tail[i] = this.tail[i + 1];

        this.tail[this.total - 1] = createVector(this.x, this.y);

        this.x = this.x + this.xSpeed * this.speedValue;
        this.y = this.y + this.ySpeed * this.speedValue;
        this.borderCrossing();
    }

    this.death = function() {
        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var distance = dist(this.x, this.y, pos.x, pos.y);
            if (distance < 1) {
                this.total = 0;
                this.tail = [];
                this.points.reset();
            }
        }
    }

    this.borderCrossing = function() {
        if (this.x > width - scl)
            this.x = 0;
        if (this.x < 0)
            this.x = width - scl;
        if (this.y > height - scl)
            this.y = 0;
        if (this.y < 0)
            this.y = height - scl;
    }

    this.eat = function(position) {
        var distance = dist(this.x, this.y, position.x, position.y);
        if (distance < 15) {
            this.points.grant();
            this.total++;
            return true;
        } else
            return false;
    }
}
