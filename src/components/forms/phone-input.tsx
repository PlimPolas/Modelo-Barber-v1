import type { TextInputProps } from './text-input';
import { TextInput } from './text-input';

export function PhoneInput(props: Omit<TextInputProps, 'autoComplete' | 'inputMode' | 'type'>) {
  return <TextInput type="tel" inputMode="tel" autoComplete="tel" {...props} />;
}
