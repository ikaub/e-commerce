export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    if (existingCartItem) {
        return cartItems.map(
            cartItem => cartItem.id === cartItemToAdd.id ?
                {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        );
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.filter(item => item.id !== cartItemToRemove.id);
};

export const decreaseItemQuantity = (cartItems, cartItemToDecrease) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToDecrease.id);
    if (existingCartItem.quantity === 1)
        return cartItems.filter(item => item.id !== cartItemToDecrease.id);
    return cartItems.map(item => item.id === cartItemToDecrease.id ?
        {...item, quantity: item.quantity - 1}
        : item
    );
};