YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "FileCopier",
        "Meteor.methods",
        "Velocity",
        "Velocity                                                                                                     // 21\n/                                                                                                                    // 22\nVelocity = {};                                                                                                         // 23\n                                                                                                                      // 24\n(function () {                                                                                                         // 25\n 'use strict';                                                                                                        // 26\n                                                                                                                      // 27\n//////////////////////////////////////////////////////////////////////                                                 // 28\n// Init                                                                                                                // 29\n//                                                                                                                     // 30\n                                                                                                                      // 31\n if (process.env.NODE_ENV !== 'development' ||                                                                        // 32\n     process.env.VELOCITY === '0' ||                                                                                  // 33\n     process.env.IS_MIRROR) {                                                                                         // 34\n   DEBUG && console.log('[velocity] ' + (process.env.IS_MIRROR ? 'Mirror detected -' : '') + 'Not adding velocity core');\n   return;                                                                                                            // 36\n }                                                                                                                    // 37\n                                                                                                                      // 38\n var getAssetPath = function (packageName, fileName) {                                                                // 39\n   var serverAssetsPath = path.join(                                                                                  // 40\n     findAppDir(), '.meteor', 'local', 'build', 'programs', 'server', 'assets'                                        // 41\n   );                                                                                                                 // 42\n                                                                                                                      // 43\n   packageName = packageName.replace(':', '_');                                                                       // 44\n                                                                                                                      // 45\n   return path.join(serverAssetsPath, 'packages', packageName, fileName);                                             // 46\n };                                                                                                                   // 47\n                                                                                                                      // 48\n var _ = Npm.require('lodash'),                                                                                       // 49\n     fs = Npm.require('fs'),                                                                                          // 50\n     fse = Npm.require('fs-extra'),                                                                                   // 51\n     outputFile = Meteor.wrapAsync(fse.outputFile),                                                                   // 52\n     copyFile = Meteor.wrapAsync(fse.copy),                                                                           // 53\n     path = Npm.require('path'),                                                                                      // 54\n     url = Npm.require('url'),                                                                                        // 55\n     Rsync = Npm.require('rsync'),                                                                                    // 56\n     child_process = Npm.require('child_process'),                                                                    // 57\n     chokidar = Npm.require('chokidar'),                                                                              // 58\n     mkdirp = Npm.require('mkdirp'),                                                                                  // 59\n     _config = {},                                                                                                    // 60\n     _preProcessors = [],                                                                                             // 61\n     _postProcessors = [],                                                                                            // 62\n     _watcher,                                                                                                        // 63\n     FIXTURE_REG_EXP = new RegExp('-fixture.(js|coffee)$'),                                                           // 64\n     DEFAULT_FIXTURE_PATH = getAssetPath('velocity:core', 'default-fixture.js'),                                      // 65\n     MIRROR_PID_VAR_TEMPLATE = 'mirror.@PORT.pid';                                                                    // 66\n                                                                                                                      // 67\n Meteor.startup(function initializeVelocity () {                                                                      // 68\n   DEBUG && console.log('[velocity] app dir', Velocity.getAppPath());                                                 // 69\n   DEBUG && console.log('velocity config =', JSON.stringify(_config, null, 2));                                       // 70\n                                                                                                                      // 71\n   // kick-off everything                                                                                             // 72\n   _reset(_config);                                                                                                   // 73\n });                                                                                                                  // 74\n                                                                                                                      // 75\n//////////////////////////////////////////////////////////////////////                                                 // 76\n// Public Methods                                                                                                      // 77\n//                                                                                                                     // 78\n                                                                                                                      // 79\n _.extend(Velocity, {                                                                                                 // 80\n                                                                                                                      // 81\n   /**                                                                                                                // 82\nGet application directory path.                                                                                 // 83\n                                                                                                                // 84",
        "Velocity                                                                                                     // 21\n/                                                                                                                    // 22\nVelocity = {};                                                                                                         // 23\n                                                                                                                      // 24\n(function () {                                                                                                         // 25\n 'use strict';                                                                                                        // 26\n                                                                                                                      // 27\n//////////////////////////////////////////////////////////////////////                                                 // 28\n// Init                                                                                                                // 29\n//                                                                                                                     // 30\n                                                                                                                      // 31\n if (process.env.NODE_ENV !== 'development' ||                                                                        // 32\n   process.env.VELOCITY === '0' ||                                                                                    // 33\n   process.env.IS_MIRROR) {                                                                                           // 34\n   DEBUG && console.log('[velocity] ' + (process.env.IS_MIRROR ? 'Mirror detected -' : '') + 'Not adding velocity core');\n   return;                                                                                                            // 36\n }                                                                                                                    // 37\n                                                                                                                      // 38\n var getAssetPath = function (packageName, fileName) {                                                                // 39\n   var serverAssetsPath = path.join(                                                                                  // 40\n     findAppDir(), '.meteor', 'local', 'build', 'programs', 'server', 'assets'                                        // 41\n   );                                                                                                                 // 42\n                                                                                                                      // 43\n   packageName = packageName.replace(':', '_');                                                                       // 44\n                                                                                                                      // 45\n   return path.join(serverAssetsPath, 'packages', packageName, fileName);                                             // 46\n };                                                                                                                   // 47\n                                                                                                                      // 48\n var _ = Npm.require('lodash'),                                                                                       // 49\n     fs = Npm.require('fs'),                                                                                          // 50\n     fse = Npm.require('fs-extra'),                                                                                   // 51\n     outputFile = Meteor.wrapAsync(fse.outputFile),                                                                   // 52\n     copyFile = Meteor.wrapAsync(fse.copy),                                                                           // 53\n     path = Npm.require('path'),                                                                                      // 54\n     url = Npm.require('url'),                                                                                        // 55\n     Rsync = Npm.require('rsync'),                                                                                    // 56\n     child_process = Npm.require('child_process'),                                                                    // 57\n     chokidar = Npm.require('chokidar'),                                                                              // 58\n     mkdirp = Npm.require('mkdirp'),                                                                                  // 59\n     _config = {},                                                                                                    // 60\n     _preProcessors = [],                                                                                             // 61\n     _postProcessors = [],                                                                                            // 62\n     _watcher,                                                                                                        // 63\n     FIXTURE_REG_EXP = new RegExp('-fixture.(js|coffee)$'),                                                           // 64\n     DEFAULT_FIXTURE_PATH = getAssetPath('velocity:core', 'default-fixture.js'),                                      // 65\n     MIRROR_PID_VAR_TEMPLATE = 'mirror.@PORT.pid';                                                                    // 66\n                                                                                                                      // 67\n Meteor.startup(function initializeVelocity () {                                                                      // 68\n   DEBUG && console.log('[velocity] app dir', Velocity.getAppPath());                                                 // 69\n   DEBUG && console.log('velocity config =', JSON.stringify(_config, null, 2));                                       // 70\n                                                                                                                      // 71\n   // kick-off everything                                                                                             // 72\n   _reset(_config);                                                                                                   // 73\n });                                                                                                                  // 74\n                                                                                                                      // 75\n//////////////////////////////////////////////////////////////////////                                                 // 76\n// Public Methods                                                                                                      // 77\n//                                                                                                                     // 78\n                                                                                                                      // 79\n _.extend(Velocity, {                                                                                                 // 80\n                                                                                                                      // 81\n   /**                                                                                                                // 82\nGet application directory path.                                                                                 // 83\n                                                                                                                // 84",
        "_symlinkPackagesDirIfPresent                                                                              // 1022",
        "registerTestingFramework                                                                              // 153"
    ],
    "modules": [
        "Velocity",
        "Velocity                                                                                                    __ 10\n_                                                                                                                    __ 11\n_**                                                                                                                    __ 12\nThe `Velocity` object provides a common API for test frameworks to report                                           __ 13\ntest results.  Frameworks can also request assets, such as a copy of the                                            __ 14\nuser's application (the 'mirror') in which tests can be safely run without                                          __ 15\nimpacting on-going development.                                                                                     __ 16\n                                                                                                                    __ 17\nTest results and log activity are reported via                                                                      __ 18\n{{#crossLink \"Meteor.methods\"}}Meteor methods{{_crossLink}}.                                                        __ 19\n                                                                                                                    __ 20"
    ],
    "allModules": [
        {
            "displayName": "Velocity",
            "name": "Velocity"
        },
        {
            "displayName": "Velocity                                                                                                    // 10\n/                                                                                                                    // 11\n/**                                                                                                                    // 12\nThe `Velocity` object provides a common API for test frameworks to report                                           // 13\ntest results.  Frameworks can also request assets, such as a copy of the                                            // 14\nuser's application (the 'mirror') in which tests can be safely run without                                          // 15\nimpacting on-going development.                                                                                     // 16\n                                                                                                                    // 17\nTest results and log activity are reported via                                                                      // 18\n{{#crossLink \"Meteor.methods\"}}Meteor methods{{/crossLink}}.                                                        // 19\n                                                                                                                    // 20",
            "name": "Velocity                                                                                                    __ 10\n_                                                                                                                    __ 11\n_**                                                                                                                    __ 12\nThe `Velocity` object provides a common API for test frameworks to report                                           __ 13\ntest results.  Frameworks can also request assets, such as a copy of the                                            __ 14\nuser's application (the 'mirror') in which tests can be safely run without                                          __ 15\nimpacting on-going development.                                                                                     __ 16\n                                                                                                                    __ 17\nTest results and log activity are reported via                                                                      __ 18\n{{#crossLink \"Meteor.methods\"}}Meteor methods{{_crossLink}}.                                                        __ 19\n                                                                                                                    __ 20",
            "description": "Copied from Meteor tools/files.js.                                                                                  // 2\n                                                                                                                    // 3\nIncludes:                                                                                                           // 4\n- Helper to find the app root path                                                                                  // 5\n/                                                                                                                    // 6\n                                                                                                                      // 7\nvar path = Npm.require('path');                                                                                        // 8\nvar fs = Npm.require('fs');                                                                                            // 9\n                                                                                                                      // 10\n// given a predicate function and a starting path, traverse upwards                                                    // 11\n// from the path until we find a path that satisfies the predicate.                                                    // 12\n//                                                                                                                     // 13\n// returns either the path to the lowest level directory that passed                                                   // 14\n// the test or null for none found. if starting path isn't given, use                                                  // 15\n// cwd.                                                                                                                // 16\nvar findUpwards = function (predicate, startPath) {                                                                    // 17\n var testDir = startPath || process.cwd();                                                                            // 18\n while (testDir) {                                                                                                    // 19\n   if (predicate(testDir)) {                                                                                          // 20\n     break;                                                                                                           // 21\n   }                                                                                                                  // 22\n   var newDir = path.dirname(testDir);                                                                                // 23\n   if (newDir === testDir) {                                                                                          // 24\n     testDir = null;                                                                                                  // 25\n   } else {                                                                                                           // 26\n     testDir = newDir;                                                                                                // 27\n   }                                                                                                                  // 28\n }                                                                                                                    // 29\n if (!testDir)                                                                                                        // 30\n   return null;                                                                                                       // 31\n                                                                                                                      // 32\n return testDir;                                                                                                      // 33\n};                                                                                                                     // 34\n                                                                                                                      // 35\n// Determine if 'filepath' (a path, or omit for cwd) is within an app                                                  // 36\n// directory. If so, return the top-level app directory.                                                               // 37\nfindAppDir = function (filepath) {                                                                                     // 38\n var isAppDir = function (filepath) {                                                                                 // 39\n   // XXX once we are done with the transition to engine, this should                                                 // 40\n   // change to: `return fs.existsSync(path.join(filepath, '.meteor',                                                 // 41\n   // 'release'))`                                                                                                    // 42\n                                                                                                                      // 43\n   // .meteor/packages can be a directory, if .meteor is a warehouse                                                  // 44\n   // directory.  since installing meteor initializes a warehouse at                                                  // 45\n   // $HOME/.meteor, we want to make sure your home directory (and all                                                // 46\n   // subdirectories therein) don't count as being within a meteor app.                                               // 47\n   try { // use try/catch to avoid the additional syscall to fs.existsSync                                            // 48\n     return fs.statSync(path.join(filepath, '.meteor', 'packages')).isFile();                                         // 49\n   } catch (e) {                                                                                                      // 50\n     return false;                                                                                                    // 51\n   }                                                                                                                  // 52\n };                                                                                                                   // 53\n                                                                                                                      // 54\n return findUpwards(isAppDir, filepath);                                                                              // 55\n};                                                                                                                     // 56\n                                                                                                                      // 57\n/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n}).call(this);\n\n\n\n\n\n\n(function () {\n\n/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n//                                                                                                                     //\n// packages/velocity:core/core.js                                                                                      //\n//                                                                                                                     //\n/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n                                                                                                                      //\n/*jshint -W117, -W030, -W016 */                                                                                        // 1\n/* global                                                                                                              // 2\nVelocity:true,                                                                                                        // 3\nDEBUG:true                                                                                                            // 4\n/                                                                                                                    // 5\n                                                                                                                      // 6\nDEBUG = !!process.env.VELOCITY_DEBUG;                                                                                  // 7\n                                                                                                                      // 8\n/**                                                                                                                    // 9"
        }
    ]
} };
});