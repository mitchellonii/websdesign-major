import React, { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import iPhone from "../iphone.glb"
export default function Model(props) {
    const { nodes, materials } = useGLTF(iPhone);


    function calcRotationVector(scrollDist) {
        if (scrollDist < 240) {
            return [Math.min(Math.PI / 2 * 3.4 + props.scrollAmount / (120 * 1), 6), Math.min(Math.PI * (props.scrollAmount / (300 * 1)), Math.PI), 0]
        }
        else return [6 + ((props.scrollAmount - 240) / 700), Math.PI * (240 / 300) + (props.scrollAmount - 240) / 400, 0]

    }
    function calcPos(scrollDist) {
        return [0, 0, 0]
    }


    return (
        <group {...props} scale={0.8} position={calcPos(props.scrollAmount)} rotation={calcRotationVector(props.scrollAmount)} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bolt.geometry}
                material={materials.chrom}
                position={[-0.006, -0.073, 0]}
                rotation={[0, 0, Math.PI]}
            />
            <group position={[-0.013, 0.052, 0.005]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder.geometry}
                    material={materials.chrom}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_1.geometry}
                    material={materials.chrome_frame}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_2.geometry}
                    material={materials.glass_cam}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_3.geometry}
                    material={materials.camera_body}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_4.geometry}
                    material={materials.lenses}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_5.geometry}
                    material={materials.flash}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_6.geometry}
                    material={materials.back}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_7.geometry}
                    material={materials.black_frame}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.grill_bottom.geometry}
                material={materials.chrom}
                position={[-0.015, -0.073, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.logo.geometry}
                material={materials.logo}
                position={[0.001, 0.002, 0.011]}
                rotation={[-Math.PI / 2, 0, Math.PI]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.grill.geometry}
                material={materials.black_frame}
                position={[0, 0.071, -0.004]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.grill_body.geometry}
                material={materials.black_frame}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.screen.geometry}
                material={materials.Material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={materials.back}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_1.geometry}
                material={materials.antenna}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_2.geometry}
                material={materials.body_metall}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_3.geometry}
                material={materials.back_glass}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_4.geometry}
                material={materials.screen}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_5.geometry}
                material={materials.black_frame}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_6.geometry}
                material={materials.chrom}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_7.geometry}
                material={materials.camera_body}
            />
        </group>
    );
}

useGLTF.preload(iPhone);