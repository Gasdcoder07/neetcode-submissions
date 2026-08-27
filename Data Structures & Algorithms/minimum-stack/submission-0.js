class MinStack {
    constructor() {
        this.stack = []
    }

    push(val) {
        if (this.stack.length === 0) {
            this.stack.push({ value: val, min: val })
        } else {
            let minVal = this.stack[this.stack.length - 1].min
            this.stack.push({ value: val, min: val < minVal ? val : minVal })
        }
    }

    /**
     * @return {void}
     */
    pop() {
        return this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1].value
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1].min
    }
}
