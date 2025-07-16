export const mult4x1 = (matrix: number[][], point: number[]): number[] => {
  const result = [0, 0, 0, 0];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      result[i] += matrix[i][j] * point[j];
    }
  }
  return result;
};

export const mult4x4 = (m1: number[][], m2: number[][]): number[][] => {
  const result: number[][] = Array(4)
    .fill(0)
    .map(() => Array(4).fill(0));
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        result[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }
  return result;
};

export const matrixT = (tx: number, ty: number, tz: number): number[][] => [
  [1, 0, 0, tx],
  [0, 1, 0, ty],
  [0, 0, 1, tz],
  [0, 0, 0, 1],
];

export const matrixS = (sx: number, sy: number, sz: number): number[][] => [
  [sx, 0, 0, 0],
  [0, sy, 0, 0],
  [0, 0, sz, 0],
  [0, 0, 0, 1],
];

export const matrixR = (rx: number, ry: number, rz: number): number[][] => {
  const cosX = Math.cos(rx);
  const sinX = Math.sin(rx);
  const cosY = Math.cos(ry);
  const sinY = Math.sin(ry);
  const cosZ = Math.cos(rz);
  const sinZ = Math.sin(rz);

  const rotX: number[][] = [
    [1, 0, 0, 0],
    [0, cosX, -sinX, 0],
    [0, sinX, cosX, 0],
    [0, 0, 0, 1],
  ];

  const rotY: number[][] = [
    [cosY, 0, sinY, 0],
    [0, 1, 0, 0],
    [-sinY, 0, cosY, 0],
    [0, 0, 0, 1],
  ];

  const rotZ: number[][] = [
    [cosZ, -sinZ, 0, 0],
    [sinZ, cosZ, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ];

  return mult4x4(rotZ, mult4x4(rotY, rotX));
};

export const matrixP = (
  fov: number,
  aspect: number,
  near: number,
  far: number,
): number[][] => {
  const f = 1.0 / Math.tan(fov / 2);
  const nf = 1 / (near - far);
  return [
    [f / aspect, 0, 0, 0],
    [0, f, 0, 0],
    [0, 0, (far + near) * nf, 2 * far * near * nf],
    [0, 0, -1, 0],
  ];
};
