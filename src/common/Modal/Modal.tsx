import { FunctionComponent, ReactNode, useState } from "react";
import Button from "../Button/Button";
import PersonTag from "../TeacherTag/PersonTag";
import Icon from "../Icon/Icon";

export interface ModalProps {
    isOpen: boolean;
    title: string;
    content: string;
    onClose: () => void;
    showCloseIcon?: boolean;
    imageSrc?: string;
    imageAlt?: string;
    buttons?: { label: string; onClick: () => void; variant?: 'filled' | 'outlined' }[];
    icon?: ReactNode;
    teacherTag?: { name: string; avatarSrc: string };
    actionIconVariant?: 'heart';
}

const Modal: FunctionComponent<ModalProps> = ({
                                                  isOpen,
                                                  title,
                                                  content,
                                                  onClose,
                                                  showCloseIcon = true,
                                                  imageSrc,
                                                  imageAlt,
                                                  buttons,
                                                  icon,
                                                  teacherTag,
                                                  actionIconVariant = 'heart'
                                              }) => {
    const [isIconFilled, setIsIconFilled] = useState(false);

    const handleIconClick = () => {
        setIsIconFilled(!isIconFilled);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-4">
                <div className="flex justify-between items-center border-b border-gray-400 pb-4">
                    <div className="flex items-center gap-2">
                        {icon && <div className="mr-2">{icon}</div>}
                        <h2 className="text-xl font-bold text-black">{title}</h2>
                    </div>
                    {showCloseIcon && (
                        <button
                            aria-label="close"
                            onClick={onClose}
                            className="text-gray-600 hover:text-gray-800 focus:outline-none"
                        >
                            ✕
                        </button>
                    )}
                </div>

                <div className="flex flex-col gap-4 max-h-96 overflow-y-auto py-4">
                    {content && (
                        <p
                            className="text-gray-800 font-normal leading-snug custom-text"
                            style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 12,
                                alignSelf: 'stretch',
                                overflow: 'hidden',
                                color: 'var(--Text-ui-text-default, #313E3F)',
                                textOverflow: 'ellipsis',
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '120%',
                            }}
                        >
                            {content}
                        </p>
                    )}

                    {imageSrc && (
                        <div className="flex justify-center items-center">
                            <img src={imageSrc} alt={imageAlt || "Image"} className="max-w-full h-auto"/>
                        </div>
                    )}

                    {teacherTag && (
                        <div className="flex items-center gap-2 pl-4 pb-4">
                            <PersonTag name={teacherTag.name} avatarSrc={teacherTag.avatarSrc} size="medium"/>
                        </div>
                    )}
                </div>

                {buttons && buttons.length > 0 && (
                    <div className="flex gap-2 justify-end border-t border-gray-400 pt-4">
                    {buttons.length === 1 && (
                            <button onClick={handleIconClick} className="focus:outline-none">
                                <Icon variant={actionIconVariant} fill={isIconFilled} />
                            </button>
                        )}
                        {buttons.map((button, index) => (
                            <Button
                                key={index}
                                variant={button.variant || 'filled'}
                                size="medium"
                            >
                                {button.label}
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
