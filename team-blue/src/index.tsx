import * as React from 'react';
import { PiletApi } from 'app-shell';
import { BuyButton } from './BuyButton';
import { BasketInfo } from './BasketInfo';

interface BasketInfoExtension {}

interface BuyButtonExtension {
  item: string;
}

export function setup(app: PiletApi) {
  app.setData('some-data', 4);
  const connectBasket = app.createState({
    state: {
      items: [],
    },
    actions: {
      addToCart(dispatch, item: string) {
        app.setData('some-data', 5);
        dispatch(state => ({
          ...state,
          items: [...state.items, item],
        }));
      },
    },
  });

  app.registerExtension<BuyButtonExtension>(
    'buy-button',
    connectBasket(({ actions, params }) => <BuyButton addToCart={actions.addToCart} item={params.item} />),
  );

  app.registerExtension<BasketInfoExtension>(
    'basket-info',
    connectBasket(({ state }) => <BasketInfo count={state.items.length} />),
  );
}
