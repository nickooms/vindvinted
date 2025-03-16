import { useState, useRef, useEffect } from 'react';
import { Button } from './Button';
import { Modal } from './Modal';
import { useBoxes } from '@src/hooks';

export const AddBox = () => {
  const [label, setLabel] = useState('');

  const [isAddBoxOpen, setIsAddBoxOpen] = useState<boolean>(false);
  const labelRef = useRef<HTMLTextAreaElement | null>(null);
  const [boxes, setBoxes] = useBoxes();

  useEffect(() => {
    if (labelRef.current) {
      labelRef.current.focus();
    }
  }, [labelRef.current, isAddBoxOpen]);

  const onClose = () => setIsAddBoxOpen(false);

  const addBox = () => {
    const newBox = { id: Date.now(), label, items: [] };
    setBoxes([...boxes, newBox]);
    onClose();
  };

  return (
    <>
      <Button active onClick={() => setIsAddBoxOpen(true)}>
        Doos toevoegen
      </Button>
      <Modal
        isOpen={isAddBoxOpen}
        onClose={onClose}
        title="Doos toevoegen"
        buttons={
          <>
            <Button active onClick={addBox}>
              Voeg toe
            </Button>
            <Button onClick={onClose}>Sluit</Button>
          </>
        }
      >
        <textarea
          placeholder="Label"
          ref={labelRef}
          style={{ width: '100%', height: '5rem' }}
          onChange={(e) => setLabel(e.target.value)}
        ></textarea>
      </Modal>
    </>
  );
};
