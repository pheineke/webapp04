import MeshGenerator from './world_generator.js';

var canvas = document.getElementById('game-canvas');



// Erstelle die Szene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(50, 50, 50).normalize();
scene.add(light);


var meshGenerator = new MeshGenerator(100,100, scene);
scene.add(meshGenerator.generate());

// // Erstelle ein Würfeln (Mesh)
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
// // Drehung des Würfels
// cube.rotation.x += 0.01;
// cube.rotation.y += 0.01;

// Positioniere die Kamera
camera.position.z = 50;

// Animationsfunktion
function animate() {
    requestAnimationFrame(animate);

    // Rendern der Szene
    renderer.render(scene, camera);
}

animate();