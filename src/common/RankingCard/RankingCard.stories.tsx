import RankingCard, { RankingCardProps } from './RankingCard';
import {Meta, StoryFn} from "@storybook/react";
import React from "react";
import animal from '../../assets/cat.webp';

export default {
    title: 'Design System/Atoms/Ranking Card',
    component: RankingCard,
    argTypes: {
        personPicture: { control: 'text' },
        personUsername: { control: 'text' },
        points: { control: 'text' },
    },
} as Meta<typeof RankingCard>;


const Template: StoryFn<RankingCardProps> = (args) => <RankingCard {...args} />;

export const RankingCardStory = Template.bind({});
RankingCardStory.args = {
    personPicture: animal,
    personUsername: 'JaneDoe123',
    points: '1500',
};

