export function roundNumber(value: number, decimalPlaces: number = 2): number {
	if (!Number.isInteger(decimalPlaces) || decimalPlaces < 0) {
		throw new Error("decimalPlaces must be an integer >= 0");
	}

	const factor = 10 ** decimalPlaces;
	const epsilon = 1e-10; // Work around to prevent floating point errors in javascript
	return Math.round((value + epsilon) * factor) / factor;
}
