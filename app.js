        // Toggle mobile menu
        document
            .getElementById("mobile-menu-toggle")
            .addEventListener("click", function () {
                document.getElementById("mobile-menu").classList.toggle("hidden");
            });

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
const modelContainer = document.getElementById("interactive-3d");

// Update the size of the renderer to fit the container
function updateRendererSize() {
  const rect = modelContainer.getBoundingClientRect();
  renderer.setSize(rect.width, rect.height);
}

// Call the updateRendererSize function initially and when the window is resized
updateRendererSize();
window.addEventListener("resize", updateRendererSize);

modelContainer.appendChild(renderer.domElement);

// Create a green box (or your desired 3D model) and add it to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green color
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Set the background color of the scene to black
renderer.setClearColor(0xFFFFFF); // Black color

// Set the initial camera position
camera.position.z = 5;

// Create an animation function
const animate = () => {
  requestAnimationFrame(animate);

  // Rotate the cube (or your 3D model)
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

// Start the animation
animate();

