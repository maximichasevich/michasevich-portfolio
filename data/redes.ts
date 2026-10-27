/**
 * Redes y perfiles públicos. Es el único lugar donde se configuran: los
 * usan el pie de página, la página "Sobre mí" y los datos para Google.
 *
 * Para agregar Instagram cuando lo tengas, completá `url` (por ejemplo
 * "https://www.instagram.com/tu-usuario"). Si una red queda con url vacía,
 * no se muestra en ningún lado.
 */
export type Red = {
  nombre: string
  url: string
}

export const redes: Red[] = [
  {
    nombre: "LinkedIn",
    url: "https://www.linkedin.com/in/maximiliano-michasevich",
  },
  { nombre: "GitHub", url: "https://github.com/maximichasevich" },
  { nombre: "Instagram", url: "" },
]

/** Solo las redes que tienen dirección cargada. */
export const redesActivas = redes.filter((r) => r.url !== "")
