import { assertEquals } from "@std/assert";
import { DOMParser } from "@b-fuze/deno-dom";
import { createSelector } from "./selector.js";

Deno.test(function createSelectorTest() {
  globalThis.document = new DOMParser().parseFromString(
    `<div id="title"></div>`,
    'text/html'
  );

  //the option tag lacks "value="foo" label="foo"" because deno-dom does not has value and option attributes
  // TODO use Playwright
  const selector = new DOMParser().parseFromString(
    `<select id="mySelect"><option></option></select>`,
    'text/html'
  );

  assertEquals(createSelector(["foo"]).outerHTML, selector.getElementById("mySelect").outerHTML);
});
