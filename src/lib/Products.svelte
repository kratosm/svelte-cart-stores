<script>
  import { products } from "../products.js";
  import ContainerTable from "./ContainerTable.svelte";
  import Product from "./Product.svelte";
</script>

<ContainerTable>
  <thead class="bg-gray-100 dark:bg-gray-700">
    <tr>
      <th scope="col" class="py-2 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
        Producto
      </th>
      <th scope="col" class="py-2 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
        Precio
      </th>
      <th scope="col" class="py-2 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
        En carrito
      </th>
      <th scope="col" class="p-2">
        <span class="sr-only">Acciones</span>
      </th>
    </tr>
  </thead>
  <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
  {#each products as product}
    <Product product={product} />
  {/each}
  </tbody>
</ContainerTable>
