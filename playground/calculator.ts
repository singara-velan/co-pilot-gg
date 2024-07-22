class calculator {
    add(x: number, y: number): number {
        return x + y;
    }
    subtract(x: number, y: number): number {
        return x - y;
    }
    multiply(x: number, y: number): number {
        return x * y;
    }
    divide(x: number, y: number): number {
        return x / y;
    }

    fibonacci(n: number): number {
        if (n <= 1) {
            return n;
        }
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
}