import { ReactNode } from 'react';

export type TModalProps = {
  title?: string;  // Добавляем "?" чтобы сделать пропс необязательным
  onClose: () => void;
  children?: ReactNode;
};