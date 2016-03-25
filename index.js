'use strict';

const safeEval = require('safe-eval');

const pluginCommand = '/calc';

function noop() { }

module.exports = ({ app }) => {

	function search(query, res) {
		if (query === '') {
			app.setInput(`${pluginCommand} `);
		}

		const result = Number.parseFloat(safeEval(query));

		if (Number.isNaN(result)) {
			return;
		}

		res.add({
			id: Symbol(),
			title: result,
			payload: result,
			desc: query
		});
	}

	function execute(id, payload) {
		app.setInput(`${pluginCommand} ${payload}`);
	}

	return {
		startup: noop,
		search,
		execute
	};
};
