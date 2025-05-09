import { z } from 'zod';

export const registerValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Full Name is required',
    }),

    email: z.string({
      required_error: 'Email is required',
    }).email('Invalid email format'),

    password: z.string({
      required_error: 'Password is required',
    }).min(6, 'Password must be at least 6 characters'),

    profilePhoto: z.string().optional(),
  }),
});


const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

const changePasswordValidationSchema = z.object({
  body: z.object({
    oldPassword: z.string({
      required_error: 'Old password is required',
    }),
    newPassword: z.string({ required_error: 'Password is required' }),
  }),
});

const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh token is required!',
    }),
  }),
});

export const AuthValidation = {
  registerValidationSchema,
  loginValidationSchema,
  changePasswordValidationSchema,
  refreshTokenValidationSchema,
};
