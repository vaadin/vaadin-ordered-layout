import {PolymerElement} from '@polymer/polymer/polymer-element.js';

import {ThemableMixin} from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

import {ElementMixin} from '@vaadin/vaadin-element-mixin/vaadin-element-mixin.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

/**
 * `<vaadin-scroller>` provides a simple way to enable scrolling when its content is overflowing.
 *
 * ```
 * <vaadin-scroller>
 *   <div>Content</div>
 * </vaadin-scroller>
 * ```
 */
declare class ScrollerElement extends
  ThemableMixin(
  ElementMixin(
  PolymerElement)) {

  /**
   * This property indicates the scroll direction. Supported values are `vertical`, `horizontal`, `none`.
   * When `scrollDirection` is undefined scrollbars will be shown in both directions.
   */
  scrollDirection: ScrollerScrollDirection;
}

declare global {

  interface HTMLElementTagNameMap {
    "vaadin-scroller": ScrollerElement;
  }
}

export {ScrollerElement};

import {ScrollerScrollDirection} from '../@types/interfaces';
