'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { PropsWithChildren, useContext, useRef } from 'react';
import { usePathname } from 'next/navigation'; // Import your pathname utility
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

function FrozenRouter(props: PropsWithChildren<{}>) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

export default function Layout(props: PropsWithChildren<{}>) {
  const pathname = usePathname();

  return (
    <AnimatePresence
      initial={false}
      mode='wait'
      onExitComplete={() => {
        window.scrollTo({ top: 0 });
      }}
    >
      <motion.div
        key={pathname}
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '100%' }}
        transition={{ duration: 0.4 }}
      >
        <FrozenRouter>{props.children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}
