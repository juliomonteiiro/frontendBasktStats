import { Toaster } from 'react-hot-toast';

const ToastProvider = () => (
  <Toaster
    position="top-center"
    toastOptions={{
      style: {
        background: '#333',
        color: '#fff',
      },
      success: {
        iconTheme: {
          primary: 'green',
          secondary: 'white',
        },
      },
    }}
  />
);

export default ToastProvider;
