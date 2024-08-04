var i = 0;

if (typeof window === 'undefined') {
  console.log('The window object is not available in this environment.');
} else {
  i = window.sessionStorage.getItem("inputNum");
}


function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount();