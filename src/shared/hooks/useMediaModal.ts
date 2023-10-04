import { IFolderMedia, IImageMedia } from '@/mocks/admin/media';
import React, { useDebugValue, useState } from 'react';

export default function useMediaModal() {
  const [currentFolder, setCurrentFolder] = useState<IFolderMedia | undefined>();
  const [chosenImage, setChosenImage] = useState<IImageMedia | undefined>();
  const [searchKey, setSearchKey] = useState<string | undefined>();
  useDebugValue({ currentFolder, chosenImage });
  return {
    currentFolder,
    setCurrentFolder,
    chosenImage,
    setChosenImage,
    searchKey,
    setSearchKey,
  };
}
