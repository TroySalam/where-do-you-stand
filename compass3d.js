/* ═══════════════════════════════════════════════
   3D POLITICAL COMPASS — Three.js
   X = Left ↔ Right (economy)
   Y = Libertarian ↔ Authoritarian (governance)
   Z = Restraint ↔ Expansionism (expansion)
   ═══════════════════════════════════════════════ */

let compass3d = null; // { scene, camera, renderer, controls, dot, animId }
let savedScores3d = null;

function showCompass2D() {
  document.getElementById('compass2dView').style.display = '';
  document.getElementById('compass3dView').style.display = 'none';
  document.getElementById('btn2d').classList.add('active');
  document.getElementById('btn3d').classList.remove('active');
  if (compass3d) {
    cancelAnimationFrame(compass3d.animId);
    compass3d.renderer.dispose();
    compass3d = null;
  }
}

function showCompass3D() {
  document.getElementById('compass2dView').style.display = 'none';
  document.getElementById('compass3dView').style.display = '';
  document.getElementById('btn2d').classList.remove('active');
  document.getElementById('btn3d').classList.add('active');
  if (savedScores3d) {
    initCompass3D(savedScores3d);
  }
}

function initCompass3D(scores) {
  savedScores3d = scores;
  const container = document.getElementById('compass3dContainer');

  // Clean up previous
  if (compass3d) {
    cancelAnimationFrame(compass3d.animId);
    compass3d.renderer.dispose();
    compass3d.controls.dispose();
    container.innerHTML = '';
    compass3d = null;
  }

  const w = Math.min(container.clientWidth || 380, 420);
  const h = w;

  // Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0b1120);

  // Camera
  const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
  camera.position.set(2.8, 2.2, 2.8);

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);
  renderer.domElement.style.borderRadius = '12px';

  // Controls
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enablePan = false;
  controls.minDistance = 2;
  controls.maxDistance = 7;
  controls.target.set(0, 0, 0);

  // ─── Build the 3D cube ───
  const S = 1; // half-size of the cube

  // 8 octant semi-transparent boxes
  const octantColors = [
    { pos: [-0.5, 0.5, -0.5], color: 0xEF4444 },  // Auth-Left-Restraint (red)
    { pos: [0.5, 0.5, -0.5],  color: 0x3B82F6 },   // Auth-Right-Restraint (blue)
    { pos: [-0.5, -0.5, -0.5], color: 0x22C55E },   // Lib-Left-Restraint (green)
    { pos: [0.5, -0.5, -0.5], color: 0xA855F7 },    // Lib-Right-Restraint (purple)
    { pos: [-0.5, 0.5, 0.5],  color: 0xF97316 },    // Auth-Left-Expansion (orange)
    { pos: [0.5, 0.5, 0.5],   color: 0x6366F1 },    // Auth-Right-Expansion (indigo)
    { pos: [-0.5, -0.5, 0.5], color: 0x14B8A6 },    // Lib-Left-Expansion (teal)
    { pos: [0.5, -0.5, 0.5],  color: 0xF472B6 },    // Lib-Right-Expansion (pink)
  ];

  octantColors.forEach(({ pos, color }) => {
    const geo = new THREE.BoxGeometry(S, S, S);
    const mat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(pos[0] * S, pos[1] * S, pos[2] * S);
    scene.add(mesh);
  });

  // Wireframe cube
  const cubeGeo = new THREE.BoxGeometry(S * 2, S * 2, S * 2);
  const cubeEdges = new THREE.EdgesGeometry(cubeGeo);
  const cubeLine = new THREE.LineSegments(cubeEdges, new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.12,
  }));
  scene.add(cubeLine);

  // Center axes
  const axisMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 });
  // X axis (Left-Right)
  addLine(scene, [-S, 0, 0], [S, 0, 0], axisMat);
  // Y axis (Lib-Auth)
  addLine(scene, [0, -S, 0], [0, S, 0], axisMat);
  // Z axis (Restraint-Expansion)
  addLine(scene, [0, 0, -S], [0, 0, S], axisMat);

  // Grid lines on each face (subtle)
  const gridMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.04 });
  for (let t = -0.5; t <= 0.5; t += 0.5) {
    if (t === 0) continue;
    const v = t * S * 2;
    // XY plane grids at Z=0
    addLine(scene, [v, -S, 0], [v, S, 0], gridMat);
    addLine(scene, [-S, v, 0], [S, v, 0], gridMat);
  }

  // ─── Axis labels using sprites ───
  const labels = [
    { text: 'Right', pos: [S + 0.2, 0, 0], color: '#8B5CF6' },
    { text: 'Left', pos: [-S - 0.2, 0, 0], color: '#8B5CF6' },
    { text: 'Authoritarian', pos: [0, S + 0.2, 0], color: '#F59E0B' },
    { text: 'Libertarian', pos: [0, -S - 0.2, 0], color: '#F59E0B' },
    { text: 'Expansionism', pos: [0, 0, S + 0.25], color: '#F472B6' },
    { text: 'Restraint', pos: [0, 0, -S - 0.25], color: '#F472B6' },
  ];

  labels.forEach(({ text, pos, color }) => {
    const sprite = makeTextSprite(text, color);
    sprite.position.set(pos[0], pos[1], pos[2]);
    scene.add(sprite);
  });

  // ─── User's dot ───
  // Map scores to 3D coordinates (-1 to 1)
  const ux = ((scores.economy / 100) * 2 - 1) * S;    // 0=left(-1), 100=right(+1)
  const uy = ((scores.governance / 100) * 2 - 1) * S;  // 0=lib(-1), 100=auth(+1)
  const uz = ((1 - scores.expansion / 100) * 2 - 1) * S; // 0=expansion(+1), 100=restraint(-1)

  // Glow sphere
  const glowGeo = new THREE.SphereGeometry(0.12, 32, 32);
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0x8B5CF6,
    transparent: true,
    opacity: 0.4,
  });
  const glow = new THREE.Mesh(glowGeo, glowMat);
  glow.position.set(ux, uy, uz);
  scene.add(glow);

  // Core dot
  const dotGeo = new THREE.SphereGeometry(0.06, 32, 32);
  const dotMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const dot = new THREE.Mesh(dotGeo, dotMat);
  dot.position.set(ux, uy, uz);
  scene.add(dot);

  // Projection lines from dot to each face
  const projMat = new THREE.LineDashedMaterial({
    color: 0x8B5CF6,
    transparent: true,
    opacity: 0.25,
    dashSize: 0.05,
    gapSize: 0.05,
  });
  addDashedLine(scene, [ux, uy, uz], [ux, uy, 0], projMat);
  addDashedLine(scene, [ux, uy, uz], [ux, 0, uz], projMat);
  addDashedLine(scene, [ux, uy, uz], [0, uy, uz], projMat);

  // Coordinates text
  const ecoLabel = scores.economy < 50 ? 'Left' : scores.economy > 50 ? 'Right' : 'Centre';
  const govLabel = scores.governance < 50 ? 'Libertarian' : scores.governance > 50 ? 'Authoritarian' : 'Centre';
  const expLabel = scores.expansion < 50 ? 'Expansionist' : scores.expansion > 50 ? 'Restrained' : 'Balanced';
  const ecoVal = Math.abs(scores.economy - 50) * 2;
  const govVal = Math.abs(scores.governance - 50) * 2;
  const expVal = Math.abs(scores.expansion - 50) * 2;
  document.getElementById('compassCoords3d').textContent =
    `${ecoVal.toFixed(0)}% ${ecoLabel}  ·  ${govVal.toFixed(0)}% ${govLabel}  ·  ${expVal.toFixed(0)}% ${expLabel}`;

  // Ambient light (not really needed for MeshBasic but keeps consistent)
  scene.add(new THREE.AmbientLight(0xffffff, 1));

  // ─── Animation loop ───
  function animate() {
    const id = requestAnimationFrame(animate);
    controls.update();

    // Pulse the glow
    const t = Date.now() * 0.003;
    glow.scale.setScalar(1 + Math.sin(t) * 0.15);
    glow.material.opacity = 0.3 + Math.sin(t) * 0.1;

    renderer.render(scene, camera);
    compass3d.animId = id;
  }

  compass3d = { scene, camera, renderer, controls, dot, animId: 0 };
  animate();

  // Resize handler
  const resizeHandler = () => {
    const newW = Math.min(container.clientWidth || 380, 420);
    const newH = newW;
    camera.aspect = newW / newH;
    camera.updateProjectionMatrix();
    renderer.setSize(newW, newH);
  };
  window.addEventListener('resize', resizeHandler);
}

// ─── Helpers ───

function addLine(scene, from, to, material) {
  const geo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(...from),
    new THREE.Vector3(...to),
  ]);
  scene.add(new THREE.Line(geo, material));
}

function addDashedLine(scene, from, to, material) {
  const geo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(...from),
    new THREE.Vector3(...to),
  ]);
  const line = new THREE.Line(geo, material);
  line.computeLineDistances();
  scene.add(line);
}

function makeTextSprite(text, color) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 256;
  canvas.height = 64;

  ctx.font = 'bold 28px Inter, sans-serif';
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 128, 32);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;

  const mat = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
  });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(1, 0.25, 1);
  return sprite;
}
