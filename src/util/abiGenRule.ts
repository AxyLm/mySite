const defaultClassName = "OneAutoGenFun";
const fnGenRule = {
	read: true,
	write: false,
	event: false,
	nameFilter: undefined,
};

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

export const classMain = (className = defaultClassName, body = "") => {
	return `
class ${className} extends IERC20 {
${body}
}
export default ${className}

export function create${className}(adr) {
    const adr = web3util.getContractAdr('${className}')
    return new ${className}(ABI_${className}, adr);
}

	`;
};

export const ImportCode = (className = defaultClassName) => {
	return `
import ABI_${className} from "./abis/${className}.json"
import IERC20 from "../common/IERC20.js"
import * as web3util from "../common/web3util.js"
import { ethers } from 'ethers';

	`;
};

export const autoGenClass = (className = defaultClassName, abiJson: abiFn[] = [], filter = fnGenRule) => {
	const ClassBody = abiJson
		.map((e) => {
			if (e.type === "function") {
				if (filter.nameFilter) {
					const nameFilter: string = filter.nameFilter;
					let nameFilters: string[] = [nameFilter];
					if (nameFilter.indexOf(",") > -1) {
						nameFilters = nameFilter.split(",");
					}

					if (nameFilters.every((filter) => e.name.indexOf(filter) == -1)) {
						return undefined;
					}
				}

				if (filter.read && e.stateMutability === "view") {
					const str = contractReadRule(e);
					return str;
				}

				if (filter.write && e.stateMutability === "nonpayable") {
					const str = contractWriteRule(e);
					return str;
				}
			}

			return undefined;
		})
		.filter((e) => !!e)
		.join("");
	return `
${ImportCode(className)}
${classMain(className, ClassBody)}`;
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
