"use client";

import { Player } from '@remotion/player';
import { LevelUpVideo } from '../remotion/LevelUpVideo';

interface LevelUpVideoPlayerProps {
    className?: string;
}

export default function LevelUpVideoPlayer({ className = '' }: LevelUpVideoPlayerProps) {
    return (
        <div className={`relative rounded-2xl overflow-hidden shadow-2xl shadow-[#00a8ff]/10 border border-white/10 ${className}`}>
            <Player
                component={LevelUpVideo}
                durationInFrames={600}
                fps={30}
                compositionWidth={1920}
                compositionHeight={1080}
                style={{
                    width: '100%',
                    aspectRatio: '16 / 9',
                }}
                controls
                autoPlay
                loop
            />
        </div>
    );
}
