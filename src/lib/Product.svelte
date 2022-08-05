<script>
  import {
      add, remove, productInCart, amountProductInCart,
  } from "../stores/cart.js";

  export let product;
</script>

<tr>
  <td class="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
    {product.name}
  </td>
  <td class="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
    {product.price}€
  </td>
  <td class="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
    {$amountProductInCart(product.id)}
  </td>
  <td class="py-2 px-6 text-sm font-medium text-right whitespace-nowrap">
    <button
      class="px-4 py-2 bg-indigo-50 outline-none border border-indigo-100 rounded text-indigo-500 font-medium active:scale-95 hover:bg-indigo-400 hover:text-white focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"
      on:click={() => add(product)}
    >
      Añadir producto
    </button>
    {#if $productInCart(product.id)}
      <button
        class="px-2 py-2 bg-red-50 outline-none border border-red-100 rounded text-red-500 font-medium active:scale-95 hover:bg-red-400 hover:text-white focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"
        on:click={() => remove(product.id)}
      >
        Eliminar
      </button>
    {/if}
  </td>
</tr>
