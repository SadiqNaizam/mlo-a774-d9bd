import React from 'react';
import type { Control } from 'react-hook-form';
import type { z } from 'zod';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// This schema defines the shape of the data this component expects.
// It should align with the schema in the parent component (LoginCard).
const loginFormSchema = z.object({
  username: z.string(),
  password: z.string(),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

interface FormProps {
  control: Control<LoginFormValues>;
}

const Form: React.FC<FormProps> = ({ control }) => {
  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="Username" aria-label="Username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                type="password"
                placeholder="Password"
                aria-label="Password"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default Form;
