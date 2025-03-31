let campus = null;
let building = null;

const app = new THING.App({
  url: "../campus/campus.gltf",
  complete: (e) => {
    console.log("123");
    console.log(e);
    
    campus = e.object;
    building = app.query(".Building")[0];
    createMarkerForDevice();
  },
});

function createMarker(obj) {
  const makerImg = new THING.ImageTexture("./images/mar_sensor.png");
  new THING.Marker({
    name: "car_marker",
    parent: obj,
    scale: [12, 12, 12],
    localPosition: [0, 3, 0],
    alwayOnTop: true,
    style: {
      image: makerImg,
    },
    visible: true,
  });
}

function createMarkerForDevice() {
  console.log("createMarkerForDevice");

  const cars = app.query("tags:and(car)");
  cars.forEach((device) => {
    createMarker(device);
    console.log(device);
  });
}
