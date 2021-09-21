//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
        speedOfRoation: { type: "number", default: 0 }
    },
    init: function () {
        window.addEventListener("keydown", (e) => {
            if (e.key === "ArrowRight") {
                if (this.data.speedOfRoation < 0.1) {
                    this.data.speedOfRoation += 0.01;
                }
            }
            if (e.key === "ArrowLeft") {
                if (this.data.speedOfRoation > -0.1) {
                    this.data.speedOfRoation -= 0.01;
                }
            }
        });
    },
    tick: function () {
        var mapRotation = this.el.getAttribute("rotation");

        mapRotation.y += this.data.speedOfRoation;

        this.el.setAttribute("rotation", {
            x: mapRotation.x,
            y: mapRotation.y,
            z: mapRotation.z
        });
    }
});
AFRAME.registerComponent("rotateplane", {
    schema: {
        speedOfRoation: { type: "number", default: 0 },
        speedofAscend: { type: "number", default: 0 }
    },
    init: function () {
        window.addEventListener("keydown", (e) => {
            this.data.speedOfRoation = this.el.getAttribute("rotation")
            this.data.speedofAscend = this.el.getAttribute("position")
            var planerotation = this.data.speedOfRoation
            var planeposition = this.data.speedofAscend
            if (e.key === "ArrowRight") {
                if (planerotation.x < 10) {
                    planerotation.x += 0.5;
                    this.el.setAttribute("rotation", planerotation)
                }
            }
            if (e.key === "ArrowLeft") {
                if (planerotation.x > -10) {
                    planerotation.x -= 0.5
                    this.el.setAttribute("rotation", planerotation)
                }
            }
            if (e.key === "ArrowUp") {
                if (planerotation.z < 20) {
                    planerotation.z += 0.5;
                    this.el.setAttribute("rotation", planerotation)
                }
                if (planeposition.y < 2) {
                    planeposition.y += 0.01;
                    this.el.setAttribute("position", planeposition)
                }
            }
            if (e.key === "ArrowDown") {
                if (planerotation.z > -10) {
                    planerotation.z -= 0.5
                    this.el.setAttribute("rotation", planerotation)
                }
                if (planeposition.y > -2) {
                    planeposition.y -= 0.01;
                    this.el.setAttribute("position", planeposition)
                }
            }
        });
    },
})
