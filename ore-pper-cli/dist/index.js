"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.features = exports.plugins = exports.commands = void 0;
const commands = [`${__dirname}/commands`];
exports.commands = commands;
const features = [`${__dirname}/features/code-feature.js`];
exports.features = features;
const plugins = ["@lesy/lesy-plugin-pilot"];
exports.plugins = plugins;
