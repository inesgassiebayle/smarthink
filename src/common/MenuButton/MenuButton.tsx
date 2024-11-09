import { FunctionComponent } from "react";

import certificates from "../../assets/Type=Certificates, Size=Medium.svg";
import courses from "../../assets/Type=Courses, Size=Medium.svg";
import logout from "../../assets/Type=Log out, Size=Medium.svg";
import membership from "../../assets/Type=Become Member, Size=Medium.svg";
import notifications from "../../assets/Type=Notifications, Size=Medium.svg";
import profile from "../../assets/Type=Edit profile, Size=Medium.svg";

export interface MenuButtonProps {
    variant: "logout" | "courses" | "membership" | "profile" | "certificates" | "notifications";
    onClick: () => void;
}

const MenuButton: FunctionComponent<MenuButtonProps> = ({ variant, onClick }) => {
    const icons: Record<MenuButtonProps["variant"], string> = {
        logout: logout,
        courses: courses,
        membership: membership,
        profile: profile,
        certificates: certificates,
        notifications: notifications,
    };
    const messages: Record<MenuButtonProps["variant"], string> = {
        logout: "Log out",
        courses: "Courses",
        membership: "Become PRO",
        profile: "Edit profile",
        certificates: "Certificates",
        notifications: "Notifications",
    };

    const color: Record<MenuButtonProps["variant"], string> = {
        membership: "text-state-warning",
        logout: "text-state-error",
        courses: "text-primary-800",
        profile: "text-primary-800",
        certificates: "text-primary-800",
        notifications: "text-primary-800",
    };

    return (
        <button
            onClick={onClick}
            className="flex flex-col items-center justify-center w-[144px] h-[168px] p-[var(--Space-400,16px)] px-[var(--Icon-Small,24px)] gap-[var(--Space-400,16px)] flex-shrink-0 rounded-lg border border-[0.25px] border-primary-500 bg-white shadow-[0px_2px_4px_0.5px_rgba(179,179,179,0.25)]"
        >
            <img src={icons[variant]} alt={`${variant} icon`} className="w-6 h-6" />
            <p className={`text-sm font-medium ${color[variant]}`}>{messages[variant]}</p>
        </button>
    );
};

export default MenuButton;
