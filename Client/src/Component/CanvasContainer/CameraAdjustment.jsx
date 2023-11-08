import React, {Suspense, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Canvas } from '@react-three/fiber';
import BoxModel from './BoxModel';
import { CameraControls, ContactShadows, Environment, OrbitControls, useProgress, Html } from '@react-three/drei';
import * as THREE from 'three';

const CameraAdjustment = () => {
  const cameraControlRef = useRef();
  const orbControl = useRef();

  function Loader() {
    const { progress } = useProgress()
    return (
      <Html center>
        <h6 style={{ color: '#15807a' }}>{progress.toFixed(0)} % loaded</h6>
        <div className="progress" style={{ width: '10rem' }}>
          <div 
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow={progress.toFixed(0)}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{width: `${progress.toFixed(0)}%`, background: '#15807a'}}
            ></div>
        </div>
      </Html>

    )
  }

  const selectedSide = useSelector((state) => {
    return state.sideChanged
  });

  const boxScale = useSelector((state) => {
    return state.boxScaleValue
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

  // const centerCameraOnBox = (boundingBoxCenter) => {
  //   const controls = cameraControlRef.current;

  //   if (controls && boundingBoxCenter) {
  //     orbControl.current.target.set(0.0, 0.0, 5.0);
  //     // orbControl.current.reset();
  //     orbControl.current.update();
  //     console.log(orbControl.current);
  //   }
  // };

  // useEffect(() => {
  //   const handleBoundingBoxCenter = (event) => {
  //     const boundingBoxCenter = event.detail;
  //     centerCameraOnBox(boundingBoxCenter);
  //   };

  //   document.addEventListener('boundingBoxCenter', handleBoundingBoxCenter);

  //   return () => {
  //     document.removeEventListener('boundingBoxCenter', handleBoundingBoxCenter);
  //   };
  // }, []);

  return (
    <>
      <Canvas shadows camera={{ fov: 75 }}>
      <Suspense fallback={<Loader />}>
        <CameraControls ref={cameraControlRef} />
        <ambientLight intensity={0.7} />
        <spotLight intensity={0.4} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <BoxModel  />
        <Environment preset="city" />
        <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
        <OrbitControls ref={orbControl} enableZoom={true} enableRotate={true} enablePan={true} /> 
      </Suspense>
      </Canvas>

      {/*<button type="button" onClick={centerCameraOnBox}>View In</button> */}
    </>
  );
};

export default CameraAdjustment;

// import React, {Suspense, useEffect, useRef, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Canvas } from '@react-three/fiber';
// import BoxModel from './BoxModel';
// import { CameraControls, ContactShadows, Environment, OrbitControls, useProgress, Html, Bounds } from '@react-three/drei';
// import * as THREE from 'three';

// const CameraAdjustment = () => {
//   const cameraControlRef = useRef();
//   const boxRef = useRef();
//   const orbControl = useRef();

//   function Loader() {
//     const { progress } = useProgress()
//     return (
//       <Html center>
//         <h6 style={{ color: '#15807a' }}>{progress.toFixed(0)} % loaded</h6>
//         <div className="progress" style={{ width: '10rem' }}>
//           <div 
//             className="progress-bar progress-bar-striped progress-bar-animated"
//             role="progressbar"
//             aria-valuenow={progress.toFixed(0)}
//             aria-valuemin="0"
//             aria-valuemax="100"
//             style={{width: `${progress.toFixed(0)}%`, background: '#15807a'}}
//             ></div>
//         </div>
//       </Html>

//     )
//   }

//   const selectedSide = useSelector((state) => {
//     return state.sideChanged
//   });

//   const boxScale = useSelector((state) => {
//     return state.boxScaleValue
//   });

//   useEffect(() => {
//     const cameraControls = cameraControlRef.current;

//     if (!cameraControls) return;

//     if (selectedSide === 'front') {
//       cameraControls.rotateTo(0, Math.PI / 2);
//     } else if (selectedSide === 'left') {
//       cameraControls.rotateTo(0, Math.PI / 2);
//       cameraControls.rotateTo(-Math.PI / 2, Math.PI / 2);
//     } else if (selectedSide === 'right') {
//       cameraControls.rotateTo(0, Math.PI / 2);
//       cameraControls.rotateTo(Math.PI / 2, Math.PI / 2);
//     } else if (selectedSide === 'back') {
//       cameraControls.rotateTo(0, Math.PI / 2);
//       cameraControls.rotateTo(Math.PI, Math.PI / 2);
//     } else if (selectedSide === 'bottom') {
//       cameraControls.rotateTo(0, Math.PI / 2);
//       cameraControls.rotateTo(0, Math.PI);
//     }
//   }, [selectedSide]);

//   const [boxSize, setBoxSize] = useState([1, 1, 1]); // Initialize with default size or actual size

//   const centerCameraOnBox = () => {
//     const controls = cameraControlRef.current;

//     if (controls && boxSize) {
//       const distance = Math.max(...boxSize) * 2; // Assuming boxSize is an array [width, height, depth]
//       controls._target.set(0, 0, 0); // Set the target to the center
//       controls._minDistance = distance / 2; // Adjust minDistance to fit the object in view
//       controls._maxDistance = distance * 5; // Adjust maxDistance for better control
//       controls.update(); // Update the controls

//       // Optionally, you can set the orbital control's position to the calculated distance
//       orbControl.current.object.position.set(0, 0, distance);
//       orbControl.current.target.copy(controls._target);
//       orbControl.current.update();
//     }
//   };

//   const handleBoundingBoxCenter = (event) => {
//     const boundingBoxCenter = event.detail;
//     setBoxSize([boundingBoxCenter.x, boundingBoxCenter.y, boundingBoxCenter.z]);
//   };

//   useEffect(() => {
//     document.addEventListener('boundingBoxCenter', handleBoundingBoxCenter);

//     return () => {
//       document.removeEventListener('boundingBoxCenter', handleBoundingBoxCenter);
//     };
//   }, []);

//   return (
//     <>
//       <Canvas shadows camera={{ fov: 114, near: 0.1, far: 1000 }}>
//       <Suspense fallback={<Loader />}>
//         <Bounds>
//           <CameraControls ref={cameraControlRef} />
//           <ambientLight intensity={0.7} />
//           <spotLight intensity={0.4} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
//           <BoxModel ref={boxRef} />
//           <Environment preset="city" />
//           <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
//           </Bounds>
//         </Suspense>
//         <OrbitControls ref={orbControl} target={boxRef.position} enableZoom={true} enableRotate={true} enablePan={true} /> 
//       </Canvas>

//       <button type="button" onClick={centerCameraOnBox}>View In</button> 
//     </>
//   );
// };

// export default CameraAdjustment;