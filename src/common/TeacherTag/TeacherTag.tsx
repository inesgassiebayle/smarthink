import { FunctionComponent } from "react";
import { Avatar, Box, Typography } from "@mui/material";

interface TeacherTagProps {
    name: string;
    avatarSrc: string;
    size?: "small" | "medium" | "large";
}

const TeacherTag: FunctionComponent<TeacherTagProps> = ({
                                                            name,
                                                            avatarSrc,
                                                            size = "medium",
                                                        }) => {
    const sizes = {
        small: {
            avatarSize: 8,
            fontSize: "10px",
            lineHeight: "120%",
        },
        medium: {
            avatarSize: 24,
            fontSize: "10px",
            lineHeight: "120%",
        },
        large: {
            avatarSize: 32,
            fontSize: "12px",
            lineHeight: "120%",
        },
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Avatar src={avatarSrc} sx={{ width: sizes[size].avatarSize, height: sizes[size].avatarSize }} />
            <Typography
                variant="body2"
                sx={{
                    fontSize: sizes[size].fontSize,
                    lineHeight: sizes[size].lineHeight,
                    color: "#000",
                    maxWidth: "180px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                }}
            >
                {name}
            </Typography>
        </Box>
    );
};

export default TeacherTag;
