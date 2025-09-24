'use client';
import { ArrowRightIcon,
         KeyIcon,
         AtSymbolIcon,
        ExclamationCircleIcon, } from '@heroicons/react/20/solid';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';

const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage,formAction,isPending] = useActionState(authenticate,undefined);
  return (
    <form action={formAction}>
        <div className='bg-[#F1F2F1] px-4 py-4 lg:py-5 rounded-lg'>
          <h1 className='mb-2'>Please log in to continue</h1>
          <div className='w-full'>
            <div>
              <label htmlFor="email" className='text-xs font-medium'>Email</label>
              <div className='relative'>
                <input id="email" type="email" name='email'
                placeholder='Enter your email address' 
                className='border-1 border-gray-500 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm' />
                <AtSymbolIcon className='absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 h-4 w-4 peer-focus:text-gray-900'/>
              </div>
            </div>
            <div className='mt-5'>
              <label htmlFor="password" className='text-xs font-medium'>Password</label>
              <div className='relative'>
                <input id="password" type="password" name='password'
                placeholder='Enter password' 
                className='border-1 border-gray-500 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm' />
                <KeyIcon className='absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 h-4 w-4 peer-focus:text-gray-900' />
              </div>
            </div>
          </div>
          <input type="hidden" name="redirectTo" value={callbackUrl} />
          <button aria-disabled={isPending} className='mt-4 mb-2 w-full flex flex-row items-center 
          bg-[#0F5813] px-2 py-2 text-white rounded-lg cursor-pointer'>
            Log in
            <ArrowRightIcon className='ml-auto h-5 w-5'/>
          </button>
          <div className='flex h-4 items-end space-x-1' aria-live='polite' aria-atomic='true'>
            {
              errorMessage && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
              )
            }
          </div>
        </div>
        
    </form>
  );
}

export default LoginForm;
