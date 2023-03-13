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

// Edge and Microsoft

// Firefox
function firefox() {
  logic("Blocks third-party tracking cookies by default", "Blocks cookies", 1);
  logic("Autoplay blocking", "Stops Video", 1);
  logic("Blocks social trackers", "More, no trackers", 1);
  logic("Do what you do online.", "Do you, online.", 1);
  logic("Firefox Browsers", "Firefox", 1);
  logic("Firefox Browser", "Firefox", 1);
  logic(
    "How Firefox compares to other browsers",
    "Firefox Vs. Chrome + Edge",
    1
  );
  logic("Firefox Browser isn’t", "We aren't", 1);
  logic("Watching", "Viewing", 1);
  logic("none of the invasions of privacy.", "no spying.", 1);
  logic("collects so little data about you,", "needs very little data,", 1);
  logic(
    "we don’t even require your email address to download.",
    "no email needed to download",
    1
  );
  logic(
    "That’s because unlike other browsers, we have no financial stake in following you around the web.",
    "Because we don't make money on data.",
    1
  );
  logic(" with tools", ", use tools,", 1);
  logic("Choose your Colors", "See Colors", 1);
  logic(
    "Personalize your experience with new colorways.",
    "Choose your colors",
    1
  );
  logic("An extra layer of protection", "Secure", 1);
  logic(
    "helps keep internet service providers from selling your data.",
    "prevents ISP's from selling data.",
    1
  );
  logic("Almost there", "Close", 1);
  logic("Now run the installer", "Run the .exe", 1);
  logic("that just", "that", 1);
  logic("the installer", "the '.exe'", 1);
  logic("More Details", "Details", 1);
  logic("more details", "details", 1);
  logic("See Release Notes", "News", 1);
  logic("recommended settings", "default settings", 1);
  logic("Developer", "Programmer", 1);
  logic(
    "Pop a video out of the browser window so you can stream and multitask.",
    "Stream and multitask.",
    1
  );
}
firefox();
// Run firefox words

// MS no Connection
function MS() {
  // MS and Edge
  logic(
    "Microsoft recommends using Microsoft Edge for a fast, secure, and modern web experience that can help save you time and money.",
    "Microsoft begs you. Please try Edge. It's a browser too.",
    1
  );
  logic("Picture-in-Picture", "Mini-Viewer", 1);
  logic("Hmmm", "Issue", 1);
  logic("refused to connect", "stopped", 1);
  logic("Search the web", "Google", 1);
  logic("There's no need to download a new web browser.", "Try Edge.", 1);
  logic("Connection Issue", "No Connection", 1);
  logic("OS availability", "Cross-Platform", 1);
  logic("In-browser screenshot tool", "screenshot", 1);
  logic("Primary password", "Saves Passwords", 1);
  logic("Edge", "iExplorer2", 1);
  // MS no Connection
  logic("Hmmm", "Duh", 1);
  logic("Connection Issue", "Network Issue", 1);
  logic("Try now", "Beta?", 1);
  logic("can't reach this page", "can't connect,1");
  logic("No Page", "No!,1");
}
MS();
// Run MS words

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

function mainLogic() {
  // Moz License and Firefox
  logic("contributes to the creation of", "others involved with", 1);
  logic("any of the following:", "any of these:", 1);
  logic("maximum extent possible", "most possible", 1);
  logic("Version 2.0", "v2", 1);
  logic("form of the work preferred", "method");
  logic("Mozilla Public License", "Moz Legal", 1);
  logic("way it was done", "method", 1);
  logic("means each individual", "means person", 1);
  logic("attached the notice", "posted", 1);
  logic("legal entity", "company", 1);
  logic("company that makes", "manufacturer", 1);
  logic("entity that makes", "maker", 1);
  logic("attached the notice", "posted", 1);
  logic("person or company", "entity", 1);
  logic("person or company", "entity", 1);
  logic("Source Code Form", "files", 1);
  logic("initial Contributor", "first developer", 1);
  logic("Executable Form", "Program Files", 1);
  logic("having the right", "permissions", 1);
  logic("Stated Software", "the software discussed", 1);
  logic("In recent years", "Recently", 1);
  // Firefox is now Logical
  logic("open and accessible", "free", 1);
  logic("Download options", "Types", 1);
  logic("Get the browser that protects what's important", "Browse Safely!", 1);
  logic("Download options and other languages", "Non-English Downloads", 1);
  logic(
    "No shady privacy policies or back doors for advertisers.",
    "Comes fine print and Spyware free.",
    1
  );
  logic(
    "Just a lightning fast browser that doesn’t sell you out.",
    "Fast and won't sell your data.",
    1
  );
  logic("over 90", "90+", 1);
  logic("over 80", "80+", 1);
  logic("over 70", "70+", 1);
  logic("over 60", "60+", 1);
  logic("over 50", "50+", 1);
  logic("no matter", "with", 1);
  logic("no matter what you’re using", "if your an addict", 1);
  logic(
    "Your download should begin automatically",
    "File Processed automatically",
    1
  );
  logic("File a Bug", "Reports", 1);
  logic("Mozilla makes browsers", "We make Firefox", 1);
  logic("Get all the speed and", "Go fast with", 1);
  logic("refused to connect.", "Quit", 1);
  logic("Search the web for", "Google:", 1);
  logic("Download Firefox", "Get", 1);
  logic("Firefox Privacy Notice", "Privacy fine print", 1);
  logic("the ad trackers", "ad-trackers", 1);
  logic("explore the internet", "browse", 1);
  logic("are distracting", "distract", 1);
  logic("makes web pages load slower", "effects load times", 1);
  logic("every move you make", "all activities", 1);
  logic("Firefox is for everyone", "For Everyone", 1);
  logic(
    "and compatible with Windows, Mac and Linux machines",
    "cross-platform",
    1
  );
  logic("compatible with Windows", "runs on Windows", 1);
  logic("load slower", "lag", 1);
  logic("Make sure", "Check", 1);
  logic("make sure", "check", 1);
  logic("operating system", "OS", 1);
  logic("Operating System", "OS", 1);
  logic("operating system's", "OS's", 1);
  logic("is up to date", "updated", 1);
  logic("Didn’t work?", "Working?", 1);
  logic("Try downloading again.", "Download again", 1);
  // Firefox is now Logical
  logic("open and accessible", "free", 1);
  logic("Get the browser that protects what's important", "Browse Safely!", 1);
  logic("Download options and other languages", "Non-English Downloads", 1);
  logic(
    "No shady privacy policies or back doors for advertisers.",
    "Comes fine print and Spyware free.",
    1
  );
  logic(
    "Just a lightning fast browser that doesn’t sell you out.",
    "Fast and won't sell your data.",
    1
  );
  logic("over 90", "90+", 1);
  logic("no matter", "with", 1);
  logic("no matter what you’re using", "no matter what", 1);
  logic("Your download should begin automatically", "Processing File...", 1);
  logic("File a Bug", "Reports", 1);
  logic("Mozilla makes browsers", "We make Firefox", 1);
  logic("Get all the speed and", "Go fast with", 1);
  logic("refused to connect.", "Quit", 1);
  logic("Search the web for", "Google: ", 1);
  logic("Download Firefox", "Get", 1);
  logic("Firefox Privacy Notice", "Privacy fine print", 1);
  logic("the ad trackers", "ad-trackers", 1);
  logic("explore the internet", "browse", 1);
  logic("are distracting", "distract", 1);
  logic("make web pages load slower", "effects load times", 1);
  logic("every move you make", "all activities", 1);
  logic("Firefox is for everyone", "For Everyone", 1);
  logic(
    "and compatible with Windows, Mac and Linux machines",
    "cross-platform",
    1
  );
  logic("compatible with Windows", "runs on Windows", 1);
  logic("load slower", "lag", 1);
  logic("Make sure", "Check", 1);
  logic("make sure", "check", 1);
  logic("operating system", "OS", 1);
  logic("operating system", "OS", 1);
  logic("Operating System", "OS", 1);
  logic("operating system", "OS", 1);
  logic("operating system's", "OS's", 1);
  logic("is up to date", "updated", 1);
  logic("Didn’t work?", "No?", 1);
  logic("Try downloading again.", "Download again", 1);
  logic("the combination", "the many", 1);
  logic("has removed", "deleted", 1);
  logic("licenses granted", "permissions given", 1);

  // 2's Sensitive
  logic("About us", "About", 1);

  // 1's
  logic("of the following", "...", 1);
  logic("Definitions", "Details", 1);
  logic("individual", "person", 1);
  logic("creates", "makes", 1);
  logic("creator", "maker", 1);

  logic("iCloud ", "Apple Cloud", 1);
  logic("get rid of ", "remove ", 1);
}
mainLogic();

// CoffeeIsCode
function CoffeeIsCode() {
  logic(" slang term ", " slang ", 1);
  // Can't run this without function to check node count
  // logic(" is ", " = ", 1);
  logic("iPad ", "Over-sized iDevice", 1);
  logic("Learn more ", "More ", 1);
  logic(" learn more ", " more ", 1);
  logic("CoffeeIsCode", "CIC", 1);
}
// CoffeeIsCode Mode (off by default)
// CoffeeIsCode();

//possibles breakers
// From what I learned partial words shouldn't be used.
function breakers() {
  logic("means", "is", 1);
  logic("of ", "*", 1);
  logic("for", "4", 1);
  logic("the ", "th", 1);
  logic("ont", "-nt-", 1);
  logic("", "", 1);
  logic("a ", "-", 1);
  logic("", "", 1);
}
function scriptBreak() {}

// End of page timestamp
getTime("end");
