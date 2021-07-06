let mwValue, tValue, dx1, dx2, dy1, dy2, vx1, vx2, vy1, vy2, diameterValue, velocityValue;
let validationText, densityResult, viscosityResult, nreResult, diameterResult;
let validate,density,viscosity,diameter,nre,laminar,transient,turbulent;

function calculate() {
    validate = document.getElementById("validation");
    density = document.getElementById("density");
    viscosity = document.getElementById("viscosity");
    diameter = document.getElementById("diameter");
    nre = document.getElementById("nre");
    laminar = document.getElementById("laminar");
    transient = document.getElementById("transient");
    turbulent = document.getElementById("turbulent");

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

    let getDensity = () => (+dy1 + (+tValue - +dx1) * ((+dy2 - +dy1) / (+dx2 - +dx1))) * +mwValue;
    let getViscosity = () => (+vy1 + (+tValue - +vx1) * ((+vy2 - +vy1) / (+vx2 - +vx1))) * (0.000001);
    let getDiameter = () => +diameterValue * (0.0254);
    let getNre = () => (getDiameter() * +velocityValue * +getDensity()) / (+getViscosity());

/*
)

*/

    if (isNaN(tValue || mwValue || dx1 || dx2 || dy1 || dy2 || vx1 || vx2 || vy1 || vy2 || diameterValue || velocityValue)) {
        validate.innerHTML = "Input must be a number! Try again.";
        density.innerHTML = "";
        viscosity.innerHTML = "";
        diameter.innerHTML = "";
        nre.innerHTML = "";
    }
    else if ((tValue || mwValue || dx1 || dx2 || dy1 || dy2  || vx1 || vx2  || vy1 || vy2 || diameterValue  || velocityValue ) == ""){
        validate.innerHTML = "Input must not be empty! Try again.";
        density.innerHTML = "";
        viscosity.innerHTML = "";
        diameter.innerHTML = "";
        nre.innerHTML = "";
    }
    else {
        validate.innerHTML = "";
        density.innerHTML = "ρ = " + getDensity();
        viscosity.innerHTML = "μ = " + getViscosity();
        diameter.innerHTML = "D = " + getDiameter();
        nre.innerHTML = "Nre = " + getNre();
        laminar.innerHTML = "Laminar - when Nre < 2300";
        transient.innerHTML = "Transient - when 2300 < Nre < 4000";
        turbulent.innerHTML = "Turbulent - when Nre > 4000";
    }
}
