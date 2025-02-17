import clsx from 'clsx'
import { h, JSX } from 'preact'
import { Children, forwardRef } from 'preact/compat'

import { useAppearance } from '../hooks/use-appearance'
import { LoadingIcon } from './spinner'

export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  isSmall: boolean
  isMedium: boolean
  isLarge: boolean
  isFull: boolean
  isSecondary: boolean
  isLoading: boolean
  isPrimary: boolean
  isDanger: boolean
  isDefault: boolean
  isOutline: boolean
  isFloat: boolean
}

export const Button = forwardRef<HTMLButtonElement, Partial<ButtonProps>>(
  (
    {
      isPrimary = true,
      isMedium = true,
      isFull = true,
      isDanger,
      isOutline,
      isSecondary,
      isDefault,
      isLarge,
      isSmall,
      isLoading,
      children,
      disabled,
      isFloat,
      ...attributes
    },
    ref
  ) => {
    const { isFlat, isRounded } = useAppearance()

    const styles = clsx({
      ['tly-button']: true,
      ['tly-button--is-primary']: isPrimary,
      ['tly-button--is-secondary']: isSecondary,
      ['tly-button--is-default']: isDefault,
      ['tly-button--is-outline']: isOutline,
      ['tly-button--is-danger']: isDanger,
      ['tly-button--is-full']: isFull,
      ['tly-button--is-large']: isLarge,
      ['tly-button--is-medium']: isMedium,
      ['tly-button--is-small']: isSmall,
      ['tly-button--is-float']: isFloat,
      ['tly-button--is-flat']: isFlat,
      ['tly-button--is-rounded']: isRounded,
    })

    const classes = clsx(styles, attributes.className)

    return (
      <button
        {...attributes}
        className={classes}
        disabled={disabled || isLoading}
        ref={ref}
      >
        {isLoading && <LoadingIcon />}
        {Children.map(children, (child, i) => (
          <span key={i} className="tly-button__span" {...{ children: child }} />
        ))}
      </button>
    )
  }
)
