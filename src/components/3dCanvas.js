import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stage } from '@react-three/drei'
import Model from '../3d/model'

export default function ThreeDUTILS() {
    const ref = useRef()




    return <Canvas resize={{ debounce: 0 }} shadows camera={{ fov: 60 }}>

        <Suspense fallback={null}>
            <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">

                <Model />

            </Stage>
        </Suspense>
    </Canvas>
}