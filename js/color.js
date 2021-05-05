function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}import React, { useCallback, useState, useEffect, useRef, useMemo, memo } from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import PropTypes from 'https://cdn.skypack.dev/prop-types';
import convert from 'https://cdn.skypack.dev/color-convert';

// Webrix.js components - See https://webrix.amdocs.com/
import { Movable } from 'https://cdn.skypack.dev/webrix/components';
import { useDimensions } from 'https://cdn.skypack.dev/webrix/hooks';

const { transform, trackpad, update } = Movable.Operations;
const { clamp, map } = Movable.Transformers;

const HueSelector = memo(({ hsv, onChange }) => {
  const movable = useRef();
  const { width } = useDimensions(movable);
  const [left, setLeft] = useState(0);

  const props = Movable.useMove(useMemo(() => [
  trackpad(movable),
  transform(v => v.left, clamp(0, width)),
  update(next => {
    setLeft(next);
    onChange(convert.hsv.rgb(map(0, width, 0, 360)(next), hsv[1], hsv[2]));
  })],
  [onChange, width, hsv]));

  useEffect(() => {
    setLeft(map(0, 360, 0, width)(hsv[0]));
  }, [width]);

  return /*#__PURE__*/(
    React.createElement(Movable, _extends({ className: "hue-selector", ref: movable }, props), /*#__PURE__*/
    React.createElement("div", { className: "pointer", style: { left, '--color': `rgb(${convert.hsv.rgb(map(0, width, 0, 360)(left), 100, 100)})` } })));


});

const ShadeSelector = memo(({ onChange, hsv }) => {
  const movable = useRef();
  const { width, height } = useDimensions(movable);
  const hex = useMemo(() => '#' + convert.hsv.hex(hsv[0], 100, 100), [hsv[0]]);
  const [{ top, left }, setPosition] = useState({});

  const props = Movable.useMove(useMemo(() => [
  trackpad(movable),
  transform(({ top, left }) => ({
    top: clamp(0, height)(top),
    left: clamp(0, width)(left) })),

  update(({ top, left }) => {
    setPosition({ top, left });
    onChange(convert.hsv.rgb(
    hsv[0],
    map(0, width, 0, 100)(left),
    map(0, height, 100, 0)(top)));

  })],
  [onChange, width, height, setPosition, hsv]));

  useEffect(() => {
    setPosition({
      top: map(100, 0, 0, height)(hsv[2]),
      left: map(0, 100, 0, width)(hsv[1]) });

  }, [width, height]);

  return /*#__PURE__*/(
    React.createElement(Movable, _extends({ className: "shade-selector", ref: movable, style: { '--color': hex } }, props), /*#__PURE__*/
    React.createElement("div", { className: "pointer", style: { top, left, '--color': `rgb(${convert.hsv.rgb(hsv)})` } })));


});

const InfoBox = ({ rgb }) => /*#__PURE__*/
React.createElement("div", { className: "info-box" }, /*#__PURE__*/
React.createElement("div", { title: "Hex" }, "#", convert.rgb.hex(rgb)), /*#__PURE__*/
React.createElement("div", { title: "R" }, rgb[0]), /*#__PURE__*/
React.createElement("div", { title: "G" }, rgb[1]), /*#__PURE__*/
React.createElement("div", { title: "B" }, rgb[2]));



const ColorPicker = ({ color, onChange }) => {
  const hsv = convert.rgb.hsv(color);
  return /*#__PURE__*/(
    React.createElement("div", { className: "color-picker" }, /*#__PURE__*/
    React.createElement(ShadeSelector, { hsv: hsv, onChange: onChange }), /*#__PURE__*/
    React.createElement(HueSelector, { hsv: hsv, onChange: onChange }), /*#__PURE__*/
    React.createElement(InfoBox, { rgb: color })));


};

const App = () => {
  const [color, setColor] = useState([44, 192, 158]);
  return /*#__PURE__*/(
    React.createElement(ColorPicker, { color: color, onChange: setColor }));

};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.body);