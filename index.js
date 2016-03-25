'use strict';

const safeEval = require('safe-eval');

function noop() { }

module.exports = ({ app }) => {

	function search(query, res) {
		if (query === '') {
			app.setInput('/calc ');
		}

		res.add({
			id: Symbol(),
			title: safeEval(query),
			desc: query
		});
	}

	return {
		startup: noop,
		search,
		execute: noop
	};
};
