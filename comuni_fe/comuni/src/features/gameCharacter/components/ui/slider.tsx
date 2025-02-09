import React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  onChange: (value: number) => void;
  id?: string;
}

const Slider: React.FC<SliderProps> = ({ min, max, step, defaultValue, onChange, id }) => {
  return (
    <SliderPrimitive.Root
      className="relative flex items-center select-none touch-none w-full h-5"
      defaultValue={[defaultValue]}
      max={max}
      min={min}
      step={step}
      onValueChange={(values) => {
        if (values.length > 0) {
          onChange(values[0]);
        }
      }}
      {...(id ? { id } : {})}
    >
      <SliderPrimitive.Track className="bg-slate-100 relative grow rounded-full h-[3px]">
        <SliderPrimitive.Range className="absolute bg-slate-900 rounded-full h-full" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className="block w-5 h-5 bg-white border-2 border-slate-900 rounded-full hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
        aria-label="Volume"
      />
    </SliderPrimitive.Root>
  );
};

export default Slider;
