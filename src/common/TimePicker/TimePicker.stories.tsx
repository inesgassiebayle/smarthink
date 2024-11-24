import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import TimePicker from './TimePicker';

const meta: Meta<typeof TimePicker> = {
    title: 'Design System/Atoms/TimePicker',
    component: TimePicker,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        fromTime: {table: {disable: true}},
        toTime: {table: {disable: true}},
        onChangeFrom: {table: {disable: true}},
        onChangeTo: {table: {disable: true}},
        onCancel: {table: {disable: true}},
        onAccept: {table: {disable: true}},
    }
};

export default meta;

const TimePickerWithState = () => {
    const [fromTime, setFromTime] = useState({ hour: '17', minute: '30' });
    const [toTime, setToTime] = useState({ hour: '22', minute: '00' });

    return (
        <div
            style={{
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '16px',
            }}
        >
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
        </div>
    );
};

export const Default: StoryObj = {
    render: () => <TimePickerWithState />,
};
