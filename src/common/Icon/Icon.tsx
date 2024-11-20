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
    PauseOutlined,
    PlayArrowOutlined,
    HomeOutlined,
    Home,
    TextFields,
    Mic,
    SentimentSatisfiedAlt,
    CelebrationOutlined,
    Celebration,
    LockOpenOutlined,
    LockOpen,
    SquareOutlined,
    Square,
    CircleOutlined,
    Circle,
    ToggleOn,
    ToggleOff,
    Tune,
    InfoOutlined,
    ArrowBack,
    SendOutlined, VolumeOff,
} from "@mui/icons-material";
import { cva, VariantProps } from "class-variance-authority";

export interface IconProps extends VariantProps<typeof iconVariant> {
    fill?: boolean;
    size?: "small" | "medium" | "large";
    colorClass?: string;
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
        | "play"
        | "back"
        | "menu"
        | "home"
        | "text"
        | "mic"
        | "smiley"
        | "confetti"
        | "unlocked"
        | "empty"
        | "config"
        | "information"
        | "send"
        | "switch"
        | "volumeOff"
}

const iconVariant = cva();

export default function Icon({ size = "medium", variant = "empty", fill = false, colorClass = "text-primary-500" }: IconProps) {

    const sizeMap = {
        small: 16,
        medium: 24,
        large: 32,
    };

    const icons: Record<string, React.ElementType | null> = {
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
        prize: StarBorderOutlined,
        export: FileUploadOutlined,
        circle: fill ? Circle : CircleOutlined,
        square: fill ? Square : SquareOutlined,
        profile: AccountCircleOutlined,
        pin: RoomOutlined,
        video: VideoLibraryOutlined,
        image: ImageOutlined,
        pause: PauseOutlined,
        play: PlayArrowOutlined,
        back: ArrowBack,
        menu: MenuOutlined,
        home: fill ? Home : HomeOutlined,
        text: TextFields,
        mic: Mic,
        smiley: SentimentSatisfiedAlt,
        confetti: fill ? Celebration : CelebrationOutlined,
        unlocked: fill ? LockOpen : LockOpenOutlined,
        empty: null,
        switch: fill ? ToggleOn: ToggleOff,
        config: Tune,
        send: SendOutlined,
        information: InfoOutlined,
        volumeOff: VolumeOff,
    };

    const SelectedIcon = icons[variant] ?? null;

    return SelectedIcon ? (
        <SelectedIcon
            className={colorClass}
            sx={{ width: sizeMap[size], height: sizeMap[size] }}
        />
    ) : (
        <div className={colorClass} style={{ width: sizeMap[size], height: sizeMap[size] }} />
    );
}

