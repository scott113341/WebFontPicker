this["Templates"] = this["Templates"] || {};

this["Templates"]["CSS"] = function(obj) {var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') } if ((obj.tempFamily || obj.family) && !(obj.tempFamily === '')) { ;__p += ' font-family: ' +((__t = ( obj.tempFamily || obj.family )) == null ? '' : __t) +' !important; '; } ;__p += '\n'; if (obj.enabled.weight || obj.tempWeight) { ;__p += ' font-weight: ' +((__t = ( obj.tempWeight || obj.weight )) == null ? '' : __t) +' !important; '; } ;__p += '\n'; if (obj.enabled.fontSize) { ;__p += ' font-size: ' +((__t = ( obj.fontSize )) == null ? '' : __t) +' !important; '; } ;__p += '\n'; if (obj.enabled.color) { ;__p += ' color: ' +((__t = ( obj.color )) == null ? '' : __t) +' !important; '; } ;__p += '\n'; if (obj.enabled.lineHeight) { ;__p += ' line-height: ' +((__t = ( obj.lineHeight )) == null ? '' : __t) +' !important; '; } ;__p += '\n'; if (obj.highlight) { ;__p += ' text-shadow: 0 0 5px rgba(255, 255, 255, 0.85), 0 0 10px rgba(0, 125, 255, 0.85), 0 0 20px #0CF, 0 0 30px #FFF !important; '; } ;return __p};

this["Templates"]["Font"] = function(obj) {var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }__p += '<div class="font" data-font-family="' +((__t = ( obj.family )) == null ? '' : __t) +'">\n    <div class="weights">\n        '; if (hasItalic(obj.variants)) { ;__p += '<i>I</i>'; } ;__p += '\n        '; _.forEach(getWeights(obj.variants), function(weight) { ;__p += '<b>' +((__t = ( weight.charAt(0) )) == null ? '' : __t) +'</b>'; }); ;__p += '00\n    </div>\n    <div class="font-family">' +((__t = ( obj.family )) == null ? '' : __t) +'</div>\n    <div class="arrow"></div>\n    <div class="preview" style="font-family:\'' +((__t = ( obj.family )) == null ? '' : __t) +'\', serif !important">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</div>\n</div>';return __p};

this["Templates"]["Picker"] = function(obj) {var __t, __p = '', __e = _.escape;__p += '<div id="font-picker" data-version="' +((__t = ( VERSION )) == null ? '' : __t) +'">\n    <div id="font-picker-header">\n        <button class="add-style"></button>\n        <div class="font-picker-heading">Font Picker</div>\n    </div>\n    <div id="font-picker-list">\n        <div class="overlay"></div>\n    </div>\n</div>';return __p};

this["Templates"]["Style"] = function(obj) {var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }__p += '<div class="style">\n    <div class="selector-wrapper">\n        <label class="toggle-wrapper">\n            <input type="checkbox" class="toggle-active" '; if (obj.active) { ;__p += ' checked '; } ;__p += '>\n            <label class="toggle"></label>\n        </label>\n        <input type="text" class="selector" placeholder="CSS selector (e.g. body, h1, p)" value="' +((__t = ( obj.selector )) == null ? '' : __t) +'">\n    </div>\n    <div class="font-menu">\n        <div class="search-wrapper">\n            <input type="search" class="search" placeholder="Search for a family">\n        </div>\n        <div class="font none'; if (obj.family === '') { ;__p += ' current'; } ;__p += '" data-font-family="">\n            <div class="arrow"></div>\n            <span>Select a font</span>\n        </div>\n        <div class="font-list">\n            <button class="load-more">Load more</button>\n        </div>\n        <div class="nothing">\n            <p>No fonts found.</p>\n        </div>\n    </div>\n    <div class="weight">\n        <label>\n            <input type="checkbox" class="toggle-weight"'; if (obj.enabled.weight) { ;__p += ' checked '; } ;__p += '>\n            <label class="section-label">Weight</label>\n        </label>\n        <span class="select-weight"></span>\n    </div>\n    <div class="combo clearfix">\n        <div class="color">\n            <label>\n                <input type="checkbox" class="toggle-color"'; if (obj.enabled.color) { ;__p += ' checked '; } ;__p += '>\n                <label>Color</label>\n            </label>\n            <input type="color" class="editable change-color" spellcheck="false" maxlength="7" value="#5bbf45">\n        </div>\n        <div class="font-size">\n            <label>\n                <input type="checkbox" class="toggle-font-size"'; if (obj.enabled.fontSize) { ;__p += ' checked '; } ;__p += '>\n                <label>Font size</label>\n            </label>\n            <input type="range" min="12" max="84" step="1" class="editable change-font-size" spellcheck="false" value="16">\n        </div>\n        <div class="line-height">\n            <label>\n                <input type="checkbox" id="line-height" class="toggle-line-height"'; if (obj.enabled.lineHeight) { ;__p += ' checked '; } ;__p += '>\n                <label>Line height</label>\n            </label>\n            <input type="range" min="0.1" max="2.5" step="0.1" class="editable change-line-height" spellcheck="false" value="1.5">\n        </div>\n    </div>\n</div>';return __p};

this["Templates"]["Weights"] = function(obj) {var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') } _.forEach(obj.weights, function(weight) { ;__p += '<!--\n--><label><input data-weight="' +((__t = ( weight )) == null ? '' : __t) +'" class="change-weight" type="radio" name="weight"><!--\n--><label data-weight="' +((__t = ( weight )) == null ? '' : __t) +'" class="preview-weight">' +((__t = ( weight )) == null ? '' : __t) +'</label></label><!--\n-->'; }); ;return __p};