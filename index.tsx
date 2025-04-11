
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function HomePage() {
  const [pedido, setPedido] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-red-100 text-gray-800">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Relevanck Services</h1>
        <p className="text-lg mt-2">Sabor que surpreende. Rápido, moderno, com alma angolana!</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6 px-6 md:px-20 py-10">
        <Card className="rounded-2xl shadow-xl bg-white">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">🍔 Cardápio</h2>
            <ul className="space-y-2">
              <li>Hambúrguer Clássico</li>
              <li>Cafraia com Frango</li>
              <li>Batata Frita Especial</li>
              <li>Café Gelado & Capuccino</li>
              <li>Sucos Naturais</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-xl bg-white">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">📦 Encomendas Online</h2>
            <Input 
              placeholder="Digite seu pedido aqui..." 
              value={pedido} 
              onChange={(e) => setPedido(e.target.value)} 
              className="mb-4"
            />
            <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Fazer Pedido</Button>
          </CardContent>
        </Card>
      </section>

      <section className="bg-white py-10 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-4">🙋 Sobre Nós</h2>
        <p>
          Na Relevanck, combinamos o melhor do fast food moderno com um toque local. Nossos pratos como a Cafraia são feitos com amor, rapidez e sabor autêntico. Sinta-se em casa, seja para um café rápido ou uma refeição completa.
        </p>
      </section>

      <footer className="text-center py-6 bg-gray-100 mt-10">
        <p>📞 Contato: +244 999 000 000 | 📧 info@relevanck.co.ao</p>
        <p className="text-sm mt-2">&copy; 2025 Relevanck. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
