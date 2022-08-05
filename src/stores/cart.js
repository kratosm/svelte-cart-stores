import { derived, writable, readable } from "svelte/store";

export const taxes = readable(0.21);
export const cartContents = writable([]);

export const add = (product) => {
    cartContents.update(cart => [...cart, product]);
}

export const remove = (id) => {
    cartContents.update(cart => cart.filter(p => p.id !== id));
}

export const clear = () => {
    cartContents.set([]);
};

export const productInCart = derived(
    cartContents,
    ($cartContents) => {
        return id => $cartContents.filter(p => p.id === id)[0];
    }
);

export const amountProductInCart = derived(
    cartContents,
    ($cartContents) => {
        return id => $cartContents.filter(p => p.id === id).length;
    }
);

export const totalPrice = derived(
    cartContents,
    ($cartContents) => {
        return $cartContents.reduce((total, p) => total + p.price, 0);
    }
);

export const amountTaxes = derived(
    [cartContents, taxes],
    ([$cartContents, $taxes]) => {
        return $cartContents.reduce((total, product) => total + product.price * $taxes, 0);
    }
);

export const totalPriceWithTaxes = derived(
    [cartContents, taxes],
    ([$cartContents, $taxes]) => {
        return $cartContents.reduce((total, p) => total + p.price, 0) * (1 + $taxes);
    }
);
