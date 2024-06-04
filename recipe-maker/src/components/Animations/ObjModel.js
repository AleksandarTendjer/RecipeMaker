import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

import { useFrame } from '@react-three/fiber';

const ObjModel = ({ objectUrl, position, materialUrl }) => {
  const group = useRef();
  const materials = useLoader(MTLLoader, materialUrl);
  const obj = useLoader(OBJLoader, objectUrl, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={group} object={obj} position={position} />;
};

export default ObjModel;
