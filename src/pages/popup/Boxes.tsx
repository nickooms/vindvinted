import { useState, useRef, useEffect } from 'react';
import { Button } from './Button';
import { Modal } from './Modal';
import { useBoxes } from '@src/hooks';
import { AddBox } from './AddBox';

export const Boxes = () => {
  const [boxes, setBoxes] = useBoxes();

  return (
    <>
      <AddBox />
      <div>
        {boxes.map((box) => (
          <div key={box.id}>{box.label}</div>
        ))}
      </div>
    </>
  );
};
