/**
 * Copyright (c) Paymium.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root of this projects source tree.
 */

'use client';

import { useTranslation } from 'react-i18next';
import { TemplatePrimitive } from '../../templatePrimitive';

export default function CreateBadge() {
  const { t } = useTranslation();
  return (
    <TemplatePrimitive
      title="Tabs"
      description={t(
        'A React component that helps you build accessible tabs, by providing keyboard interactions and ARIA attributes described in the WAI-ARIA Tab Panel Design Pattern.'
      )}
      params={[]}
      return={[]}
      types={[]}
      anatomy={`// coming soon`}
      example={`// coming soon`}
      scope={{}}
    />
  );
}
