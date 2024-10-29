import React from 'react';
import RankingTable, { RankingTableProps } from './RankingTable';
import animal from '../../assets/lion.webp';
import {Meta, StoryFn} from "@storybook/react";

export default {
    title: 'Design System/Molecules/RankingTable',
    component: RankingTable,
    argTypes: {
        control: { type: 'object' },
    },
} as Meta<RankingTableProps>;

const Template: StoryFn<RankingTableProps> = (args) => {
    return (
        <div className={"h-[300px]"}>
            <RankingTable {...args} />
        </div>
    )
}

export const RankingTableStory = Template.bind({});
RankingTableStory.args = {
    rankings: [
        { personPicture: animal, personUsername: 'User 1', points: '300' },
        { personPicture: animal, personUsername: 'User 2', points: '500' },
        { personPicture: animal, personUsername: 'User 3', points: '200' },
        { personPicture: animal, personUsername: 'User 4', points: '450' },
        { personPicture: animal, personUsername: 'User 5', points: '450' },
        { personPicture: animal, personUsername: 'User 6', points: '450' },
        { personPicture: animal, personUsername: 'User 7', points: '450' },
    ],
};

