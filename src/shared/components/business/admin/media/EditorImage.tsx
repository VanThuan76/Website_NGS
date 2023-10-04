import { Button } from '@/components/common/ui/button';
import React, { useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';

interface Props {
  image: string;
}
const EditorImage = ({ image }: Props) => {
  const cropRef = useRef(null);

  const handleSave = async () => {
    if (cropRef) {
      // @ts-ignore
      const dataUrl = cropRef.current.getImage().toDataURL();
      const result = await fetch(dataUrl);
      const blob = await result.blob();
      console.log(URL.createObjectURL(blob));
    }
  };
  return (
    <>
      <AvatarEditor
        ref={cropRef}
        image={image}
        width={250}
        height={250}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        rotate={0}
      />
      <Button onClick={handleSave}>Thay đổi</Button>
    </>
  );
};
export default EditorImage;
