var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

c.fillRect(100, 100, 100, 100);
c.fillRect(100, 300, 100, 100);
c.fillRect(100, 100, 400, 100);
c.fillRect(100, 100, 100, 400);
