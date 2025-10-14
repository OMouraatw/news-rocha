import { useState, useId, memo, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Dumbbell, X } from 'lucide-react'
import IMG1 from './imgs/IMG_1.JPG'
import Reveal from './components/Reveal'
import './App.css'

// Overlay de pagamento
function PaymentOverlay({ open, onClose }) {
  useEffect(() => {
    // Evita rolagem de fundo quando o modal está aberto
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => (document.body.style.overflow = '')
  }, [open])

  if (!open) return null

  const mpLink = "https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=c252e39b2e5f4d0aaadc5be3f04c582e"
  const waNumber = "554396326466"
  const waMsg = encodeURIComponent(
    "Olá! Acabei de realizar o pagamento da assinatura da Newsletter Saizen School. Segue meu comprovante."
  )
  const waLink = `https://wa.me/${waNumber}?text=${waMsg}`

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Informações para pagamento"
    >
      <div className="relative w-full max-w-lg rounded-2xl border border-red-800/60 bg-gradient-to-b from-black via-red-950/40 to-black shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-gray-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-red-600"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="px-6 py-6 sm:px-8 sm:py-8">
          <h3 className="mb-3 text-center text-2xl font-extrabold tracking-widest text-white">
            PRÓXIMO PASSO: PAGAMENTO
          </h3>
          <p className="mb-6 text-center text-sm text-gray-300">
            Após realizar o pagamento, <span className="font-semibold text-white">envie o comprovante</span> para o número{' '}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-green-400 underline underline-offset-4 hover:text-green-300"
            >
              +55 43 9632-6466 (WhatsApp)
            </a>
            .
          </p>

          <div className="flex justify-center">
            <a
              href={mpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                IR AO PAGAMENTO
              </Button>
            </a>
          </div>

          <div className="mt-6 text-center text-xs text-gray-400">
            Em caso de dúvidas, fale com nosso suporte no WhatsApp.
          </div>
        </div>
      </div>
    </div>
  )
}

// Form isolado, com estado próprio e IDs únicos
const NewsletterForm = memo(function NewsletterForm({
  title = "QUERO EVOLUIR AGORA",
  idPrefix = "",
  onSuccess = () => {}
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    acceptTerms: false,
    acceptCommunications: false
  })
  const uid = useId()
  const termsId = `${idPrefix}terms-${uid}`
  const commsId = `${idPrefix}communications-${uid}`

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://ab332ae0d334.ngrok-free.app/inscrever", { // <- sem espaço inicial
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          NOME: formData.name,
          EMAIL: formData.email,
          PHONE: formData.phone
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Resposta do servidor:", data);

      // Mostra overlay de pagamento
      onSuccess()

      alert("Inscrição realizada com sucesso! Em breve, você receberá uma mensagem no WhatsApp. Verifique e prepare-se para a transformação!");
    } catch (error) {
      console.error("Erro ao enviar inscrição:", error);
      alert("Ocorreu um erro ao enviar sua inscrição. Tente novamente mais tarde.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <Input
        type="text"
        placeholder="Digite seu nome"
        value={formData.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
        className="bg-black/20 border-red-800 text-white placeholder:text-gray-400"
        required
      />
      <Input
        type="email"
        placeholder="Digite seu email"
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        className="bg-black/20 border-red-800 text-white placeholder:text-gray-400"
        required
      />
      <Input
        type="tel"
        placeholder="Digite seu telefone"
        value={formData.phone}
        onChange={(e) => handleInputChange('phone', e.target.value)}
        className="bg-black/20 border-red-800 text-white placeholder:text-gray-400"
        required
      />

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox
            id={termsId}
            checked={formData.acceptTerms}
            onCheckedChange={(checked) => handleInputChange('acceptTerms', !!checked)}
            className="border-red-800 data-[state=checked]:bg-green-600 cursor-pointer"
            required
          />
          <label htmlFor={termsId} className="text-sm text-gray-300 cursor-pointer">
            Aceito os Termos e Condições e autorizo o uso de meus dados
          </label>
        </div>
        {/* <div className="flex items-center space-x-2">
          <Checkbox
            id={commsId}
            checked={formData.acceptCommunications}
            onCheckedChange={(checked) => handleInputChange('acceptCommunications', !!checked)}
            className="border-red-800 data-[state=checked]:bg-green-600"
          />
          <label htmlFor={commsId} className="text-sm text-gray-300">
            Aceito receber comunicações sobre produtos e treinos
          </label>
        </div> */}
      </div>
      <Button 
        type="submit" 
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
      >
        {title}
      </Button>
    </form>
  )
})

function App() {
  const [showPayment, setShowPayment] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-red-950 to-black text-white">
      {/* Overlay de Pagamento */}
      <PaymentOverlay open={showPayment} onClose={() => setShowPayment(false)} />

      {/* Hero Section */}
      <section className="relative isolate min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-red-900/30 to-black/50 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna esquerda */}
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-widest">
              NEWSLETTER
              <span className="block text-red-500">SAIZEN SCHOOL</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-300 font-medium">
              Eleve seus treinos a outro nível com dicas exclusivas de musculação, exercícios estratégicos e métodos avançados. Assine nosso newsletter agora!
            </p>

            <div className="flex flex-col items-center space-y-4 cursor-pointer">
              <NewsletterForm
                title="QUERO EVOLUIR AGORA"
                idPrefix="hero-"
                onSuccess={() => setShowPayment(true)}
              />

              {/* Botão de suporte com Reveal */}
              <Reveal as="div" once delay={200} className="w-full flex justify-center">
                <a
                  href="https://wa.me/554396326466"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-4 py-2 bg-blue-600/70 hover:bg-blue-600/30 text-gray-200 rounded-lg transition cursor-pointer shadow-sm"
                >
                  Com problemas? Entre em contato com o nosso suporte
                </a>
              </Reveal>
            </div>
          </div>

          {/* Coluna direita (imagem) */}
          <Reveal as="div" className="flex justify-center lg:justify-end" once delay={120}>
            <div className="relative">
              <div className="w-80 h-96 md:w-96 md:h-[500px] bg-gradient-to-br from-red-900/30 to-black/50 border-2 border-red-800/50 rounded-lg overflow-hidden">
                <img
                  src={IMG1}
                  alt="Treino"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      
      {/* Descrição */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-white">
            RECEBA CONTEÚDO HARDCORE TODA SEMANA
          </h2>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              Descubra o poder da informação aplicada à musculação com a Saizen School. Nosso conteúdo é pensado para quem busca evoluir de forma consciente.
            </p>
            <p>
              Receba análises detalhadas de artigos, modelos e métodos científicos, traduzidos em dicas práticas para otimizar seus treinos e resultados.
            </p>
            <p>
              Aprenda passo a passo, de forma didática, como aplicar estratégias eficientes no seu dia a dia. Assine nosso newsletter e transforme seu conhecimento em performance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-4 bg-gradient-to-b from-red-950 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white">
            PARE DE TREINAR COMO AMADOR
          </h2>
        <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Junte-se aos atletas que levam o treino a sério e transformam seus corpos com ciência e intensidade.
          </p>
          <div className="flex justify-center">
            <NewsletterForm
              title="QUERO SER UM ATLETA DE ELITE"
              idPrefix="cta-"
              onSuccess={() => setShowPayment(true)}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-red-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2025 SAIZEN SCHOOL - TODOS OS DIREITOS RESERVADOS
          </p>
          <p className="text-gray-500 text-xs mt-2">
            AO NAVEGAR NESTE SITE VOCÊ CONCORDA COM A NOSSA POLÍTICA DE PRIVACIDADE
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
