import { FunctionComponent, ReactNode, useState } from "react";
import Button from "../Button/Button";
import PersonTag from "../TeacherTag/PersonTag";
import Icon from "../Icon/Icon";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

export interface ModalProps {
    isOpen: boolean;
    title: string;
    content: string;
    onClose: () => void;
    showCloseIcon?: boolean;
    showCourseImage?: boolean;
    showTeacherTag?: boolean;
    showSecondaryButton?: boolean;
    showPrimaryButton?: boolean;
    showFav?: boolean;
    showFooter?: boolean;
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
                                                  showCourseImage = false,
                                                  showTeacherTag = false,
                                                  showSecondaryButton = false,
                                                  showPrimaryButton = false,
                                                  showFav = false,
                                                  showFooter = false,
                                                  imageSrc,
                                                  imageAlt,
                                                  buttons,
                                                  icon,
                                                  teacherTag,
                                                  actionIconVariant = 'heart',
                                              }) => {
    const [isIconFilled, setIsIconFilled] = useState(false);

    const handleIconClick = () => {
        setIsIconFilled(!isIconFilled);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex pl-2 pr-2 items-center justify-center z-50 bg-black bg-opacity-30">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-4">
                <div className="flex justify-between items-center border-b border-gray-400 pb-4">
                    <div className="flex items-center gap-2">
                        {icon && <div className="mr-2">{icon}</div>}
                        <h2 className="text-xl font-bold text-black">{title}</h2>
                    </div>
                    {showCloseIcon && (
                        <ButtonIcon onClick={onClose} size={"medium"} variant={"close"}/>
                    )}
                </div>

                <div className="flex flex-col gap-4 max-h-96 overflow-y-auto py-4">
                    {content && (
                        <p className="text-gray-800 font-normal leading-snug custom-text">
                            {content}
                        </p>
                    )}

                    {showCourseImage && imageSrc && (
                        <div className="flex justify-center items-center">
                            <img src={imageSrc} alt={imageAlt || "Image"} className="max-w-full h-auto" />
                        </div>
                    )}

                    {showTeacherTag && teacherTag && (
                        <div className="flex items-center gap-2 pl-4 pb-4">
                            <PersonTag name={teacherTag.name} avatarSrc={teacherTag.avatarSrc} size="medium" />
                        </div>
                    )}
                </div>

                {showFooter && (
                    <div className="flex gap-2 justify-end border-t border-gray-400 pt-4"
                         style={{paddingTop: showTeacherTag ? "16px" : "0px"}}>
                        {showFav && (
                            <button onClick={handleIconClick} className="focus:outline-none">
                                <Icon variant={actionIconVariant} fill={isIconFilled} />
                            </button>
                        )}
                        {showSecondaryButton && buttons && buttons[1] && (
                            <Button
                                variant={buttons[1].variant || 'outlined'}
                                size="medium"
                                onClick={buttons[1].onClick}
                            >
                                {buttons[1].label}
                            </Button>
                        )}
                        {showPrimaryButton && buttons && buttons[0] && (
                            <Button
                                variant={buttons[0].variant || 'filled'}
                                size="medium"
                                onClick={buttons[0].onClick}
                            >
                                {buttons[0].label}
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
