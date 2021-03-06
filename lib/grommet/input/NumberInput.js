'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NumberInput = require('grommet/components/NumberInput');

var _NumberInput2 = _interopRequireDefault(_NumberInput);

var _FieldTitle = require('../../util/FieldTitle');

var _FieldTitle2 = _interopRequireDefault(_FieldTitle);

var _FormField = require('grommet/components/FormField');

var _FormField2 = _interopRequireDefault(_FormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An Input component for a number
 *
 * @example
 * <NumberInput source="nb_views" />
 *
 * You can customize the `step` props (which defaults to "any")
 * @example
 * <NumberInput source="nb_views" step={1} />
 *
 * The object passed as `options` props is passed to the material-ui <TextField> component
 */
var GrommetNumberInput = function (_Component) {
    (0, _inherits3.default)(GrommetNumberInput, _Component);

    function GrommetNumberInput() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, GrommetNumberInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GrommetNumberInput.__proto__ || Object.getPrototypeOf(GrommetNumberInput)).call.apply(_ref, [this].concat(args))), _this), _this.handleBlur = function (eventOrValue) {
            _this.props.onBlur(eventOrValue);
            _this.props.input.onBlur(eventOrValue);

            /**
             * Necessary because of a React bug on <input type="number">
             * @see https://github.com/facebook/react/issues/1425
             */
            var value = parseFloat(_this.props.input.value);
            _this.handleChange(isNaN(value) ? undefined : value);
        }, _this.handleFocus = function (event) {
            _this.props.onFocus(event);
            _this.props.input.onFocus(event);
        }, _this.handleChange = function (eventOrValue) {
            _this.props.onChange(eventOrValue);
            _this.props.input.onChange(eventOrValue);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(GrommetNumberInput, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                elStyle = _props.elStyle,
                input = _props.input,
                isRequired = _props.isRequired,
                label = _props.label,
                meta = _props.meta,
                options = _props.options,
                source = _props.source,
                step = _props.step,
                resource = _props.resource;

            if (typeof meta === 'undefined') {
                throw new Error("The NumberInput component wasn't called within a redux-form <Field>. Did you decorate it and forget to add the addField prop to your component? See https://marmelab.com/admin-on-rest/Inputs.html#writing-your-own-input-component for details.");
            }
            var touched = meta.touched,
                error = meta.error;


            return _react2.default.createElement(
                _FormField2.default,
                {
                    error: touched && error,
                    label: _react2.default.createElement(_FieldTitle2.default, {
                        label: label,
                        source: source,
                        resource: resource
                    })
                },
                _react2.default.createElement(_NumberInput2.default, (0, _extends3.default)({}, input, {
                    onBlur: this.handleBlur,
                    onFocus: this.handleFocus,
                    onChange: this.handleChange,
                    type: 'number',
                    step: parseInt(step),
                    style: elStyle
                }, options))
            );
        }
    }]);
    return GrommetNumberInput;
}(_react.Component);

GrommetNumberInput.propTypes = {
    addField: _propTypes2.default.bool.isRequired,
    elStyle: _propTypes2.default.object,
    input: _propTypes2.default.object,
    isRequired: _propTypes2.default.bool,
    label: _propTypes2.default.string,
    meta: _propTypes2.default.object,
    name: _propTypes2.default.string,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    options: _propTypes2.default.object,
    resource: _propTypes2.default.string,
    source: _propTypes2.default.string,
    step: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    validate: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.arrayOf(_propTypes2.default.func)])
};

GrommetNumberInput.defaultProps = {
    addField: true,
    onBlur: function onBlur() {},
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    options: {},
    step: 'any'
};

exports.default = GrommetNumberInput;
module.exports = exports['default'];