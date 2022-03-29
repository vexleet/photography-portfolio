/**
 * animOnScroll.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */

import imagesLoaded from "imagesloaded";
import Masonry from "masonry-layout";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import PhotoSwipe from "photoswipe/dist/photoswipe";
import PhotoSwipeDefaultUI from "photoswipe/dist/photoswipe-ui-default";

(function(window) {
  "use strict";

  var docElem = window.document.documentElement;

  function getViewportH() {
    var client = docElem["clientHeight"],
      inner = window["innerHeight"];

    if (client < inner) return inner;
    else return client;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  // http://stackoverflow.com/a/5598797/989439
  function getOffset(el) {
    var offsetTop = 0,
      offsetLeft = 0;
    do {
      if (!isNaN(el.offsetTop)) {
        offsetTop += el.offsetTop;
      }
      if (!isNaN(el.offsetLeft)) {
        offsetLeft += el.offsetLeft;
      }
    } while ((el = el.offsetParent));

    return {
      top: offsetTop,
      left: offsetLeft
    };
  }

  function inViewport(el, h) {
    var elH = el.offsetHeight,
      scrolled = scrollY(),
      viewed = scrolled + getViewportH(),
      elTop = getOffset(el).top,
      elBottom = elTop + elH,
      // if 0, the element is considered in the viewport as soon as it enters.
      // if 1, the element is considered in the viewport only when it's fully inside
      // value in percentage (1 >= h >= 0)
      h = h || 0;

    return elTop + elH * h <= viewed && elBottom - elH * h >= scrolled;
  }

  function extend(a, b) {
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  function onScrollHandler() {
    var self = this;
    if (!this.didScroll) {
      this.didScroll = true;
      setTimeout(function() {
        self._scrollPage();
      }, 60);
    }
  }

  function reloadItems() {
    this.msnry.reloadItems();
    this.msnry.layout();
  }

  function AnimOnScroll(el, spinner, options) {
    this.el = el;
    this.spinner = spinner;
    this.options = extend(this.defaults, options);

    this._onScrollFn = onScrollHandler.bind(this);

    this.reloadItems = reloadItems.bind(this);

    this._init();
  }

  // IE Fallback for array prototype slice
  if (navigator.appVersion.indexOf("MSIE 8") > 0) {
    var _slice = Array.prototype.slice;
    Array.prototype.slice = function() {
      if (this instanceof Array) {
        return _slice.apply(this, arguments);
      } else {
        var result = [];
        var start = arguments.length >= 1 ? arguments[0] : 0;
        var end = arguments.length >= 2 ? arguments[1] : this.length;
        for (var i = start; i < end; i++) {
          result.push(this[i]);
        }
        return result;
      }
    };
  }

  // Function.prototype.bind polyfill
  if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
      if (typeof this !== "function") {
        // closest thing possible to the ECMAScript 5
        // internal IsCallable function
        throw new TypeError(
          "Function.prototype.bind - what is trying to be bound is not callable"
        );
      }

      var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function() {},
        fBound = function() {
          return fToBind.apply(
            this instanceof fNOP ? this : oThis,
            aArgs.concat(Array.prototype.slice.call(arguments))
          );
        };

      fNOP.prototype = this.prototype;
      fBound.prototype = new fNOP();

      return fBound;
    };
  }

  AnimOnScroll.prototype = {
    defaults: {
      // Minimum and a maximum duration of the animation (random value is chosen)
      minDuration: 0,
      maxDuration: 0,
      // The viewportFactor defines how much of the appearing item has to be visible in order to trigger the animation
      // if we'd use a value of 0, this would mean that it would add the animation class as soon as the item is in the viewport.
      // If we were to use the value of 1, the animation would only be triggered when we see all of the item in the viewport (100% of it)
      viewportFactor: 0
    },
    _init: function() {
      this.items = Array.prototype.slice.call(
        document.querySelectorAll("#" + this.el.id + " > li")
      );
      this.itemsCount = this.items.length;
      this.itemsRenderedCount = 0;
      this.didScroll = false;
      // this.spinner = document.querySelector(".lds-spinner");

      var self = this;

      if (this.msnry) {
        this.msnry.destroy();
      }

      imagesLoaded(this.el, function() {
        // initialize masonry
        const images = self.items.map(el => {
          const img = el.querySelector("img");
          return {
            src: img.src,
            w: img.naturalWidth,
            h: img.naturalHeight
          };
        });

        self.items.forEach((el, index) => {
          el.addEventListener("click", event => {
            event.preventDefault();
            const pswp = document.querySelector(".pswp");
            const gallery = new PhotoSwipe(pswp, PhotoSwipeDefaultUI, images, {
              index,
              closeOnScroll: false
            });

            gallery.init();
          });
        });

        self.msnry = new Masonry(self.el, {
          itemSelector: "li",
          transitionDuration: 0
        });

        // the items already shown...
        self.items.forEach(function(el, i) {
          if (inViewport(el)) {
            self._checkTotalRendered();
            el.classList.add("shown");
            // classie.add(el, "shown");
          }
        });

        // animate on scroll the items inside the viewport
        window.addEventListener("scroll", self._onScrollFn, false);
        window.addEventListener(
          "resize",
          function() {
            self._resizeHandler();
          },
          false
        );

        self.spinner.classList.remove("show");
        self.el.classList.remove("loading");
      });
    },
    _scrollPage: function() {
      var self = this;
      this.items.forEach(function(el, i) {
        if (
          !el.classList.contains("shown") &&
          !el.classList.contains("animate") &&
          inViewport(el, self.options.viewportFactor)
        ) {
          setTimeout(function() {
            var perspY = scrollY() + getViewportH() / 2;
            self.el.style.WebkitPerspectiveOrigin = "50% " + perspY + "px";
            self.el.style.MozPerspectiveOrigin = "50% " + perspY + "px";
            self.el.style.perspectiveOrigin = "50% " + perspY + "px";

            self._checkTotalRendered();

            if (self.options.minDuration && self.options.maxDuration) {
              var randDuration =
                Math.random() *
                  (self.options.maxDuration - self.options.minDuration) +
                self.options.minDuration +
                "s";
              el.style.WebkitAnimationDuration = randDuration;
              el.style.MozAnimationDuration = randDuration;
              el.style.animationDuration = randDuration;
            }

            el.classList.add("animate");
            // classie.add(el, "animate");
          }, 25);
        }
      });
      this.didScroll = false;
    },
    _resizeHandler: function() {
      var self = this;
      function delayed() {
        self._scrollPage();
        self.resizeTimeout = null;
      }
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }
      this.resizeTimeout = setTimeout(delayed, 1000);
    },
    _checkTotalRendered: function() {
      ++this.itemsRenderedCount;
      if (this.itemsRenderedCount === this.itemsCount) {
        window.removeEventListener("scroll", this._onScrollFn);
      }
    }
  };

  // add to global namespace
  window.AnimOnScroll = AnimOnScroll;
})(window);
