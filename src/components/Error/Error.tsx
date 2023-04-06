import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { motion } from 'framer-motion';
import { suspenseTitle } from '@/common/animations';
import { Header } from '@/components';

export const Error = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <Header />
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={suspenseTitle}
          style={{ color: 'red', textAlign: 'center' }}
        >
          {error.status} : {error?.statusText}
        </motion.h2>
      </div>
    );
  }

  throw error;
};
