// GLOBALS
var time = {};
time.task = {};
time.task.start = [];
time.task.end = [];
time.start = getTime("start");

var s = {};
s.a = [];
s.b = [];
s.c = [];

var M = {};
M.a = [];
M.b = [];
M.c = [];

var t = {};
t.a = [];
t.b = [];
t.c = [];

// Function to get the time during document and task start and end.
// On end it returns the total time.
function getTime(event) {
  if (event == "start") {
    time.start = Date.now();
    return time.start;
  } else if (event == "end") {
    time.end = Date.now();
    time.diff = time.end - time.start;

    return time.end;
  } else if (event == "task-start") {
    time.task.start[time.task.start.length] = Date.now();
  } else if (event == "task-end") {
    time.task.start[time.task.start.length] = Date.now();
    time.task.diff = time.task.end - time.task.start;

    return time.task.diff;
  } else {
    console.log("Parameters required.");
  }
}

var backup = [];
backup[0] = document.body.innerHTML;

function buildSmall(a, b) {
  backup[backup.length] = document.body.innerHTML;
  var doc = document.body.innerHTML;
  document.body.innerHTML = doc.replace(a, b);
  s.a[s.a.length] = a;
  s.b[s.b.length] = b;
}

function buildMega(a, b) {
  backup[backup.length] = document.body.innerHTML;
  var doc = document.body.innerHTML;
  var old = a;
  var next = b;
  doc = doc.replaceAll(a, b);
  document.body.innerHTML = doc;
  M.a[M.a.length] = a;
  M.b[M.b.length] = b;
}

function buildTiny(a, b) {
  backup[backup.length] = document.body.innerHTML;
  var doc = document.body.innerHTML;
  document.body.innerHTML = doc.replace(a, b);
  t.a[t.a.length] = a;
  t.b[t.b.length] = b;
}

// Check how many changes and scan all html / text
var changes = 0;
var changed = 0;
function buildCheck(a, b) {
  var position = 0;
  var from = a;
  var to = b;
  var found = 0;
}
function build(a, b, type, times) {}

// New Layout
function bM(a, b, type, times) {}

/*

New Logical Methods

*/

// LOGICAL
var static = {};
logical.app = "Logical.JS";
logical.version = "1.1.4";
logical.programmer = "CoffeeIsCode";
logical.screen = screen;
logical.nav = navigator;

var html = document.body.innerText;
var logicalHTML;
var backup = [];
var elements;
// Main Function for changing pages

function logic(a, b, type, alt1, alt2, alt3) {
  // Get task-start time and display to console.
  var tasked = getTime("task-start");
  console.log("Logic task was started " + tasked);
  // Make backup of body html
  html = document.body.innerHTML;
  backup[backup.length] = html;
  // Check node count
  nodeCount = nodeCount();
  // Check the type
  /* Types Legend
0 = Sensitive
1 = replace all
3 = Alternative mode for more than 1 possible changed


*/
  if (type == 1) {
    // replaceAll mode
    logicalHTML = document.body.innerHTML.replaceAll(a, b);
    tasked = getTime("task-end");
    console.log("logic task");
  } else if (type == 0) {
    // For Sensitive types
    logicalHTML = document.body.innerHTML.replace(a, b);
  } else if (type == 3) {
    // Alternative mode
    // Check for alternatives
    if (alt1 !== undefined) {
      var flip = Math.round(Math.random());
      if (flip >= 0.05) {
        logicalHTML = document.body.innerHTML.replaceAll(a, alt1);
      } else if (flip <= 0.05) {
        logicalHTML = document.body.innerHTML.replaceAll(a, b);
      }
    } else {
      // There was an issue or alt1 was undefined
      return;
    }
  }

  // Update after everything is checked.
  document.body.innerHTML = logicalHTML;
}

// Function to check nodes. Returns node count on on start. On end returns if changed boolean.
var nodeCount;
var nodeCount2;
var nodeChanges;
function checkNodes(a) {
  if (a == "start") {
    nodeCount = document.all.length;
    return nodeCount;
  } else if (a == "end") {
    nodeCount2 = document.all.length;
    if (nodeCount == nodeCount2) {
      // there were no changes to the html format
      nodeChanges = false;
    } else if (nodeCount !== nodeCount2) {
      nodeChanges = true;
    }
    return nodeCount;
  } else {
    // No mode was declared
    nodeCount = document.all.length;
  }
}
checkNodes();

function removeImages() {
  // var imageCount
}

function scriptBreak() {}

// End of page timestamp
// Run at end of page
getTime("end");
