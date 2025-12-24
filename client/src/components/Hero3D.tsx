import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { OrbitControls, Sphere, Icosahedron, MeshDistortMaterial, Torus } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import * as THREE from "three";

function DataParticles() {
  const particles = useRef<THREE.Points>(null);
  const [positions] = useState(() => {
    const pos = new Float32Array(300 * 3);
    for (let i = 0; i < 300 * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 10;
      pos[i + 1] = (Math.random() - 0.5) * 10;
      pos[i + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  });

  useFrame(() => {
    if (particles.current) {
      particles.current.rotation.x += 0.0003;
      particles.current.rotation.y += 0.0005;
    }
  });

  return (
    <points ref={particles}>
      <bufferGeometry attach="geometry">
        <bufferAttribute attach="attributes-position" count={300} array={positions} itemSize={3} args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial attach="material" size={0.1} color="#5EEACA" sizeAttenuation />
    </points>
  );
}

function AnimatedDataViz() {
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.x += 0.0002;
      group.current.rotation.y += 0.0003;
    }
  });

  return (
    <group ref={group}>
      <Icosahedron args={[2, 4]} position={[0, 0, 0]} scale={1.2}>
        <MeshDistortMaterial
          color="#5EEACA"
          attach="material"
          distort={0.3}
          speed={1.2}
          roughness={0.3}
          metalness={0.7}
        />
      </Icosahedron>
      
      <Torus args={[3, 0.2, 16, 32]} rotation={[Math.PI / 3, 0, 0]}>
        <meshStandardMaterial color="#5EEACA" wireframe emissive="#5EEACA" emissiveIntensity={0.2} />
      </Torus>
      
      <Torus args={[3.5, 0.15, 16, 32]} rotation={[Math.PI / 2.5, Math.PI / 4, 0]}>
        <meshStandardMaterial color="#3dd9c7" wireframe emissive="#3dd9c7" emissiveIntensity={0.15} />
      </Torus>
    </group>
  );
}

export default function Hero3D() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      <div className="absolute inset-0 z-0">
        <Canvas className="w-full h-full" camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#5EEACA" />
          <pointLight position={[-10, -10, 10]} intensity={0.5} color="#3dd9c7" />
          <AnimatedDataViz />
          <DataParticles />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 border border-primary/40 glow">
              ✨ Business Analyst
            </span>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
              Transforming <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-pulse">
                Data Into Insights
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Business Analyst | AI Engineer | Data Science Graduate. Specializing in Python, Machine Learning, NLP & Computer Vision. 
              Turning complex data into actionable business decisions with innovative AI solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-base bg-primary hover:bg-primary/90 glow-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
