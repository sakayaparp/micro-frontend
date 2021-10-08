import * as React from 'react';

export interface YellowPageProps {
  BasketInfo: React.ComponentType;
}

export const YellowPage: React.FC<YellowPageProps> = ({ BasketInfo }) => {
  return (
    <>
      <h1>Hello Yellow Team!!!</h1>
      <BasketInfo />
    </>
  );
};
