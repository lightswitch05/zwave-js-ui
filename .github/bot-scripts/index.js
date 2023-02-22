module.exports = {
	checkAuthorized: (...args) => require("./checkAuthorized")(...args),
	fixLintFeedback: (...args) => require("./fixLintFeedback")(...args),
	getFixLintInfo: (...args) => require("./getFixLintInfo")(...args),
	rebaseFeedback: (...args) => require("./rebaseFeedback")(...args),
	renameCommitGetPRInfo: (...args) =>
		require("./renameCommitGetPRInfo")(...args),
	renameCommitCheck: (...args) => require("./renameCommitCheck")(...args),
	renameCommitFeedback: (...args) =>
		require("./renameCommitFeedback")(...args),
	nodeVersionAudit: () => require("./nodeVersionAudit")(),
};
