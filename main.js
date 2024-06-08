document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('#scene');
  
    // Sky
    const sky = document.createElement('a-sky');
    sky.setAttribute('color', '#2c3e50');
    scene.appendChild(sky);
  
    // Ground
    const ground = document.createElement('a-plane');
    ground.setAttribute('position', '0 0 -5');
    ground.setAttribute('rotation', '-90 0 0');
    ground.setAttribute('width', '20');
    ground.setAttribute('height', '20');
    ground.setAttribute('color', '#7f8c8d');
    scene.appendChild(ground);
  
    // Road Model
    const road = document.createElement('a-entity');
    cat.setAttribute('gltf-model', 'url(assets/scene_road.gltf)');
    cat.setAttribute('position', '0 0 -4');
    cat.setAttribute('scale', '0.5 0.5 0.5');
    cat.setAttribute('property: position; to: 0 0 -6; dur: 5000; easing: easeInOutQuad; loop: true; dir: alternate');
    scene.appendChild(road);
  
    // Streetlights
    const streetlight1 = document.createElement('a-cylinder');
    streetlight1.setAttribute('position', '-1 3 -3');
    streetlight1.setAttribute('radius', '0.05');
    streetlight1.setAttribute('height', '6');
    streetlight1.setAttribute('color', '#d35400');
    scene.appendChild(streetlight1);
  
        const light1 = document.createElement('a-light');
    light1.setAttribute('type', 'point');
    light1.setAttribute('position', '-1 5 -3');
    light1.setAttribute('intensity', '2');
    light1.setAttribute('color', '#f1c40f');
    scene.appendChild(light1);
  
  
        // Cat Model
        const cat = document.createElement('a-entity');
        cat.setAttribute('gltf-model', 'url(assets/scene_cat.gltf)');
        cat.setAttribute('position', '0 0 -4');
        cat.setAttribute('scale', '0.5 0.5 0.5');
        cat.setAttribute('property: position; to: 0 0 -6; dur: 5000; easing: easeInOutQuad; loop: true; dir: alternate');
        scene.appendChild(cat);
  
      // Girl Model
      const girl = document.createElement('a-entity');
      cat.setAttribute('gltf-model', 'url(assets/scene_girl.gltf)');
      cat.setAttribute('position', '0 0 -4');
      cat.setAttribute('scale', '0.5 0.5 0.5');
      cat.setAttribute('property: position; to: 0 0 -6; dur: 5000; easing: easeInOutQuad; loop: true; dir: alternate');
      scene.appendChild(girl);

      // Bench Model
      const bench = document.createElement('a-entity');
      cat.setAttribute('gltf-model', 'url(assets/scene_bench.gltf)');
      cat.setAttribute('position', '0 0 -4');
      cat.setAttribute('scale', '0.5 0.5 0.5');
      cat.setAttribute('property: position; to: 0 0 -6; dur: 5000; easing: easeInOutQuad; loop: true; dir: alternate');
      scene.appendChild(bench);

      // Lamp Post Model
      const lamp = document.createElement('a-entity');
      cat.setAttribute('gltf-model', 'url(assets/scene_LAMP POST.gltf)');
      cat.setAttribute('position', '0 0 -4');
      cat.setAttribute('scale', '0.5 0.5 0.5');
      cat.setAttribute('property: position; to: 0 0 -6; dur: 5000; easing: easeInOutQuad; loop: true; dir: alternate');
      scene.appendChild(lamp);

  });
  