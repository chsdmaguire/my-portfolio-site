import React from "react";

const Box = () => {
    return (
    <mesh>
        <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshNormalMaterial attach="material" />
    </mesh>
    </mesh>
    )
}

export default Box;