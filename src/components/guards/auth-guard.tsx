import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthorized } from './mock';

export function AuthGuard({ children }: PropsWithChildren) {
  if (isAuthorized) {
    return <Navigate to="/" />;
  }

  return children;
}
