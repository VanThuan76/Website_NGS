import { Dialog, DialogContent, DialogFooter, DialogHeader } from '../ui/dialog';
import { Button } from '../ui/button';
import Media from 'src/pages/admin/media';

type Props = {
  onOk?: (value: any) => void;
};

export function ImgPickDialog(props: Props) {
  return (
    <Dialog open={true}>
      <DialogContent className='max-w-[1080px]'>
        <DialogHeader>
          <Media viewMode='view' />
        </DialogHeader>
        <DialogFooter>
          <Button
            type='submit'
            onClick={() => {
              props.onOk && props.onOk('123');
            }}
          >
            Đồng ý
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
