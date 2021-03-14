import React, {
  forwardRef,
  InputHTMLAttributes,
  useCallback,
  useRef,
} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

function Input(
  { label, name, ...rest }: InputProps,
  ref: React.LegacyRef<HTMLInputElement> | undefined
) {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input ref={ref} type="text" {...rest} />
    </div>
  );
}

export default forwardRef<HTMLInputElement, InputProps>(Input);
