import React, { useEffect } from 'react';
import Router from 'next/router';

const useWarnIfUnsavedChanges = (unsavedChanges: boolean, callback?: () => boolean) => {
  useEffect(() => {
    if (unsavedChanges) {
      const routeChangeStart = () => {
        const ok = callback ? callback() : confirm('Chờ đã! Nội dung bạn đang chỉnh sửa chưa được lưu lại');
        if (!ok) {
          Router.events.emit('routeChangeError');
          throw 'Abort route change. Please ignore this error.';
        }
      };
      Router.events.on('routeChangeStart', routeChangeStart);

      return () => {
        Router.events.off('routeChangeStart', routeChangeStart);
      };
    }
  }, [unsavedChanges]);
};
export default useWarnIfUnsavedChanges;
