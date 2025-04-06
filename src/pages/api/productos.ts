import { products } from "../../dataSources/productos";

export function GET() {
  return new Response(JSON.stringify(products), {
    headers: {'Content-Type': 'application/json'}
  })
}