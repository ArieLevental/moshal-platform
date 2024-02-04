'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.',
    }),
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: 'Please enter a valid URL.' }),
      })
    )
    .optional(),
});

// This can come from your database or API.
const defaultValues = {
  bio: 'I own a computer.',
};

const formFields = [
  {
    name: 'username',
    label: 'Username',
    placeholder: 'shadcn',
    description:
      'This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.',
    type: 'input',
  },
  {
    name: 'bio',
    label: 'Bio',
    placeholder: 'Tell us a little bit about yourself',
    description:
      'You can @mention other users and organizations to link to them.',
    type: 'textarea',
  },
];

export function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  function onSubmit(data) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* {formFields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  {field.type === "input" ? (
                    <Input placeholder={field.placeholder} {...formField} />
                  ) : (
                    <Textarea
                      placeholder={field.placeholder}
                      className="resize-none"
                      {...formField}
                    />
                  )}
                </FormControl>
                <FormDescription>{field.description}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ))} */}
        {/* Todo: add profile fields  */}
        <Button type="submit">Add New profile</Button>
      </form>
    </Form>
  );
}

export function NewJobDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="default"
            className=" opacity-55 m-4 h-18 w-15 rounded-full"
          >
            +
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Job</DialogTitle>
            <DialogDescription>description</DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2"></div>
            <ProfileForm />
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
