import { FunctionComponent, ReactNode } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Box , Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Button from "../Button/Button";
import TeacherTag from "../TeacherTag/TeacherTag";
import Icon from "../Icon/Icon";
import { useState } from "react";

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
    actionIconVariant?: 'heart' ;
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

    return (
        <Dialog open={isOpen} onClose={onClose} maxWidth="sm"  PaperProps={{
            style: {
                borderRadius: '24px',
            }
        }} >
            <Box
                sx={{
                    display: "flex",
                    padding: "16px",
                    flexDirection: "column",
                    gap: "8px",
                    width: '100%',
                    background: "#FFFFFF",
                    borderRadius: "8px",
                    overflow: 'hidden',
                    boxSizing: 'border-box',
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", borderBottom: "1px solid #6C6F6F",}}>
                    <DialogTitle
                        sx={{
                            color: 'var(--Grayscale-black, #000)',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '20px',
                            fontWeight: 700,
                            lineHeight: '120%',
                            padding: "20px 24px",
                        }}
                    >
                        {icon && <Box sx={{ marginRight: 2 }}>{icon}</Box>}
                        {title}
                    </DialogTitle>

                    {showCloseIcon && (
                        <IconButton aria-label="close" onClick={onClose} sx={{ padding: "8px" }}>
                            <CloseIcon />
                        </IconButton>
                    )}
                </Box>

                <DialogContent
                    sx={{
                        padding: 0,
                        width: '100%',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',

                    }}
                >
                    {content && (
                        <Box sx={{ padding: '16px', width: '100%', boxSizing: 'border-box', overflowY: 'auto', maxHeight: '400px' }}>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    lineHeight: '120%',
                                }}
                            >
                                {content}
                            </Typography>
                        </Box>
                    )}

                    {imageSrc && (
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={imageSrc} alt={imageAlt || "Image"} style={{ maxWidth: '100%', height: 'auto' }} />
                        </Box>
                    )}

                    {teacherTag && (
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '16px' }}>
                            <TeacherTag name={teacherTag.name} avatarSrc={teacherTag.avatarSrc} size="medium" />
                        </Box>
                    )}
                </DialogContent>

                {buttons && buttons.length > 0 && (
                    <Box sx={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', p: '8px' ,
                        borderTop: "1px solid #6C6F6F"}}>

                        {buttons.length === 1 && (
                            <IconButton onClick={handleIconClick}>
                                <Icon variant={actionIconVariant} fill={isIconFilled} />
                            </IconButton>
                        )}

                        {buttons.map((button, index) => (
                            <Button
                                key={index}
                                variant={button.variant || 'filled'}
                                size="medium"
                                onClick={button.onClick}
                            >
                                {button.label}
                            </Button>
                        ))}
                    </Box>
                )}

            </Box>
        </Dialog>
    );
};

export default Modal;
