import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Canvas } from '@react-three/fiber';
import BoxModel from './BoxModel';
import { CameraControls, ContactShadows, Environment, OrbitControls } from '@react-three/drei';

const CameraAdjustment = () => {
  const cameraControlRef = useRef();

  const selectedSide = useSelector((state) => {
    return state.sideChanged
});

  useEffect(() => {
    const cameraControls = cameraControlRef.current;

    if (!cameraControls) return;

    if (selectedSide === 'front') {
      cameraControls.rotateTo(0, Math.PI / 2);
    } else if (selectedSide === 'left') {
      cameraControls.rotateTo(0, Math.PI / 2);
      cameraControls.rotateTo(-Math.PI / 2, Math.PI / 2);
    } else if (selectedSide === 'right') {
      cameraControls.rotateTo(0, Math.PI / 2);
      cameraControls.rotateTo(Math.PI / 2, Math.PI / 2);
    } else if (selectedSide === 'back') {
      cameraControls.rotateTo(0, Math.PI / 2);
      cameraControls.rotateTo(Math.PI, Math.PI / 2);
    } else if (selectedSide === 'bottom') {
      cameraControls.rotateTo(0, Math.PI / 2);
      cameraControls.rotateTo(0, Math.PI);
    }
  }, [selectedSide]);

  // const dimenstionsValue = useSelector((state)=>{
  //   return state.sizeChanged
  // });

  // const [dimensionAvg, setDimenstionAvg ] = useState(5.0);

  // useEffect(() => {
  //   const avg = Math.round((dimenstionsValue.length + dimenstionsValue.width + dimenstionsValue.depth) / 3)
  //   setDimenstionAvg(avg)
  //   console.log(dimensionAvg);
  // }, [dimenstionsValue])
  

  return (
    <>
      <Canvas shadows camera={{ fov: 90 }}>
        <CameraControls ref={cameraControlRef} />
        <ambientLight intensity={0.7} />
        <spotLight intensity={0.4} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <BoxModel />
        <Environment preset="city" />
        <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
        <OrbitControls enableZoom={true} enableRotate={true} enablePan={true} />
      </Canvas>
    </>
  );
};

export default CameraAdjustment;
