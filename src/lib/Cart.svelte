<script>
  import {
      clear,
      cartContents,
      totalPrice,
      totalPriceWithTaxes,
      amountTaxes,
      taxes,
  } from "../stores/cart.js";
  import ContainerTable from "./ContainerTable.svelte";
</script>

<ContainerTable>
  <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
    {#if !$cartContents.length}
      <tr>
        <td colspan="2" class="py-2 px-6 text-sm font-medium bg-red-400 text-white text-center whitespace-nowrap dark:text-white">
          El carrito está vacío
        </td>
      </tr>
    {:else}
      <tr>
        <td class="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Precio
        </td>
        <td class="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {($totalPrice).toFixed(2)}€
        </td>
      </tr>
      <tr>
        <td class="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Artículos en el carrito
        </td>
        <td class="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {$cartContents.length}
        </td>
      </tr>
      <tr>
        <td class="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
          % Impuestos
        </td>
        <td class="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {$taxes * 100}%
        </td>
      </tr>
      <tr>
        <td class="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Impuestos
        </td>
        <td class="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {($amountTaxes).toFixed(2)}€
        </td>
      </tr>
      <tr>
        <td class="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Total
        </td>
        <td class="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {($totalPriceWithTaxes).toFixed(2)}€
        </td>
      </tr>
      <tr>
        <td colspan="2" class="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
          <button
            class="px-4 py-2 bg-red-50 outline-none border border-red-100 rounded text-red-500 font-medium active:scale-95 hover:bg-red-400 hover:text-white focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"
            on:click={clear}
          >
            Vaciar carrito
          </button>
        </td>
      </tr>
    {/if}
  </tbody>
</ContainerTable>
