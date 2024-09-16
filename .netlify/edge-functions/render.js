var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);

// .svelte-kit/output/server/chunks/ssr.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    for (const callback of callbacks) {
      callback(void 0);
    }
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function null_to_empty(value) {
  return value == null ? "" : value;
}
function set_current_component(component10) {
  current_component = component10;
}
function get_current_component() {
  if (!current_component) throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function ensure_array_like(array_like_or_iterator) {
  return array_like_or_iterator?.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function each(items, fn) {
  items = ensure_array_like(items);
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
function validate_component(component10, name) {
  if (!component10 || !component10.$$render) {
    if (name === "svelte:component") name += " this={...}";
    throw new Error(
      `<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
    );
  }
  return component10;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css7) => css7.code).join("\n"),
          map: null
          // TODO
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean) return "";
  const assignment = `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_ssr = __esm({
  ".svelte-kit/output/server/chunks/ssr.js"() {
    ATTR_REGEX = /[&"<]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// .svelte-kit/output/server/chunks/exports.js
function resolve(base2, path) {
  if (path[0] === "/" && path[1] === "/") return path;
  let url = new URL(base2, internal);
  url = new URL(path, url);
  return url.protocol === internal.protocol ? url.pathname + url.search + url.hash : url.href;
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore") return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
function make_trackable(url, callback, search_params_callback) {
  const tracked = new URL(url);
  Object.defineProperty(tracked, "searchParams", {
    value: new Proxy(tracked.searchParams, {
      get(obj, key2) {
        if (key2 === "get" || key2 === "getAll" || key2 === "has") {
          return (param) => {
            search_params_callback(param);
            return obj[key2](param);
          };
        }
        callback();
        const value = Reflect.get(obj, key2);
        return typeof value === "function" ? value.bind(obj) : value;
      }
    }),
    enumerable: true,
    configurable: true
  });
  for (const property of tracked_url_properties) {
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return url[property];
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
  }
  {
    disable_hash(tracked);
  }
  return tracked;
}
function disable_hash(url) {
  allow_nodejs_console_log(url);
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  allow_nodejs_console_log(url);
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
function allow_nodejs_console_log(url) {
  {
    url[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(new URL(url), opts);
    };
  }
}
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX) || pathname.endsWith(HTML_DATA_SUFFIX);
}
function add_data_suffix(pathname) {
  if (pathname.endsWith(".html")) return pathname.replace(/\.html$/, HTML_DATA_SUFFIX);
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix(pathname) {
  if (pathname.endsWith(HTML_DATA_SUFFIX)) {
    return pathname.slice(0, -HTML_DATA_SUFFIX.length) + ".html";
  }
  return pathname.slice(0, -DATA_SUFFIX.length);
}
function validator(expected) {
  function validate(module, file) {
    if (!module) return;
    for (const key2 in module) {
      if (key2[0] === "_" || expected.has(key2)) continue;
      const values = [...expected.values()];
      const hint = hint_for_supported_files(key2, file?.slice(file.lastIndexOf("."))) ?? `valid exports are ${values.join(", ")}, or anything with a '_' prefix`;
      throw new Error(`Invalid export '${key2}'${file ? ` in ${file}` : ""} (${hint})`);
    }
  }
  return validate;
}
function hint_for_supported_files(key2, ext = ".js") {
  const supported_files = [];
  if (valid_layout_exports.has(key2)) {
    supported_files.push(`+layout${ext}`);
  }
  if (valid_page_exports.has(key2)) {
    supported_files.push(`+page${ext}`);
  }
  if (valid_layout_server_exports.has(key2)) {
    supported_files.push(`+layout.server${ext}`);
  }
  if (valid_page_server_exports.has(key2)) {
    supported_files.push(`+page.server${ext}`);
  }
  if (valid_server_exports.has(key2)) {
    supported_files.push(`+server${ext}`);
  }
  if (supported_files.length > 0) {
    return `'${key2}' is a valid export in ${supported_files.slice(0, -1).join(", ")}${supported_files.length > 1 ? " or " : ""}${supported_files.at(-1)}`;
  }
}
var internal, tracked_url_properties, DATA_SUFFIX, HTML_DATA_SUFFIX, valid_layout_exports, valid_page_exports, valid_layout_server_exports, valid_page_server_exports, valid_server_exports, validate_layout_exports, validate_page_exports, validate_layout_server_exports, validate_page_server_exports, validate_server_exports;
var init_exports = __esm({
  ".svelte-kit/output/server/chunks/exports.js"() {
    internal = new URL("sveltekit-internal://");
    tracked_url_properties = /** @type {const} */
    [
      "href",
      "pathname",
      "search",
      "toString",
      "toJSON"
    ];
    DATA_SUFFIX = "/__data.json";
    HTML_DATA_SUFFIX = ".html__data.json";
    valid_layout_exports = /* @__PURE__ */ new Set([
      "load",
      "prerender",
      "csr",
      "ssr",
      "trailingSlash",
      "config"
    ]);
    valid_page_exports = /* @__PURE__ */ new Set([...valid_layout_exports, "entries"]);
    valid_layout_server_exports = /* @__PURE__ */ new Set([...valid_layout_exports]);
    valid_page_server_exports = /* @__PURE__ */ new Set([...valid_layout_server_exports, "actions", "entries"]);
    valid_server_exports = /* @__PURE__ */ new Set([
      "GET",
      "POST",
      "PATCH",
      "PUT",
      "DELETE",
      "OPTIONS",
      "HEAD",
      "fallback",
      "prerender",
      "trailingSlash",
      "config",
      "entries"
    ]);
    validate_layout_exports = validator(valid_layout_exports);
    validate_page_exports = validator(valid_page_exports);
    validate_layout_server_exports = validator(valid_layout_server_exports);
    validate_page_server_exports = validator(valid_page_server_exports);
    validate_server_exports = validator(valid_server_exports);
  }
});

// node_modules/devalue/src/utils.js
function is_primitive(thing) {
  return Object(thing) !== thing;
}
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    const char = str[i];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i) + replacement;
      last_pos = i + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}
function enumerable_symbols(object) {
  return Object.getOwnPropertySymbols(object).filter(
    (symbol) => Object.getOwnPropertyDescriptor(object, symbol).enumerable
  );
}
var escaped, DevalueError, object_proto_names;
var init_utils = __esm({
  "node_modules/devalue/src/utils.js"() {
    escaped = {
      "<": "\\u003C",
      "\\": "\\\\",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    DevalueError = class extends Error {
      /**
       * @param {string} message
       * @param {string[]} keys
       */
      constructor(message, keys) {
        super(message);
        this.name = "DevalueError";
        this.path = keys.join("");
      }
    };
    object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
      Object.prototype
    ).sort().join("\0");
  }
});

// node_modules/devalue/src/uneval.js
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing);
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v, i) => i in thing ? stringify2(v) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify2(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify2(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify2(k)}, ${stringify2(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c) {
  return escaped[c] || c;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive(thing) {
  if (typeof thing === "string") return stringify_string(thing);
  if (thing === void 0) return "void 0";
  if (thing === 0 && 1 / thing < 0) return "-0";
  const str = String(thing);
  if (typeof thing === "number") return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint") return thing + "n";
  return str;
}
var chars, unsafe_chars, reserved;
var init_uneval = __esm({
  "node_modules/devalue/src/uneval.js"() {
    init_utils();
    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
    unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
    reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
  }
});

// node_modules/devalue/src/constants.js
var UNDEFINED, HOLE, NAN, POSITIVE_INFINITY, NEGATIVE_INFINITY, NEGATIVE_ZERO;
var init_constants = __esm({
  "node_modules/devalue/src/constants.js"() {
    UNDEFINED = -1;
    HOLE = -2;
    NAN = -3;
    POSITIVE_INFINITY = -4;
    NEGATIVE_INFINITY = -5;
    NEGATIVE_ZERO = -6;
  }
});

// node_modules/devalue/src/parse.js
var init_parse = __esm({
  "node_modules/devalue/src/parse.js"() {
    init_constants();
  }
});

// node_modules/devalue/src/stringify.js
function stringify(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  for (const key2 in reducers) {
    custom.push({ key: key2, fn: reducers[key2] });
  }
  const keys = [];
  let p = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing)) return indexes.get(thing);
    if (thing === void 0) return UNDEFINED;
    if (Number.isNaN(thing)) return NAN;
    if (thing === Infinity) return POSITIVE_INFINITY;
    if (thing === -Infinity) return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO;
    const index11 = p++;
    indexes.set(thing, index11);
    for (const { key: key2, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index11] = `["${key2}",${flatten(value2)}]`;
        return index11;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive2(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          const valid = !isNaN(thing.getDate());
          str = `["Date","${valid ? thing.toISOString() : ""}"]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array":
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0) str += ",";
            if (i in thing) {
              keys.push(`[${i}]`);
              str += flatten(thing[i]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive2(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
            keys.pop();
          }
          str += "]";
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(`.${key2}`);
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started) str += ",";
              started = true;
              keys.push(`.${key2}`);
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index11] = str;
    return index11;
  }
  const index10 = flatten(value);
  if (index10 < 0) return `${index10}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string") return stringify_string(thing);
  if (thing instanceof String) return stringify_string(thing.toString());
  if (thing === void 0) return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO.toString();
  if (type === "bigint") return `["BigInt","${thing}"]`;
  return String(thing);
}
var init_stringify = __esm({
  "node_modules/devalue/src/stringify.js"() {
    init_utils();
    init_constants();
  }
});

// node_modules/devalue/index.js
var init_devalue = __esm({
  "node_modules/devalue/index.js"() {
    init_uneval();
    init_parse();
    init_stringify();
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var dec = opt.decode || decode;
      var index10 = 0;
      while (index10 < str.length) {
        var eqIdx = str.indexOf("=", index10);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index10);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index10 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index10, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index10 = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.partitioned) {
        str += "; Partitioned";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options2) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      try {
        value = options2.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie.secure = true;
        } else if (key2 === "httponly") {
          cookie.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie.sameSite = value2;
        } else if (key2 === "partitioned") {
          cookie.partitioned = true;
        } else {
          cookie[key2] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse3(input, options2) {
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!input) {
        if (!options2.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers) {
        if (typeof input.headers.getSetCookie === "function") {
          input = input.headers.getSetCookie();
        } else if (input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else {
          var sch = input.headers[Object.keys(input.headers).find(function(key2) {
            return key2.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options2.silent) {
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            );
          }
          input = sch;
        }
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!options2.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options2);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options2);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse3;
    module.exports.parse = parse3;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/chunks/Section.js
var css, Section;
var init_Section = __esm({
  ".svelte-kit/output/server/chunks/Section.js"() {
    init_ssr();
    css = {
      code: 'h6.svelte-11lgscc{font-family:"FFF Acid Grotesk Bold", sans-serif}hr.svelte-11lgscc{border:1.33px solid #0a0a0a}',
      map: '{"version":3,"file":"Section.svelte","sources":["Section.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { animateTyping } from \\"./Typewriter\\";\\nexport let title;\\n<\/script>\\n\\n<div class=\\"w-full\\">\\n  <h6 class=\\"font-bold text-l\\">\\n    <span use:animateTyping={title} />\\n  </h6>\\n  <hr class=\\"mt-2 mb-5 \\" />\\n  <slot />\\n</div>\\n\\n<style>\\n  h6 {\\n    font-family: \\"FFF Acid Grotesk Bold\\", sans-serif;\\n  }\\n  hr {\\n    border: 1.33px solid #0a0a0a; /*rgb(229 231 235)*/\\n  }\\n</style>\\n"],"names":[],"mappings":"AAaE,iBAAG,CACD,WAAW,CAAE,uBAAuB,CAAC,CAAC,UACxC,CACA,iBAAG,CACD,MAAM,CAAE,MAAM,CAAC,KAAK,CAAC,OACvB"}'
    };
    Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { title } = $$props;
      if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
      $$result.css.add(css);
      return `<div class="w-full"><h6 class="font-bold text-l svelte-11lgscc"><span></span></h6> <hr class="mt-2 mb-5  svelte-11lgscc"> ${slots.default ? slots.default({}) : ``} </div>`;
    });
  }
});

// .svelte-kit/output/server/chunks/stores.js
function get(key2, parse3 = JSON.parse) {
  try {
    return parse3(sessionStorage[key2]);
  } catch {
  }
}
var SNAPSHOT_KEY, SCROLL_KEY, getStores, page;
var init_stores = __esm({
  ".svelte-kit/output/server/chunks/stores.js"() {
    init_ssr();
    init_exports();
    init_devalue();
    SNAPSHOT_KEY = "sveltekit:snapshot";
    SCROLL_KEY = "sveltekit:scroll";
    get(SCROLL_KEY) ?? {};
    get(SNAPSHOT_KEY) ?? {};
    getStores = () => {
      const stores = getContext("__svelte__");
      return {
        /** @type {typeof page} */
        page: {
          subscribe: stores.page.subscribe
        },
        /** @type {typeof navigating} */
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        /** @type {typeof updated} */
        updated: stores.updated
      };
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var Contatti, Footer, css$1, NavDesktop, css2, NavbarHandler, Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_ssr();
    init_Section();
    init_stores();
    Contatti = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return ` ${validate_component(Section, "Section").$$render(
        $$result,
        {
          title: ["\u2193 CONTATTI", "\u2198 CONTATTI", "\u2198 CONTATTI"]
        },
        {},
        {
          default: () => {
            return `<div class="flex flex-rows justify-between text-nowrap text-sm gap-10 " data-svelte-h="svelte-1yhmcp2"><p>ig: <br>
      mail: <br>
      LinkedIn: <br>
      tel: <br></p> <p>@qdstudios <br>
      qstudiospadova@gmail.com <br>
      Non lo abbiamo ancora <br>
      +39 333 3218804 <br></p></div>`;
          }
        }
      )}`;
    });
    Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="flex flex-wrap lg:flex-nowrap w-full gap-5 mb-10 mt-48"><div class="flex-auto w-full lg:max-w-[20vw]">${validate_component(Contatti, "Contatti").$$render($$result, {}, {}, {})}</div></div>`;
    });
    css$1 = {
      code: 'a.svelte-3986xr{font-family:"FFF Acid Grotesk Bold", sans-serif}',
      map: `{"version":3,"file":"NavDesktop.svelte","sources":["NavDesktop.svelte"],"sourcesContent":["<script>\\n\\n  import { page } from \\"$app/stores\\";\\n\\n<\/script>\\n<nav\\n  class=\\"\\n    h-screen\\n    grid grid-cols-4 grid-rows-12 gap-5\\n    whitespace-nowrap\\n    font-bold\\n    \\"\\n>\\n  <div class=\\"row-span-5 col-span-4\\">\\n    <img src=\\"/assets/logo/logo_partial.svg\\" alt=\\"\\" srcset=\\"\\" />\\n  </div>\\n\\n  <div class=\\"col-span-2 content-end text-xl\\">\\n    <a class=\\"text-primary\\" href=\\"/\\">{#if $page.url.pathname==='/'}\u203A {/if}HOME</a>\\n  </div>\\n  <div class=\\"col-span-2 content-end text-xl\\">\\n    <a class=\\"text-primary\\" href=\\"/mission\\">{#if $page.url.pathname==='/mission'}\u203A {/if}MISSION</a>\\n  </div>\\n  <div class=\\"col-span-4\\"></div>\\n\\n  <div\\n    class=\\"\\n        grid grid-cols-subgrid row-span-2 col-span-2 text-xl\\n        \\"\\n  >\\n    <a class=\\"text-primary\\" href=\\"/branding\\"> {#if $page.url.pathname==='/branding'}\u203A {/if}BRANDING</a><br />\\n    <a class=\\"text-primary\\" href=\\"/uiuxdesign\\"> {#if $page.url.pathname==='/uiuxdesign'}\u203A {/if}UI/UX DESIGN</a>\\n  </div>\\n  <div\\n    class=\\"\\n        grid grid-cols-subgrid row-span-2 col-span-2 text-xl\\n        \\"\\n  >\\n    <a class=\\"text-primary\\" href=\\"/grafica\\">{#if $page.url.pathname==='/grafica'}\u203A {/if}GRAFICA</a><br />\\n    <a class=\\"text-primary\\" href=\\"/fotografia\\">{#if $page.url.pathname==='/fotografia'}\u203A {/if}FOTOGRAFIA</a><br />\\n    <a class=\\"text-primary\\" href=\\"/sounddesign\\">{#if $page.url.pathname==='/sounddesign'}\u203A {/if}SOUND DESIGN</a>\\n  </div>\\n\\n  <p class=\\"col-span-4 text-xs font-normal row-span-2 content-end\\">\\n    Q Design Studio by The Hive S.r.l.\\n    <br />\\n    Viale dell'Industria, 19 - 35129 PADOVA - PD\\n    <br />\\n    P.IVA: 05260180285\\n    <br />\\n    Tutti i servizi Q Design Studio sono forniti da The Hive S.r.l.\\n  </p>\\n</nav>\\n\\n<style lang=\\"css\\">\\n  a {\\n    font-family: \\"FFF Acid Grotesk Bold\\", sans-serif;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAuDE,eAAE,CACA,WAAW,CAAE,uBAAuB,CAAC,CAAC,UACxC"}`
    };
    NavDesktop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$result.css.add(css$1);
      $$unsubscribe_page();
      return `<nav class="h-screen grid grid-cols-4 grid-rows-12 gap-5 whitespace-nowrap font-bold "><div class="row-span-5 col-span-4" data-svelte-h="svelte-cul7xi"><img src="/assets/logo/logo_partial.svg" alt="" srcset=""></div> <div class="col-span-2 content-end text-xl"><a class="text-primary svelte-3986xr" href="/">${$page.url.pathname === "/" ? `\u203A ` : ``}HOME</a></div> <div class="col-span-2 content-end text-xl"><a class="text-primary svelte-3986xr" href="/mission">${$page.url.pathname === "/mission" ? `\u203A ` : ``}MISSION</a></div> <div class="col-span-4"></div> <div class="grid grid-cols-subgrid row-span-2 col-span-2 text-xl "><a class="text-primary svelte-3986xr" href="/branding">${$page.url.pathname === "/branding" ? `\u203A ` : ``}BRANDING</a><br> <a class="text-primary svelte-3986xr" href="/uiuxdesign">${$page.url.pathname === "/uiuxdesign" ? `\u203A ` : ``}UI/UX DESIGN</a></div> <div class="grid grid-cols-subgrid row-span-2 col-span-2 text-xl "><a class="text-primary svelte-3986xr" href="/grafica">${$page.url.pathname === "/grafica" ? `\u203A ` : ``}GRAFICA</a><br> <a class="text-primary svelte-3986xr" href="/fotografia">${$page.url.pathname === "/fotografia" ? `\u203A ` : ``}FOTOGRAFIA</a><br> <a class="text-primary svelte-3986xr" href="/sounddesign">${$page.url.pathname === "/sounddesign" ? `\u203A ` : ``}SOUND DESIGN</a></div> <p class="col-span-4 text-xs font-normal row-span-2 content-end" data-svelte-h="svelte-16b0s0o">Q Design Studio by The Hive S.r.l.
    <br>
    Viale dell&#39;Industria, 19 - 35129 PADOVA - PD
    <br>
    P.IVA: 05260180285
    <br>
    Tutti i servizi Q Design Studio sono forniti da The Hive S.r.l.</p> </nav>`;
    });
    css2 = {
      code: '.hide.svelte-1kcf9f7{animation:svelte-1kcf9f7-disappear 0.2s forwards ease-in-out}.show.svelte-1kcf9f7{animation:svelte-1kcf9f7-appear 0.2s forwards ease-in-out}@keyframes svelte-1kcf9f7-appear{from{opacity:0}to{opacity:1}}@keyframes svelte-1kcf9f7-disappear{from{opacity:1;display:block}to{opacity:0;display:none}}a.svelte-1kcf9f7{font-family:"FFF Acid Grotesk Bold", sans-serif}hr.svelte-1kcf9f7{border:2px solid;color:#0a0a0a}',
      map: `{"version":3,"file":"NavbarHandler.svelte","sources":["NavbarHandler.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from \\"$app/stores\\";\\nimport NavDesktop from \\"./NavDesktop.svelte\\";\\nexport let isMobile = true;\\nexport let isOpen = false;\\n<\/script>\\n\\n<div>\\n  <!--nav desktop section-->\\n  {#if !isMobile}\\n    <NavDesktop />\\n  {/if}\\n\\n  {#if isMobile}\\n    <!--nav mobile section-->\\n\\n    <!--burger menu-->\\n    <div class=\\"{isOpen ? ' hide ' : ' show block '} \\">\\n      <div class=\\"w-full flex justify-end fixed top-0 left-0 p-5 gap-5\\">\\n        <hr class=\\"w-full\\" />\\n        <button\\n          on:click={() => {\\n            isOpen = true;\\n          }}\\n        >\\n          <svg\\n            width=\\"22\\"\\n            height=\\"20\\"\\n            viewBox=\\"0 0 22 20\\"\\n            fill=\\"none\\"\\n            xmlns=\\"http://www.w3.org/2000/svg\\"\\n          >\\n            <path d=\\"M0 2H22M0 10H22M0 18H22\\" stroke=\\"black\\" stroke-width=\\"4\\" />\\n          </svg>\\n        </button>\\n      </div>\\n    </div>\\n\\n    <!--nav mobile-->\\n    <div class={isOpen ? \\" show block \\" : \\" hide \\"}>\\n      <div\\n        class=\\"\\nfixed top-0 left-0 w-auto p-5 h-screen bg-primary\\n\\"\\n      >\\n        <nav\\n          class=\\"\\nmt-10\\ngrid grid-cols-4 grid-rows-12 gap-5\\nwhitespace-nowrap\\n\\"\\n        >\\n          <div class=\\"row-span-5 col-span-4\\">\\n            <img src=\\"/assets/logo/logo_partial_white.svg\\" alt=\\"\\" srcset=\\"\\" />\\n          </div>\\n\\n          <div class=\\"col-span-4 w-full grid grid-cols-4 grid-rows-1 gap-2\\">\\n            <div class=\\"w-full flex gap-5 col-span-4\\">\\n              <hr class=\\"w-full\\" />\\n              <button on:click={() => (isOpen = false)}>\\n                <svg\\n                  width=\\"24\\"\\n                  height=\\"24\\"\\n                  viewBox=\\"0 0 24 24\\"\\n                  fill=\\"none\\"\\n                  xmlns=\\"http://www.w3.org/2000/svg\\"\\n                >\\n                  <path\\n                    d=\\"M2.13153 22.0002L12.0459 12.0859M12.0459 12.0859L22.1315 2.00024M12.0459 12.0859L1.95996 2M12.0459 12.0859L21.96 22\\"\\n                    stroke=\\"#0A0A0A\\"\\n                    stroke-width=\\"4\\"\\n                  />\\n                </svg>\\n              </button>\\n            </div>\\n            <div class=\\"col-span-2 content-end text-xl\\">\\n              <a on:click={() => (isOpen = false)} class=\\"text-neutral\\" href=\\"/\\"\\n                >{#if $page.url.pathname==='/'}\u203A {/if}HOME</a\\n              >\\n            </div>\\n            <div class=\\"col-span-2 content-end text-xl ml-1.5\\">\\n              <a\\n                on:click={() => (isOpen = false)}\\n                class=\\"text-neutral\\"\\n                href=\\"/mission\\">{#if $page.url.pathname==='/mission'}\u203A {/if}MISSION</a\\n              >\\n            </div>\\n          </div>\\n\\n          <div\\n            class=\\"\\n  grid grid-cols-subgrid row-span-2 col-span-2 text-xl mt-10\\n  \\"\\n          >\\n            <a\\n              on:click={() => (isOpen = false)}\\n              class=\\"text-neutral\\"\\n              href=\\"/branding\\">{#if $page.url.pathname==='/branding'}\u203A {/if}BRANDING</a\\n            ><br />\\n            <a\\n              on:click={() => (isOpen = false)}\\n              class=\\"text-neutral mt-9\\"\\n              href=\\"/uiuxdesign\\">{#if $page.url.pathname==='/uiuxdesign'}\u203A {/if}UI/UX DESIGN</a\\n            >\\n          </div>\\n          <div\\n            class=\\"\\n  grid grid-cols-subgrid row-span-2 col-span-2 text-xl mt-10\\n  \\"\\n          >\\n            <a\\n              on:click={() => (isOpen = false)}\\n              class=\\"text-neutral\\"\\n              href=\\"/grafica\\">{#if $page.url.pathname==='/grafica'}\u203A {/if}GRAFICA</a\\n            ><br />\\n            <a\\n              on:click={() => (isOpen = false)}\\n              class=\\"text-neutral\\"\\n              href=\\"/fotografia\\">{#if $page.url.pathname==='/fotografia'}\u203A {/if}FOTOGRAFIA</a\\n            ><br />\\n            <a\\n              on:click={() => (isOpen = false)}\\n              class=\\"text-neutral\\"\\n              href=\\"/sounddesign\\">{#if $page.url.pathname==='/sounddesign'}\u203A {/if}SOUND DESIGN</a\\n            >\\n          </div>\\n        </nav>\\n        <div class=\\"absolute bottom-5 left-5\\">\\n          <p class=\\"col-span-4 text-xs font-normal row-span-2 content-end\\">\\n            Q Design Studio by The Hive S.r.l.\\n            <br />\\n            Viale dell'Industria, 19 - 35129 PADOVA - PD\\n            <br />\\n            P.IVA: 05260180285\\n            <br />\\n            Tutti i servizi Q Design Studio sono forniti da The Hive S.r.l.\\n          </p>\\n        </div>\\n      </div>\\n    </div>\\n  {/if}\\n</div>\\n\\n<style lang=\\"css\\">\\n  .hide {\\n    animation: disappear 0.2s forwards ease-in-out;\\n  }\\n  .show {\\n    animation: appear 0.2s forwards ease-in-out;\\n  }\\n  @keyframes appear {\\n    from {\\n      opacity: 0;\\n    }\\n    to {\\n      opacity: 1;\\n    }\\n  }\\n  @keyframes disappear {\\n    from {\\n      opacity: 1;\\n      display: block;\\n    }\\n    to {\\n      opacity: 0;\\n      display: none;\\n    }\\n  }\\n  a {\\n    font-family: \\"FFF Acid Grotesk Bold\\", sans-serif;\\n  }\\n  hr {\\n    border: 2px solid;\\n    color: #0a0a0a;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA+IE,oBAAM,CACJ,SAAS,CAAE,wBAAS,CAAC,IAAI,CAAC,QAAQ,CAAC,WACrC,CACA,oBAAM,CACJ,SAAS,CAAE,qBAAM,CAAC,IAAI,CAAC,QAAQ,CAAC,WAClC,CACA,WAAW,qBAAO,CAChB,IAAK,CACH,OAAO,CAAE,CACX,CACA,EAAG,CACD,OAAO,CAAE,CACX,CACF,CACA,WAAW,wBAAU,CACnB,IAAK,CACH,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,KACX,CACA,EAAG,CACD,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IACX,CACF,CACA,gBAAE,CACA,WAAW,CAAE,uBAAuB,CAAC,CAAC,UACxC,CACA,iBAAG,CACD,MAAM,CAAE,GAAG,CAAC,KAAK,CACjB,KAAK,CAAE,OACT"}`
    };
    NavbarHandler = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      let { isMobile = true } = $$props;
      let { isOpen = false } = $$props;
      if ($$props.isMobile === void 0 && $$bindings.isMobile && isMobile !== void 0) $$bindings.isMobile(isMobile);
      if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0) $$bindings.isOpen(isOpen);
      $$result.css.add(css2);
      $$unsubscribe_page();
      return `<div> ${!isMobile ? `${validate_component(NavDesktop, "NavDesktop").$$render($$result, {}, {}, {})}` : ``} ${isMobile ? `  <div class="${escape(isOpen ? " hide " : " show block ", true) + " svelte-1kcf9f7"}"><div class="w-full flex justify-end fixed top-0 left-0 p-5 gap-5"><hr class="w-full svelte-1kcf9f7"> <button data-svelte-h="svelte-88ujgd"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 2H22M0 10H22M0 18H22" stroke="black" stroke-width="4"></path></svg></button></div></div>  <div class="${escape(null_to_empty(isOpen ? " show block " : " hide "), true) + " svelte-1kcf9f7"}"><div class="fixed top-0 left-0 w-auto p-5 h-screen bg-primary "><nav class="mt-10 grid grid-cols-4 grid-rows-12 gap-5 whitespace-nowrap "><div class="row-span-5 col-span-4" data-svelte-h="svelte-1od592g"><img src="/assets/logo/logo_partial_white.svg" alt="" srcset=""></div> <div class="col-span-4 w-full grid grid-cols-4 grid-rows-1 gap-2"><div class="w-full flex gap-5 col-span-4"><hr class="w-full svelte-1kcf9f7"> <button data-svelte-h="svelte-8z67k6"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.13153 22.0002L12.0459 12.0859M12.0459 12.0859L22.1315 2.00024M12.0459 12.0859L1.95996 2M12.0459 12.0859L21.96 22" stroke="#0A0A0A" stroke-width="4"></path></svg></button></div> <div class="col-span-2 content-end text-xl"><a class="text-neutral svelte-1kcf9f7" href="/">${$page.url.pathname === "/" ? `\u203A ` : ``}HOME</a></div> <div class="col-span-2 content-end text-xl ml-1.5"><a class="text-neutral svelte-1kcf9f7" href="/mission">${$page.url.pathname === "/mission" ? `\u203A ` : ``}MISSION</a></div></div> <div class="grid grid-cols-subgrid row-span-2 col-span-2 text-xl mt-10 "><a class="text-neutral svelte-1kcf9f7" href="/branding">${$page.url.pathname === "/branding" ? `\u203A ` : ``}BRANDING</a><br> <a class="text-neutral mt-9 svelte-1kcf9f7" href="/uiuxdesign">${$page.url.pathname === "/uiuxdesign" ? `\u203A ` : ``}UI/UX DESIGN</a></div> <div class="grid grid-cols-subgrid row-span-2 col-span-2 text-xl mt-10 "><a class="text-neutral svelte-1kcf9f7" href="/grafica">${$page.url.pathname === "/grafica" ? `\u203A ` : ``}GRAFICA</a><br> <a class="text-neutral svelte-1kcf9f7" href="/fotografia">${$page.url.pathname === "/fotografia" ? `\u203A ` : ``}FOTOGRAFIA</a><br> <a class="text-neutral svelte-1kcf9f7" href="/sounddesign">${$page.url.pathname === "/sounddesign" ? `\u203A ` : ``}SOUND DESIGN</a></div></nav> <div class="absolute bottom-5 left-5" data-svelte-h="svelte-27msex"><p class="col-span-4 text-xs font-normal row-span-2 content-end">Q Design Studio by The Hive S.r.l.
            <br>
            Viale dell&#39;Industria, 19 - 35129 PADOVA - PD
            <br>
            P.IVA: 05260180285
            <br>
            Tutti i servizi Q Design Studio sono forniti da The Hive S.r.l.</p></div></div></div>` : ``} </div>`;
    });
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${$$result.head += `<!-- HEAD_svelte-n2zcnk_START --><link rel="icon" type="image/svg"${add_attribute("href", "/assets/logo/logo.svg", 0)}>${$$result.title = `<title>Q Design Studios</title>`, ""}<!-- HEAD_svelte-n2zcnk_END -->`, ""} <div class="h-screen flex m-10 "> <div class="flex-none fixed w-full lg:hidden z-50">${validate_component(NavbarHandler, "Navbar").$$render($$result, {}, {}, {})}</div>  <div class="fixed flex-none max-w-[25vw] top-10 hidden lg:block z-50">${validate_component(NavbarHandler, "Navbar").$$render($$result, { isMobile: false }, {}, {})}</div> <div class="flex flex-row flex-wrap lg:ml-[25vw] gap-2 lg:gap-5 relative z-0 w-full"><div class="flex-auto min-w-[30vw] w-full lg:ml-5 static">${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div></div> <div class="absolute bottom-10 lg:right-10 lg:w-[25vw] w-full"><div class="hidden lg:block sticky h-fit w-full">${validate_component(Contatti, "Contatti").$$render($$result, {}, {}, {})}</div></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component_cache, component, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => component_cache ?? (component_cache = (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default);
    imports = ["_app/immutable/nodes/0.CiC3E0mD.js", "_app/immutable/chunks/scheduler.Bu15-wVR.js", "_app/immutable/chunks/index.O99BFJ2P.js", "_app/immutable/chunks/Section._ojqOJzG.js", "_app/immutable/chunks/Typewriter.oItSYdui.js", "_app/immutable/chunks/stores.nZozvAIW.js", "_app/immutable/chunks/entry.DTtWcqXf.js"];
    stylesheets = ["_app/immutable/assets/0.DntzWIcw.css", "_app/immutable/assets/Section.Cjh7qCQv.css"];
    fonts = [];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error2
});
var Error2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_ssr();
    init_stores();
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component_cache2, component2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => component_cache2 ?? (component_cache2 = (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default);
    imports2 = ["_app/immutable/nodes/1.CUMX1_36.js", "_app/immutable/chunks/scheduler.Bu15-wVR.js", "_app/immutable/chunks/index.O99BFJ2P.js", "_app/immutable/chunks/stores.nZozvAIW.js", "_app/immutable/chunks/entry.DTtWcqXf.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// .svelte-kit/output/server/chunks/Scroll.js
var css$12, Hero, css3, Scroll;
var init_Scroll = __esm({
  ".svelte-kit/output/server/chunks/Scroll.js"() {
    init_ssr();
    css$12 = {
      code: "h1.svelte-vuie7e{font-family:Acid Grotesk}.text-auto-scale.svelte-vuie7e{font-size:12vmin;font-size:17vmax;line-height:105%;transform:translateY(-5%)}.text-auto-scale-mobile.svelte-vuie7e{font-size:6vmin;font-size:9vmax;line-height:105%;transform:translateY(-5%)}",
      map: '{"version":3,"file":"Hero.svelte","sources":["Hero.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { animateTyping } from \\"$lib/components/Typewriter\\";\\nexport let title;\\nexport let titleMobile;\\nexport let content;\\nexport let contentMobile;\\n<\/script>\\n\\n<!--hero-->\\n<div class=\\"h-svh w-max-content absolute\\">\\n  <!--mobile-->\\n  <h1 class=\\"inline-block text-auto-scale-mobile lg:hidden mt-1.5 lg:h-[55vh]\\">\\n    <span use:animateTyping={titleMobile} />\\n  </h1>\\n\\n  <div class=\\"lg:hidden\\">\\n    <!--contentMobile-->\\n    {#each contentMobile as paragraph}\\n      <p class=\\"text-2xl\\">\\n        {paragraph}\\n      </p>\\n    {/each}\\n  </div>\\n\\n  <!--desktop-->\\n  <h1 class=\\"hidden lg:block text-auto-scale lg:h-[55vh] overflow-hidden\\">\\n    <span use:animateTyping={title} />\\n  </h1>\\n\\n  <!--content-->\\n  <div class=\\"hidden lg:block w-max\\">\\n    {#each content as paragraph}\\n      <p class=\\"text-2xl\\">\\n        {paragraph}\\n      </p>\\n    {/each}\\n  </div>\\n\\n  <!-- <slot /> -->\\n\\n</div>\\n\\n<style>\\n  h1 {\\n    font-family: Acid Grotesk;\\n  }\\n  .text-auto-scale {\\n    font-size: 12vmin;\\n    font-size: 17vmax;\\n    line-height: 105%;\\n    transform: translateY(-5%);\\n  }\\n  .text-auto-scale-mobile {\\n    font-size: 6vmin;\\n    font-size: 9vmax;\\n    line-height: 105%;\\n    transform: translateY(-5%);\\n  }\\n</style>\\n"],"names":[],"mappings":"AA0CE,gBAAG,CACD,WAAW,CAAE,IAAI,CAAC,OACpB,CACA,8BAAiB,CACf,SAAS,CAAE,MAAM,CACjB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,WAAW,GAAG,CAC3B,CACA,qCAAwB,CACtB,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,WAAW,GAAG,CAC3B"}'
    };
    Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { title } = $$props;
      let { titleMobile } = $$props;
      let { content } = $$props;
      let { contentMobile } = $$props;
      if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
      if ($$props.titleMobile === void 0 && $$bindings.titleMobile && titleMobile !== void 0) $$bindings.titleMobile(titleMobile);
      if ($$props.content === void 0 && $$bindings.content && content !== void 0) $$bindings.content(content);
      if ($$props.contentMobile === void 0 && $$bindings.contentMobile && contentMobile !== void 0) $$bindings.contentMobile(contentMobile);
      $$result.css.add(css$12);
      return ` <div class="h-svh w-max-content absolute"> <h1 class="inline-block text-auto-scale-mobile lg:hidden mt-1.5 lg:h-[55vh] svelte-vuie7e"><span></span></h1> <div class="lg:hidden"> ${each(contentMobile, (paragraph) => {
        return `<p class="text-2xl">${escape(paragraph)} </p>`;
      })}</div>  <h1 class="hidden lg:block text-auto-scale lg:h-[55vh] overflow-hidden svelte-vuie7e"><span></span></h1>  <div class="hidden lg:block w-max">${each(content, (paragraph) => {
        return `<p class="text-2xl">${escape(paragraph)} </p>`;
      })}</div>  </div>`;
    });
    css3 = {
      code: '.bounce-del-0.svelte-1hn0hxi{animation:svelte-1hn0hxi-bounce 2s infinite ease-in-out}.bounce-del-1.svelte-1hn0hxi{animation:svelte-1hn0hxi-bounce 2s infinite ease-in-out 0.1s}.bounce-del-2.svelte-1hn0hxi{animation:svelte-1hn0hxi-bounce 2s infinite ease-in-out 0.2s}@keyframes svelte-1hn0hxi-bounce{0%,100%{transform:translateY(-25%)}50%{transform:translateY(25%)}}h1.svelte-1hn0hxi{font-family:"FFF Acid Grotesk Bold", sans-serif;white-space:nowrap}',
      map: '{"version":3,"file":"Scroll.svelte","sources":["Scroll.svelte"],"sourcesContent":["<!--Scroll down-->\\n<div class=\\"grid grid-cols-1 grid-rows-3 w-fit mt-10\\">\\n  <div class=\\"bounce-del-0 mt-2\\">\\n    <svg\\n      width=\\"41\\"\\n      height=\\"41\\"\\n      viewBox=\\"0 0 41 41\\"\\n      fill=\\"none\\"\\n      xmlns=\\"http://www.w3.org/2000/svg\\"\\n    >\\n      <path\\n        d=\\"M0.219727 15.7913C7.2049 16.582 14.1242 19.811 16.8919 27.1916H17.0237L16.9578 0.634766H23.4817L23.4158 27.1916H23.5476C26.3153 19.811 33.2346 16.582 40.2197 15.7913V22.5788C30.8622 23.5672 23.3499 29.6298 23.2181 40.2394H17.2214C17.1555 29.6298 9.57722 23.5672 0.219727 22.5788V15.7913Z\\"\\n        fill=\\"#FD4912\\"\\n      />\\n    </svg>\\n  </div>\\n  <div class=\\"bounce-del-1 mt-2\\">\\n    <svg\\n      width=\\"41\\"\\n      height=\\"41\\"\\n      viewBox=\\"0 0 41 41\\"\\n      fill=\\"none\\"\\n      xmlns=\\"http://www.w3.org/2000/svg\\"\\n    >\\n      <path\\n        d=\\"M0.219727 15.7913C7.2049 16.582 14.1242 19.811 16.8919 27.1916H17.0237L16.9578 0.634766H23.4817L23.4158 27.1916H23.5476C26.3153 19.811 33.2346 16.582 40.2197 15.7913V22.5788C30.8622 23.5672 23.3499 29.6298 23.2181 40.2394H17.2214C17.1555 29.6298 9.57722 23.5672 0.219727 22.5788V15.7913Z\\"\\n        fill=\\"#FD4912\\"\\n      />\\n    </svg>\\n  </div>\\n  <div class=\\"bounce-del-2 mt-2 grid grid-rows-1 grid-cols-2\\">\\n    <svg\\n      width=\\"41\\"\\n      height=\\"41\\"\\n      viewBox=\\"0 0 41 41\\"\\n      fill=\\"none\\"\\n      xmlns=\\"http://www.w3.org/2000/svg\\"\\n    >\\n      <path\\n        d=\\"M0.219727 15.7913C7.2049 16.582 14.1242 19.811 16.8919 27.1916H17.0237L16.9578 0.634766H23.4817L23.4158 27.1916H23.5476C26.3153 19.811 33.2346 16.582 40.2197 15.7913V22.5788C30.8622 23.5672 23.3499 29.6298 23.2181 40.2394H17.2214C17.1555 29.6298 9.57722 23.5672 0.219727 22.5788V15.7913Z\\"\\n        fill=\\"#FD4912\\"\\n      />\\n    </svg>\\n  </div>\\n  <h1 class=\\"text-l rotate-90 translate-y-[-250%] text-primary\\">SCROLL DOWN</h1>\\n</div>\\n\\n<style>\\n  .bounce-del-0 {\\n    animation: bounce 2s infinite ease-in-out;\\n  }\\n  .bounce-del-1 {\\n    animation: bounce 2s infinite ease-in-out 0.1s;\\n  }\\n  .bounce-del-2 {\\n    animation: bounce 2s infinite ease-in-out 0.2s;\\n  }\\n  @keyframes bounce {\\n    0%,\\n    100% {\\n      transform: translateY(-25%);\\n    }\\n    50% {\\n      transform: translateY(25%);\\n    }\\n  }\\n  h1 {\\n    font-family: \\"FFF Acid Grotesk Bold\\", sans-serif;\\n    white-space: nowrap;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAgDE,4BAAc,CACZ,SAAS,CAAE,qBAAM,CAAC,EAAE,CAAC,QAAQ,CAAC,WAChC,CACA,4BAAc,CACZ,SAAS,CAAE,qBAAM,CAAC,EAAE,CAAC,QAAQ,CAAC,WAAW,CAAC,IAC5C,CACA,4BAAc,CACZ,SAAS,CAAE,qBAAM,CAAC,EAAE,CAAC,QAAQ,CAAC,WAAW,CAAC,IAC5C,CACA,WAAW,qBAAO,CAChB,EAAE,CACF,IAAK,CACH,SAAS,CAAE,WAAW,IAAI,CAC5B,CACA,GAAI,CACF,SAAS,CAAE,WAAW,GAAG,CAC3B,CACF,CACA,iBAAG,CACD,WAAW,CAAE,uBAAuB,CAAC,CAAC,UAAU,CAChD,WAAW,CAAE,MACf"}'
    };
    Scroll = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css3);
      return ` <div class="grid grid-cols-1 grid-rows-3 w-fit mt-10" data-svelte-h="svelte-1glyteo"><div class="bounce-del-0 mt-2 svelte-1hn0hxi"><svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.219727 15.7913C7.2049 16.582 14.1242 19.811 16.8919 27.1916H17.0237L16.9578 0.634766H23.4817L23.4158 27.1916H23.5476C26.3153 19.811 33.2346 16.582 40.2197 15.7913V22.5788C30.8622 23.5672 23.3499 29.6298 23.2181 40.2394H17.2214C17.1555 29.6298 9.57722 23.5672 0.219727 22.5788V15.7913Z" fill="#FD4912"></path></svg></div> <div class="bounce-del-1 mt-2 svelte-1hn0hxi"><svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.219727 15.7913C7.2049 16.582 14.1242 19.811 16.8919 27.1916H17.0237L16.9578 0.634766H23.4817L23.4158 27.1916H23.5476C26.3153 19.811 33.2346 16.582 40.2197 15.7913V22.5788C30.8622 23.5672 23.3499 29.6298 23.2181 40.2394H17.2214C17.1555 29.6298 9.57722 23.5672 0.219727 22.5788V15.7913Z" fill="#FD4912"></path></svg></div> <div class="bounce-del-2 mt-2 grid grid-rows-1 grid-cols-2 svelte-1hn0hxi"><svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.219727 15.7913C7.2049 16.582 14.1242 19.811 16.8919 27.1916H17.0237L16.9578 0.634766H23.4817L23.4158 27.1916H23.5476C26.3153 19.811 33.2346 16.582 40.2197 15.7913V22.5788C30.8622 23.5672 23.3499 29.6298 23.2181 40.2394H17.2214C17.1555 29.6298 9.57722 23.5672 0.219727 22.5788V15.7913Z" fill="#FD4912"></path></svg></div> <h1 class="text-l rotate-90 translate-y-[-250%] text-primary svelte-1hn0hxi">SCROLL DOWN</h1> </div>`;
    });
  }
});

// .svelte-kit/output/server/chunks/Grid.js
var Grid;
var init_Grid = __esm({
  ".svelte-kit/output/server/chunks/Grid.js"() {
    init_ssr();
    Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { items } = $$props;
      if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
      return `<div class="grid gap-5 lg:gap-2.5 w-full grid-cols-1 lg:grid-cols-3">${each(items, (item) => {
        return `<div class="w-full h-full border-grey-200 border-2 p-5 rounded-lg text-filled transition-all duration-300 hover:text-neutral bg-branding hover:bg-primary ">${item.icon ? `<div class="flex mb-5 w-full lg:w-1/2"><img${add_attribute("src", item.icon, 0)} alt="" srcset=""> </div>` : `${item.char ? `<h1 class="text-inherit text-[10rem] -translate-y-[22%]">${escape(item.char)} </h1>` : ``}`} <h1 class="text-[2rem] text-inherit">${escape(item.title)}</h1> <p class="text-m lg:text-l text-inherit">${escape(item.description)}</p> </div>`;
      })}</div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var css4, VideoBtn, Person, Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_ssr();
    init_Scroll();
    init_Section();
    init_Grid();
    css4 = {
      code: "video.svelte-f9jhf5::-webkit-media-controls{display:none !important;opacity:0}video.svelte-f9jhf5::-webkit-media-controls-start-playback-button{display:none !important}",
      map: '{"version":3,"file":"VideoBtn.svelte","sources":["VideoBtn.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nexport let title;\\nexport let videoSrc;\\nonMount(() => {\\n  const videos = document.querySelectorAll(\\"video\\");\\n  videos.forEach((video) => {\\n    if (window.innerWidth > 1400) {\\n      video.playsInline = true;\\n      video.play();\\n      video.controls = false;\\n      video.addEventListener(\\"mouseover\\", function() {\\n        this.play();\\n        video.currentTime = 0;\\n      });\\n      video.addEventListener(\\"touchstart\\", function() {\\n        this.play();\\n        video.currentTime = 0;\\n      });\\n    }\\n  });\\n});\\n<\/script>\\n\\n<div\\n  class=\\"relative flex items-center justify-center overflow-hidden\\n  border-grey-200 border-2 hover:border-4 rounded-lg text-filled lg:text-primary\\n  transition-all duration-100 hover:text-filled bg-primary lg:bg-neutral\\n  min-h-[40vh] h-full hover:border-primary aspect-auto sm:aspect-square lg:aspect-auto\\"\\n>\\n  <video\\n    src={videoSrc}\\n    preload=\\"none\\"\\n    autoplay\\n    loop\\n    muted\\n    class=\\"absolute z-10 lg:opacity-0 lg:hover:opacity-100 transition-all duration-400\\n    h-full lg:w-full overflow-hidden object-cover block scale-110\\"\\n  />\\n\\n  <!--bg-gradient-to-tr from-neutral via-30% via-transparent-->\\n  <div\\n    class=\\"w-full h-full z-30 text-inherit pointer-events-none p-5 grid content-end\\"\\n  >\\n    <h1 class=\\"text-4xl text-inherit\\">{title}</h1>\\n  </div>\\n</div>\\n\\n<style>\\n  video::-webkit-media-controls {\\n    display: none !important;\\n    opacity: 0;\\n  }\\n  video::-webkit-media-controls-start-playback-button {\\n    display: none !important;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAgDE,mBAAK,wBAAyB,CAC5B,OAAO,CAAE,IAAI,CAAC,UAAU,CACxB,OAAO,CAAE,CACX,CACA,mBAAK,8CAA+C,CAClD,OAAO,CAAE,IAAI,CAAC,UAChB"}'
    };
    VideoBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { title } = $$props;
      let { videoSrc } = $$props;
      if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
      if ($$props.videoSrc === void 0 && $$bindings.videoSrc && videoSrc !== void 0) $$bindings.videoSrc(videoSrc);
      $$result.css.add(css4);
      return `<div class="relative flex items-center justify-center overflow-hidden border-grey-200 border-2 hover:border-4 rounded-lg text-filled lg:text-primary transition-all duration-100 hover:text-filled bg-primary lg:bg-neutral min-h-[40vh] h-full hover:border-primary aspect-auto sm:aspect-square lg:aspect-auto"><video${add_attribute("src", videoSrc, 0)} preload="none" autoplay loop muted class="absolute z-10 lg:opacity-0 lg:hover:opacity-100 transition-all duration-400 h-full lg:w-full overflow-hidden object-cover block scale-110 svelte-f9jhf5"></video>  <div class="w-full h-full z-30 text-inherit pointer-events-none p-5 grid content-end"><h1 class="text-4xl text-inherit">${escape(title)}</h1></div> </div>`;
    });
    Person = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { imgsrc } = $$props;
      let { name } = $$props;
      let { paragraph } = $$props;
      let { label } = $$props;
      let { skills } = $$props;
      if ($$props.imgsrc === void 0 && $$bindings.imgsrc && imgsrc !== void 0) $$bindings.imgsrc(imgsrc);
      if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
      if ($$props.paragraph === void 0 && $$bindings.paragraph && paragraph !== void 0) $$bindings.paragraph(paragraph);
      if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
      if ($$props.skills === void 0 && $$bindings.skills && skills !== void 0) $$bindings.skills(skills);
      return `<div class="rounded-lg border-2 overflow-hidden min-w-[300px]"><img${add_attribute("src", imgsrc, 0)} alt="" class="w-full h-[35vh] lg:h-[50vh] object-cover object-top"> <div class="grid p-5 gap-2.5"><div class="flex gap-0"><h2 class="text-2xl font-bold">${escape(name)}</h2> <div class="flex flex-wrap gap-2">${typeof label === "string" ? `<span class="bg-primary px-2 py-2 rounded-lg uppercase text-xs scale-75 text-neutral font-bold">${escape(label)}</span>` : `${each(label, (label2) => {
        return `<span class="bg-primary px-2 py-2 rounded-lg uppercase text-xs scale-75 text-neutral font-bold">${escape(label2)}</span>`;
      })}`}</div></div> <p class="text-m">${escape(paragraph)}</p> <div class="flex flex-wrap gap-2 pt-2.5">${each(skills, (skill) => {
        return `<span class="bg-gray-200 px-2 py-1 rounded-lg">${escape(skill)}</span>`;
      })}</div></div></div>`;
    });
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let processo = [
        {
          char: ".1",
          title: "Contatto",
          description: `
          La nostra consulenza inizia sempre con la profonda conoscenza del cliente
          `
        },
        {
          char: ".2",
          title: "Traduzione",
          description: `
          Le bozze si concretizzano in prime realizzazioni e valutazioni di quanto svolto
          `
        },
        {
          char: ".3",
          title: "Stretta di mano",
          description: `
          Formiamo il prodotto finito da poter integrare nella comunicazione aziendale
          `
        }
      ];
      return `<div class="absolute bottom-16 w-[25vw]">${validate_component(Scroll, "Scroll").$$render($$result, {}, {}, {})}</div> <div class="mt-5 lg:mt-0 w-full">${validate_component(Hero, "Hero").$$render(
        $$result,
        {
          title: ["Design Studios", "\u2199Our Works", "Contact Us\u2198", "Never Lorem"],
          titleMobile: ["Design Studios", "Our Works\u2197", "Contact Us\u2193", "Never Lorem"],
          content: [
            "Q Design Studios \xE8 una realt\xE0 dedicata alla creazione,",
            "di cosa? tutto."
          ],
          contentMobile: ["Q Design Studios \xE8 una realt\xE0 dedicata alla creazione, di cosa? tutto."]
        },
        {},
        {}
      )} <div class="h-svh"></div> <div class="mb-10 relative w-full">${validate_component(Section, "Section").$$render(
        $$result,
        {
          title: ["\u2193 SERVIZI", "\u2198 SERVIZI", "\u2022 SERVIZI", "SERVIZI"]
        },
        {},
        {
          default: () => {
            return `<div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-2.5"><div class="lg:col-span-2"><a href="/branding">${validate_component(VideoBtn, "VideoBtn").$$render(
              $$result,
              {
                title: "Branding",
                videoSrc: "/assets/video/branding.mp4"
              },
              {},
              {}
            )}</a></div> <a href="/grafica">${validate_component(VideoBtn, "VideoBtn").$$render(
              $$result,
              {
                title: "Grafica",
                videoSrc: "/assets/video/grafica.mp4"
              },
              {},
              {}
            )}</a> <a href="/uiuxdesign">${validate_component(VideoBtn, "VideoBtn").$$render(
              $$result,
              {
                title: "UI/UX Design",
                videoSrc: "/assets/video/grafica.mp4"
              },
              {},
              {}
            )}</a> <a href="/sounddesign">${validate_component(VideoBtn, "VideoBtn").$$render(
              $$result,
              {
                title: "Sound Design",
                videoSrc: "/assets/video/sounddesign2.mp4"
              },
              {},
              {}
            )}</a> <a href="/fotografia">${validate_component(VideoBtn, "VideoBtn").$$render(
              $$result,
              {
                title: "Fotografia",
                videoSrc: "/assets/video/grafica.mp4"
              },
              {},
              {}
            )}</a></div>`;
          }
        }
      )} <div class="my-20"></div> ${validate_component(Section, "Section").$$render(
        $$result,
        {
          title: ["\u2193 CHI SIAMO", "\u2198 CHI SIAMO", "\u2022 CHI SIAMO", "CHI SIAMO"]
        },
        {},
        {
          default: () => {
            return `<div class="w-full flex flex-nowrap overflow-x-auto gap-5 lg:gap-10 lg:px-5 lg:pt-5">${validate_component(Person, "Person").$$render(
              $$result,
              {
                imgsrc: "assets/img/stock_portrait.webp",
                name: "Alessandro",
                paragraph: `Sono Alessandro, 20 anni, da sempre ho una passione ben radicata per il Web Design e la cura del cliente. L'unione di queste due peculiarit\xE0 mi ha portato alla fondazione di Virgo.`,
                label: "Co-founder",
                skills: ["Management", "Customer Care"]
              },
              {},
              {}
            )} ${validate_component(Person, "Person").$$render(
              $$result,
              {
                imgsrc: "assets/img/stock_portrait.webp",
                name: "Alessandro",
                paragraph: `Sono Alessandro, 20 anni, da sempre ho una passione ben radicata per il Web Design e la cura del cliente. L'unione di queste due peculiarit\xE0 mi ha portato alla fondazione di Virgo.`,
                label: "Co-founder",
                skills: ["Management", "Customer Care"]
              },
              {},
              {}
            )}</div>`;
          }
        }
      )} <div class="my-20"></div> ${validate_component(Section, "Section").$$render(
        $$result,
        {
          title: ["\u2193 PROCESSO", "\u2198 PROCESSO", "\u2022 PROCESSO", "PROCESSO"]
        },
        {},
        {
          default: () => {
            return `<div><p class="mb-5" data-svelte-h="svelte-1vm242d">Il processo \xE8 parte fondamentale per un team creativo di qualsiasi
          genere, cos\xEC come per il cliente</p> <div class="w-full">${validate_component(Grid, "Grid").$$render($$result, { items: processo }, {}, {})}</div></div>`;
          }
        }
      )}</div></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3
});
var index3, component_cache3, component3, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    index3 = 2;
    component3 = async () => component_cache3 ?? (component_cache3 = (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default);
    imports3 = ["_app/immutable/nodes/2.BCVIM5Oe.js", "_app/immutable/chunks/scheduler.Bu15-wVR.js", "_app/immutable/chunks/index.O99BFJ2P.js", "_app/immutable/chunks/Scroll.BGNQyCEa.js", "_app/immutable/chunks/Typewriter.oItSYdui.js", "_app/immutable/chunks/Section._ojqOJzG.js", "_app/immutable/chunks/Grid.CYKuP7nd.js"];
    stylesheets3 = ["_app/immutable/assets/2.C_MFEbNm.css", "_app/immutable/assets/Scroll.B_9Msmgy.css", "_app/immutable/assets/Section.Cjh7qCQv.css"];
    fonts3 = [];
  }
});

// .svelte-kit/output/server/entries/pages/branding/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => Page2
});
var css5, VideoSection, HiddenText, Quote, Page2;
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/branding/_page.svelte.js"() {
    init_ssr();
    init_Grid();
    init_Scroll();
    init_Section();
    css5 = {
      code: ".marquee.svelte-58oqjv{white-space:nowrap;animation:svelte-58oqjv-marquee 5s linear infinite}.reverse-marquee.svelte-58oqjv{white-space:nowrap;animation:svelte-58oqjv-marquee 5s linear reverse infinite}@keyframes svelte-58oqjv-marquee{0%{transform:translate3d(0, 0, 0)}100%{transform:translate3d(-100%, 0, 0)}}video.svelte-58oqjv::-webkit-media-controls{display:none !important;opacity:0}video.svelte-58oqjv::-webkit-media-controls-start-playback-button{display:none !important}",
      map: '{"version":3,"file":"VideoSection.svelte","sources":["VideoSection.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let banner;\\nexport let bottomBanner = void 0;\\nexport let videoSrc;\\nimport { onMount } from \\"svelte\\";\\nonMount(() => {\\n  var videoElements = document.querySelectorAll(\\"video\\");\\n  videoElements.forEach((videoElement) => {\\n    videoElement.removeAttribute(\\"controls\\");\\n    videoElement.play();\\n  });\\n});\\n<\/script>\\n\\n<div\\n  class=\\"flex flex-col w-full\\n      lg:max-h-[92svh] aspect-square mb-10 overflow-hidden\\n      border-grey-200 border-2 rounded-lg\\"\\n>\\n  <div class=\\"flex text-[4rem]\\">\\n    {#each { length: 10 } as _}\\n      <h1 class=\\"reverse-marquee pr-5 -mb-40\\">{banner}</h1>\\n    {/each}\\n  </div>\\n\\n  <video\\n    autoplay\\n    muted\\n    loop\\n    playsinline\\n    preload=\\"none\\"\\n    controls={false}\\n    class=\\"w-full h-full object-cover pointer-events-none\\"\\n    src={videoSrc}\\n  />\\n\\n  <div class=\\"flex text-[4rem] -mt-[6rem]\\">\\n    {#each { length: 10 } as _}\\n      <h1 class=\\"marquee pr-5\\">{bottomBanner ?? banner}</h1>\\n    {/each}\\n  </div>\\n</div>\\n\\n<style>\\n  .marquee {\\n    white-space: nowrap;\\n    animation: marquee 5s linear infinite;\\n  }\\n\\n  .reverse-marquee {\\n    white-space: nowrap;\\n    animation: marquee 5s linear reverse infinite;\\n  }\\n\\n  @keyframes marquee {\\n    0% {\\n      transform: translate3d(0, 0, 0);\\n    }\\n    100% {\\n      transform: translate3d(-100%, 0, 0);\\n    }\\n  }\\n\\n  video::-webkit-media-controls {\\n    display: none !important;\\n    opacity: 0;\\n  }\\n  video::-webkit-media-controls-start-playback-button {\\n    display: none !important;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA2CE,sBAAS,CACP,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,qBAAO,CAAC,EAAE,CAAC,MAAM,CAAC,QAC/B,CAEA,8BAAiB,CACf,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,qBAAO,CAAC,EAAE,CAAC,MAAM,CAAC,OAAO,CAAC,QACvC,CAEA,WAAW,qBAAQ,CACjB,EAAG,CACD,SAAS,CAAE,YAAY,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAChC,CACA,IAAK,CACH,SAAS,CAAE,YAAY,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACpC,CACF,CAEA,mBAAK,wBAAyB,CAC5B,OAAO,CAAE,IAAI,CAAC,UAAU,CACxB,OAAO,CAAE,CACX,CACA,mBAAK,8CAA+C,CAClD,OAAO,CAAE,IAAI,CAAC,UAChB"}'
    };
    VideoSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { banner } = $$props;
      let { bottomBanner = void 0 } = $$props;
      let { videoSrc } = $$props;
      if ($$props.banner === void 0 && $$bindings.banner && banner !== void 0) $$bindings.banner(banner);
      if ($$props.bottomBanner === void 0 && $$bindings.bottomBanner && bottomBanner !== void 0) $$bindings.bottomBanner(bottomBanner);
      if ($$props.videoSrc === void 0 && $$bindings.videoSrc && videoSrc !== void 0) $$bindings.videoSrc(videoSrc);
      $$result.css.add(css5);
      return `<div class="flex flex-col w-full lg:max-h-[92svh] aspect-square mb-10 overflow-hidden border-grey-200 border-2 rounded-lg"><div class="flex text-[4rem]">${each({ length: 10 }, (_) => {
        return `<h1 class="reverse-marquee pr-5 -mb-40 svelte-58oqjv">${escape(banner)}</h1>`;
      })}</div> <video autoplay muted loop playsinline preload="none" ${""} class="w-full h-full object-cover pointer-events-none svelte-58oqjv"${add_attribute("src", videoSrc, 0)}></video> <div class="flex text-[4rem] -mt-[6rem]">${each({ length: 10 }, (_) => {
        return `<h1 class="marquee pr-5 svelte-58oqjv">${escape(bottomBanner ?? banner)}</h1>`;
      })}</div> </div>`;
    });
    HiddenText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { texts } = $$props;
      if ($$props.texts === void 0 && $$bindings.texts && texts !== void 0) $$bindings.texts(texts);
      return `<div class="flex flex-col gap-4 mt-5">${each(texts, (ht) => {
        return `<details class="flex flex-col"><summary class="cursor-pointer font-serif">${escape(ht.title)}</summary> <div class="vertical-line">${each(ht.content, (content) => {
          return `<p class="my-2 pl-5 lg:pl-10">${escape(content)}</p>`;
        })}</div> </details>`;
      })}</div>`;
    });
    Quote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { quote } = $$props;
      if ($$props.quote === void 0 && $$bindings.quote && quote !== void 0) $$bindings.quote(quote);
      return `<div class="flex flex-col w-full min-h-[92svh] mb-[10rem] mt-20"><h1 class="text-[15rem] lg:text-[30rem] leading-[0rem] translate-y-[3.2rem] lg:translate-y-[4.6rem] flex-none" data-svelte-h="svelte-9mr80d">\xAB</h1> <div class="flex-grow grid place-content-center pt-10"><blockquote><p class="text-xl">${escape(quote.quote)}</p></blockquote> ${quote.author ? `<p class="text-right mt-10 w-full pr-0 lg:pr-20">${escape(quote.author)}</p>` : ``}</div> <h1 class="text-[15rem] lg:text-[30rem] leading-[0rem] text-right -translate-y-[5rem] lg:-translate-y-[7.4rem] flex-none" data-svelte-h="svelte-18eeen0">\xBB</h1></div>`;
    });
    Page2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let branding_process = [
        {
          char: ".1",
          title: "Ambiente",
          description: `
          Ci conosciamo e valutiamo lo scenario competitivo e l'ambiente in cui si muove il brand
          `
        },
        {
          char: ".2",
          title: "Identit\xE0",
          description: `
          Definiamo i valori, visione, obiettivi e posizionamento del brand: tutto \xE8 specchio del cliente 
          `
        },
        {
          char: ".3",
          title: "\xABBoom\xBB",
          description: `
          Tutto viene tradotto visivamente e strutturato in un libro dedicato volto a guidare chiunque lavori con il brand
          `
        }
      ];
      let HiddenTextData = [
        {
          title: "Il branding riguarda solo grandi aziende?",
          content: [
            `Spesso si pensa al branding come un\u2019attivit\xE0 svolta solo da grandi aziende con ingenti budget, ti far\xE0 piacere sapere che non \xE8 strettamente necessario.
        Il mercato italiano \xE8 composto maggiormente da piccole e micro imprese spesso sconosciute. Il loro approccio \xE8 prettamente commerciale con focalizzazione
        sul prodotto o servizio ma \xE8 inevitabile che miglioramenti di qualit\xE0 o introduzione di innovazioni vengano adottati anche dalla concorrenza. Il risultato
        \xE8 che la clientela segue il prodotto a loro pi\xF9 conveniente, e gi\xE0 domani potrebbe non essere pi\xF9 il tuo. Fornire loro un legame visivo (e non solo) con
        un brand li porter\xE0 a sceglierti nuovamente qualora il tuo prodotto gli sia piaciuto in passato.
`
          ]
        }
      ];
      let quote = {
        quote: "In questa societ\xE0 in continua evoluzione, i marchi pi\xF9 potenti e duraturi sono costruiti col cuore. Sono reali e sostenibili. Le loro basi sono solide perch\xE9 sono costruite con la forza dello spirito umano e non su una campagna pubblicitaria. Le societ\xE0 pi\xF9 durature sono quelle autentiche",
        author: "Howard Schultz"
      };
      return `<div class="absolute bottom-16 w-[25vw]">${validate_component(Scroll, "Scroll").$$render($$result, {}, {}, {})}</div> <div class="mt-5 lg:mt-0">${validate_component(Hero, "Hero").$$render(
        $$result,
        {
          title: ["\xABBrand Boom\xBB", "Contact Us\u2198", "\u2199Other Works", "Never Lorem"],
          titleMobile: ["\xABBrand Boom\xBB", "Contact Us\u2198", "\u2199Other Works", "Never Lorem"],
          content: [
            `Branding \xE8 conoscere ci\xF2 che rende unico e differente un'azienda, un`,
            `prodotto, un servizio o una persona e renderlo evidente agli occhi di tutti.`,
            `\xC8 un processo articolato e continuo: il brand \xE8 l'espressione visiva,`,
            `verbale e sensoriale che tocca il tuo pubblico.`
          ],
          contentMobile: [
            `Branding \xE8 conoscere ci\xF2 che rende unico e differente un'azienda, un
    prodotto, un servizio o una persona e renderlo evidente agli occhi di tutti.
    \xC8 un processo articolato e continuo: il brand \xE8 l'espressione visiva,
    verbale e sensoriale che tocca il tuo pubblico..`
          ]
        },
        {},
        {}
      )} <div class="h-svh"></div> <div class="mb-10 relative w-full">${validate_component(VideoSection, "VideoSection").$$render(
        $$result,
        {
          banner: "\u2192BRANDING",
          bottomBanner: "BRANDING\u2190",
          videoSrc: "/assets/video/branding_stock.mp4"
        },
        {},
        {}
      )} ${validate_component(VideoSection, "VideoSection").$$render(
        $$result,
        {
          banner: "ALTRO VIDEO",
          videoSrc: "/assets/video/branding_stock.mp4"
        },
        {},
        {}
      )} <div class="my-20">${validate_component(Section, "Section").$$render(
        $$result,
        {
          title: ["\u2193 PERCORSO", "\u2198 PERCORSO", "\u2022 PERCORSO", "PERCORSO"]
        },
        {},
        {
          default: () => {
            return `<div><p class="mb-5" data-svelte-h="svelte-1um8fwu">Vuoi capire come funziona? Questo \xE8 il percorso di branding che
            intraprenderemo.</p> <div class="w-full">${validate_component(Grid, "Grid").$$render($$result, { items: branding_process }, {}, {})}</div></div>`;
          }
        }
      )}</div> ${validate_component(Quote, "Quote").$$render($$result, { quote }, {}, {})} <div class="my-20 p-5 border-2 border-grey-200 w-full rounded-lg"><h6 class="text-xl" data-svelte-h="svelte-je895n">Se vuoi leggere altro</h6> <div class="lg:max-w-[80%] max-w-[90%]">${validate_component(HiddenText, "HiddenText").$$render($$result, { texts: HiddenTextData }, {}, {})}</div></div></div></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  fonts: () => fonts4,
  imports: () => imports4,
  index: () => index4,
  stylesheets: () => stylesheets4
});
var index4, component_cache4, component4, imports4, stylesheets4, fonts4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    index4 = 3;
    component4 = async () => component_cache4 ?? (component_cache4 = (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default);
    imports4 = ["_app/immutable/nodes/3.CXdDZWbg.js", "_app/immutable/chunks/scheduler.Bu15-wVR.js", "_app/immutable/chunks/index.O99BFJ2P.js", "_app/immutable/chunks/Grid.CYKuP7nd.js", "_app/immutable/chunks/Scroll.BGNQyCEa.js", "_app/immutable/chunks/Typewriter.oItSYdui.js", "_app/immutable/chunks/Section._ojqOJzG.js"];
    stylesheets4 = ["_app/immutable/assets/3.B14vldbw.css", "_app/immutable/assets/Scroll.B_9Msmgy.css", "_app/immutable/assets/Section.Cjh7qCQv.css"];
    fonts4 = [];
  }
});

// .svelte-kit/output/server/entries/pages/fotografia/_page.svelte.js
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: () => Page3
});
var Page3;
var init_page_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/fotografia/_page.svelte.js"() {
    init_ssr();
    Page3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `sei in fotografia`;
    });
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  component: () => component5,
  fonts: () => fonts5,
  imports: () => imports5,
  index: () => index5,
  stylesheets: () => stylesheets5
});
var index5, component_cache5, component5, imports5, stylesheets5, fonts5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    index5 = 4;
    component5 = async () => component_cache5 ?? (component_cache5 = (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default);
    imports5 = ["_app/immutable/nodes/4.CuBHTm-f.js", "_app/immutable/chunks/scheduler.Bu15-wVR.js", "_app/immutable/chunks/index.O99BFJ2P.js"];
    stylesheets5 = [];
    fonts5 = [];
  }
});

// .svelte-kit/output/server/entries/pages/grafica/_page.svelte.js
var page_svelte_exports4 = {};
__export(page_svelte_exports4, {
  default: () => Page4
});
var Page4;
var init_page_svelte4 = __esm({
  ".svelte-kit/output/server/entries/pages/grafica/_page.svelte.js"() {
    init_ssr();
    Page4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `sei in grafica`;
    });
  }
});

// .svelte-kit/output/server/nodes/5.js
var __exports6 = {};
__export(__exports6, {
  component: () => component6,
  fonts: () => fonts6,
  imports: () => imports6,
  index: () => index6,
  stylesheets: () => stylesheets6
});
var index6, component_cache6, component6, imports6, stylesheets6, fonts6;
var init__6 = __esm({
  ".svelte-kit/output/server/nodes/5.js"() {
    index6 = 5;
    component6 = async () => component_cache6 ?? (component_cache6 = (await Promise.resolve().then(() => (init_page_svelte4(), page_svelte_exports4))).default);
    imports6 = ["_app/immutable/nodes/5.BJrc5YBv.js", "_app/immutable/chunks/scheduler.Bu15-wVR.js", "_app/immutable/chunks/index.O99BFJ2P.js"];
    stylesheets6 = [];
    fonts6 = [];
  }
});

// .svelte-kit/output/server/entries/pages/mission/_page.svelte.js
var page_svelte_exports5 = {};
__export(page_svelte_exports5, {
  default: () => Page5
});
var css6, Page5;
var init_page_svelte5 = __esm({
  ".svelte-kit/output/server/entries/pages/mission/_page.svelte.js"() {
    init_ssr();
    init_Scroll();
    css6 = {
      code: ".rotate-onscroll.svelte-sx6zvp{animation-name:svelte-sx6zvp-rotateAnimation;animation-duration:1ms;animation-direction:alternate;animation-timeline:scroll(block nearest)}.write.svelte-sx6zvp{animation:svelte-sx6zvp-writeAnimation 2s 0.4s infinite}@keyframes svelte-sx6zvp-rotateAnimation{from{transform:rotate(0deg)}90%{transform:rotate(360deg)}to{transform:rotate(360deg)}}@keyframes svelte-sx6zvp-writeAnimation{0%{transform:rotate(0deg)}25%{transform:rotate(5deg)}50%{transform:rotate(-5deg)}75%{transform:rotate(5deg)}100%{transform:rotate(0deg)}}.show-x-onscroll.svelte-sx6zvp{animation-name:svelte-sx6zvp-showXAnimation;animation-duration:1ms;animation-direction:alternate;animation-timeline:scroll(block nearest)}@keyframes svelte-sx6zvp-showXAnimation{50%{transform:translate(-150%, -10%);opacity:0}75%{transform:translate(0%);opacity:0.3}100%{transform:translate(150%, 10%);opacity:0}}",
      map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import Hero from \\"$lib/components/Hero.svelte\\";\\n  import Scroll from \\"$lib/components/Scroll.svelte\\";\\n<\/script>\\n\\n<div class=\\"absolute bottom-16 w-[25vw]\\">\\n  <Scroll />\\n</div>\\n<div class=\\"mt-5 lg:mt-0\\">\\n  <Hero\\n    title={[\\"Our Mission\\", \\"Never Lorem\\"]}\\n    titleMobile={[\\"Our Mission\\", \\"Never Lorem\\"]}\\n    content={[\\"\\"]}\\n    contentMobile={[\\"\\"]}\\n  />\\n  <div class=\\"h-svh\\"></div>\\n\\n  <div class=\\"flex flex-col gap-5 mt-20\\">\\n    <div\\n      class=\\"gap-10 my-5 h-svh flex flex-col lg:flex-row overflow-hidden lg:overflow-visible\\"\\n    >\\n      <div class=\\"lg:w-1/2 z-10\\">\\n        <p class=\\"text-xs text-secondary mb-2\\">OBIETTIVO</p>\\n        <h1 class=\\"text-2xl\\">Espandere gli orizzonti propri e altrui</h1>\\n        <p class=\\"text-m lg:text-l mt-2.5\\">\\n          Definire, scoprire e progettare brand nuovi o gi\xE0 esistenti \xE8 solo una\\n          parte dell\u2019obiettivo di QDS, per espandere gli orizzonti altrui \xE8\\n          necessario creare persistenza e lasciare un segno nel tempo\\n        </p>\\n      </div>\\n      <div\\n        class=\\"lg:w-1/2 flex place-content-center lg:scale-150 lg:-translate-x-[25%] z-0\\"\\n      >\\n        <img\\n          class=\\"w-full rotate-onscroll opacity-30\\"\\n          src=\\"/assets/graphics/espandi.svg\\"\\n          alt=\\"\\"\\n        />\\n      </div>\\n    </div>\\n    <div\\n      class=\\"gap-10 my-5 h-svh flex flex-col lg:flex-row overflow-hidden lg:overflow-visible\\"\\n    >\\n      <div class=\\"lg:w-1/2 z-10\\">\\n        <p class=\\"text-xs text-secondary mb-2\\">VISIONE</p>\\n        <h1 class=\\"text-2xl\\">Realizzabile.</h1>\\n        <p class=\\"text-m lg:text-l mt-2.5\\">\\n          Pensare il contrario \xE8 penalizzante gi\xE0 dalla nascita: tutto \xE8\\n          realizzabile\\n        </p>\\n      </div>\\n      <div\\n        class=\\"lg:w-1/2 flex place-content-center lg:scale-150 translate-x-[25%] lg:-translate-x-[25%] -translate-y-[5%] z-0 lg:overflow-visible\\"\\n      >\\n        <img\\n          class=\\"w-full write opacity-30\\"\\n          src=\\"/assets/graphics/pen.svg\\"\\n          alt=\\"\\"\\n        />\\n      </div>\\n    </div>\\n    <div\\n      class=\\"gap-10 my-5 h-svh flex flex-col lg:flex-row overflow-hidden lg:overflow-visible\\"\\n    >\\n      <div class=\\"lg:w-1/2 z-10\\">\\n        <p class=\\"text-xs text-secondary mb-2\\">POSIZIONAMENTO</p>\\n        <h1 class=\\"text-2xl\\">Il passato come risorsa</h1>\\n        <p class=\\"text-m lg:text-l mt-2.5\\">\\n          Utilizzare il pensiero per elaborare il passato ci permette di creare\\n          armonia o contrasto con esso e con ci\xF2 che ci circonda tuttora\\n        </p>\\n      </div>\\n      <div\\n        class=\\"lg:w-1/2 flex place-content-center lg:scale-150 lg:-translate-x-[25%] -translate-y-[5%] z-0 lg:overflow-visible\\"\\n      >\\n        <img\\n          class=\\"w-full show-x-onscroll opacity-30\\"\\n          src=\\"/assets/graphics/connection.svg\\"\\n          alt=\\"\\"\\n        />\\n      </div>\\n    </div>\\n    <div\\n      class=\\"gap-10 my-5 h-svh flex flex-col lg:flex-row overflow-hidden lg:overflow-visible\\"\\n    >\\n      <div class=\\"lg:w-1/2 z-10\\">\\n        <p class=\\"text-xs text-secondary mb-2\\">VALORI</p>\\n        <h1 class=\\"text-2xl\\">Contrasto</h1>\\n        <p class=\\"text-m lg:text-l mt-2.5\\">\\n          Il contrasto, insieme al pensiero, \xE8 ci\xF2 che permette di creare qualcosa\\n        di sempre nuovo, pi\xF9 o meno forte rimarr\xE0 sempre presente all\u2019interno\\n        delle creazioni\\n        </p>\\n      </div>\\n      <div\\n        class=\\"lg:w-1/2 flex place-content-center lg:scale-150 lg:-translate-x-[25%] -translate-y-[5%] z-0 lg:overflow-visible\\"\\n      >\\n        <img\\n          class=\\"w-full rotate-onscroll opacity-30\\"\\n          src=\\"/assets/graphics/contrasto.svg\\"\\n          alt=\\"\\"\\n        />\\n      </div>\\n    </div>\\n  </div>\\n\\n  <div class=\\"flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-5\\">\\n    <div\\n      class=\\"\\n      my-2.5 lg:my-0 border-2 border-secondary rounded-lg p-5\\n      lg:even:pl-5 lg:odd:pr-5\\n    \\"\\n    >\\n      <div class=\\"mb-5 flex\\">\\n        <img\\n          class=\\"w-full lg:w-1/6\\"\\n          src=\\"/assets/graphics/chirale.svg\\"\\n          alt=\\"\\"\\n        />\\n      </div>\\n      <h1 class=\\"text-2xl\\">Chiralit\xE0</h1>\\n      <p class=\\"text-m lg:text-l mt-2.5\\">\\n        QDS \xE8 una copia non sovrapponibile del passato per il futuro in quanto\\n        lo utilizza solamente come risorsa\\n      </p>\\n    </div>\\n    <div\\n      class=\\"\\n      my-2.5 lg:my-0 border-2 border-secondary rounded-lg p-5\\n    \\"\\n    >\\n      <div class=\\"mb-5 flex\\">\\n        <img\\n          class=\\"w-full lg:w-1/6\\"\\n          src=\\"/assets/graphics/determinazione.svg\\"\\n          alt=\\"\\"\\n        />\\n      </div>\\n      <h1 class=\\"text-2xl\\">Determinazione</h1>\\n      <p class=\\"text-m lg:text-l mt-2.5\\">\\n        Aspirazioni, ambizioni e promesse sfociano in determinazione per il\\n        raggiungimento degli obiettivi\\n      </p>\\n    </div>\\n    <div\\n      class=\\"\\n      my-2.5 lg:my-0 border-2 border-secondary rounded-lg p-5\\n    \\"\\n    >\\n      <div class=\\"mb-5 flex\\">\\n        <img\\n          class=\\"w-full lg:w-1/6\\"\\n          src=\\"/assets/graphics/pulizia.svg\\"\\n          alt=\\"\\"\\n        />\\n      </div>\\n      <h1 class=\\"text-2xl\\">Pulizia</h1>\\n      <p class=\\"text-m lg:text-l mt-2.5\\">\\n        Linee decise e nette aiutano a convogliare i nostri valori\\n      </p>\\n    </div>\\n    <div\\n      class=\\"\\n      my-2.5 lg:my-0 border-2 border-secondary rounded-lg p-5\\n      \\"\\n    >\\n      <div class=\\"mb-5 flex\\">\\n        <img class=\\"w-full lg:w-1/6\\" src=\\"/assets/graphics/sfondo.svg\\" alt=\\"\\" />\\n      </div>\\n      <h1 class=\\"text-2xl\\">Sfondo</h1>\\n      <p class=\\"text-m lg:text-l mt-2.5\\">\\n        QDS mantiene a pari passo ci\xF2 che \xE8 visibile all\u2019esterno e ci\xF2 che non\\n        lo \xE8\\n      </p>\\n    </div>\\n  </div>\\n</div>\\n\\n<style>\\n  .rotate-onscroll {\\n    animation-name: rotateAnimation;\\n    animation-duration: 1ms; /* Firefox requires this to apply the animation */\\n    animation-direction: alternate;\\n    animation-timeline: scroll(block nearest);\\n  }\\n  .write {\\n    animation: writeAnimation 2s 0.4s infinite;\\n  }\\n  @keyframes rotateAnimation {\\n    from {\\n      transform: rotate(0deg);\\n    }\\n    90% {\\n      transform: rotate(360deg);\\n    }\\n    to {\\n      transform: rotate(360deg);\\n    }\\n  }\\n  @keyframes writeAnimation {\\n    0% {\\n      transform: rotate(0deg);\\n    }\\n    25% {\\n      transform: rotate(5deg);\\n    }\\n    50% {\\n      transform: rotate(-5deg);\\n    }\\n    75% {\\n      transform: rotate(5deg);\\n    }\\n    100% {\\n      transform: rotate(0deg);\\n    }\\n  }\\n  .show-x-onscroll{\\n    animation-name: showXAnimation;\\n    animation-duration: 1ms; /* Firefox requires this to apply the animation */\\n    animation-direction: alternate;\\n    animation-timeline: scroll(block nearest);\\n  }\\n  @keyframes showXAnimation {\\n\\n    50% {\\n      transform: translate(-150%, -10%);\\n      opacity: 0;\\n    }\\n    75% {\\n      transform: translate(0%);\\n      opacity: 0.3;\\n    }\\n    100% {\\n      transform: translate(150%, 10%);\\n      opacity: 0;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAmLE,8BAAiB,CACf,cAAc,CAAE,6BAAe,CAC/B,kBAAkB,CAAE,GAAG,CACvB,mBAAmB,CAAE,SAAS,CAC9B,kBAAkB,CAAE,OAAO,KAAK,CAAC,OAAO,CAC1C,CACA,oBAAO,CACL,SAAS,CAAE,4BAAc,CAAC,EAAE,CAAC,IAAI,CAAC,QACpC,CACA,WAAW,6BAAgB,CACzB,IAAK,CACH,SAAS,CAAE,OAAO,IAAI,CACxB,CACA,GAAI,CACF,SAAS,CAAE,OAAO,MAAM,CAC1B,CACA,EAAG,CACD,SAAS,CAAE,OAAO,MAAM,CAC1B,CACF,CACA,WAAW,4BAAe,CACxB,EAAG,CACD,SAAS,CAAE,OAAO,IAAI,CACxB,CACA,GAAI,CACF,SAAS,CAAE,OAAO,IAAI,CACxB,CACA,GAAI,CACF,SAAS,CAAE,OAAO,KAAK,CACzB,CACA,GAAI,CACF,SAAS,CAAE,OAAO,IAAI,CACxB,CACA,IAAK,CACH,SAAS,CAAE,OAAO,IAAI,CACxB,CACF,CACA,8BAAgB,CACd,cAAc,CAAE,4BAAc,CAC9B,kBAAkB,CAAE,GAAG,CACvB,mBAAmB,CAAE,SAAS,CAC9B,kBAAkB,CAAE,OAAO,KAAK,CAAC,OAAO,CAC1C,CACA,WAAW,4BAAe,CAExB,GAAI,CACF,SAAS,CAAE,UAAU,KAAK,CAAC,CAAC,IAAI,CAAC,CACjC,OAAO,CAAE,CACX,CACA,GAAI,CACF,SAAS,CAAE,UAAU,EAAE,CAAC,CACxB,OAAO,CAAE,GACX,CACA,IAAK,CACH,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,GAAG,CAAC,CAC/B,OAAO,CAAE,CACX,CACF"}'
    };
    Page5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css6);
      return `<div class="absolute bottom-16 w-[25vw]">${validate_component(Scroll, "Scroll").$$render($$result, {}, {}, {})}</div> <div class="mt-5 lg:mt-0">${validate_component(Hero, "Hero").$$render(
        $$result,
        {
          title: ["Our Mission", "Never Lorem"],
          titleMobile: ["Our Mission", "Never Lorem"],
          content: [""],
          contentMobile: [""]
        },
        {},
        {}
      )} <div class="h-svh"></div> <div class="flex flex-col gap-5 mt-20" data-svelte-h="svelte-1gw7dpr"><div class="gap-10 my-5 h-svh flex flex-col lg:flex-row overflow-hidden lg:overflow-visible"><div class="lg:w-1/2 z-10"><p class="text-xs text-secondary mb-2">OBIETTIVO</p> <h1 class="text-2xl">Espandere gli orizzonti propri e altrui</h1> <p class="text-m lg:text-l mt-2.5">Definire, scoprire e progettare brand nuovi o gi\xE0 esistenti \xE8 solo una
          parte dell\u2019obiettivo di QDS, per espandere gli orizzonti altrui \xE8
          necessario creare persistenza e lasciare un segno nel tempo</p></div> <div class="lg:w-1/2 flex place-content-center lg:scale-150 lg:-translate-x-[25%] z-0"><img class="w-full rotate-onscroll opacity-30 svelte-sx6zvp" src="/assets/graphics/espandi.svg" alt=""></div></div> <div class="gap-10 my-5 h-svh flex flex-col lg:flex-row overflow-hidden lg:overflow-visible"><div class="lg:w-1/2 z-10"><p class="text-xs text-secondary mb-2">VISIONE</p> <h1 class="text-2xl">Realizzabile.</h1> <p class="text-m lg:text-l mt-2.5">Pensare il contrario \xE8 penalizzante gi\xE0 dalla nascita: tutto \xE8
          realizzabile</p></div> <div class="lg:w-1/2 flex place-content-center lg:scale-150 translate-x-[25%] lg:-translate-x-[25%] -translate-y-[5%] z-0 lg:overflow-visible"><img class="w-full write opacity-30 svelte-sx6zvp" src="/assets/graphics/pen.svg" alt=""></div></div> <div class="gap-10 my-5 h-svh flex flex-col lg:flex-row overflow-hidden lg:overflow-visible"><div class="lg:w-1/2 z-10"><p class="text-xs text-secondary mb-2">POSIZIONAMENTO</p> <h1 class="text-2xl">Il passato come risorsa</h1> <p class="text-m lg:text-l mt-2.5">Utilizzare il pensiero per elaborare il passato ci permette di creare
          armonia o contrasto con esso e con ci\xF2 che ci circonda tuttora</p></div> <div class="lg:w-1/2 flex place-content-center lg:scale-150 lg:-translate-x-[25%] -translate-y-[5%] z-0 lg:overflow-visible"><img class="w-full show-x-onscroll opacity-30 svelte-sx6zvp" src="/assets/graphics/connection.svg" alt=""></div></div> <div class="gap-10 my-5 h-svh flex flex-col lg:flex-row overflow-hidden lg:overflow-visible"><div class="lg:w-1/2 z-10"><p class="text-xs text-secondary mb-2">VALORI</p> <h1 class="text-2xl">Contrasto</h1> <p class="text-m lg:text-l mt-2.5">Il contrasto, insieme al pensiero, \xE8 ci\xF2 che permette di creare qualcosa
        di sempre nuovo, pi\xF9 o meno forte rimarr\xE0 sempre presente all\u2019interno
        delle creazioni</p></div> <div class="lg:w-1/2 flex place-content-center lg:scale-150 lg:-translate-x-[25%] -translate-y-[5%] z-0 lg:overflow-visible"><img class="w-full rotate-onscroll opacity-30 svelte-sx6zvp" src="/assets/graphics/contrasto.svg" alt=""></div></div></div> <div class="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-5" data-svelte-h="svelte-1l7qb66"><div class="my-2.5 lg:my-0 border-2 border-secondary rounded-lg p-5 lg:even:pl-5 lg:odd:pr-5 "><div class="mb-5 flex"><img class="w-full lg:w-1/6" src="/assets/graphics/chirale.svg" alt=""></div> <h1 class="text-2xl">Chiralit\xE0</h1> <p class="text-m lg:text-l mt-2.5">QDS \xE8 una copia non sovrapponibile del passato per il futuro in quanto
        lo utilizza solamente come risorsa</p></div> <div class="my-2.5 lg:my-0 border-2 border-secondary rounded-lg p-5 "><div class="mb-5 flex"><img class="w-full lg:w-1/6" src="/assets/graphics/determinazione.svg" alt=""></div> <h1 class="text-2xl">Determinazione</h1> <p class="text-m lg:text-l mt-2.5">Aspirazioni, ambizioni e promesse sfociano in determinazione per il
        raggiungimento degli obiettivi</p></div> <div class="my-2.5 lg:my-0 border-2 border-secondary rounded-lg p-5 "><div class="mb-5 flex"><img class="w-full lg:w-1/6" src="/assets/graphics/pulizia.svg" alt=""></div> <h1 class="text-2xl">Pulizia</h1> <p class="text-m lg:text-l mt-2.5">Linee decise e nette aiutano a convogliare i nostri valori</p></div> <div class="my-2.5 lg:my-0 border-2 border-secondary rounded-lg p-5 "><div class="mb-5 flex"><img class="w-full lg:w-1/6" src="/assets/graphics/sfondo.svg" alt=""></div> <h1 class="text-2xl">Sfondo</h1> <p class="text-m lg:text-l mt-2.5">QDS mantiene a pari passo ci\xF2 che \xE8 visibile all\u2019esterno e ci\xF2 che non
        lo \xE8</p></div></div> </div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/6.js
var __exports7 = {};
__export(__exports7, {
  component: () => component7,
  fonts: () => fonts7,
  imports: () => imports7,
  index: () => index7,
  stylesheets: () => stylesheets7
});
var index7, component_cache7, component7, imports7, stylesheets7, fonts7;
var init__7 = __esm({
  ".svelte-kit/output/server/nodes/6.js"() {
    index7 = 6;
    component7 = async () => component_cache7 ?? (component_cache7 = (await Promise.resolve().then(() => (init_page_svelte5(), page_svelte_exports5))).default);
    imports7 = ["_app/immutable/nodes/6.DXRyI9dp.js", "_app/immutable/chunks/scheduler.Bu15-wVR.js", "_app/immutable/chunks/index.O99BFJ2P.js", "_app/immutable/chunks/Scroll.BGNQyCEa.js", "_app/immutable/chunks/Typewriter.oItSYdui.js"];
    stylesheets7 = ["_app/immutable/assets/6.D9zlDmlX.css", "_app/immutable/assets/Scroll.B_9Msmgy.css"];
    fonts7 = [];
  }
});

// .svelte-kit/output/server/entries/pages/sounddesign/_page.svelte.js
var page_svelte_exports6 = {};
__export(page_svelte_exports6, {
  default: () => Page6
});
var Page6;
var init_page_svelte6 = __esm({
  ".svelte-kit/output/server/entries/pages/sounddesign/_page.svelte.js"() {
    init_ssr();
    Page6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `sei in sound design`;
    });
  }
});

// .svelte-kit/output/server/nodes/7.js
var __exports8 = {};
__export(__exports8, {
  component: () => component8,
  fonts: () => fonts8,
  imports: () => imports8,
  index: () => index8,
  stylesheets: () => stylesheets8
});
var index8, component_cache8, component8, imports8, stylesheets8, fonts8;
var init__8 = __esm({
  ".svelte-kit/output/server/nodes/7.js"() {
    index8 = 7;
    component8 = async () => component_cache8 ?? (component_cache8 = (await Promise.resolve().then(() => (init_page_svelte6(), page_svelte_exports6))).default);
    imports8 = ["_app/immutable/nodes/7.DsNcv7SE.js", "_app/immutable/chunks/scheduler.Bu15-wVR.js", "_app/immutable/chunks/index.O99BFJ2P.js"];
    stylesheets8 = [];
    fonts8 = [];
  }
});

// .svelte-kit/output/server/entries/pages/uiuxdesign/_page.svelte.js
var page_svelte_exports7 = {};
__export(page_svelte_exports7, {
  default: () => Page7
});
var Page7;
var init_page_svelte7 = __esm({
  ".svelte-kit/output/server/entries/pages/uiuxdesign/_page.svelte.js"() {
    init_ssr();
    Page7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `sei in uiuxdesign`;
    });
  }
});

// .svelte-kit/output/server/nodes/8.js
var __exports9 = {};
__export(__exports9, {
  component: () => component9,
  fonts: () => fonts9,
  imports: () => imports9,
  index: () => index9,
  stylesheets: () => stylesheets9
});
var index9, component_cache9, component9, imports9, stylesheets9, fonts9;
var init__9 = __esm({
  ".svelte-kit/output/server/nodes/8.js"() {
    index9 = 8;
    component9 = async () => component_cache9 ?? (component_cache9 = (await Promise.resolve().then(() => (init_page_svelte7(), page_svelte_exports7))).default);
    imports9 = ["_app/immutable/nodes/8.BsSwGaQO.js", "_app/immutable/chunks/scheduler.Bu15-wVR.js", "_app/immutable/chunks/index.O99BFJ2P.js"];
    stylesheets9 = [];
    fonts9 = [];
  }
});

// .svelte-kit/output/server/chunks/internal.js
init_ssr();
var base = "";
var assets = base;
var initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
var public_env = {};
var safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
function afterUpdate() {
}
var prerendering = false;
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0) $$bindings.page(page2);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0) $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0) $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0) $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0) $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page2);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
var options = {
  app_dir: "_app",
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body: body2, assets: assets2, nonce, env }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head + '\n	</head>\n	<body data-sveltekit-preload-data="hover">\n		<div style="display: contents">' + body2 + "</div>\n	</body>\n</html>\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "pq97bv"
};
async function get_hooks() {
  return {};
}

// .svelte-kit/output/server/index.js
init_exports();
init_devalue();
init_ssr();
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
var DEV = false;
var SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
var ENDPOINT_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"];
var PAGE_METHODS = ["GET", "POST", "HEAD"];
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/ \t]+)\/([^; \t]+)[ \t]*(?:;[ \t]*q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type.toLowerCase());
}
function is_form_content_type(request) {
  return is_content_type(
    request,
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  );
}
var HttpError = class {
  /**
   * @param {number} status
   * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
   */
  constructor(status, body2) {
    this.status = status;
    if (typeof body2 === "string") {
      this.body = { message: body2 };
    } else if (body2) {
      this.body = body2;
    } else {
      this.body = { message: `Error: ${status}` };
    }
  }
  toString() {
    return JSON.stringify(this.body);
  }
};
var Redirect = class {
  /**
   * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
   * @param {string} location
   */
  constructor(status, location) {
    this.status = status;
    this.location = location;
  }
};
var SvelteKitError = class extends Error {
  /**
   * @param {number} status
   * @param {string} text
   * @param {string} message
   */
  constructor(status, text2, message) {
    super(message);
    this.status = status;
    this.text = text2;
  }
};
var ActionFailure = class {
  /**
   * @param {number} status
   * @param {T} data
   */
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
};
function json(data, init2) {
  const body2 = JSON.stringify(data);
  const headers2 = new Headers(init2?.headers);
  if (!headers2.has("content-length")) {
    headers2.set("content-length", encoder$3.encode(body2).byteLength.toString());
  }
  if (!headers2.has("content-type")) {
    headers2.set("content-type", "application/json");
  }
  return new Response(body2, {
    ...init2,
    headers: headers2
  });
}
var encoder$3 = new TextEncoder();
function text(body2, init2) {
  const headers2 = new Headers(init2?.headers);
  if (!headers2.has("content-length")) {
    const encoded = encoder$3.encode(body2);
    headers2.set("content-length", encoded.byteLength.toString());
    return new Response(encoded, {
      ...init2,
      headers: headers2
    });
  }
  return new Response(body2, {
    ...init2,
    headers: headers2
  });
}
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
function normalize_error(error) {
  return (
    /** @type {import('../runtime/control.js').Redirect | HttpError | SvelteKitError | Error} */
    error
  );
}
function get_status(error) {
  return error instanceof HttpError || error instanceof SvelteKitError ? error.status : 500;
}
function get_message(error) {
  return error instanceof SvelteKitError ? error.text : "Internal Error";
}
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = ENDPOINT_METHODS.filter((method) => method in mod);
  if ("GET" in mod || "HEAD" in mod) allowed.push("HEAD");
  return allowed;
}
function static_error_page(options2, status, message) {
  let page2 = options2.templates.error({ status, message });
  return text(page2, {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, options2, error) {
  error = error instanceof HttpError ? error : coalesce_to_error(error);
  const status = get_status(error);
  const body2 = await handle_error_and_jsonify(event, options2, error);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body2, {
      status
    });
  }
  return static_error_page(options2, status, body2.message);
}
async function handle_error_and_jsonify(event, options2, error) {
  if (error instanceof HttpError) {
    return error.body;
  }
  const status = get_status(error);
  const message = get_message(error);
  return await options2.hooks.handleError({ error, event, status, message }) ?? { message };
}
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
function clarify_devalue_error(event, error) {
  if (error.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error.message} (data${error.path})`;
  }
  if (error.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error.message;
}
function stringify_uses(node) {
  const uses = [];
  if (node.uses && node.uses.dependencies.size > 0) {
    uses.push(`"dependencies":${JSON.stringify(Array.from(node.uses.dependencies))}`);
  }
  if (node.uses && node.uses.search_params.size > 0) {
    uses.push(`"search_params":${JSON.stringify(Array.from(node.uses.search_params))}`);
  }
  if (node.uses && node.uses.params.size > 0) {
    uses.push(`"params":${JSON.stringify(Array.from(node.uses.params))}`);
  }
  if (node.uses?.parent) uses.push('"parent":1');
  if (node.uses?.route) uses.push('"route":1');
  if (node.uses?.url) uses.push('"url":1');
  return `"uses":{${uses.join(",")}}`;
}
async function render_endpoint(event, mod, state) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler2 = mod[method] || mod.fallback;
  if (method === "HEAD" && mod.GET && !mod.HEAD) {
    handler2 = mod.GET;
  }
  if (!handler2) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    if (state.depth > 0) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    let response = await handler2(
      /** @type {import('@sveltejs/kit').RequestEvent<Record<string, any>>} */
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers)
      });
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      return new Response(void 0, {
        status: e.status,
        headers: { location: e.location }
      });
    }
    throw e;
  }
}
function is_endpoint_request(event) {
  const { method, headers: headers2 } = event.request;
  if (ENDPOINT_METHODS.includes(method) && !PAGE_METHODS.includes(method)) {
    return true;
  }
  if (method === "POST" && headers2.get("x-sveltekit-action") === "true") return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options2, server2) {
  const actions = server2?.actions;
  if (!actions) {
    const no_actions_error = new SvelteKitError(
      405,
      "Method Not Allowed",
      "POST method not allowed. No actions exist for this page"
    );
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false) ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id
        )
      });
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return action_json_redirect(err);
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, check_incorrect_fail_use(err))
      },
      {
        status: get_status(err)
      }
    );
  }
}
function check_incorrect_fail_use(error) {
  return error instanceof ActionFailure ? new Error('Cannot "throw fail()". Use "return fail()"') : error;
}
function action_json_redirect(redirect) {
  return action_json({
    type: "redirect",
    status: redirect.status,
    location: redirect.location
  });
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event) {
  return event.request.method === "POST";
}
async function handle_action_request(event, server2) {
  const actions = server2?.actions;
  if (!actions) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: new SvelteKitError(
        405,
        "Method Not Allowed",
        "POST method not allowed. No actions exist for this page"
      )
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false) ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      "When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions"
    );
  }
}
async function call_action(event, actions) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new SvelteKitError(404, "Not Found", `No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new SvelteKitError(
      415,
      "Unsupported Media Type",
      `Form actions expect form-encoded data \u2014 received ${event.request.headers.get(
        "content-type"
      )}`
    );
  }
  return action(event);
}
function uneval_action_response(data, route_id) {
  return try_deserialize(data, uneval, route_id);
}
function stringify_action_response(data, route_id) {
  return try_deserialize(data, stringify, route_id);
}
function try_deserialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e) {
    const error = (
      /** @type {any} */
      e
    );
    if ("path" in error) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error.message}`;
      if (error.path !== "") message += ` (data.${error.path})`;
      throw new Error(message);
    }
    throw error;
  }
}
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
var TRAILING_SLASH_PARAM = "x-sveltekit-trailing-slash";
function b64_encode(buffer) {
  if (globalThis.Buffer) {
    return Buffer.from(buffer).toString("base64");
  }
  const little_endian = new Uint8Array(new Uint16Array([1]).buffer)[0] > 0;
  return btoa(
    new TextDecoder(little_endian ? "utf-16le" : "utf-16be").decode(
      new Uint16Array(new Uint8Array(buffer))
    )
  );
}
async function load_server_data({ event, state, node, parent }) {
  if (!node?.server) return null;
  let is_tracking = true;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false,
    search_params: /* @__PURE__ */ new Set()
  };
  const url = make_trackable(
    event.url,
    () => {
      if (is_tracking) {
        uses.url = true;
      }
    },
    (param) => {
      if (is_tracking) {
        uses.search_params.add(param);
      }
    }
  );
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await node.server.load?.call(null, {
    ...event,
    fetch: (info, init2) => {
      new URL(info instanceof Request ? info.url : info, event.url);
      return event.fetch(info, init2);
    },
    /** @param {string[]} deps */
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        if (is_tracking) {
          uses.params.add(key2);
        }
        return target[
          /** @type {string} */
          key2
        ];
      }
    }),
    parent: async () => {
      if (is_tracking) {
        uses.parent = true;
      }
      return parent();
    },
    route: new Proxy(event.route, {
      get: (target, key2) => {
        if (is_tracking) {
          uses.route = true;
        }
        return target[
          /** @type {'id'} */
          key2
        ];
      }
    }),
    url,
    untrack(fn) {
      is_tracking = false;
      try {
        return fn();
      } finally {
        is_tracking = true;
      }
    }
  });
  return {
    type: "data",
    data: result ?? null,
    uses,
    slash: node.server.trailingSlash
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  if (!node?.universal?.load) {
    return server_data_node?.data ?? null;
  }
  const result = await node.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: server_data_node?.data ?? null,
    route: event.route,
    fetch: create_universal_fetch(event, state, fetched, csr, resolve_opts),
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent,
    untrack: (fn) => fn()
  });
  return result ?? null;
}
function create_universal_fetch(event, state, fetched, csr, resolve_opts) {
  const universal_fetch = async (input, init2) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    const cloned_headers = input instanceof Request && [...input.headers].length ? new Headers(input.headers) : init2?.headers;
    let response = await event.fetch(input, init2);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state.prerendering) {
        dependency = { response, body: null };
        state.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else {
      const mode = input instanceof Request ? input.mode : init2?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function push_fetched(body2, is_b64) {
          const status_number = Number(response2.status);
          if (isNaN(status_number)) {
            throw new Error(
              `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
            );
          }
          fetched.push({
            url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
            method: event.request.method,
            request_body: (
              /** @type {string | ArrayBufferView | undefined} */
              input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2?.body
            ),
            request_headers: cloned_headers,
            response_body: body2,
            response: response2,
            is_b64
          });
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            if (buffer instanceof ArrayBuffer) {
              await push_fetched(b64_encode(buffer), true);
            }
            return buffer;
          };
        }
        async function text2() {
          const body2 = await response2.text();
          if (!body2 || typeof body2 === "string") {
            await push_fetched(body2, false);
          }
          if (dependency) {
            dependency.body = body2;
          }
          return body2;
        }
        if (key2 === "text") {
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text2());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    if (csr) {
      const get2 = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get2.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy;
  };
  return (input, init2) => {
    const response = universal_fetch(input, init2);
    response.catch(() => {
    });
    return response;
  };
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder.decode(value);
  }
  return result;
}
var subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set, update) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i = value.length;
      while (i) hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i = buffer.length;
      while (i) hash2 = hash2 * 33 ^ buffer[--i];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  // special characters
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering2 = false) {
  const headers2 = {};
  let cache_control = null;
  let age = null;
  let varyAny = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers2[key2] = value;
    }
    if (key2 === "cache-control") cache_control = value;
    else if (key2 === "age") age = value;
    else if (key2 === "vary" && value.trim() === "*") varyAny = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers: headers2,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.is_b64) {
    attrs.push("data-b64");
  }
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering2 && fetched.method === "GET" && cache_control && !varyAny) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder$2 = new TextEncoder();
function sha256(data) {
  if (!key[0]) precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder$2.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars2[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _script_src_elem, _style_src, _style_src_attr, _style_src_elem, _nonce;
var BaseProvider = class {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    /** @type {boolean} */
    __privateAdd(this, _use_hashes);
    /** @type {boolean} */
    __privateAdd(this, _script_needs_csp);
    /** @type {boolean} */
    __privateAdd(this, _style_needs_csp);
    /** @type {import('types').CspDirectives} */
    __privateAdd(this, _directives);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _script_src);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _script_src_elem);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _style_src);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _style_src_attr);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _style_src_elem);
    /** @type {string} */
    __privateAdd(this, _nonce);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, directives);
    const d = __privateGet(this, _directives);
    __privateSet(this, _script_src, []);
    __privateSet(this, _script_src_elem, []);
    __privateSet(this, _style_src, []);
    __privateSet(this, _style_src_attr, []);
    __privateSet(this, _style_src_elem, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const script_src_elem = d["script-src-elem"];
    const effective_style_src = d["style-src"] || d["default-src"];
    const style_src_attr = d["style-src-attr"];
    const style_src_elem = d["style-src-elem"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0 || !!script_src_elem && script_src_elem.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0 || !!style_src_attr && style_src_attr.filter((value) => value !== "unsafe-inline").length > 0 || !!style_src_elem && style_src_elem.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  /** @param {string} content */
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      const d = __privateGet(this, _directives);
      if (__privateGet(this, _use_hashes)) {
        const hash2 = sha256(content);
        __privateGet(this, _script_src).push(`sha256-${hash2}`);
        if (d["script-src-elem"]?.length) {
          __privateGet(this, _script_src_elem).push(`sha256-${hash2}`);
        }
      } else {
        if (__privateGet(this, _script_src).length === 0) {
          __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
        }
        if (d["script-src-elem"]?.length) {
          __privateGet(this, _script_src_elem).push(`nonce-${__privateGet(this, _nonce)}`);
        }
      }
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      const empty_comment_hash = "9OlNO0DNEeaVzHL4RZwCLsBHA8WBQ8toBp/4F5XV2nc=";
      const d = __privateGet(this, _directives);
      if (__privateGet(this, _use_hashes)) {
        const hash2 = sha256(content);
        __privateGet(this, _style_src).push(`sha256-${hash2}`);
        if (d["style-src-attr"]?.length) {
          __privateGet(this, _style_src_attr).push(`sha256-${hash2}`);
        }
        if (d["style-src-elem"]?.length) {
          if (hash2 !== empty_comment_hash && !d["style-src-elem"].includes(`sha256-${empty_comment_hash}`)) {
            __privateGet(this, _style_src_elem).push(`sha256-${empty_comment_hash}`);
          }
          __privateGet(this, _style_src_elem).push(`sha256-${hash2}`);
        }
      } else {
        if (__privateGet(this, _style_src).length === 0 && !d["style-src"]?.includes("unsafe-inline")) {
          __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
        }
        if (d["style-src-attr"]?.length) {
          __privateGet(this, _style_src_attr).push(`nonce-${__privateGet(this, _nonce)}`);
        }
        if (d["style-src-elem"]?.length) {
          if (!d["style-src-elem"].includes(`sha256-${empty_comment_hash}`)) {
            __privateGet(this, _style_src_elem).push(`sha256-${empty_comment_hash}`);
          }
          __privateGet(this, _style_src_elem).push(`nonce-${__privateGet(this, _nonce)}`);
        }
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _style_src_attr).length > 0) {
      directives["style-src-attr"] = [
        ...directives["style-src-attr"] || [],
        ...__privateGet(this, _style_src_attr)
      ];
    }
    if (__privateGet(this, _style_src_elem).length > 0) {
      directives["style-src-elem"] = [
        ...directives["style-src-elem"] || [],
        ...__privateGet(this, _style_src_elem)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    if (__privateGet(this, _script_src_elem).length > 0) {
      directives["script-src-elem"] = [
        ...directives["script-src-elem"] || [],
        ...__privateGet(this, _script_src_elem)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value) continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_script_src_elem = new WeakMap();
_style_src = new WeakMap();
_style_src_attr = new WeakMap();
_style_src_elem = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = this.get_header(true);
    if (!content) {
      return;
    }
    return `<meta http-equiv="content-security-policy" content=${escape_html_attr(content)}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    super(use_hashes, directives, nonce);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  /**
   * @param {import('./types.js').CspConfig} config
   * @param {import('./types.js').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender }) {
    /** @readonly */
    __publicField(this, "nonce", generate_nonce());
    /** @type {CspProvider} */
    __publicField(this, "csp_provider");
    /** @type {CspReportOnlyProvider} */
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
function defer() {
  let fulfil;
  let reject;
  const promise = new Promise((f, r) => {
    fulfil = f;
    reject = r;
  });
  return { promise, fulfil, reject };
}
function create_async_iterator() {
  const deferred = [defer()];
  return {
    iterator: {
      [Symbol.asyncIterator]() {
        return {
          next: async () => {
            const next = await deferred[0].promise;
            if (!next.done) deferred.shift();
            return next;
          }
        };
      }
    },
    push: (value) => {
      deferred[deferred.length - 1].fulfil({
        value,
        done: false
      });
      deferred.push(defer());
    },
    done: () => {
      deferred[deferred.length - 1].fulfil({ done: true });
    }
  };
}
var updated = {
  ...readable(false),
  check: () => false
};
var encoder$1 = new TextEncoder();
async function render_response({
  branch,
  fetched,
  options: options2,
  manifest: manifest2,
  state,
  page_config,
  status,
  error = null,
  event,
  resolve_opts,
  action_result
}) {
  if (state.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { client } = manifest2._;
  const modulepreloads = new Set(client.imports);
  const stylesheets10 = new Set(client.stylesheets);
  const fonts10 = new Set(client.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  let base$1 = base;
  let assets$1 = assets;
  let base_expression = s(base);
  if (!state.prerendering?.fallback) {
    const segments = event.url.pathname.slice(base.length).split("/").slice(2);
    base$1 = segments.map(() => "..").join("/") || ".";
    base_expression = `new URL(${s(base$1)}, location).pathname.slice(0, -1)`;
    if (!assets || assets[0] === "/" && assets !== SVELTE_KIT_ASSETS) {
      assets$1 = base$1;
    }
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data2 = {};
    for (let i = 0; i < branch.length; i += 1) {
      data2 = { ...data2, ...branch[i].data };
      props[`data_${i}`] = data2;
    }
    props.page = {
      error,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data: data2,
      form: form_value,
      state: {}
    };
    override({ base: base$1, assets: assets$1 });
    {
      try {
        rendered = options2.root.render(props);
      } finally {
        reset();
      }
    }
    for (const { node } of branch) {
      for (const url of node.imports) modulepreloads.add(url);
      for (const url of node.stylesheets) stylesheets10.add(url);
      for (const url of node.fonts) fonts10.add(url);
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body2 = rendered.html;
  const csp = new Csp(options2.csp, {
    prerender: !!state.prerendering
  });
  const prefixed = (path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${assets$1}/${path}`;
  };
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (csp.style_needs_nonce) attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets10) {
    const path = prefixed(dep);
    const attributes = ['rel="stylesheet"'];
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      if (resolve_opts.preload({ type: "css", path })) {
        const preload_atts = ['rel="preload"', 'as="style"'];
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
    }
    head += `
		<link href="${path}" ${attributes.join(" ")}>`;
  }
  for (const dep of fonts10) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head += `
		<link ${attributes.join(" ")}>`;
    }
  }
  const global = `__sveltekit_${options2.version_hash}`;
  const { data, chunks } = get_data(
    event,
    options2,
    branch.map((b) => b.server_data),
    global
  );
  if (page_config.ssr && page_config.csr) {
    body2 += `
			${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n			")}`;
  }
  if (page_config.csr) {
    if (client.uses_env_dynamic_public && state.prerendering) {
      modulepreloads.add(`${options2.app_dir}/env.js`);
    }
    const included_modulepreloads = Array.from(modulepreloads, (dep) => prefixed(dep)).filter(
      (path) => resolve_opts.preload({ type: "js", path })
    );
    for (const path of included_modulepreloads) {
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (options2.preload_strategy !== "modulepreload") {
        head += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${path}">`;
      } else if (state.prerendering) {
        head += `
		<link rel="modulepreload" href="${path}">`;
      }
    }
    const blocks = [];
    const load_env_eagerly = client.uses_env_dynamic_public && state.prerendering;
    const properties = [`base: ${base_expression}`];
    if (assets) {
      properties.push(`assets: ${s(assets)}`);
    }
    if (client.uses_env_dynamic_public) {
      properties.push(`env: ${load_env_eagerly ? "null" : s(public_env)}`);
    }
    if (chunks) {
      blocks.push("const deferred = new Map();");
      properties.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`);
      properties.push(`resolve: ({ id, data, error }) => {
							const { fulfil, reject } = deferred.get(id);
							deferred.delete(id);

							if (error) reject(error);
							else fulfil(data);
						}`);
    }
    blocks.push(`${global} = {
						${properties.join(",\n						")}
					};`);
    const args = ["app", "element"];
    blocks.push("const element = document.currentScript.parentElement;");
    if (page_config.ssr) {
      const serialized = { form: "null", error: "null" };
      blocks.push(`const data = ${data};`);
      if (form_value) {
        serialized.form = uneval_action_response(
          form_value,
          /** @type {string} */
          event.route.id
        );
      }
      if (error) {
        serialized.error = uneval(error);
      }
      const hydrate = [
        `node_ids: [${branch.map(({ node }) => node.index).join(", ")}]`,
        "data",
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate.push(`status: ${status}`);
      }
      if (options2.embedded) {
        hydrate.push(`params: ${uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      const indent = "	".repeat(load_env_eagerly ? 7 : 6);
      args.push(`{
${indent}	${hydrate.join(`,
${indent}	`)}
${indent}}`);
    }
    if (load_env_eagerly) {
      blocks.push(`import(${s(`${base$1}/${options2.app_dir}/env.js`)}).then(({ env }) => {
						${global}.env = env;

						Promise.all([
							import(${s(prefixed(client.start))}),
							import(${s(prefixed(client.app))})
						]).then(([kit, app]) => {
							kit.start(${args.join(", ")});
						});
					});`);
    } else {
      blocks.push(`Promise.all([
						import(${s(prefixed(client.start))}),
						import(${s(prefixed(client.app))})
					]).then(([kit, app]) => {
						kit.start(${args.join(", ")});
					});`);
    }
    if (options2.service_worker) {
      const opts = "";
      blocks.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
						});
					}`);
    }
    const init_app = `
				{
					${blocks.join("\n\n					")}
				}
			`;
    csp.add_script(init_app);
    body2 += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_app}<\/script>
		`;
  }
  const headers2 = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html"
  });
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  } else {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers2.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers2.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers2.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  head += rendered.head;
  const html = options2.templates.app({
    head,
    body: body2,
    assets: assets$1,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: safe_public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html,
    done: true
  }) || "";
  if (!chunks) {
    headers2.set("etag", `"${hash(transformed)}"`);
  }
  return !chunks ? text(transformed, {
    status,
    headers: headers2
  }) : new Response(
    new ReadableStream({
      async start(controller) {
        controller.enqueue(encoder$1.encode(transformed + "\n"));
        for await (const chunk of chunks) {
          controller.enqueue(encoder$1.encode(chunk));
        }
        controller.close();
      },
      type: "bytes"
    }),
    {
      headers: {
        "content-type": "text/html"
      }
    }
  );
}
function get_data(event, options2, nodes, global) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  function replacer(thing) {
    if (typeof thing?.then === "function") {
      const id = promise_id++;
      count += 1;
      thing.then(
        /** @param {any} data */
        (data) => ({ data })
      ).catch(
        /** @param {any} error */
        async (error) => ({
          error: await handle_error_and_jsonify(event, options2, error)
        })
      ).then(
        /**
         * @param {{data: any; error: any}} result
         */
        async ({ data, error }) => {
          count -= 1;
          let str;
          try {
            str = uneval({ id, data, error }, replacer);
          } catch {
            error = await handle_error_and_jsonify(
              event,
              options2,
              new Error(`Failed to serialize promise while rendering ${event.route.id}`)
            );
            data = void 0;
            str = uneval({ id, data, error }, replacer);
          }
          push(`<script>${global}.resolve(${str})<\/script>
`);
          if (count === 0) done();
        }
      );
      return `${global}.defer(${id})`;
    }
  }
  try {
    const strings = nodes.map((node) => {
      if (!node) return "null";
      return `{"type":"data","data":${uneval(node.data, replacer)},${stringify_uses(node)}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `[${strings.join(",")}]`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e
    ));
  }
}
function get_option(nodes, option) {
  return nodes.reduce(
    (value, node) => {
      return (
        /** @type {Value} TypeScript's too dumb to understand this */
        node?.universal?.[option] ?? node?.server?.[option] ?? value
      );
    },
    /** @type {Value | undefined} */
    void 0
  );
}
async function respond_with_error({
  event,
  options: options2,
  manifest: manifest2,
  state,
  status,
  error,
  resolve_opts
}) {
  if (event.request.headers.get("x-sveltekit-error")) {
    return static_error_page(
      options2,
      status,
      /** @type {Error} */
      error.message
    );
  }
  const fetched = [];
  try {
    const branch = [];
    const default_layout = await manifest2._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    const csr = get_option([default_layout], "csr") ?? true;
    if (ssr) {
      state.error = true;
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state,
        csr
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest: manifest2,
      state,
      page_config: {
        ssr,
        csr
      },
      status,
      error: await handle_error_and_jsonify(event, options2, error),
      branch,
      fetched,
      event,
      resolve_opts
    });
  } catch (e) {
    if (e instanceof Redirect) {
      return redirect_response(e.status, e.location);
    }
    return static_error_page(
      options2,
      get_status(e),
      (await handle_error_and_jsonify(event, options2, e)).message
    );
  }
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done) return result;
    done = true;
    return result = fn();
  };
}
var encoder = new TextEncoder();
async function render_data(event, route, options2, manifest2, state, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n == void 0 ? n : await manifest2._.nodes[n]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data2 = {};
              for (let j = 0; j < i; j += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j]()
                );
                if (parent) {
                  Object.assign(data2, parent.data);
                }
              }
              return data2;
            }
          });
        } catch (e) {
          aborted = true;
          throw e;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch(async (error) => {
          if (error instanceof Redirect) {
            throw error;
          }
          length = Math.min(length, i + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, options2, error),
              status: error instanceof HttpError || error instanceof SvelteKitError ? error.status : void 0
            }
          );
        })
      )
    );
    const { data, chunks } = get_data_json(event, options2, nodes);
    if (!chunks) {
      return json_response(data);
    }
    return new Response(
      new ReadableStream({
        async start(controller) {
          controller.enqueue(encoder.encode(data));
          for await (const chunk of chunks) {
            controller.enqueue(encoder.encode(chunk));
          }
          controller.close();
        },
        type: "bytes"
      }),
      {
        headers: {
          // we use a proprietary content type to prevent buffering.
          // the `text` prefix makes it inspectable
          "content-type": "text/sveltekit-data",
          "cache-control": "private, no-store"
        }
      }
    );
  } catch (e) {
    const error = normalize_error(e);
    if (error instanceof Redirect) {
      return redirect_json_response(error);
    } else {
      return json_response(await handle_error_and_jsonify(event, options2, error), 500);
    }
  }
}
function json_response(json2, status = 200) {
  return text(typeof json2 === "string" ? json2 : JSON.stringify(json2), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect) {
  return json_response({
    type: "redirect",
    location: redirect.location
  });
}
function get_data_json(event, options2, nodes) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  const reducers = {
    /** @param {any} thing */
    Promise: (thing) => {
      if (typeof thing?.then === "function") {
        const id = promise_id++;
        count += 1;
        let key2 = "data";
        thing.catch(
          /** @param {any} e */
          async (e) => {
            key2 = "error";
            return handle_error_and_jsonify(
              event,
              options2,
              /** @type {any} */
              e
            );
          }
        ).then(
          /** @param {any} value */
          async (value) => {
            let str;
            try {
              str = stringify(value, reducers);
            } catch {
              const error = await handle_error_and_jsonify(
                event,
                options2,
                new Error(`Failed to serialize promise while rendering ${event.route.id}`)
              );
              key2 = "error";
              str = stringify(error, reducers);
            }
            count -= 1;
            push(`{"type":"chunk","id":${id},"${key2}":${str}}
`);
            if (count === 0) done();
          }
        );
        return id;
      }
    }
  };
  try {
    const strings = nodes.map((node) => {
      if (!node) return "null";
      if (node.type === "error" || node.type === "skip") {
        return JSON.stringify(node);
      }
      return `{"type":"data","data":${stringify(node.data, reducers)},${stringify_uses(
        node
      )}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `{"type":"data","nodes":[${strings.join(",")}]}
`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e
    ));
  }
}
function load_page_nodes(page2, manifest2) {
  return Promise.all([
    // we use == here rather than === because [undefined] serializes as "[null]"
    ...page2.layouts.map((n) => n == void 0 ? n : manifest2._.nodes[n]()),
    manifest2._.nodes[page2.leaf]()
  ]);
}
var MAX_DEPTH = 10;
async function render_page(event, page2, options2, manifest2, state, resolve_opts) {
  if (state.depth > MAX_DEPTH) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
      // TODO in some cases this should be 500. not sure how to differentiate
    });
  }
  if (is_action_json_request(event)) {
    const node = await manifest2._.nodes[page2.leaf]();
    return handle_action_json_request(event, options2, node?.server);
  }
  try {
    const nodes = await load_page_nodes(page2, manifest2);
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.at(-1)
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        status = get_status(action_result.error);
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node?.server?.load);
    const data_pathname = add_data_suffix(event.url.pathname);
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false && !(state.prerendering && should_prerender_data)) {
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options: options2,
        manifest: manifest2,
        state,
        resolve_opts
      });
    }
    const branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent) Object.assign(data, parent.data);
              }
              return data;
            }
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    const csr = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i) => {
      if (load_error) throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i],
            state,
            csr
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    for (const p of server_promises) p.catch(() => {
    });
    for (const p of load_promises) p.catch(() => {
    });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e) {
          const err = normalize_error(e);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body2 = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state.prerendering.dependencies.set(data_pathname, {
                response: text(body2),
                body: body2
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = get_status(err);
          const error = await handle_error_and_jsonify(event, options2, err);
          while (i--) {
            if (page2.errors[i]) {
              const index10 = (
                /** @type {number} */
                page2.errors[i]
              );
              const node2 = await manifest2._.nodes[index10]();
              let j = i;
              while (!branch[j]) j -= 1;
              return await render_response({
                event,
                options: options2,
                manifest: manifest2,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options2, status2, error.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      let { data, chunks } = get_data_json(
        event,
        options2,
        branch.map((node) => node?.server_data)
      );
      if (chunks) {
        for await (const chunk of chunks) {
          data += chunk;
        }
      }
      state.prerendering.dependencies.set(data_pathname, {
        response: text(data),
        body: data
      });
    }
    const ssr = get_option(nodes, "ssr") ?? true;
    return await render_response({
      event,
      options: options2,
      manifest: manifest2,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr
      },
      status,
      error: null,
      branch: ssr === false ? [] : compact(branch),
      action_result,
      fetched
    });
  } catch (e) {
    return await respond_with_error({
      event,
      options: options2,
      manifest: manifest2,
      state,
      status: 500,
      error: e,
      resolve_opts
    });
  }
}
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  const values_needing_match = values.filter((value) => value !== void 0);
  let buffered = 0;
  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];
    let value = values[i - buffered];
    if (param.chained && param.rest && buffered) {
      value = values.slice(i - buffered, i + 1).filter((s2) => s2).join("/");
      buffered = 0;
    }
    if (value === void 0) {
      if (param.rest) result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i + 1];
      const next_value = values[i + 1];
      if (next_param && !next_param.rest && next_param.optional && next_value && param.chained) {
        buffered = 0;
      }
      if (!next_param && !next_value && Object.keys(result).length === values_needing_match.length) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered) return;
  return result;
}
function validate_options(options2) {
  if (options2?.path === void 0) {
    throw new Error("You must specify a `path` when setting, deleting or serializing cookies");
  }
}
function get_cookies(request, url, trailing_slash) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie.parse)(header, { decode: (value) => value });
  const normalized_url = normalize_path(url.pathname, trailing_slash);
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('@sveltejs/kit').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} opts
     */
    get(name, opts) {
      const c = new_cookies[name];
      if (c && domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
        return c.value;
      }
      const decoder = opts?.decode || decodeURIComponent;
      const req_cookies = (0, import_cookie.parse)(header, { decode: decoder });
      const cookie = req_cookies[name];
      return cookie;
    },
    /**
     * @param {import('cookie').CookieParseOptions} opts
     */
    getAll(opts) {
      const decoder = opts?.decode || decodeURIComponent;
      const cookies2 = (0, import_cookie.parse)(header, { decode: decoder });
      for (const c of Object.values(new_cookies)) {
        if (domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
          cookies2[c.name] = c.value;
        }
      }
      return Object.entries(cookies2).map(([name, value]) => ({ name, value }));
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('./page/types.js').Cookie['options']} options
     */
    set(name, value, options2) {
      validate_options(options2);
      set_internal(name, value, { ...defaults, ...options2 });
    },
    /**
     * @param {string} name
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    delete(name, options2) {
      validate_options(options2);
      cookies.set(name, "", { ...options2, maxAge: 0 });
    },
    /**
     * @param {string} name
     * @param {string} value
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    serialize(name, value, options2) {
      validate_options(options2);
      let path = options2.path;
      if (!options2.domain || options2.domain === url.hostname) {
        path = resolve(normalized_url, path);
      }
      return (0, import_cookie.serialize)(name, value, { ...defaults, ...options2, path });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain)) continue;
      if (!path_matches(destination.pathname, cookie.options.path)) continue;
      const encoder2 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder2(cookie.value);
    }
    if (header2) {
      const parsed = (0, import_cookie.parse)(header2, { decode: (value) => value });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  function set_internal(name, value, options2) {
    let path = options2.path;
    if (!options2.domain || options2.domain === url.hostname) {
      path = resolve(normalized_url, path);
    }
    new_cookies[name] = { name, value, options: { ...options2, path } };
  }
  return { cookies, new_cookies, get_cookie_header, set_internal };
}
function domain_matches(hostname, constraint) {
  if (!constraint) return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized) return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint) return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized) return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers2, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options2 } = new_cookie;
    headers2.append("set-cookie", (0, import_cookie.serialize)(name, value, options2));
    if (options2.path.endsWith(".html")) {
      const path = add_data_suffix(options2.path);
      headers2.append("set-cookie", (0, import_cookie.serialize)(name, value, { ...options2, path }));
    }
  }
}
function create_fetch({ event, options: options2, manifest: manifest2, state, get_cookie_header, set_internal }) {
  const server_fetch = async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    let mode = (info instanceof Request ? info.mode : init2?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2?.credentials) ?? "same-origin";
    return options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie) request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        const prefix2 = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix2) ? decoded.slice(prefix2.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename);
        const is_asset_html = manifest2.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (state.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        const response = await respond(request, options2, manifest2, {
          ...state,
          depth: state.depth + 1
        });
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name, value, ...options3 } = set_cookie_parser.parseString(str, {
              decodeValues: false
            });
            const path = options3.path ?? (url.pathname.split("/").slice(0, -1).join("/") || "/");
            set_internal(name, value, {
              path,
              encode: (value2) => value2,
              .../** @type {import('cookie').CookieSerializeOptions} */
              options3
            });
          }
        }
        return response;
      }
    });
  };
  return (input, init2) => {
    const response = server_fetch(input, init2);
    response.catch(() => {
    });
    return response;
  };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
var body;
var etag;
var headers;
function get_public_env(request) {
  body ?? (body = `export const env=${JSON.stringify(public_env)}`);
  etag ?? (etag = `W/${Date.now()}`);
  headers ?? (headers = new Headers({
    "content-type": "application/javascript; charset=utf-8",
    etag
  }));
  if (request.headers.get("if-none-match") === etag) {
    return new Response(void 0, { status: 304, headers });
  }
  return new Response(body, { headers });
}
function get_page_config(nodes) {
  let current = {};
  for (const node of nodes) {
    if (!node?.universal?.config && !node?.server?.config) continue;
    current = {
      ...current,
      ...node?.universal?.config,
      ...node?.server?.config
    };
  }
  return Object.keys(current).length ? current : void 0;
}
var default_transform = ({ html }) => html;
var default_filter = () => false;
var default_preload = ({ type }) => type === "js" || type === "css";
var page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "POST"]);
var allowed_page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "OPTIONS"]);
async function respond(request, options2, manifest2, state) {
  const url = new URL(request.url);
  if (options2.csrf_check_origin) {
    const forbidden = is_form_content_type(request) && (request.method === "POST" || request.method === "PUT" || request.method === "PATCH" || request.method === "DELETE") && request.headers.get("origin") !== url.origin;
    if (forbidden) {
      const csrf_error = new HttpError(
        403,
        `Cross-site ${request.method} form submissions are forbidden`
      );
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return text(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  let rerouted_path;
  try {
    rerouted_path = options2.hooks.reroute({ url: new URL(url) }) ?? url.pathname;
  } catch {
    return text("Internal Server Error", {
      status: 500
    });
  }
  let decoded;
  try {
    decoded = decode_pathname(rerouted_path);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (base && !state.prerendering?.fallback) {
    if (!decoded.startsWith(base)) {
      return text("Not found", { status: 404 });
    }
    decoded = decoded.slice(base.length) || "/";
  }
  if (decoded === `/${options2.app_dir}/env.js`) {
    return get_public_env(request);
  }
  if (decoded.startsWith(`/${options2.app_dir}`)) {
    const headers22 = new Headers();
    headers22.set("cache-control", "public, max-age=0, must-revalidate");
    return text("Not found", { status: 404, headers: headers22 });
  }
  const is_data_request = has_data_suffix(decoded);
  let invalidated_data_nodes;
  if (is_data_request) {
    decoded = strip_data_suffix(decoded) || "/";
    url.pathname = strip_data_suffix(url.pathname) + (url.searchParams.get(TRAILING_SLASH_PARAM) === "1" ? "/" : "") || "/";
    url.searchParams.delete(TRAILING_SLASH_PARAM);
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("").map((node) => node === "1");
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  if (!state.prerendering?.fallback) {
    const matchers = await manifest2._.matchers();
    for (const candidate of manifest2._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match) continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  let trailing_slash = void 0;
  const headers2 = {};
  let cookies_to_add = {};
  const event = {
    // @ts-expect-error `cookies` and `fetch` need to be created after the `event` itself
    cookies: null,
    // @ts-expect-error
    fetch: null,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-netlify"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    route: { id: route?.id ?? null },
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            "Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies"
          );
        } else if (lower in headers2) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers2[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request,
    isSubRequest: state.depth > 0
  };
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  try {
    if (route) {
      if (url.pathname === base || url.pathname === base + "/") {
        trailing_slash = "always";
      } else if (route.page) {
        const nodes = await load_page_nodes(route.page, manifest2);
        if (DEV) ;
        trailing_slash = get_option(nodes, "trailingSlash");
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash;
        if (DEV) ;
      }
      if (!is_data_request) {
        const normalized = normalize_path(url.pathname, trailing_slash ?? "never");
        if (normalized !== url.pathname && !state.prerendering?.fallback) {
          return new Response(void 0, {
            status: 308,
            headers: {
              "x-sveltekit-normalize": "1",
              location: (
                // ensure paths starting with '//' are not treated as protocol-relative
                (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
              )
            }
          });
        }
      }
      if (state.before_handle || state.emulator?.platform) {
        let config = {};
        let prerender = false;
        if (route.endpoint) {
          const node = await route.endpoint();
          config = node.config ?? config;
          prerender = node.prerender ?? prerender;
        } else if (route.page) {
          const nodes = await load_page_nodes(route.page, manifest2);
          config = get_page_config(nodes) ?? config;
          prerender = get_option(nodes, "prerender") ?? false;
        }
        if (state.before_handle) {
          state.before_handle(event, config, prerender);
        }
        if (state.emulator?.platform) {
          event.platform = await state.emulator.platform({ config, prerender });
        }
      }
    }
    const { cookies, new_cookies, get_cookie_header, set_internal } = get_cookies(
      request,
      url,
      trailing_slash ?? "never"
    );
    cookies_to_add = new_cookies;
    event.cookies = cookies;
    event.fetch = create_fetch({
      event,
      options: options2,
      manifest: manifest2,
      state,
      get_cookie_header,
      set_internal
    });
    if (state.prerendering && !state.prerendering.fallback) disable_search(url);
    const response = await options2.hooks.handle({
      event,
      resolve: (event2, opts) => resolve2(event2, opts).then((response2) => {
        for (const key2 in headers2) {
          const value = headers2[key2];
          response2.headers.set(
            key2,
            /** @type {string} */
            value
          );
        }
        add_cookies_to_headers(response2.headers, Object.values(cookies_to_add));
        if (state.prerendering && event2.route.id !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
        }
        return response2;
      })
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag2 = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag2) {
        const headers22 = new Headers({ etag: etag2 });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value) headers22.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers22
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location
        ));
      }
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      const response = is_data_request ? redirect_json_response(e) : route?.page && is_action_json_request(event) ? action_json_redirect(e) : redirect_response(e.status, e.location);
      add_cookies_to_headers(response.headers, Object.values(cookies_to_add));
      return response;
    }
    return await handle_fatal_error(event, options2, e);
  }
  async function resolve2(event2, opts) {
    try {
      if (opts) {
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (state.prerendering?.fallback) {
        return await render_response({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        const method = (
          /** @type {import('types').HttpMethod} */
          event2.request.method
        );
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options2,
            manifest2,
            state,
            invalidated_data_nodes,
            trailing_slash ?? "never"
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else if (route.page) {
          if (page_methods.has(method)) {
            response = await render_page(event2, route.page, options2, manifest2, state, resolve_opts);
          } else {
            const allowed_methods2 = new Set(allowed_page_methods);
            const node = await manifest2._.nodes[route.page.leaf]();
            if (node?.server?.actions) {
              allowed_methods2.add("POST");
            }
            if (method === "OPTIONS") {
              response = new Response(null, {
                status: 204,
                headers: {
                  allow: Array.from(allowed_methods2.values()).join(", ")
                }
              });
            } else {
              const mod = [...allowed_methods2].reduce(
                (acc, curr) => {
                  acc[curr] = true;
                  return acc;
                },
                /** @type {Record<string, any>} */
                {}
              );
              response = method_not_allowed(mod, method);
            }
          }
        } else {
          throw new Error("This should never happen");
        }
        if (request.method === "GET" && route.page && route.endpoint) {
          const vary = response.headers.get("vary")?.split(",")?.map((v) => v.trim().toLowerCase());
          if (!(vary?.includes("accept") || vary?.includes("*"))) {
            response = new Response(response.body, {
              status: response.status,
              statusText: response.statusText,
              headers: new Headers(response.headers)
            });
            response.headers.append("Vary", "Accept");
          }
        }
        return response;
      }
      if (state.error && event2.isSubRequest) {
        return await fetch(request, {
          headers: {
            "x-sveltekit-error": "true"
          }
        });
      }
      if (state.error) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (state.depth === 0) {
        return await respond_with_error({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          status: 404,
          error: new SvelteKitError(404, "Not Found", `Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return text("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e) {
      return await handle_fatal_error(event2, options2, e);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
function filter_private_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(private_prefix) && (public_prefix === "" || !k.startsWith(public_prefix))
    )
  );
}
function filter_public_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(public_prefix) && (private_prefix === "" || !k.startsWith(private_prefix))
    )
  );
}
var prerender_env_handler = {
  get({ type }, prop) {
    throw new Error(
      `Cannot read values from $env/dynamic/${type} while prerendering (attempted to read env.${prop.toString()}). Use $env/static/${type} instead`
    );
  }
};
var _options, _manifest;
var Server = class {
  /** @param {import('@sveltejs/kit').SSRManifest} manifest */
  constructor(manifest2) {
    /** @type {import('types').SSROptions} */
    __privateAdd(this, _options);
    /** @type {import('@sveltejs/kit').SSRManifest} */
    __privateAdd(this, _manifest);
    __privateSet(this, _options, options);
    __privateSet(this, _manifest, manifest2);
  }
  /**
   * @param {{
   *   env: Record<string, string>;
   *   read?: (file: string) => ReadableStream;
   * }} opts
   */
  async init({ env, read }) {
    const prefixes = {
      public_prefix: __privateGet(this, _options).env_public_prefix,
      private_prefix: __privateGet(this, _options).env_private_prefix
    };
    const private_env = filter_private_env(env, prefixes);
    const public_env2 = filter_public_env(env, prefixes);
    set_private_env(
      prerendering ? new Proxy({ type: "private" }, prerender_env_handler) : private_env
    );
    set_public_env(
      prerendering ? new Proxy({ type: "public" }, prerender_env_handler) : public_env2
    );
    set_safe_public_env(public_env2);
    if (!__privateGet(this, _options).hooks) {
      try {
        const module = await get_hooks();
        __privateGet(this, _options).hooks = {
          handle: module.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
          handleError: module.handleError || (({ error }) => console.error(error)),
          handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request)),
          reroute: module.reroute || (() => {
          })
        };
      } catch (error) {
        {
          throw error;
        }
      }
    }
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    return respond(request, __privateGet(this, _options), __privateGet(this, _manifest), {
      ...options2,
      error: false,
      depth: 0
    });
  }
};
_options = new WeakMap();
_manifest = new WeakMap();

// .svelte-kit/netlify-tmp/manifest.js
var manifest = (() => {
  function __memo(fn) {
    let value;
    return () => value ?? (value = value = fn());
  }
  return {
    appDir: "_app",
    appPath: "_app",
    assets: /* @__PURE__ */ new Set([".DS_Store", "assets/.DS_Store", "assets/fonts/.DS_Store", "assets/fonts/FFF Acid Grotesk Bold.eot", "assets/fonts/FFF Acid Grotesk Bold.otf", "assets/fonts/FFF Acid Grotesk Bold.svg", "assets/fonts/FFF Acid Grotesk Bold.woff", "assets/fonts/FFF Acid Grotesk Bold.woff2", "assets/graphics/chirale.svg", "assets/graphics/connection.svg", "assets/graphics/contrasto.svg", "assets/graphics/determinazione.svg", "assets/graphics/espandi.svg", "assets/graphics/expand.svg", "assets/graphics/expand_in.svg", "assets/graphics/expand_out.svg", "assets/graphics/expand_us.svg", "assets/graphics/pen.svg", "assets/graphics/pulizia.svg", "assets/graphics/sfondo.svg", "assets/img/stock_portrait.jpg", "assets/img/stock_portrait.webp", "assets/logo/logo.svg", "assets/logo/logo_extended.svg", "assets/logo/logo_grid.svg", "assets/logo/logo_partial.svg", "assets/logo/logo_partial_white.svg", "assets/logo/text.svg", "assets/logo/text_extended.svg", "assets/video/.DS_Store", "assets/video/branding.mp4", "assets/video/branding_stock.mp4", "assets/video/grafica.mp4", "assets/video/sounddesign.mp4", "assets/video/sounddesign2.mp4", "favicon.png"]),
    mimeTypes: { ".otf": "font/otf", ".svg": "image/svg+xml", ".woff": "font/woff", ".woff2": "font/woff2", ".jpg": "image/jpeg", ".webp": "image/webp", ".mp4": "video/mp4", ".png": "image/png" },
    _: {
      client: { "start": "_app/immutable/entry/start.CuqcuPT4.js", "app": "_app/immutable/entry/app.jDyTMuB9.js", "imports": ["_app/immutable/entry/start.CuqcuPT4.js", "_app/immutable/chunks/entry.DTtWcqXf.js", "_app/immutable/chunks/scheduler.Bu15-wVR.js", "_app/immutable/entry/app.jDyTMuB9.js", "_app/immutable/chunks/scheduler.Bu15-wVR.js", "_app/immutable/chunks/index.O99BFJ2P.js"], "stylesheets": [], "fonts": [], "uses_env_dynamic_public": false },
      nodes: [
        __memo(() => Promise.resolve().then(() => (init__(), __exports))),
        __memo(() => Promise.resolve().then(() => (init__2(), __exports2))),
        __memo(() => Promise.resolve().then(() => (init__3(), __exports3))),
        __memo(() => Promise.resolve().then(() => (init__4(), __exports4))),
        __memo(() => Promise.resolve().then(() => (init__5(), __exports5))),
        __memo(() => Promise.resolve().then(() => (init__6(), __exports6))),
        __memo(() => Promise.resolve().then(() => (init__7(), __exports7))),
        __memo(() => Promise.resolve().then(() => (init__8(), __exports8))),
        __memo(() => Promise.resolve().then(() => (init__9(), __exports9)))
      ],
      routes: [
        {
          id: "/",
          pattern: /^\/$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 2 },
          endpoint: null
        },
        {
          id: "/branding",
          pattern: /^\/branding\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 3 },
          endpoint: null
        },
        {
          id: "/fotografia",
          pattern: /^\/fotografia\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 4 },
          endpoint: null
        },
        {
          id: "/grafica",
          pattern: /^\/grafica\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 5 },
          endpoint: null
        },
        {
          id: "/mission",
          pattern: /^\/mission\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 6 },
          endpoint: null
        },
        {
          id: "/sounddesign",
          pattern: /^\/sounddesign\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 7 },
          endpoint: null
        },
        {
          id: "/uiuxdesign",
          pattern: /^\/uiuxdesign\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 8 },
          endpoint: null
        }
      ],
      matchers: async () => {
        return {};
      },
      server_assets: {}
    }
  };
})();
var prerendered = /* @__PURE__ */ new Set([]);

// .svelte-kit/netlify-tmp/entry.js
var server = new Server(manifest);
var prefix = `/${manifest.appPath}/`;
var initialized = server.init({
  // @ts-ignore
  env: Deno.env.toObject()
});
async function handler(request, context) {
  if (is_static_file(request)) {
    return;
  }
  await initialized;
  return server.respond(request, {
    platform: { context },
    getClientAddress() {
      return context.ip;
    }
  });
}
function is_static_file(request) {
  const url = new URL(request.url);
  if (url.pathname.startsWith(prefix)) {
    return true;
  }
  const pathname = url.pathname.replace(/\/$/, "");
  let file = pathname.substring(1);
  try {
    file = decodeURIComponent(file);
  } catch {
  }
  return manifest.assets.has(file) || manifest.assets.has(file + "/index.html") || prerendered.has(pathname || "/");
}
export {
  handler as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=render.js.map
