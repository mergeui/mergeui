/**
 * Copyright (c) Paymium.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root of this projects source tree.
 */

import { forwardRef, ForwardRefRenderFunction, type ComponentType } from 'react';

export const withReactive = <Ref, P = {}>(
  Comp: ForwardRefRenderFunction<Ref, P>
) => forwardRef(Comp);
