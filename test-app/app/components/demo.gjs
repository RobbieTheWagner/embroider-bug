import TraditionalTO from './traditional-to';
import ModernTOJS from './modern-to-js';
import ModernTOTS from './modern-to-ts';

import TraditionalClassed from './traditional-classed';
import ModernClassedJS from './modern-classed-js';
import ModernClassedTS from './modern-classed-ts';

<template>
  <div style="display: grid; gap: 1rem;">
    <p>
      The Page must be refreshed after each error
    </p>
    <TraditionalTO />
    <ModernTOJS />
    <ModernTOTS />

    <TraditionalClassed />
    <ModernClassedJS />
    <ModernClassedTS />
  </div>
</template>
