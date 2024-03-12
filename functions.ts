// ex5
function greet(name: string): string {
  return "Hello " + name;
}
function mutiply(a: number, b: number): number {
  return a * b;
}
// ex6
function createEmail(to: string, subject: string = "No Subject"): string {
  return "To: " + to + " Subject: " + subject;
}
function add(x: number, y: number, z?: number): number {
  return z ? x + y + z : x + y;
}

// ex7
function concatenateString(...strings: string[]): string {
  return strings.reduce((acc, addr) => acc + addr);
}

function maxNumber(...numbers: number[]): number {
  return Math.max(...numbers);
}
