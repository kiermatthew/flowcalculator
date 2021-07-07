let mwValue, tValue, dx1, dx2, dy1, dy2, vx1, vx2, vy1, vy2, diameterValue, velocityValue;
let validationText, densityResult, viscosityResult, nreResult, diameterResult;
let validate,density,viscosity,diameter,nre,laminar,transient,turbulent,result;

function calculate() {
    //connecting js to html 
    validate = document.getElementById("validation");
    density = document.getElementById("density");
    viscosity = document.getElementById("viscosity");
    diameter = document.getElementById("diameter");
    nre = document.getElementById("nre");
    result = document.getElementById("result");
    laminar = document.getElementById("laminar");
    transient = document.getElementById("transient");
    turbulent = document.getElementById("turbulent");
    mwValue = document.getElementById("mwValue").value;
    tValue = document.getElementById("tValue").value;
    dx1 = document.getElementById("dx1").value;
    dx2 = document.getElementById("dx2").value;
    dy1 = document.getElementById("dy1").value;
    dy2 = document.getElementById("dy2").value;
    vx1 = document.getElementById("vx1").value;
    vx2 = document.getElementById("vx2").value;
    vy1 = document.getElementById("vy1").value;
    vy2 = document.getElementById("vy2").value;
    diameterValue = document.getElementById("diameterValue").value;
    velocityValue = document.getElementById("velocityValue").value;

    // computations
    let getDensity = () => (+dy1 + (+tValue - +dx1) * ((+dy2 - +dy1) / (+dx2 - +dx1))) * +mwValue;
    let getViscosity = () => (+vy1 + (+tValue - +vx1) * ((+vy2 - +vy1) / (+vx2 - +vx1))) * (0.000001);
    let getDiameter = () => +diameterValue * (0.0254);
    let getNre = () => (getDiameter() * +velocityValue * +getDensity()) / (+getViscosity());

    //validation and answer output
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
        result.innerHTML = "Result";
        density.innerHTML = "ρ = " + getDensity();
        viscosity.innerHTML = "μ = " + getViscosity();
        diameter.innerHTML = "D = " + getDiameter();
        nre.innerHTML = "Nre = " + getNre();
        laminar.innerHTML = "Laminar - when Nre < 2300";
        transient.innerHTML = "Transient - when 2300 < Nre < 4000";
        turbulent.innerHTML = "Turbulent - when Nre > 4000";
    }
}
