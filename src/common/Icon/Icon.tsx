import React from "react";
import {
    FavoriteBorderOutlined,
    BookmarkBorderOutlined,
    FmdGoodOutlined,
    GroupsOutlined,
    AccessTimeOutlined,
    CheckCircleOutlineOutlined,
    StarBorderOutlined,
    AddOutlined,
    MessageOutlined,
    InfoOutlined,
    HomeOutlined,
    FmdGood,
    Bookmark,
    Favorite,
    KeyboardArrowLeftOutlined,
    KeyboardArrowRightOutlined,
    CheckCircle,
    DoneOutlined,
    Star,
    CloseOutlined,
    AttachFile,
    FolderOutlined,
    NotificationsOutlined,
    AccountCircleOutlined,
    LockOutlined,
    MenuOutlined,
    PauseCircleOutlineOutlined,
    ImageOutlined,
    VideoLibraryOutlined,
    RoomOutlined,
    CheckBoxOutlineBlank,
    CheckBox,
    RadioButtonUnchecked,
    RadioButtonChecked,
    FileUploadOutlined,
    EditOutlined,
    SearchOutlined,
    EventOutlined,
    ForumOutlined,
    ChatBubbleOutlineOutlined,
    FileDownloadOutlined,
    CheckBoxOutlined,
    CancelOutlined,
    Cancel,
    DisabledByDefaultOutlined,
    DisabledByDefault,
    Square, SquareOutlined, Circle, CircleOutlined,

} from "@mui/icons-material";

import { cva, VariantProps } from "class-variance-authority";

export interface IconProps extends VariantProps<typeof iconVariant> {
    fill?: boolean;
    style?: React.CSSProperties;
    variant:
        | "explore"
        | "bookmark"
        | "heart"
        | "people"
        | "switch_left"
        | "switch_right"
        | "tick"
        | "clock"
        | "correct_circle"
        | "correct_square"
        | "incorrect_circle"
        | "incorrect_square"
        | "star"
        | "close"
        | "add"
        | "paper_clip"
        | "download"
        | "chat"
        | "chat_multiple"
        | "calendar"
        | "search"
        | "pencil"
        | "folder"
        | "bell"
        | "prize"
        | "export"
        | "circle"
        | "square"
        | "profile"
        | "pin"
        | "video"
        | "image"
        | "pause"
        | "back"
        | "menu"
        | "lock"
        | "empty";
}


const iconVariant = cva("text-primary-500", {
    variants: {
        size: {
            small: ["w-6", "h-6"],
            medium: ["w-8", "h-8"],
            large: ["w-12", "h-12"],
        },
    },
    defaultVariants: {
        size: "medium",
    },
});


export default function Icon({ size, variant = "empty", fill = false, style }: IconProps) {
    const iconClasses = iconVariant({ size });

    const icons = {
        explore: fill ? FmdGood : FmdGoodOutlined,
        bookmark: fill ? Bookmark : BookmarkBorderOutlined,
        heart: fill ? Favorite : FavoriteBorderOutlined,
        people: GroupsOutlined,
        switch_left: KeyboardArrowLeftOutlined,
        switch_right: KeyboardArrowRightOutlined,
        tick: DoneOutlined,
        clock: AccessTimeOutlined,
        correct_circle: fill ? CheckCircle : CheckCircleOutlineOutlined,
        correct_square: fill ? CheckBox: CheckBoxOutlined,
        incorrect_circle: fill ? Cancel: CancelOutlined,
        incorrect_square: fill ? DisabledByDefault: DisabledByDefaultOutlined,
        star: fill ? Star : StarBorderOutlined,
        close: CloseOutlined,
        add: AddOutlined,
        paper_clip: AttachFile,
        download: FileDownloadOutlined,
        chat: ChatBubbleOutlineOutlined,
        chat_multiple: ForumOutlined,
        calendar: EventOutlined,
        search: SearchOutlined,
        pencil: EditOutlined,
        folder: FolderOutlined,
        bell: NotificationsOutlined,
        prize: StarBorderOutlined, // not correct
        export: FileUploadOutlined,
        circle: fill ? Circle : CircleOutlined,
        square: fill ? Square : SquareOutlined,
        profile: AccountCircleOutlined,
        pin: RoomOutlined,
        video: VideoLibraryOutlined,
        image: ImageOutlined,
        pause: PauseCircleOutlineOutlined,
        back: KeyboardArrowLeftOutlined,
        menu: MenuOutlined,
        lock: LockOutlined,
        empty: null,
    };

    const SelectedIcon = icons[variant] || null;

    return SelectedIcon ? (
        <SelectedIcon className={iconClasses} style={style}/>
    ) : (
        <div className={iconClasses} style={style} />
    );
}
