/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module hast:util:has-property
 * @fileoverview Test suite for `has-property`.
 */

'use strict';

/* eslint-env node */

/*
 * Module dependencies.
 */

var test = require('tape');
var hasProperty = require('./index.js');

/*
 * Tests.
 */

test('hasProperty', function (t) {
    t.equal(
        hasProperty(null, 'alpha'),
        false,
        'should return `false` without node'
    );

    t.equal(
        hasProperty({
            'type': 'text',
            'value': 'alpha'
        }, 'bravo'),
        false,
        'should return `false` without `element`'
    );

    t.equal(
        hasProperty({
            'type': 'element'
        }, 'charlie'),
        false,
        'should return `false` without properties'
    );

    t.equal(
        hasProperty({
            'type': 'element',
            'properties': {}
        }, 'toString'),
        false,
        'should return `false` for prototypal properties'
    );

    t.equal(
        hasProperty({
            'type': 'element',
            'properties': {
                'id': 'delta'
            }
        }, 'echo'),
        false,
        'should return `false` if the property does not exist'
    );

    t.equal(
        hasProperty({
            'type': 'element',
            'properties': {
                'id': 'delta'
            }
        }),
        false,
        'should return `false` if without `name`'
    );

    t.equal(
        hasProperty({
            'type': 'element',
            'properties': {
                'id': 'delta'
            }
        }, 'id'),
        true,
        'should return `true` if the property does exist'
    );

    t.end();
});
