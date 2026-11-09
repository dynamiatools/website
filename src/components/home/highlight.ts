// Tiny syntax highlighter for the short samples on the home page.
// It returns an array of HTML lines, one per source line, with three token classes:
// k = keyword, a = annotation or string, c = comment. Everything else is plain text.

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const keywords: Record<string, string[]> = {
	java: ['package', 'import', 'public', 'private', 'class', 'extends', 'new', 'return', 'void', 'static', 'if', 'else', 'instanceof', 'final'],
	ts: ['import', 'from', 'const', 'await', 'async', 'export', 'new', 'return', 'type'],
	yaml: [],
	xml: [],
	sh: [],
};

type Lang = keyof typeof keywords;

export function highlight(source: string, lang: Lang): string[] {
	const kw = keywords[lang];
	const parts: string[] = [];
	// comment | string | annotation (java) | key of yaml | word
	if (lang === 'sh') {
		parts.push('(#.*$)');
	} else if (lang === 'yaml') {
		parts.push('(#.*$)');
		parts.push('(^\\s*[A-Za-z_.]+(?=:))');
		parts.push('("[^"]*"|\'[^\']*\')');
	} else if (lang === 'xml') {
		parts.push('(&lt;!--.*?--&gt;)');
		parts.push('(&lt;/?[A-Za-z][\\w.-]*|/?&gt;)');
	} else {
		parts.push('(//.*$)');
		parts.push('("(?:[^"\\\\]|\\\\.)*"|\'(?:[^\'\\\\]|\\\\.)*\')');
		parts.push('(@[A-Za-z]+)');
	}
	if (kw.length) parts.push('\\b(' + kw.join('|') + ')\\b');
	const re = new RegExp(parts.join('|'), 'gm');

	return source.split('\n').map((line) => {
		const safe = escapeHtml(line);
		return safe.replace(re, (match, ...groups) => {
			const idx = groups.findIndex((g) => g !== undefined && typeof g === 'string');
			let cls = 'k';
			if (lang === 'sh') cls = 'c';
			else if (lang === 'yaml') cls = idx === 0 ? 'c' : idx === 1 ? 'k' : 'a';
			else if (lang === 'xml') cls = idx === 0 ? 'c' : 'k';
			else cls = idx === 0 ? 'c' : idx === 1 || idx === 2 ? 'a' : 'k';
			return `<span class="${cls}">${match}</span>`;
		});
	});
}
