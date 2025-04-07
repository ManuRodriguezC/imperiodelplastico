import type React from "react";
import { useState } from "react";

export default function FormContact() {

  const [controlSend, setControlSend] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())
    setLoading(true)
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
      })

      const result = await response.json()
      if (result.message === "Correo Enviado") {
        setControlSend(true)
        form.reset()
      }
    } catch (e) {
      console.log("No se ha enviado el correo")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-5 rounded-xl shadow-2xl w-auto lg:w-[500px]">
      <p className="text-xl color-imperio font-semibold border-b-[1px] border-red-500">
        Déjanos tus datos de contacto
      </p>
      <div className="flex flex-col">
        <label className="text-gray-800 text-sm" htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" className="border-[1px] border-gray-200 rounded-md p-2" required />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-800 text-sm" htmlFor="telefono">Teléfono</label>
        <input type="text" id="telefono" name="telefono" className="border-[1px] border-gray-200 rounded-md p-2" required />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-800 text-sm" htmlFor="email">Email</label>
        <input type="email" id="email" name="email" className="border-[1px] border-gray-200 rounded-md p-2" required />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-800 text-sm" htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" className="border-[1px] border-gray-200 rounded-md p-2" required />
      </div>
      {
        controlSend &&
        <p className="text-center">Hemos recibido tu correo. Muy pronto nos pondremos en contacto contigo.</p>
      }
      <button
        type="submit"
        disabled={loading}
        className="bg-imperio rounded-md text-white cursor-pointer mt-4 p-2">
        {
          loading ? "Enviando" : "Enviar"
        }
      </button>
    </form>
  );
}
