import { useRouteError } from 'react-router-dom';
import { motion } from 'framer-motion';
import { suspenseTitle } from '@/common/animations';
import { Header } from '@/components';

export const RootError = () => {
  const error = useRouteError();

  if (error instanceof Error) {
    return (
      <div>
        <Header />
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={suspenseTitle}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          {error instanceof Error && error.message}
        </motion.h2>
      </div>
    );
  }

  return null;
};
