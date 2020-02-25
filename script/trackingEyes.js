function getCoordsRelative(elemRelative) {
    let boxRelative = elemRelative.getBoundingClientRect();
    return {
        left: boxRelative.left + pageXOffset,
        top: boxRelative.top + pageYOffset,
        xCenter: boxRelative.left + (boxRelative.width/2) + pageXOffset,
        yCenter: boxRelative.top + (boxRelative.height/2) + pageYOffset,
        };
}

function trackingEyes(eye) {
    document.addEventListener('mousemove', function(event) {
        let xp = event.pageX;
        let yp = event.pageY;
        let coords = getCoordsRelative(eye);
        let sinAlf = (Math.abs(xp-coords.xCenter)) / (Math.sqrt((xp-coords.xCenter)**2+(yp-coords.yCenter)**2));
        let x1;
        let y1;
        x1 = coeffRadius * sinAlf;
        y1 = coeffRadius * Math.cos(Math.asin(sinAlf));
        if (coords.xCenter > xp) x1 = -x1;
        if (coords.yCenter > yp) y1 = -y1;
        eye.style.transform = 'translate(' + x1 + 'px , ' + y1 + 'px)';
    });
}

let eyeBall = document.getElementById('svg_1');
let sizeEyeBall = eyeBall.getBoundingClientRect();
let coeffRadius = sizeEyeBall.width;

let pupilCatRight = document.getElementById('pupilCatRight');
let pupilCatLeft = document.getElementById('pupilCatLeft');
let pupilBearRight = document.getElementById('pupilBearRight');
let pupilBearLeft = document.getElementById('pupilBearLeft');

trackingEyes(pupilCatRight);
trackingEyes(pupilCatLeft);
trackingEyes(pupilBearRight);
trackingEyes(pupilBearLeft);
