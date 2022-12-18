"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Postmortems = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var Postmortems = /*#__PURE__*/function () {
  function Postmortems(id, name, subName, team, cause) {
    (0, _classCallCheck2.default)(this, Postmortems);
    (0, _defineProperty2.default)(this, "id", -1);
    (0, _defineProperty2.default)(this, "name", "");
    (0, _defineProperty2.default)(this, "subName", "");
    (0, _defineProperty2.default)(this, "team", "");
    (0, _defineProperty2.default)(this, "cause", "");
    this.id = id;
    this.name = name;
    this.subName = subName;
    this.team = team;
    this.cause = cause;
  }
  (0, _createClass2.default)(Postmortems, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
    }
  }, {
    key: "Name",
    get: function get() {
      return this.name;
    },
    set: function set(name) {
      this.name = name;
    }
  }, {
    key: "SubName",
    get: function get() {
      return this.subName;
    },
    set: function set(subName) {
      this.subName = subName;
    }
  }, {
    key: "Team",
    get: function get() {
      return this.team;
    },
    set: function set(team) {
      this.team = team;
    }
  }, {
    key: "Cause",
    get: function get() {
      return this.cause;
    },
    set: function set(cause) {
      this.cause = cause;
    }
  }]);
  return Postmortems;
}();
exports.Postmortems = Postmortems;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQb3N0bW9ydGVtcyIsImlkIiwibmFtZSIsInN1Yk5hbWUiLCJ0ZWFtIiwiY2F1c2UiXSwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvbW9kZWxzL1Bvc3Rtb3J0ZW1zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQb3N0bW9ydGVtc1xue1xuICAgIHByaXZhdGUgaWQ6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIHN1Yk5hbWU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSB0ZWFtOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgY2F1c2U6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBjb25zdHJ1Y3RvcihpZDpudW1iZXIsIG5hbWU6c3RyaW5nLCBzdWJOYW1lOnN0cmluZywgdGVhbTpzdHJpbmcsIGNhdXNlOnN0cmluZylcbiAgICB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zdWJOYW1lPSBzdWJOYW1lO1xuICAgICAgICB0aGlzLnRlYW0gPSB0ZWFtO1xuICAgICAgICB0aGlzLmNhdXNlID0gY2F1c2U7XG4gICAgfVxuXG4gICAgZ2V0IElkKCk6bnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG4gICAgc2V0IElkKGlkOiBudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxuICAgIGdldCBOYW1lKCk6c3RyaW5nXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbiAgICBzZXQgTmFtZShuYW1lOiBzdHJpbmcpXG4gICAge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICBnZXQgU3ViTmFtZSgpOnN0cmluZ1xuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViTmFtZTtcbiAgICB9XG4gICAgc2V0IFN1Yk5hbWUoc3ViTmFtZTogc3RyaW5nKVxuICAgIHtcbiAgICAgICAgdGhpcy5zdWJOYW1lID0gc3ViTmFtZTtcbiAgICB9XG4gICAgZ2V0IFRlYW0oKTpzdHJpbmdcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnRlYW07XG4gICAgfVxuICAgIHNldCBUZWFtKHRlYW06IHN0cmluZylcbiAgICB7XG4gICAgICAgIHRoaXMudGVhbSA9IHRlYW07XG4gICAgfVxuICAgIGdldCBDYXVzZSgpOnN0cmluZ1xuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2F1c2U7XG4gICAgfVxuICAgIHNldCBDYXVzZShjYXVzZTogc3RyaW5nKVxuICAgIHtcbiAgICAgICAgdGhpcy5jYXVzZSA9IGNhdXNlO1xuICAgIH1cbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBYUEsV0FBVztFQVFwQixxQkFBWUMsRUFBUyxFQUFFQyxJQUFXLEVBQUVDLE9BQWMsRUFBRUMsSUFBVyxFQUFFQyxLQUFZLEVBQzdFO0lBQUE7SUFBQSwwQ0FQcUIsQ0FBQyxDQUFDO0lBQUEsNENBQ0EsRUFBRTtJQUFBLCtDQUNDLEVBQUU7SUFBQSw0Q0FDTCxFQUFFO0lBQUEsNkNBQ0QsRUFBRTtJQUl0QixJQUFJLENBQUNKLEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQSxJQUFJO0lBQ2hCLElBQUksQ0FBQ0MsT0FBTyxHQUFFQSxPQUFPO0lBQ3JCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQSxJQUFJO0lBQ2hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0VBQ3RCO0VBQUM7SUFBQTtJQUFBLEtBRUQsZUFDQTtNQUNJLE9BQU8sSUFBSSxDQUFDSixFQUFFO0lBQ2xCLENBQUM7SUFBQSxLQUNELGFBQU9BLEVBQVUsRUFDakI7TUFDSSxJQUFJLENBQUNBLEVBQUUsR0FBR0EsRUFBRTtJQUNoQjtFQUFDO0lBQUE7SUFBQSxLQUNELGVBQ0E7TUFDSSxPQUFPLElBQUksQ0FBQ0MsSUFBSTtJQUNwQixDQUFDO0lBQUEsS0FDRCxhQUFTQSxJQUFZLEVBQ3JCO01BQ0ksSUFBSSxDQUFDQSxJQUFJLEdBQUdBLElBQUk7SUFDcEI7RUFBQztJQUFBO0lBQUEsS0FDRCxlQUNBO01BQ0ksT0FBTyxJQUFJLENBQUNDLE9BQU87SUFDdkIsQ0FBQztJQUFBLEtBQ0QsYUFBWUEsT0FBZSxFQUMzQjtNQUNJLElBQUksQ0FBQ0EsT0FBTyxHQUFHQSxPQUFPO0lBQzFCO0VBQUM7SUFBQTtJQUFBLEtBQ0QsZUFDQTtNQUNJLE9BQU8sSUFBSSxDQUFDQyxJQUFJO0lBQ3BCLENBQUM7SUFBQSxLQUNELGFBQVNBLElBQVksRUFDckI7TUFDSSxJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSTtJQUNwQjtFQUFDO0lBQUE7SUFBQSxLQUNELGVBQ0E7TUFDSSxPQUFPLElBQUksQ0FBQ0MsS0FBSztJQUNyQixDQUFDO0lBQUEsS0FDRCxhQUFVQSxLQUFhLEVBQ3ZCO01BQ0ksSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7SUFDdEI7RUFBQztFQUFBO0FBQUE7QUFBQSJ9