import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthorized } from './mock';

export function GuestGuard({ children }: PropsWithChildren) {
  if (!isAuthorized) {
    return <Navigate to="/login" />;
  }
  return children;
}
