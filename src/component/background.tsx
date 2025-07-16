import React, { useRef, useEffect } from 'react';
import {
  mult4x1,
  mult4x4,
  matrixT,
  matrixS,
  matrixR,
  matrixP,
} from '../utils/matrix';

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | undefined>(undefined);

  useEffect(() => {
    type obj = {
      diffx: number;
      diffy: number;
      initPosition: [number, number, number];
      position: [number, number, number]; // [x, y, z]
      rotation: [number, number, number]; // [rx, ry, rz]
      size: number; // uniform scale
    };
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let vertices: number[][][] = [];
    let lines: number[][][] = [];
    let currentFrame = 0;
    const totalFrames = 39;

    const objs: obj[] = [
      {
        diffx: 0.06,
        diffy: 0.1,
        initPosition: [0, 0, -2],
        position: [0, 0, 0],
        rotation: [0, 1.57, 0.5],
        size: 0.1,
      },
      {
        diffx: -0.02,
        diffy: 0.05,
        initPosition: [-0.7, -0.3, -2],
        position: [0, 0, 0],
        rotation: [0, 1.57, 0.5],
        size: 0.1,
      },
      {
        diffx: 0.04,
        diffy: -0.1,
        initPosition: [0.5, 0.2, -2],
        position: [0, 0, 0],
        rotation: [0, 1.57, 0.5],
        size: 0.1,
      },
      {
        diffx: 0.06,
        diffy: 0.1,
        initPosition: [-0.7, 0.4, -2],
        position: [0, 0, 0],
        rotation: [0, 1.57, 0.5],
        size: 0.1,
      },
    ];

    const draw = () => {
      if (!ctx || vertices.length === 0) return;
      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.translate(canvasWidth / 2, canvasHeight / 2);

      const fov = Math.PI / 3; // 視野角
      const aspect = canvasWidth / canvasHeight;

      objs.forEach((obj) => {
        const matrix = mult4x4(
          matrixP(fov, aspect, 0.1, 100),
          mult4x4(
            matrixT(...obj.position),
            mult4x4(
              matrixS(obj.size, obj.size, obj.size),
              matrixR(...obj.rotation),
            ),
          ),
        );

        if (lines[currentFrame]) {
          lines[currentFrame].forEach(([index1, index2]) => {
            const v1 = vertices[currentFrame][index1];
            const v2 = vertices[currentFrame][index2];
            if (v1 && v2) {
              const transformedV1 = mult4x1(matrix, v1);
              const transformedV2 = mult4x1(matrix, v2);

              // パースペクティブ除算
              const w1 = transformedV1[3];
              const w2 = transformedV2[3];

              if (w1 > 0 && w2 > 0) {
                const x1 = (transformedV1[0] / w1) * canvasWidth;
                const y1 = (transformedV1[1] / w1) * canvasHeight * -1;
                const x2 = (transformedV2[0] / w2) * canvasWidth;
                const y2 = (transformedV2[1] / w2) * canvasHeight * -1;

                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.strokeStyle = 'white';
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          });
        }
      });
    };

    const animate = () => {
      const time = performance.now() * 0.0005;
      objs.forEach((obj, i) => {
        obj.position[0] = obj.initPosition[0] + Math.cos(time + i) * obj.diffx;
        obj.position[1] = obj.initPosition[1] + Math.sin(time + i) * obj.diffy;
        obj.position[2] = obj.initPosition[2];
      });
      currentFrame = Math.floor((performance.now() / 100) % totalFrames);
      draw();
      animationFrameId.current = requestAnimationFrame(animate);
    };

    const loadObjAndAnimate = async () => {
      try {
        const framePromises = [];
        for (let i = 1; i <= totalFrames; i++) {
          const frameNumber = String(i).padStart(4, '0');
          framePromises.push(
            fetch(`${process.env.PUBLIC_URL}/obj/Jellyfish${frameNumber}.obj`),
          );
        }

        const responses = await Promise.all(framePromises);
        const texts = await Promise.all(
          responses.map((res) => {
            if (!res.ok) throw new Error(`Failed to fetch`);
            return res.text();
          }),
        );

        texts.forEach((text) => {
          const objLines = text.split('\n');
          const parsedVertices: number[][] = [];
          const faceLines = new Set<string>();

          objLines.forEach((line) => {
            const parts = line.trim().split(/\s+/);
            if (parts[0] === 'v') {
              parsedVertices.push([
                parseFloat(parts[1]),
                parseFloat(parts[2]),
                parseFloat(parts[3]),
                1.0,
              ]);
            } else if (parts[0] === 'f') {
              const faceVertices = parts
                .slice(1)
                .map((p) => parseInt(p.split('/')[0], 10) - 1);
              for (let i = 0; i < faceVertices.length; i++) {
                const start = faceVertices[i];
                const end = faceVertices[(i + 1) % faceVertices.length];
                const key = [start, end].sort((a, b) => a - b).join('-');
                faceLines.add(key);
              }
            }
          });
          vertices.push(parsedVertices);
          lines.push(
            Array.from(faceLines).map((key) => key.split('-').map(Number)),
          );
        });

        animate();
      } catch (error) {
        console.error('Failed to load or parse OBJ file sequence:', error);
      }
    };

    loadObjAndAnimate();
    window.addEventListener('resize', draw);

    return () => {
      window.removeEventListener('resize', draw);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-ubuntu-terminal"
    />
  );
};

export default Background;