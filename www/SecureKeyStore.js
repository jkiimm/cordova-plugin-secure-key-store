// JS interface
var exec = require('cordova/exec');

var SecureKeyStore = {
	serviceName: "SecureKeyStore",

	set: function(success, error, key, value) {
		exec(success, errorWrapper(error), this.serviceName, "set", [key, value]);
	},

	get: function(success, error, key) {
		exec(success, errorWrapper(error), this.serviceName, "get", [key]);
	},

	remove: function(success, error, key) {
		exec(success, errorWrapper(error), this.serviceName, "remove", [key]);
	}
};

module.exports = SecureKeyStore;

function errorWrapper (errorFn) {
  return (error) => {
    try {
      errorFn(JSON.parse(error))
    } catch (e) {
      errorFn(error)
    }
  }
}
