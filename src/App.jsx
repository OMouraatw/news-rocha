import { useState, useId, memo } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Dumbbell } from 'lucide-react'
import IMG1 from './imgs/IMG_1.JPG'
import Reveal from './components/Reveal'
import './App.css'

// Form isolado, com estado próprio e IDs únicos
const NewsletterForm = memo(function NewsletterForm({ title = "QUERO EVOLUIR AGORA", idPrefix = "" }) {
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
    const response = await fetch(" https://12c376d4e2bf.ngrok-free.app/inscrever", {
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
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-red-950 to-black text-white">
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

            {/* ✅ Renderize o formulário FORA de um wrapper que remonta os filhos */}
            <div className="flex flex-col items-center space-y-4 cursor-pointer">
              <NewsletterForm title="QUERO EVOLUIR AGORA" idPrefix="hero-" className='cursor-pointer'/>

              {/* Botão de suporte com Reveal */}
              <Reveal as="div" once delay={200} className="w-full flex justify-center">
                <a
                  href="https://wa.me/5543996326466"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-4 py-2 bg-blue-600/70 hover:bg-blue-600/30 text-gray-200 rounded-lg transition cursor-pointer shadow-sm"
                >
                  Com problemas? Entre em contato com o nosso suporte
                </a>
              </Reveal>
            </div>

          </div>

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

        
          {/* Coluna direita (imagem/placeholder) */}
          {/* <Reveal as="div" className="flex justify-center lg:justify-end" once delay={120}>
            <div className="relative">
              <div className="w-80 h-96 md:w-96 md:h-[500px] bg-gradient-to-br from-red-900/30 to-black/50 border-2 border-red-800/50 rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <Dumbbell className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg font-medium">Imagem</p>
                  <p className="text-gray-500 text-sm mt-2">Placeholder</p>
                </div>
              </div>
            </div>
          </Reveal> */}
        </div>
      </section>
      {/* Imagem lateral entre seções */}
      {/* <section className="relative px-4 -mt-48 md:-mt-48 lg:-mt-120 mb-35 md:-mb-35 lg:-mb-20 z-20">
        <div className="max-w-7xl mx-auto flex justify-end">
          <div className="relative">
            <div className="w-80 h-96 md:w-96 md:h-[500px] bg-gradient-to-br from-red-900/30 to-black/50 border-2 border-red-800/50 rounded-lg flex items-center justify-center">
              <div className="text-center p-6">
                <Dumbbell className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <p className="text-gray-400 text-lg font-medium">
                  Imagem treino
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Benefits Section
      <section className="py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <Reveal
      as="h2"
      className="text-4xl md:text-5xl font-black text-center mb-16 text-white tracking-widest"
      once
    >
      O QUE VOCÊ VAI RECEBER
    </Reveal>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Reveal once delay={0}>
        <Card className="bg-black/40 border-red-800 hover:border-green-600 transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-6 text-center">
            <Dumbbell className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white tracking-widest">Protocolos de Treino</h3>
            <p className="text-gray-300">Metodologias testadas e aprovadas para máxima hipertrofia e ganho de força</p>
          </CardContent>
        </Card>
      </Reveal>

      <Reveal once delay={120}>
        <Card className="bg-black/40 border-red-800 hover:border-green-600 transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-6 text-center">
            <Target className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">Nutrição Esportiva</h3>
            <p className="text-gray-300">Estratégias alimentares precisas para potencializar seus resultados</p>
          </CardContent>
        </Card>
      </Reveal>

      <Reveal once delay={240}>
        <Card className="bg-black/40 border-red-800 hover:border-green-600 transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-6 text-center">
            <Zap className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">Lorem Ipsum</h3>
            <p className="text-gray-300">Reviews e recomendações baseadas em evidências científicas</p>
          </CardContent>
        </Card>
      </Reveal>

      <Reveal once delay={360}>
        <Card className="bg-black/40 border-red-800 hover:border-green-600 transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-6 text-center">
            <Flame className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">Técnicas Avançadas</h3>
            <p className="text-gray-300">Métodos de intensificação e periodização para quebrar plateaus</p>
          </CardContent>
        </Card>
      </Reveal>

      <Reveal once delay={480}>
        <Card className="bg-black/40 border-red-800 hover:border-green-600 transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-6 text-center">
            <Brain className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">Lorem Ipsum</h3>
            <p className="text-gray-300">Psicologia do treino e estratégias mentais para superação</p>
          </CardContent>
        </Card>
      </Reveal>

      <Reveal once delay={600}>
        <Card className="bg-black/40 border-red-800 hover:border-green-600 transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-6 text-center">
            <Trophy className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">Conteúdo Exclusivo</h3>
            <p className="text-gray-300">Vídeos, e-books e materiais premium para membros</p>
          </CardContent>
        </Card>
      </Reveal>
    </div>
  </div>
</section> */}

      {/* Content Description */}
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

      {/* Testimonials */}
      {/* <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white">
            VEJA AS TRANSFORMAÇÕES REAIS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-red-800">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 italic">
                  "Em 6 meses seguindo os protocolos da Saizen, ganhei 8kg de massa muscular limpa. Os treinos são intensos, mas os resultados são inegáveis!"
                </p>
                <p className="text-green-500 font-bold">Carlos Silva - Transformação Completa</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-red-800">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 italic">
                  "Finalmente quebrei meu plateau no supino. As técnicas de intensificação mudaram completamente meu treino."
                </p>
                <p className="text-green-500 font-bold">Marina Costa - Atleta Powerlifting</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-red-800">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 italic">
                  "A abordagem científica da nutrição me ajudou a definir sem perder massa. Conteúdo de altíssima qualidade."
                </p>
                <p className="text-green-500 font-bold">Rafael Santos - Fisiculturista</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-red-800">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 italic">
                  "O mindset de treino que aprendi aqui me fez superar limites que eu nem sabia que existiam. Mudou minha vida!"
                </p>
                <p className="text-green-500 font-bold">Ana Rodrigues - Crossfit Athlete</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-red-800">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 italic">
                  "Protocolos que realmente funcionam. Saí do básico e entrei no nível profissional de treino."
                </p>
                <p className="text-green-500 font-bold">Lucas Mendes - Personal Trainer</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-red-800">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 italic">
                  "Conteúdo direto, sem enrolação. Cada dica vale ouro para quem quer resultados reais."
                </p>
                <p className="text-green-500 font-bold">Thiago Oliveira - Bodybuilder</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-red-950 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white">
            PARE DE TREINAR COMO AMADOR
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Junte-se aos atletas que levam o treino a sério e transformam seus corpos com ciência e intensidade.
          </p>
          <div className="flex justify-center">
            <NewsletterForm title="QUERO SER UM ATLETA DE ELITE" idPrefix="cta-" />
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

