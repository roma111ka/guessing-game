class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.range;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.range = Math.round((this.min + this.max) / 2);
        return this.range
    }

    lower() {
        this.max = this.range;
    }

    greater() {
        this.min = this.range;
    }
}

module.exports = GuessingGame;
