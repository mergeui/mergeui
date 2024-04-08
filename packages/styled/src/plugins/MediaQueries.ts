/**
 * Copyright (c) Paymium.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root of this projects source tree.
 */

import type { CrossedstyleValues, Plugin } from '../types';
import { convertKeyToCss, normalizeUnitPixel } from './utils';

export interface CrossedMediaQueriesPlugin<K extends string | number | symbol> {
  media?: Partial<Record<K, CrossedstyleValues>>;
}

export const MediaQueriesPlugin = <B extends Record<string, number>>(
  breakpoints: B
): Plugin<CrossedMediaQueriesPlugin<keyof B>> => {
  return {
    name: 'MediaQueriesPlugin',
    test: '^media$',
    apply: function MediaQueriesApply({ styles, addClassname, props, isWeb }) {
      let Dimensions: any;
      let Platform: any;
      // props only exists at runtime
      // Hack for load react-native only at runtime, not buildtime
      if (props) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        Dimensions = require('react-native').Dimensions;
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        Platform = require('react-native').Platform;
      }
      Object.entries(styles).forEach(([key, values]) => {
        const breakpointsValue = normalizeUnitPixel(
          'width',
          breakpoints[key],
          isWeb
        );
        if (values) {
          Object.entries(values).forEach(([keyProperty, valueProperty]) => {
            if (Platform && Dimensions && Platform.OS !== 'web') {
              // apply style for native
              if (breakpoints[key] < Dimensions.get('window').width) {
                addClassname({
                  body: {
                    [``]: {
                      [keyProperty]: valueProperty,
                    },
                  },
                });
              }
            } else {
              // apply style for web
              const valueNormalized = normalizeUnitPixel(
                keyProperty,
                valueProperty,
                isWeb
              );
              const body = {
                [`${key}:${convertKeyToCss(keyProperty)}-[${valueNormalized}]`]:
                  {
                    [keyProperty]: valueNormalized,
                  },
              };
              addClassname({
                wrapper: (str) =>
                  `@media (min-width: ${breakpointsValue}) { ${str} }`,
                body,
              });

              if (props && typeof window !== 'undefined') {
                if (breakpoints[key] < Dimensions.get('window').width) {
                  addClassname({ body });
                }
              }
            }
          });
        }
      });
    },
  };
};
