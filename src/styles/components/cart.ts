import { styled } from '..'

export const DrawerTrigger = styled('div', {
  position: 'relative',

  button: {
    fontSize: 0,
    borderRadius: 6,
    cursor: 'pointer',
    border: 'none',
    padding: '0.75rem',
    backgroundColor: '$gray800',
    transition: 'background-color 0.2s',

    '&:hover': {
      backgroundColor: '$gray700',
    },
  },
})

export const QuantityNotification = styled('span', {
  backgroundColor: '$green500',
  border: '3px solid $gray900',
  boxSizing: 'content-box',
  borderRadius: '100%',

  width: '1.5rem',
  height: '1.5rem',
  lineHeight: '1.5rem',
  fontSize: '0.875rem',
  fontWeight: 'bold',

  display: 'grid',
  placeItems: 'center',

  position: 'absolute',
  right: -10,
  top: -10,
})

export const DrawerCloseButton = styled('button', {
  fontSize: 0,
  border: 'none',
  backgroundColor: 'transparent',
  position: 'absolute',
  right: '1.5rem',
  top: '1.5rem',
})

export const DrawerContent = styled('div', {
  width: '100%',
  height: '100%',
  backgroundColor: '$gray800',
  padding: '3rem',
  paddingTop: '4.5rem',
  paddingRight: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '> strong': {
    fontSize: '$lg',
  },
})

export const CartProductList = styled('div', {
  marginTop: '2rem',
  marginBottom: '4rem',
  marginRight: '0.25rem',
  paddingRight: '2.75rem',
  overflow: 'auto',
  flex: '1',

  ul: {
    display: 'grid',
    gap: '1.5rem',
  },

  li: {
    display: 'flex',
  },

  '&::-webkit-scrollbar': {
    width: '8px',
    height: '8px',
    backgroundColor: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '2px',
    backgroundColor: '$gray900',
  },
  '&::-webkit-scrollbar-corner': {
    backgroundColor: 'transparent',
  },
})

export const ImageContainer = styled('div', {
  width: 100,
  height: 100,
  display: 'grid',
  placeItems: 'center',
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  padding: '0.25rem',
  overflow: 'hidden',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
})

export const ProductInfo = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  marginLeft: '1.25rem',

  span: {
    display: 'block',
    marginBottom: '0.5rem',
    color: '$gray300',
  },

  button: {
    width: 'fit-content',
    fontWeight: 'bold',
    color: '$green500',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'color 0.2s',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const CartSummary = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  paddingRight: '3rem',

  '> div': {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: '0.5rem',

    strong: {
      fontWeight: 'bold',
    },

    '&:first-child': {
      strong: {
        fontSize: '1.125rem',
      },
    },

    '&:last-child': {
      alignItems: 'flex-end',

      span: {
        fontSize: '1.125rem',
      },

      strong: {
        fontSize: '1.5rem',
      },
    },
  },
})

export const CheckoutButton = styled('button', {
  width: 'calc(100% - 3rem)',
  display: 'block',
  marginTop: '3rem',
  marginRight: '3rem',
  backgroundColor: '$green500',
  border: 'none',
  color: '$white',
  borderRadius: 8,
  padding: '1.25rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '$md',
  transition: 'background-color 0.2s',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },
})

export const EmptyBag = styled('div', {
  display: 'grid',
  placeItems: 'center',
  flex: '1',
  paddingRight: '3rem',
})
