"use strict";

const gulp = require("gulp");
const del = require("del");

// Clean task for a specified folder --------------------
// Removes all old files, except for package.json
// and README in all package
// ------------------------------------------------------

gulp.task("clean", () => {
  const destination = "dist/";

  if (destination === "package") {
    return del([
      `${destination}/**`,
      `!${destination}`,
      `!${destination}/package.json`,
      `!${destination}/README.md`
    ]);
  } else {
    return del([`${destination}/**/*`]);
  }
});
