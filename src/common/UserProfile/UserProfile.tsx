import { FunctionComponent } from "react";
import background from "../../assets/Background.svg";
import Avatar from "../Avatar/Avatar";

export interface UserProfileProps {
    name: string;
    avatarSrc: string;
}

const UserProfile: FunctionComponent<UserProfileProps> = ({
                                                              name,
                                                              avatarSrc,
                                                          }) => {
    return (
        <div className="flex flex-col items-center w-[256px]">
            <div
                className="w-full h-[128px] bg-cover bg-center"
                style={{ backgroundImage: `url(${background})` }}
            />

            <div className="flex flex-col items-center -mt-[64px]">
                <Avatar imageSrc={avatarSrc} size="xlarge" />
                <p className="text-center text-gray-800 font-medium mt-2 max-w-[200px] truncate">
                    @{name}
                </p>
            </div>
        </div>
    );
};

export default UserProfile;
