class Spirograph {
    static STATUS = {
        STOPPED: 0,
        PROCESSING: 1,
        RUNNING: 2,
        LOCKED: 3,
    }

    #canvas;
    #glow;
    #context;
    #configs;
    #theta1 = 0;
    #extraAnimConfig;
    #clear = false;
    #clearCount = 0;
    #style;
    #stop = false;
    status = Spirograph.STATUS.STOPPED;
    #colored = false;

    constructor(canvas, configs, style = null, extra = {}) {
        this.#canvas = canvas;
        this.#glow = extra.glow;
        this.#context = canvas.getContext("2d");
        this.#configs = configs;
        this.#style = style;

        this.status = Spirograph.STATUS.LOCKED;
        this.#configs.x0 = canvas.width / 2;
        this.#configs.y0 = canvas.height / 2;
    }

    startAnimation(extraAnim = false, extraAnimConfig = {}) {
        if (this.status === Spirograph.STATUS.LOCKED && !extraAnim) {
            return false;
        }
        this.status = Spirograph.STATUS.STOPPED;

        if (this.status === Spirograph.STATUS.RUNNING) {
            return false;
        }
        else if (this.status === Spirograph.STATUS.PROCESSING) {
            this.#stop = false;
            return;
        }
        this.status = Spirograph.STATUS.PROCESSING;
        this.#stop = false;

        if (this.#style && !this.#colored) {
            this.#context.fillStyle = this.#style.getPropertyValue('--canvas');
            this.#context.fillRect(0, 0, this.#canvas.width, this.#canvas.height);
            this.#colored = true;
        }

        if (!extraAnim || extraAnimConfig.isMobile) {
            requestAnimationFrame(this.#animation.bind(this));
            return;
        }

        // Draw cursor
        this.#extraAnimConfig = extraAnimConfig;
        this.#extraAnimConfig.sensitivity = 10;
        this.#extraAnimConfig.color = extraAnimConfig.colorAccent;
        let react = extraAnimConfig.element.getBoundingClientRect();

        this.#context.beginPath();
        this.#context.strokeStyle = extraAnimConfig.colorAccent;
        this.#context.lineWidth = 3;
        this.#context.moveTo(react.right, react.top);
        this.#context.lineTo(react.right, react.bottom);
        this.#extraAnimConfig.x = react.right;
        this.#extraAnimConfig.y = react.bottom;
        this.#extraAnimConfig.targetX = react.left;
        this.#context.stroke();
        requestAnimationFrame(this.#preAnimation.bind(this));
    }

    stopAnimation() {
        if (this.status === Spirograph.STATUS.LOCKED) {
            return false;
        }
        else if (this.status === Spirograph.STATUS.STOPPED) {
            return false;
        }
        this.status = Spirograph.STATUS.PROCESSING;
        this.#stop = true;
    }

    #preAnimation() {
        if (this.#clear) {
            if (this.#clearCount > 0) {
                this.#context.fillStyle = this.#style ? this.#style.getPropertyValue('--canvas-clear') : "rgba(0, 0, 0, 0.05)";
                this.#context.fillRect(0, 0, this.#canvas.width, this.#canvas.height);
                this.#clearCount--;
                requestAnimationFrame(this.#preAnimation.bind(this));
                return;
            }
            this.#theta1 = 0;
            requestAnimationFrame(this.#animation.bind(this));
            return;
        }
        this.#context.beginPath();
        this.#context.strokeStyle = this.#extraAnimConfig.color;
        this.#extraAnimConfig.color = shadeColor(this.#extraAnimConfig.color, this.#extraAnimConfig.shadeAnimPercentage);
        this.#context.lineWidth = 3;

        let x = this.#extraAnimConfig.x;
        let y = this.#extraAnimConfig.y;
        this.#context.moveTo(x, y);
        x = x - this.#extraAnimConfig.sensitivity;
        this.#extraAnimConfig.x = x;
        this.#context.lineTo(x, y);
        this.#context.stroke();

        this.#context.fillStyle = this.#style ? this.#style.getPropertyValue('--canvas-alpha3') : "rgba(0, 0, 0, 0.03)";
        this.#context.fillRect(0, 0, this.#canvas.width, this.#canvas.height);

        if (x <= this.#extraAnimConfig.targetX) {
            this.#clear = true;
            this.#clearCount = 30;
        }
        requestAnimationFrame(this.#preAnimation.bind(this));
    }

    #animation() {
        if (this.#stop) {
            this.status = Spirograph.STATUS.STOPPED;
            return;
        }
        this.status = Spirograph.STATUS.RUNNING;

        if (this.#clearCount > 0) {
            this.#context.fillStyle = this.#style ? this.#style.getPropertyValue('--canvas-clear') : "rgba(0, 0, 0, 0.05)";
            this.#context.fillRect(0, 0, this.#canvas.width, this.#canvas.height);
            this.#clearCount--;
            requestAnimationFrame(this.#animation.bind(this));
            return;
        }

        let x, y, theta2;
        // this.#context.save();
        this.#context.strokeStyle = this.#configs.color;
        this.#context.lineWidth = this.#configs.lineWidth ?? 3;

        this.#context.beginPath();

        theta2 = this.#getTheta2(this);
        x = this.#getX(this, theta2);
        y = this.#getY(this, theta2);
        this.#context.moveTo(x, y);

        this.#theta1 += this.#configs.sensitivity;

        theta2 = this.#getTheta2(this);
        x = this.#getX(this, theta2);
        y = this.#getY(this, theta2);
        this.#context.lineTo(x, y);
        this.#context.closePath();

        // this.#context.shadowColor = "#fafafa";
        // this.#context.shadowOffsetX = 0;
        // this.#context.shadowOffsetY = 0;
        // this.#context.shadowBlur = 5;

        this.#context.stroke();
        this.#context.fill();

        // this.#context.shadowColor = 0;
        // this.#context.shadowOffsetX = 0;
        // this.#context.shadowOffsetY = 0;
        // this.#context.shadowBlur = 0;
        // this.#context.fillStyle = this.#style ? this.#style.getPropertyValue('--canvas-alpha1') : "rgba(0, 0, 0, 0.01)";
        // this.#context.fillRect(0, 0, this.#canvas.width, this.#canvas.height);

        this.#context.clearRect(0,0,width,height);
        this.#context.globalAlpha = .9;
        this.#context.drawImage(canvas1,0,0);
        this.#context.clearRect(0,0,width,height);
        this.#context.drawImage(canvas2,0,0);

        // Glow
        this.#glow.update(x, y);

        if (this.#configs.rotationCount !== 0 && this.#theta1 >= 2 * Math.PI * this.#configs.rotationCount) {
            this.#theta1 = 0;
            this.#clearCount = 100;
        }
        requestAnimationFrame(this.#animation.bind(this))
    }

    #getTheta2(context) {
        return -(context.#theta1 * (context.#configs.R1 - context.#configs.R2) / context.#configs.R2);
    }

    #getX(context, theta2) {
        return context.#configs.x0 + (context.#configs.R1 - context.#configs.R2) * Math.cos(context.#theta1) + context.#configs.r * Math.cos(theta2);
    }

    #getY(context, theta2) {
        return context.#configs.y0 + (context.#configs.R1 - context.#configs.R2) * Math.sin(context.#theta1) + context.#configs.r * Math.sin(theta2)
    }
}

// shadeColor() is modified version of func at https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function shadeColor(color, percent) {
    let result = "#";
    let RGB = [
        parseInt(color.substring(1, 3), 16),
        parseInt(color.substring(3, 5), 16),
        parseInt(color.substring(5, 7), 16),
    ];

    for (let i = 0; i < RGB.length; i++) {
        let rgb = RGB[i];
        rgb = (percent > 0 ? rgb : 0) + (percent > 0 ? 255 : rgb) * (percent) / 100;
        rgb = Math.round((rgb < 255) ? rgb : 255);
        result += ((rgb.toString(16).length === 1) ? "0" + rgb.toString(16) : rgb.toString(16));
    }

    return result;
}

// Researched resources:
// https://codepen.io/nzamarreno/pen/MmYdzm
// https://en.wikipedia.org/wiki/Spirograph
// https://www.maissan.net/articles/javascript-spirograph