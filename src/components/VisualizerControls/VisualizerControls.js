import React from 'react';
import './style.css';

import Button from '../Button/Button';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import { IoIosArrowDropdownCircle as DropDown } from 'react-icons/io';
import { IoIosArrowDropupCircle as DropUp } from 'react-icons/io';
import { 
    FaPlay as Play,
    FaPause as Pause,
    FaStepBackward as Backward,
    FaStepForward as Forward
} from 'react-icons/fa';
import { FiRepeat as Repeat } from 'react-icons/fi';

function isDisabled(action, disabled = false) {
    return action === undefined || disabled;
}

const VisualizerControls = ({
    
    // actions
    onPlay,
    onPause,
    onBackward,
    onForward,
    onRepeat,
    onAdjustSpeed,

    // states
    playing,
    playDisabled,
    pauseDisabled,
    backwardDisabled,
    forwardDisabled,
    repeatDisabled,
    playbackSpeed
}) => {
    
    return (
        <div className='VisualizerControls'>

            <Button 
                icon={Repeat}
                onClick={onRepeat}
                disabled={isDisabled(onRepeat, repeatDisabled)}
                className='VisualizerControls__Button'
            />

            <Button 
                icon={Backward}
                iconClass='VisualizerControls__Icon'
                onClick={onBackward}
                disabled={isDisabled(onBackward, backwardDisabled)}
                className='VisualizerControls__Button'
            />

            <Button 
                icon={playing ? Pause : Play}
                iconClass='VisualizerControls__Icon'
                onClick={playing ? onPause : onPlay}
                disabled={
                    playing
                        ? isDisabled(onPause, pauseDisabled)
                        : isDisabled(onPlay, playDisabled)
                }
                raised
                className='VisualizerControls__CenterButton'
            />

            <Button 
                icon={Forward}
                iconClass='VisualizerControls__Icon'
                onClick={onForward}
                disabled={isDisabled(onForward, forwardDisabled)}
                className='VisualizerControls__Button'
            />

            <DropDownMenu 
                items={['0.25x', '0.5x', '1x', '2x', '4x']}
                placeholder='Speed'
                selected={`${playbackSpeed}x`}
                onSelect={onAdjustSpeed}
                icon={DropDown}
                className={'VisualizerControls__SpeedButton'}
            />

        </div>
    );
};

export default VisualizerControls;