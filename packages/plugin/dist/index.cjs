"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  load: () => load
});
module.exports = __toCommonJS(index_exports);
var import_typedoc5 = require("typedoc");

// src/themes/OverrideTheme.tsx
var import_fs_extra = __toESM(require("fs-extra"), 1);
var import_path2 = __toESM(require("path"), 1);
var import_url = require("url");
var import_typedoc4 = require("typedoc");

// src/themes/OverrideThemeContext.tsx
var import_typedoc3 = require("typedoc");

// src/partials/commentTags.tsx
var import_typedoc = require("typedoc");
var COLLAPSIBLE_TAGS = /* @__PURE__ */ new Set(["@source"]);
var commentTags = (context) => (props) => {
  if (!props.comment) return;
  const comment = props.comment;
  const skipSave = comment.blockTags.map((tag) => tag.skipRendering);
  const skippedTags = context.options.getValue("notRenderedTags");
  const beforeTags = context.hook("comment.beforeTags", context, comment, props);
  const afterTags = context.hook("comment.afterTags", context, comment, props);
  const tags = props.kindOf(import_typedoc.ReflectionKind.SomeSignature) ? comment.blockTags.filter(
    (tag) => tag.tag !== "@returns" && !tag.skipRendering && !skippedTags.includes(tag.tag)
  ) : comment.blockTags.filter(
    (tag) => !tag.skipRendering && !skippedTags.includes(tag.tag)
  );
  skipSave.forEach((skip, i) => {
    const tag = comment.blockTags[i];
    if (tag) tag.skipRendering = skip;
  });
  return /* @__PURE__ */ import_typedoc.JSX.createElement(import_typedoc.JSX.Fragment, null, beforeTags, /* @__PURE__ */ import_typedoc.JSX.createElement("div", { class: "tsd-comment tsd-typography" }, tags.map((item) => {
    const name = item.name ? `${(0, import_typedoc.translateTagName)(item.tag)}: ${item.name}` : (0, import_typedoc.translateTagName)(item.tag);
    const anchor = context.slugger.slug(name);
    const body = /* @__PURE__ */ import_typedoc.JSX.createElement(import_typedoc.JSX.Raw, { html: context.markdown(item.content) });
    if (COLLAPSIBLE_TAGS.has(item.tag)) {
      return /* @__PURE__ */ import_typedoc.JSX.createElement("details", { class: `tsd-tag-${item.tag.substring(1)} tsd-tag--collapsible`, id: anchor }, /* @__PURE__ */ import_typedoc.JSX.createElement("summary", { class: "tsd-tag__summary" }, /* @__PURE__ */ import_typedoc.JSX.createElement("h4", { class: "tsd-anchor-link" }, name)), /* @__PURE__ */ import_typedoc.JSX.createElement("div", { class: "tsd-tag--collapsible__content" }, body));
    }
    return /* @__PURE__ */ import_typedoc.JSX.createElement("div", { class: `tsd-tag-${item.tag.substring(1)}` }, /* @__PURE__ */ import_typedoc.JSX.createElement("h4", { class: "tsd-anchor-link", id: anchor }, name), body);
  })), afterTags);
};

// src/partials/navigation.tsx
var import_path = __toESM(require("path"), 1);
var process = __toESM(require("process"), 1);
var import_typedoc2 = require("typedoc");
var navigation = (context) => (props) => {
  const categories = formatFileHierarchy(props.model.project.children || []);
  const documents = props.model.project.documents;
  return /* @__PURE__ */ import_typedoc2.JSX.createElement("div", { class: "tree" }, /* @__PURE__ */ import_typedoc2.JSX.createElement("div", { class: "tree-config" }, /* @__PURE__ */ import_typedoc2.JSX.createElement("button", { class: "tree-config__button tree-config__button--expand js-tree-expand", title: "Expand All" }, /* @__PURE__ */ import_typedoc2.JSX.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      viewBox: "0 0 490.72 490.72",
      fill: "currentColor"
    },
    /* @__PURE__ */ import_typedoc2.JSX.createElement("path", { d: "M480.027,288.027H10.693c-5.867,0-10.667,4.8-10.667,10.667c0,5.867,4.8,10.667,10.667,10.667h213.333v144.96l-45.76-45.76c-4.267-4.053-10.987-3.947-15.04,0.213c-3.947,4.16-3.947,10.667,0,14.827l64,64c4.16,4.16,10.88,4.16,15.04,0l64-64c4.053-4.267,3.947-10.987-0.213-15.04c-4.16-3.947-10.667-3.947-14.827,0l-45.867,45.76V309.36h234.667c5.867,0,10.667-4.8,10.667-10.667C490.693,292.827,485.893,288.027,480.027,288.027z" }),
    /* @__PURE__ */ import_typedoc2.JSX.createElement("path", { d: "M10.693,224.027h469.333c5.867,0,10.667-4.8,10.667-10.667c0-5.867-4.8-10.667-10.667-10.667H245.36V36.4l45.76,45.76c4.267,4.053,10.987,3.947,15.04-0.213c3.947-4.16,3.947-10.667,0-14.827l-64-64c-4.16-4.16-10.88-4.16-15.04,0l-64,64c-4.053,4.267-3.947,10.987,0.213,15.04c4.16,3.947,10.667,3.947,14.827,0l45.867-45.76v166.293H10.693c-5.867,0-10.667,4.8-10.667,10.667C0.027,219.227,4.827,224.027,10.693,224.027z" })
  )), /* @__PURE__ */ import_typedoc2.JSX.createElement(
    "button",
    {
      class: "tree-config__button tree-config__button--collapse js-tree-collapse",
      title: "Collapse All"
    },
    /* @__PURE__ */ import_typedoc2.JSX.createElement("svg", { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor" }, /* @__PURE__ */ import_typedoc2.JSX.createElement(
      "path",
      {
        "fill-rule": "evenodd",
        d: "M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z"
      }
    ))
  ), /* @__PURE__ */ import_typedoc2.JSX.createElement(
    "button",
    {
      class: "tree-config__button tree-config__button--target js-tree-target",
      title: "Scroll to current file"
    },
    /* @__PURE__ */ import_typedoc2.JSX.createElement("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor" }, /* @__PURE__ */ import_typedoc2.JSX.createElement("circle", { cx: "12", cy: "12", r: "3" }), /* @__PURE__ */ import_typedoc2.JSX.createElement("path", { d: "M13 4.069V2h-2v2.069A8.008 8.008 0 0 0 4.069 11H2v2h2.069A8.007 8.007 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" }))
  )), /* @__PURE__ */ import_typedoc2.JSX.createElement("div", { class: "tree-content" }, /* @__PURE__ */ import_typedoc2.JSX.createElement(Navigation, { ...categories, documents, context })));
};
var formatDocumentHierarchy = (documents) => {
  const result = {
    items: [],
    categories: {},
    id: `docs-root`
  };
  for (const doc of documents) {
    const nameParts = doc.name.split(`/`);
    if (nameParts.length > 1) {
      addToDocCategory(result, doc, nameParts, 0);
    } else {
      result.items.push(doc);
    }
  }
  return result;
};
var addToDocCategory = (category, doc, nameParts, idx) => {
  if (idx === nameParts.length - 1) {
    category.items.push(doc);
    return;
  }
  const title = nameParts[idx];
  if (!title) {
    return;
  }
  if (!category.categories[title]) {
    category.categories[title] = {
      items: [],
      categories: {},
      id: `${category.id}-${title}`
    };
  }
  const subCategory = category.categories[title];
  if (!subCategory) {
    return;
  }
  addToDocCategory(subCategory, doc, nameParts, idx + 1);
};
var DocCategoryNavigation = ({
  id,
  categories,
  items,
  context
}) => /* @__PURE__ */ import_typedoc2.JSX.createElement("ul", { class: "js-category-list category", "data-id": id }, Object.entries(categories).map(([key, item]) => /* @__PURE__ */ import_typedoc2.JSX.createElement("li", null, /* @__PURE__ */ import_typedoc2.JSX.createElement("span", { class: "js-category-title category__title", "data-id": item.id }, /* @__PURE__ */ import_typedoc2.JSX.createElement("div", { class: "category__folder", "data-id": item.id }), key), /* @__PURE__ */ import_typedoc2.JSX.createElement(DocCategoryNavigation, { id: item.id, categories: item.categories, items: item.items, context }))), items.map((doc) => /* @__PURE__ */ import_typedoc2.JSX.createElement("li", null, /* @__PURE__ */ import_typedoc2.JSX.createElement(DocumentItem, { doc, context }))));
var DocumentItem = ({
  doc,
  context
}) => {
  const displayName = doc.name.includes(`/`) ? doc.name.split(`/`).pop() || doc.name : doc.name;
  return /* @__PURE__ */ import_typedoc2.JSX.createElement(import_typedoc2.JSX.Fragment, null, /* @__PURE__ */ import_typedoc2.JSX.createElement(
    "a",
    {
      class: "category__link js-category-link category__link--doc",
      href: context.urlTo(doc),
      "data-id": `/${context.router.getFullUrl(doc)}`
    },
    displayName
  ), doc.children && doc.children.length > 0 && /* @__PURE__ */ import_typedoc2.JSX.createElement("ul", null, doc.children.map((child) => /* @__PURE__ */ import_typedoc2.JSX.createElement("li", null, /* @__PURE__ */ import_typedoc2.JSX.createElement(DocumentItem, { doc: child, context })))));
};
var Navigation = ({
  id,
  categories,
  items,
  documents,
  context
}) => {
  const docTree = documents && documents.length > 0 ? formatDocumentHierarchy(documents) : void 0;
  return /* @__PURE__ */ import_typedoc2.JSX.createElement("ul", { class: "js-category-list category", "data-id": id }, docTree && /* @__PURE__ */ import_typedoc2.JSX.createElement("li", null, /* @__PURE__ */ import_typedoc2.JSX.createElement("span", { class: "js-category-title category__title", "data-id": "docs-root" }, /* @__PURE__ */ import_typedoc2.JSX.createElement("div", { class: "category__folder", "data-id": "docs-root" }), "Documents"), /* @__PURE__ */ import_typedoc2.JSX.createElement(DocCategoryNavigation, { ...docTree, context })), Object.entries(categories).map(([key, item]) => /* @__PURE__ */ import_typedoc2.JSX.createElement("li", null, /* @__PURE__ */ import_typedoc2.JSX.createElement("span", { class: "js-category-title category__title", "data-id": item.id }, /* @__PURE__ */ import_typedoc2.JSX.createElement("div", { class: "category__folder", "data-id": item.id }), key), /* @__PURE__ */ import_typedoc2.JSX.createElement(Navigation, { id: item.id, categories: item.categories, items: item.items, context }))), items.map((item) => /* @__PURE__ */ import_typedoc2.JSX.createElement("li", null, /* @__PURE__ */ import_typedoc2.JSX.createElement(Item, { item, context }))));
};
var isAllChildrenDeprecated = (children) => children.length > 0 && children.every((child) => child.isDeprecated());
var Item = ({ item, context }) => {
  if (`id` in item) {
    const fileDeprecated = item.isDeprecated() || isAllChildrenDeprecated(item.children || []);
    return /* @__PURE__ */ import_typedoc2.JSX.createElement(import_typedoc2.JSX.Fragment, null, /* @__PURE__ */ import_typedoc2.JSX.createElement(
      "a",
      {
        class: `category__link js-category-link category__link--ts${fileDeprecated ? ` category__link--deprecated` : ``}`,
        href: context.urlTo(item),
        "data-id": `/${context.router.getFullUrl(item)}`
      },
      item.title
    ), /* @__PURE__ */ import_typedoc2.JSX.createElement("ul", null, item.children?.map((subItem) => /* @__PURE__ */ import_typedoc2.JSX.createElement("li", null, /* @__PURE__ */ import_typedoc2.JSX.createElement(
      "a",
      {
        class: `category__link js-category-link${subItem.isDeprecated() ? ` category__link--deprecated` : ``}`,
        href: context.urlTo(subItem),
        "data-id": `/${context.router.getFullUrl(subItem)}`
      },
      context.icons[subItem.kind](),
      subItem.name
    )))));
  }
  return /* @__PURE__ */ import_typedoc2.JSX.createElement(import_typedoc2.JSX.Fragment, null, /* @__PURE__ */ import_typedoc2.JSX.createElement("span", { class: `category__link category__link--disable js-category-link category__link--ts${item.children.length > 0 && item.children.every((child) => child.isDeprecated()) ? ` category__link--deprecated` : ``}` }, item.title), /* @__PURE__ */ import_typedoc2.JSX.createElement("ul", null, item.children.map((subItem) => /* @__PURE__ */ import_typedoc2.JSX.createElement("li", null, /* @__PURE__ */ import_typedoc2.JSX.createElement(
    "a",
    {
      class: `category__link js-category-link${subItem.isDeprecated() ? ` category__link--deprecated` : ``}`,
      href: context.urlTo(subItem),
      "data-id": `/${context.router.getFullUrl(subItem)}`
    },
    context.icons[subItem.kind](),
    subItem.name
  )))));
};
var getName = (item) => {
  const fullFileName = item.sources?.[0]?.fullFileName || ``;
  const targetFileName = fullFileName.replaceAll(import_path.default.sep, `/`);
  const currentDirName = process.cwd().replaceAll(import_path.default.sep, `/`);
  return targetFileName.replace(currentDirName, ``).slice(1);
};
var formatFileHierarchy = (values) => {
  const result = {
    items: [],
    categories: {},
    id: `root`
  };
  for (const item of values) {
    const name = getName(item);
    if (name.startsWith(`node_modules`)) {
      continue;
    }
    const titleSplit = name.split(`/`);
    addToCategory(result, item, titleSplit, 0);
  }
  return result;
};
var addToCategory = (category, item, titleSplit, idx) => {
  if (idx === titleSplit.length - 1) {
    if (item.kind === import_typedoc2.ReflectionKind.Module) {
      item.title = titleSplit[idx] || ``;
      item.children = item.children || [];
      category.items.push(item);
      return;
    }
    const existsFile = category.items.find((existItem) => existItem.title === titleSplit[idx]);
    if (!existsFile) {
      category.items.push({
        title: titleSplit[idx] ?? ``,
        children: [item]
      });
      return;
    }
    existsFile.children?.push(item);
    return;
  }
  const title = titleSplit[idx];
  if (!title) {
    return;
  }
  if (!category.categories[title]) {
    category.categories[title] = {
      items: [],
      categories: {},
      id: `${category.id}-${title}`
    };
  }
  const categoryToAdd = category.categories[title];
  if (!categoryToAdd) {
    return;
  }
  addToCategory(categoryToAdd, item, titleSplit, idx + 1);
};

// src/themes/OverrideThemeContext.tsx
var OverrideThemeContext = class extends import_typedoc3.DefaultThemeRenderContext {
  navigation = (context) => navigation(this)(context);
  commentTags = (props) => commentTags(this)(props);
};

// src/themes/OverrideTheme.tsx
var import_meta = {};
var __dirname = import_path2.default.dirname((0, import_url.fileURLToPath)(import_meta.url));
var OverrideTheme = class extends import_typedoc4.DefaultTheme {
  constructor(renderer) {
    super(renderer);
    this.owner.on(import_typedoc4.RendererEvent.END, (event) => {
      const src = import_path2.default.join(__dirname, `assets`);
      const dest = import_path2.default.join(event.outputDirectory, `assets`);
      try {
        console.log(`[hierarchy-theme] Copying assets from ${src} to ${dest}`);
        console.log(`[hierarchy-theme] Source exists: ${import_fs_extra.default.existsSync(src)}`);
        if (import_fs_extra.default.existsSync(src)) {
          console.log(`[hierarchy-theme] Source contents: ${import_fs_extra.default.readdirSync(src).join(", ")}`);
        }
        import_fs_extra.default.copySync(src, dest);
        console.log(`[hierarchy-theme] Assets copied successfully`);
      } catch (err) {
        console.error(`[hierarchy-theme] Failed to copy assets:`, err);
      }
    });
  }
  getRenderContext(page) {
    return new OverrideThemeContext(this.router, this, page, this.application.options);
  }
};

// src/index.tsx
var load = (app) => {
  app.renderer.hooks.on(
    `head.end`,
    (context) => /* @__PURE__ */ import_typedoc5.JSX.createElement("link", { rel: "stylesheet", href: context.relativeURL(`assets/hierarchy.css`) })
  );
  app.renderer.hooks.on(
    `body.end`,
    (context) => /* @__PURE__ */ import_typedoc5.JSX.createElement("script", { src: context.relativeURL(`assets/hierarchy-theme.js`) })
  );
  app.renderer.defineTheme(`hierarchy`, OverrideTheme);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  load
});
