// -------------------------------------
//   Mountains
// -------------------------------------

function mountains() {

  var s = Snap(".mountains");
  s.attr({ height: "100%", width: "100%", viewBox: "0 0 1440 200" });

  s.polyline(
    0, number(110, 200),
    360, number(110, 200),
    720, number(110, 200),
    1080, number(110, 200),
    1440, number(110, 200),
    1440, 200,
    0, 200
  ).attr({class: "mountains-opaque"});

  s.polyline(
    0, number(70, 160),
    360, number(70, 160),
    720, number(70, 160),
    1080, number(70, 160),
    1440, number(70, 160),
    1440, 200,
    0, 200
  ).attr({class: "mountains-transparent"});

  s.polyline(
    0, number(30, 120),
    360, number(30, 120),
    720, number(30, 120),
    1080, number(30, 120),
    1440, number(30, 120),
    1440, 200,
    0, 200
  ).attr({class: "mountains-clear"});

};

mountains();

// -------------------------------------
//   Random Number Generator
// -------------------------------------

function number(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
