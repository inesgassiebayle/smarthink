import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import TimePicker from './TimePicker';

const meta: Meta<typeof TimePicker> = {
    title: 'Design System/Atoms/TimePicker',
    component: TimePicker,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

const TimePickerWithState = () => {
    const [fromTime, setFromTime] = useState({ hour: '17', minute: '30' });
    const [toTime, setToTime] = useState({ hour: '22', minute: '00' });

    return (
        <TimePicker
            fromTime={fromTime}
            toTime={toTime}
            onChangeFrom={setFromTime}
            onChangeTo={setToTime}
            onCancel={() => {
                setFromTime({ hour: '17', minute: '30' });
                setToTime({ hour: '22', minute: '00' });
            }}
            onAccept={() => {
                console.log('Times accepted:', { fromTime, toTime });
            }}
        />
    );
};

export const Default: StoryObj = {
    render: () => <TimePickerWithState />
};