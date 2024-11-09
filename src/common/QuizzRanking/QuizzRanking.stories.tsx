import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import dog from '../../assets/dog.webp';
import panda from '../../assets/panda.webp';
import cat from '../../assets/cat.webp';
import penguin from '../../assets/pinguin.webp';
import cow from '../../assets/cow.jpeg';
import pig from '../../assets/pig.svg'

import QuizzRanking, { QuizzRankingProps } from "./QuizzRanking";

export default {
    title: 'Design System/Atoms/Quizz Ranking',
    component: QuizzRanking,
} as Meta<typeof QuizzRanking>;

const Template: StoryFn<QuizzRankingProps> = (args) => <QuizzRanking {...args} />;

export const PodiumStory = Template.bind({});
PodiumStory.args = {
    people: [
        {
            personPicture: dog,
            personUsername: '@janedoe',
            points: 100,
        },
        {
            personPicture: cat,
            personUsername: '@charlie',
            points: 90,
        },
        {
            personPicture: penguin,
            personUsername: '@alice',
            points: 80,
        },
        {
            personPicture: panda,
            personUsername: '@jeniffer',
            points: 80,
        },
        {
            personPicture: cow,
            personUsername: '@john',
            points: 70,
        },
        {
            personPicture: pig,
            personUsername: '@jane',
            points: 70,
        },
    ],
};

export interface RankingCardProps {
    personPicture: string;
    personUsername: string;
    points: number;
};
