import React from 'react';
import { ThemeProvider } from 'styled-components';

function Wrappers({ mocks = [], children }: { mocks: any[], children: React.ReactNode }) {
  return <>{children}</>;
}

export default Wrappers;
