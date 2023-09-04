class Glow {
    #element;
    #size;
    #x;
    #y;

    constructor(element, size) {
        this.#element = element;
        this.#size = size;
        this.#x = null;
        this.#y = null;
    }

    update(x, y) {
        let speed = (!this.#x || !this.#y) ? 0
            : Math.sqrt((x - this.#x) ** 2 + (y - this.#y) ** 2);
        this.#x = x;
        this.#y = y;
        let proportionalSize = this.#size * Math.min(speed, 10) / 10;
        x = x - (proportionalSize / 2);
        y = y - (proportionalSize / 2);

        this.#element.style.height = `${proportionalSize}px`;
        this.#element.style.width = `${proportionalSize}px`;
        this.#element.style.left = `${x}px`;
        this.#element.style.top = `${y}px`;
    }
}
