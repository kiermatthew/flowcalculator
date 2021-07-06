var mwValue, tValue, dx1, dx2, dy1, dy2, vx1, vx2, vy1, vy2, diameterValue, velocityValue;
var validationText, densityResult, viscosityResult, nreResult, diameterResult;

let validate = document.getElementById("validation").innerHTML;
let density = document.getElementById("density").innerHTML;
let viscosity = document.getElementById("viscosity").innerHTML;
let diameter = document.getElementById("diameter").innerHTML;
let nre =  document.getElementById("nre").innerHTML;
let laminar = document.getElementById("laminar").innerHTML;
let transient = document.getElementById("transient").innerHTML; 
let turbulent = document.getElementById("turbulent").innerHTML;

function calculate() {
    mwValue = document.forms["form"]["mwValue"].value;
    tValue = document.forms["form"]["tValue"].value;
    dx1 = document.forms["form"]["dx1"].value;
    dx2 = document.forms["form"]["dx2"].value;
    dy1 = document.forms["form"]["dy1"].value;
    dy2 = document.forms["form"]["dy2"].value;
    vx1 = document.forms["form"]["vx1"].value;
    vx2 = document.forms["form"]["vx2"].value;
    vy1 = document.forms["form"]["vy1"].value;
    vy2 = document.forms["form"]["vy2"].value;
    diameterValue = document.forms["form"]["diameterValue"].value;
    velocityValue = document.forms["form"]["velocityValue"].value;

    if (isNaN(tValue) || isNaN(mwValue) || isNaN(dx1) || isNaN(dx2) || isNaN(dy1) || isNaN(dy2) ||
        isNaN(vx1) || isNaN(vx2) || isNaN(vy1) || isNaN(vy2) || isNaN(diameterValue) || isNaN(velocityValue)) {
        validate = "Input must be a number! Try again.";
        density = "";
        viscosity = "";
        diameter = "";
        nre = "";
    }
    else if (tValue == "" || mwValue == "" || dx1 == "" || dx2 == "" || dy1 == "" || dy2 == "" ||
        vx1 == "" || vx2 == "" || vy1 == "" || vy2 == "" || diameterValue == "" || velocityValue == "") {
        validate = "Input must not be empty! Try again.";
        density = "";
        viscosity = "";
        diameter = "";
        nre = "";
    }
    else {
        densityResult = (+dy1 + (+tValue - +dx1) * ((+dy2 - +dy1) / (+dx2 - +dx1))) * +mwValue;
        viscosityResult = (+vy1 + (+tValue - +vx1) * ((+vy2 - +vy1) / (+vx2 - +vx1))) * (0.000001);
        diameterResult = +diameterValue * (0.0254);
        nreResult = (+diameterResult * +velocityValue * +densityResult) / (+viscosityResult);
        validate = "";
        density = "ρ = " + densityResult;
        viscosity = "μ = " + viscosityResult;
        diameter = "D = " + diameterResult;
        nre = "Nre = " + nreResult;
        laminar = "Laminar - when Nre < 2300";
        transient = "Transient - when 2300 < Nre < 4000";
        turbulent= "Turbulent - when Nre > 4000";
    }
}
