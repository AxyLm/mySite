export const contractReadRule = (fn: abiFn) => {
	return `
${exegesisGen(fn)}
async ${fn.name}(${parameterGen(fn.inputs)}) {
	const res = await this.read(
			'${fn.name}',
			[${parameterGen(fn.inputs)}], {}
	)
	return res
}`;
};
export const contractWriteRule = (fn: abiFn) => {
	return `
${exegesisGen(fn)}
async ${fn.name}(${parameterGen(fn.inputs)}) {
	const res = await this.write(
			'${fn.name}',
			[${parameterGen(fn.inputs)}], {}
	)
	return res
}

`;
};
export const parameterGen = (params: abiParam[]) => {
	return params.map((e) => e.name).join(", ");
};
export const paramsGen = (params: abiParam[]) => {
	const str = params.map((e) => {
		return `\n * @param {${e.type}} ${e.name || e.type}`;
	});
	return str;
};

export const exegesisGen = (fn: abiFn) => {
	return `
/**
 * ${fn.name}${paramsGen(fn.inputs) || ""}
 * @returns res
 */`;
};

export type abiFn = {
	inputs: abiParam[];
	name: string;
	outputs: abiParam[];
	stateMutability: "view" | "nonpayable" | "event";
	type: "function" | "constructor";
};
export type abiParam = {
	internalType: string;
	name: string;
	type: string;
};
