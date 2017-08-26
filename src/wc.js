const kg = 1
const lb = 2.2

export default function conversorLibras (cantidad) {
	let cantidadFinal = (cantidad * lb) / kg
	return cantidadFinal
}

export default function conversorKilos (cantidad) {
	let cantidadFinal = (cantidad * kg) / lb
	return cantidadFinal
}