import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useScroll, useTransform, useSpring } from "framer-motion";
import { motion, useInView } from "framer-motion";
import Loader from "./Loader";

const TechModel = ({ zoom }) => {
  const glb = useGLTF("/3d/MosquitoInAmber.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      const z = zoom.get();
      modelRef.current.scale.set(z, z, z);
      modelRef.current.rotation.y += 0.005;
    }
  });

  return <primitive object={glb.scene} ref={modelRef} position={[0, 0, 0]} />;
};

const SceneCanvas = () => {
  const sectionRef = useRef();
  const inView = useInView(sectionRef, { margin: "-50% 0px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const zoom = useSpring(useTransform(scrollYProgress, [1, 0], [10, 25]), {
    stiffness: 100,
    damping: 20,
  });

  return (
    <motion.div
      ref={sectionRef}
      className="w-full h-[500px] md:h-[600px] cursor-grab active:cursor-grabbing"
    >
      <Suspense fallback={<Loader />}>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[3, 3, 3]} intensity={1.5} />
          <TechModel zoom={zoom} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
        </Canvas>
      </Suspense>
    </motion.div>
  );
};

export default SceneCanvas;
