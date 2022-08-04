import ThreeGlobe from "three-globe";
import { WebGLRenderer, Scene } from "three";
import {
  PerspectiveCamera,
  AmbientLight,
  DirectionalLight,
  Color,
  Fog,
  // AxesHelper,
  // DirectionalLightHelper,
  // CameraHelper,
  PointLight,
  SphereGeometry,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import countries from "./files/globe-data-min.json";
import travelHistory from "./files/my-flights.json";

var renderer, camera, scene, controls;
let mouseX = 0;
let mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
var Globe;

const pointsData = [
  {
    name: "London, UK",
    lat: 51.5286417,
    lng: -0.1015987,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Paris, France",
    lat: 48.8588548,
    lng: 2.347035,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Jal-El-Dib, Lebanon",
    lat: 33.9088451,
    lng: 35.5819893,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Dubai, UAE",
    lat: 25.0760224,
    lng: 55.227488,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Jordan",
    lat: 31.2798856,
    lng: 37.1226271,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Iraq",
    lat: 33.2209264,
    lng: 43.714387,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Morocco",
    lat: 31.8008346,
    lng: 7.150688,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Alger, Algeria",
    lat: 36.7390184,
    lng: 3.1393309,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Tunis, Tunisia",
    lat: 36.8384725,
    lng: 10.1705345,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Tripoli, Libya",
    lat: 32.8829369,
    lng: 13.1883359,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Tombouctou, Mali",
    lat: 16.7713836,
    lng: -3.0079794,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Lomé, Togo",
    lat: 6.1823217,
    lng: 1.2466908,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Niamey, Niger",
    lat: 13.5127689,
    lng: 2.1190327,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "N'Djamena, Chad",
    lat: 12.1202182,
    lng: 15.057459,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Dakar, Senegal",
    lat: 14.7110245,
    lng: -17.465825,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Ouagadougou, Burkina Faso",
    lat: 12.3584921,
    lng: -1.5368433,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Yamoussoukro, Ivory Coast",
    lat: 6.816067,
    lng: -5.2811359,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Accra, Ghana",
    lat: 5.5912087,
    lng: -0.1797295,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Porto Novo, Benin",
    lat: 6.4959514,
    lng: 2.6222992,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Lagos, Nigeria",
    lat: 6.5480551,
    lng: 3.2839596,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Yaoundé, Cameroon",
    lat: 3.8303052,
    lng: 11.5104532,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Malabo, Equatorial Guinea",
    lat: 3.755447,
    lng: 8.7416777,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Libreville, Gabon",
    lat: 0.4112103,
    lng: 9.4346296,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Brazzaville, Congo",
    lat: -4.2471951,
    lng: 15.2272225,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Kinshasa, Democratic Republic of Congo",
    lat: -4.4013038,
    lng: 15.3227446,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Kampala, Uganda",
    lat: 0.3130294,
    lng: 32.5991254,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Nairobi, Kenya",
    lat: -1.303209,
    lng: 36.8473969,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Kigali, Rwanda",
    lat: -1.9297706,
    lng: 30.1272445,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Dodoma, Tanzania",
    lat: -6.1729476,
    lng: 35.7731502,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Luanda, Angola",
    lat: -8.8535324,
    lng: 13.2841045,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Windhoek, Namibia",
    lat: -22.5637563,
    lng: 17.062226,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Gaborone, Botswana",
    lat: -24.6093072,
    lng: 25.9305045,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Pretoria, South Africa",
    lat: -25.75865,
    lng: 28.1979505,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Sainte-Marie, Reunion",
    lat: -20.946304,
    lng: 55.52336,
    size: 0.1,
    color: "#eeff02",
  },
  {
    name: "Port Louis, Mauritius",
    lat: -20.1629811,
    lng: 57.4967765,
    size: 0.1,
    color: "#eeff02",
  },
]

init();
initGlobe();
onWindowResize();
animate();

// SECTION Initializing core ThreeJS elements
function init() {
  // Initialize renderer
  renderer = new WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor( 0x000000, 0 );
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth/2, window.innerHeight/2);
  // renderer.outputEncoding = THREE.sRGBEncoding;
  setTimeout(() => {
    document.getElementById("globe-container").appendChild(renderer.domElement);
  }, 1000)

  // Initialize scene, light
  scene = new Scene();
  scene.add(new AmbientLight(0xbbbbbb, 0.3));

  // Initialize camera, light
  camera = new PerspectiveCamera();
  camera.aspect = window.innerWidth/2 / 400;
  camera.updateProjectionMatrix();

  var dLight = new DirectionalLight(0xffffff, 0.8);
  dLight.position.set(-800, 2000, 400);
  camera.add(dLight);

  var dLight1 = new DirectionalLight(0x7982f6, 0.5);
  dLight1.position.set(-200, 500, 200);
  camera.add(dLight1);

  var dLight2 = new PointLight(0x8566cc, 0.5);
  dLight2.position.set(-200, 500, 200);
  camera.add(dLight2);

  var dLight3 = new DirectionalLight(0x7982f6, 0.5);
  dLight3.position.set(200, -500, 200);
  camera.add(dLight3);

  var pLight4 = new PointLight(0xffffff, 0.5);
  pLight4.position.set(200, -500, 200);
  camera.add(pLight4);

  camera.position.z = 400;
  camera.position.x = 0;
  camera.position.y = 150;

  //PAris
// camera.position.z = 110;
// camera.position.x = -35;
// camera.position.y = 117;


  scene.add(camera);

  // Additional effects
//   scene.fog = new Fog(0x535ef3, 400, 2000);

  // Helpers
  // const axesHelper = new AxesHelper(800);
  // scene.add(axesHelper);
  // var helper = new DirectionalLightHelper(dLight);
  // scene.add(helper);
  // var helperCamera = new CameraHelper(dLight.shadow.camera);
  // scene.add(helperCamera);

  // Initialize controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = false;
  controls.dynamicDampingFactor = 0.01;
  controls.enablePan = false;
  controls.minDistance = 100;
  controls.maxDistance = 400;
  controls.rotateSpeed = 0.8;
  controls.zoomSpeed = 1;
  controls.autoRotate = false;

//   controls.minPolarAngle = Math.PI / 3.5;
//   controls.maxPolarAngle = Math.PI - Math.PI / 3;

  window.addEventListener("resize", onWindowResize, false);
  document.addEventListener("mousemove", onMouseMove);

}

// SECTION Globe
function initGlobe() {
  // Initialize the Globe
  Globe = new ThreeGlobe({
    waitForGlobeReady: true,
    animateIn: true,
  })
    .hexPolygonsData(countries.features)
    .hexPolygonResolution(3)
    .hexPolygonMargin(0.6)
    .showAtmosphere(true)
    .atmosphereColor("#3a228a")
    .atmosphereAltitude(0.2)
    .hexPolygonColor((e) => {
      if (
        ["GBR", "TGO", "MLI", "ZAF", "BFA", "KEN", "GHA", "SEN", "TCD", "COD", "COG", "GAB", "MUS", "REU", "AGO", "LBN", "ARE", "TZA", "CIV", "FRA", "CMR", "UGA", "JOR", "IRQ", "DZA", "NER", "NGA", "BEN"].includes(
          e.properties.ISO_A3
        )
      ) {
        return "#e0b95f";
      } else if (
        ["TUN", "LBY", "MAR", "BWA", "ZMB", "MOZ", "NAM", "CAF", "GNQ", "LBR", "SLE", "ETH", "MDG"].includes(
          e.properties.ISO_A3
        )
      ){return "#61a567";}else return "#8c8c8c";
    });

  // NOTE Arc animations are followed after the globe enters the scene
  setTimeout(() => {
    Globe.arcsData(travelHistory.flights)
    .arcColor((e) => {
        return e.status ? "#f4da6c" : "#f4da6c";
      })
      .arcAltitude((e) => {
        return e.arcAlt;
      })
      .arcStroke((e) => {
        return e.status ? 0.5 : 0.3;
      })
      .arcDashLength(0.9)
      .arcDashGap(4)
      .arcDashAnimateTime(1000)
      .arcsTransitionDuration(1000)
      .arcDashInitialGap((e) => e.order * 1)
      // .labelsData(airportHistory.airports)
      // .labelColor(() => "#ffcb21")
      // .labelDotOrientation((e) => {
      //   return e.text === "ALA" ? "top" : "right";
      // })
      // .labelDotRadius(0.3)
      // .labelSize((e) => e.size)
      // .labelText("city")
      // .labelResolution(6)
      // .labelAltitude(0.01)
      .pointsData(pointsData)
      .pointColor(() => "#ffffff")
      .pointsMerge(true)
      .pointAltitude(0.07)
      .pointRadius(0.2);
  }, 1000);

  Globe.rotateY(-Math.PI * (1 / 9));
  
  const globeMaterial = Globe.globeMaterial();
  globeMaterial.color = new Color(0x30728b);
//   globeMaterial.emissiveIntensity = 1;
  globeMaterial.shininess = 0;

  // NOTE Cool stuff
//   globeMaterial.wireframe = true;

  scene.add(Globe);
}

function onMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
  // console.log("x: " + mouseX + " y: " + mouseY);
}

function onWindowResize() {
if(window.innerWidth > 950){
    camera.aspect = window.innerWidth / (window.innerHeight*2);
    camera.updateProjectionMatrix();
    windowHalfX = window.innerWidth / 1.5;
    windowHalfY = window.innerHeight / 1.5;
    renderer.setSize(window.innerWidth/2, window.innerHeight);
}else{
    camera.aspect = window.innerWidth / window.innerHeight*2;
    camera.updateProjectionMatrix();
    windowHalfX = window.innerWidth;
    windowHalfY = window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight*(1/2));
}
  
}

function animate() {
//   camera.position.x +=
//     Math.abs(mouseX) <= windowHalfX / 2
//       ? (mouseX / 2 - camera.position.x) * 0.005
//       : 0;
//   camera.position.y += (-mouseY / 2 - camera.position.y) * 0.005;
//   camera.lookAt(scene.position);
//   controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

// renderer.getContext('2d').drawImage(threeCanvas, 40, 40, 960, 960, 0, 0, 1200, 1200);
