export default class MeshGenerator {
    constructor(height, width, scene) {
        this.height = height;
        this.width = width;
        this.scene = scene;
    }

    generate() {
        const widthSegments = 100; // Number of segments along the width
        const heightSegments = 100; // Number of segments along the height
        const geometry = new THREE.PlaneGeometry(100, 100, widthSegments, heightSegments);

        for (let i = 0; i < geometry.attributes.position.count; i++) {
            const z = Math.random() * 10; // Replace this with any custom function to generate heights
            geometry.attributes.position.setZ(i, z);
        }

        // Update the geometry to reflect the changes
        geometry.attributes.position.needsUpdate = true;
        geometry.computeVertexNormals(); // Ensure correct lighting

        // Create the material (Basic material with color)
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

        // Create the mesh
        const terrain = new THREE.Mesh(geometry, material);

        return terrain;
    }
}