import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
// TODO: fix background loading issue, so I can remove css fade-in effect
export function GradientBackground() {
  return (
    <div className="gradient-background" aria-hidden="true">
      <ShaderGradientCanvas
        style={{ width: "100%", height: "100%", pointerEvents: "none" }}
      >
        <ShaderGradient
          animate="on"
          bgColor1="#000000"
          bgColor2="#000000"
          brightness={0.1}
          cAzimuthAngle={180}
          cDistance={2.81}
          cPolarAngle={80}
          cameraZoom={9.1}
          color1="#ff0000"
          color2="#0000"
          color3="#ff0000"
          destination="onCanvas"
          embedMode="off"
          envPreset="dawn"
          format="gif"
          fov={45}
          frameRate={10}
          gizmoHelper="hide"
          grain="off"
          lightType="env"
          pixelDensity={1}
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
