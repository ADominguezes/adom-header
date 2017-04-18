(function () {
  'use strict';
  Polymer({

    is: 'adom-header',

    properties: {
      iconNavigation: {
        type: String,
        value: '',
        observer: '_showControls'
      },
      heading: {
        type: String,
        value: '',
        observer: '_showControls'
      },
      ariaHeadingLevel: {
        type: Number,
        value: 1,
        observer: '_headingLevel'
      },
      altImage: {
        type: String
      },
      fixed: {
        type: Boolean
      },
      imgSrc: {
        type: String,
        value: '',
        observer: '_showControls'
      }
    },
    buttonNavigation: function (e) {
      this.fire('click-navigation-button');
    },
    _headingLevel: function () {
      var heading = this.$$('#heading');
      if (this.ariaHeadingLevel >= 1 && this.ariaHeadingLevel <= 6) {
        heading.setAttribute('role', 'heading');
        heading.setAttribute('aria-level', this.ariaHeadingLevel);
      } else {
        heading.removeAttribute('role');
        heading.removeAttribute('aria-level');
      }
    },
    _hideNavigation: function() {
      this.$.buttonNavigation.hidden = true;
    },
    _hideHeading: function() {
      this.$.heading.hidden = true;
    },
    _hideImgSrc: function() {
      this.$.logo.hidden = true;
    },
    _showControls: function() {
      if(this.iconNavigation==='') {
        this._hideNavigation();
      }
      if(this.heading==='') {
        this._hideHeading();
      }
      if(this.imgSrc==='') {
        this._hideImgSrc();
      }
    }

  });
}());
