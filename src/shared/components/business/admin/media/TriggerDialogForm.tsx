import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/common/ui/dialog';

interface Props{
  titleDialog: string
  trigger: React.ReactNode
  form: React.ReactNode
}
const TriggerDialogForm = (data: Props) => {
  return (
    <Dialog>
      <DialogTrigger>
        {data.trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{data.titleDialog}</DialogTitle>
          <DialogDescription>
            {data.form}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TriggerDialogForm;
