import store, { wrapper } from '@redux/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import '../styles/globals.css';

export function App({ Component, pageProps }: AppProps) {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default wrapper.withRedux(App);
