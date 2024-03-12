namespace Calculator {
    export class BasicCalculator {
        add(a: number, b: number): number {
            return a + b;
        }
        subtract(a: number, b: number): number {
            return a - b;
        }
        multiply(a: number, b: number): number {
            return a * b;
        }
        divide(a: number, b: number): number {
            return b !== 0 ? a / b : 0;
        }
    }
}
