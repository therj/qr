'use client';

import { db } from '@/db';
import getQrCodeData from '@/helpers/qr/generator';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from '@ui/dialog';
import { Fragment, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { QRCodeTypeEnum, QRGroup } from '@/constants/enums';
import { Checkbox } from '@/components/ui/checkbox';
import { DialogProps } from '@radix-ui/react-dialog';
import { TQr } from '@/types/qr';
import { CheckedState } from '@radix-ui/react-checkbox';
import { Button } from './ui/button';

const addItems = (
  type: QRCodeTypeEnum,
  options?: Partial<Omit<TQr, `type`>>
) => {
  const data = getQrCodeData(type, options);
  db.qrs.add(data);
};

export interface AddQrModalProps extends DialogProps {
  isOpen: boolean;
  onToggleDialog: (dialogState: boolean) => void;
}
const AddQrModal = ({ onToggleDialog, isOpen }: AddQrModalProps) => {
  const [QRToAdd, setQRToAdd] = useState<QRCodeTypeEnum | null>(null);
  const [isPinned, setIsPinned] = useState<CheckedState>(false);

  const toggleDialog = (setOpen: boolean) => {
    setQRToAdd(null);
    setIsPinned(false);
    onToggleDialog(setOpen);
  };

  const closeDialog = () => {
    toggleDialog(false);
  };

  return (
    <Dialog modal open={isOpen} onOpenChange={toggleDialog}>
      <DialogOverlay className="border-4">
        <DialogContent
          className="sm:max-w-md"
          // onInteractOutside={(e) => {
          //   e.preventDefault();
          // }}
          // onEscapeKeyDown={(e) => {
          //   e.preventDefault();
          // }}
        >
          {/* <form> */}
          <DialogHeader>
            <DialogTitle>Add new QR</DialogTitle>
            <DialogDescription>
              Latest items first, pinned items on top
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-1.5 items-center justify-center">
            <div className="rounded-lg py-4">
              <h3 className="text-lg font-medium">
                <Select
                  onValueChange={(v: QRCodeTypeEnum) => {
                    setQRToAdd(v);
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="QR Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {QRGroup.map((group, i) => (
                      <Fragment key={group.name}>
                        <SelectGroup key={group.name}>
                          {group.items.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                        {i < QRGroup.length - 1 && <SelectSeparator />}
                      </Fragment>
                    ))}
                  </SelectContent>
                </Select>
              </h3>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms2"
                checked={isPinned}
                onCheckedChange={(v) => {
                  setIsPinned(v === true);
                }}
              />
              <label
                htmlFor="terms2"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                Pin this QR
              </label>
            </div>
          </div>

          <DialogFooter className="sm:justify-betweenX dialog-footer">
            <Button
              type="button"
              onClick={() => {
                addItems(QRToAdd!, { isBookmark: isPinned === true });
                toggleDialog(false);
              }}
              disabled={!QRToAdd}
            >
              Add QR
            </Button>
            <DialogClose asChild onClick={closeDialog}>
              <Button type="button" variant="ghost">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
          {/* </form> */}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default AddQrModal;
