import {
  ExistingProvider,
  forwardRef,
  Type,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';


export function ControlValueAccessorProviderFactory(type: Type<any>): ExistingProvider {
  return {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-forward-ref
    useExisting: forwardRef(() => type),
    multi: true,
  };
}

/**
 * Define the allowed theme types
 */
export type TsStyleThemeTypes
  = 'primary'
  | 'accent'
  | 'warn'
  ;


/**
 * An array of the allowed {@link TsStyleThemeTypes} for checking values
 */
export const tsStyleThemeTypesArray: TsStyleThemeTypes[] = ['primary', 'accent', 'warn'];


