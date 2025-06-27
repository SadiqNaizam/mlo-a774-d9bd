'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form as ShadcnForm } from '@/components/ui/form';
import Form from './Form';
import PrimaryButton from './PrimaryButton';
import SignupLink from './SignupLink';

const formSchema = z.object({
  username: z.string().min(1, { message: 'Username is required.' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

const LoginCard: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log('Login attempt with:', values);
    setIsLoading(true);
    setTimeout(() => {
      console.log('API call finished.');
      setIsLoading(false);
      // In a real app, you would handle success/error and maybe reset the form.
      // form.reset();
    }, 1500);
  };

  return (
    <Card className="w-96 bg-card text-card-foreground rounded-md shadow-lg border">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold tracking-tight">
          Log in
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ShadcnForm {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Form control={form.control} />
            <PrimaryButton type="submit" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Log in'}
            </PrimaryButton>
          </form>
        </ShadcnForm>
        <SignupLink className="mt-6" />
      </CardContent>
    </Card>
  );
};

export default LoginCard;