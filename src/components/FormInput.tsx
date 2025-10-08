import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type FormInputProps } from '../utils';

function FormInput({ label, name, type, defaultValue }: FormInputProps) {
  return (
    <div className='mb-2'>
      <Label
        htmlFor={name}
        className='capitalize'>
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default FormInput;
