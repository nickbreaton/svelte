export const reserved_keywords = new Set(['$$props', '$$restProps', '$$slots','$$actions']);

export function is_reserved_keyword(name) {
	return reserved_keywords.has(name);
}
