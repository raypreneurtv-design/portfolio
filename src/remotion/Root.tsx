import React from 'react';
import { Composition } from 'remotion';
import { LevelUpVideo } from './LevelUpVideo';

export const RemotionRoot: React.FC = () => {
    return (
        <>
            <Composition
                id="LevelUpVideo"
                component={LevelUpVideo}
                durationInFrames={600}
                fps={30}
                width={1920}
                height={1080}
            />
            {/* Square version for social media */}
            <Composition
                id="LevelUpVideoSquare"
                component={LevelUpVideo}
                durationInFrames={600}
                fps={30}
                width={1080}
                height={1080}
            />
            {/* Vertical version for mobile/stories */}
            <Composition
                id="LevelUpVideoVertical"
                component={LevelUpVideo}
                durationInFrames={600}
                fps={30}
                width={1080}
                height={1920}
            />
        </>
    );
};
