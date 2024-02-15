import { FC, useEffect, useRef, useState } from "react";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    title: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    disabled?: boolean;
  }

const Modal: FC<ModalProps> = ({
    isOpen,
    title,
    body,
    footer,
    onClose
}) => {
    const [showModal, setShowModal] = useState(isOpen);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
          onClose();
        }
      };
  
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen, onClose]);
    

    useEffect(() => {
      setShowModal(isOpen);
    }, [isOpen]);
    
    if (!isOpen) {
        return null;
      }
    return (
        
            <div className="fixed inset-0 backdrop-blur flex justify-center items-center h-full w-full">
                <div ref={modalRef} className="bg-white p-4 rounded-2xl w-[500px] h-[300px]">
                    {/* HEADER */}
                    <div className="text-center text-2xl font-bold text-orange-400 mb-4">{title}</div>
                    {/* CONTENT */}
                    {body}
                    {/* FOOTER */}
                    {footer}
                </div>
            </div>
    )
}

export default Modal;