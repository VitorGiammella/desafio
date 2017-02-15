/* jshint node: true */

module.exports = function(environment) {
	var ENV = {
		modulePrefix: 'desafio',
		environment: environment,
		rootURL: '/',
		locationType: 'hash',
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. 'with-controller': true
			},
			EXTEND_PROTOTYPES: {
				// Prevent Ember Data from overriding Date.parse.
				Date: false
			}
		},

		APP: {
			productType: "hotels",
 			baseURL: 'dev/hotels/'
		},

		moment: {
    // To cherry-pick specific locale support into your application.
    // Full list of locales: https://github.com/moment/moment/tree/2.10.3/locale
    includeLocales: ['pt-br'],
		includeTimezone: 'none',
		locales: 'pt-BR',
		format: 'DD/MM/YYYY',
		alert: 'teste',
    allowEmpty: true
    },
	};

	if (environment === 'development') {
		ENV['ember-cli-mirage'] = {
				enabled: true
		};
		// ENV.apiHost = 'http://ec2-52-45-26-25.compute-1.amazonaws.com:5050',
		// ENV.apiNamespace = 'life';
		// ENV.APP.LOG_RESOLVER = true;
		// ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		// ENV.APP.LOG_VIEW_LOOKUPS = true;
	}

	if (environment === 'test') {
    ENV['ember-cli-mirage'] = {
      enabled: true
    };
    // Testem prefers this...
    ENV.locationType = 'none';
    // keep test console output quieter
		ENV.apiNamespace = 'dev';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
	}

	if (environment === 'local') {
		ENV['ember-cli-mirage'] = {
			enabled: false
		};
		ENV.apiHost = 'http://ec2-52-45-26-25.compute-1.amazonaws.com:5050',
		ENV.apiNamespace = 'dev';
	}

	if (environment === 'production') {
		ENV['ember-cli-mirage'] = {
				enabled: false
		};
		ENV.apiHost = 'http://ec2-52-45-26-25.compute-1.amazonaws.com:5050',
		ENV.apiNamespace = 'dev';
	}

	return ENV;
};
