import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
// TODO: fix background loading issue, so I can remove css fade-in effect
export function GradientBackground() {
  return (
    <div className="gradient-background" aria-hidden="true">
      <ShaderGradientCanvas
        className="gradient-background-canvas"
        fov={45}
        pixelDensity={1}
      >
        <ShaderGradient
          animate="on"
          brightness={0.1}
          cAzimuthAngle={180}
          cDistance={2.81}
          cPolarAngle={80}
          cameraZoom={9.1}
          color1="#ff0000"
          color2="#0000"
          color3="#ff0000"
          envPreset="dawn"
          grain="off"
          lightType="env"
          positionX={0}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0}
          rotationX={50}
          rotationY={0}
          rotationZ={-60}
          shader="defaults"
          type="waterPlane"
          uAmplitude={0}
          uDensity={1.5}
          uFrequency={0}
          uSpeed={0.07}
          uStrength={1.5}
          uTime={8}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}
