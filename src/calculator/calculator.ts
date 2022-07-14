export function Add(numbers: string): number {
    if (numbers === '') return 0;

    const parsedNumbers = numbers.split(/[,\n]/g).map(Number);
    return parsedNumbers.reduce((prev, curr) => prev + curr, 0);
}