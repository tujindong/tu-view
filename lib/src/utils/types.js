import Vue from 'vue';

let isFunction = functionToCheck => {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
};

if (typeof /./ !== 'function' && typeof Int8Array !== 'object' && (Vue.prototype.$isServer || typeof document.childNodes !== 'function')) {
    isFunction = function (obj) {
        return typeof obj === 'function' || false;
    };
}

export function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}

export function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

export function isHtmlElement(node) {
    return node && node.nodeType === Node.ELEMENT_NODE;
}

export const isUndefined = val => {
    return val === void 0;
};

export const isDefined = val => {
    return val !== undefined && val !== null;
};

export { isFunction };