import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Dumbbell, Zap, Target, Trophy, Brain, Flame } from 'lucide-react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    acceptTerms: false,
    acceptCommunications: false
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Aqui você adicionaria a lógica de envio do formulário
    alert('Inscrição realizada com sucesso! Prepare-se para a transformação!')
  }

  const NewsletterForm = ({ title = "QUERO EVOLUIR AGORA" }) => (
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
        placeholder="Digite seu e-mail"
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        className="bg-black/20 border-red-800 text-white placeholder:text-gray-400"
        required
      />
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={formData.acceptTerms}
            onCheckedChange={(checked) => handleInputChange('acceptTerms', checked)}
            className="border-red-800 data-[state=checked]:bg-green-600"
            required
          />
          <label htmlFor="terms" className="text-sm text-gray-300">
            Aceito os Termos e Condições e autorizo o uso de meus dados
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="communications"
            checked={formData.acceptCommunications}
            onCheckedChange={(checked) => handleInputChange('acceptCommunications', checked)}
            className="border-red-800 data-[state=checked]:bg-green-600"
          />
          <label htmlFor="communications" className="text-sm text-gray-300">
            Aceito receber comunicações sobre produtos e treinos
          </label>
        </div>
      </div>
      <Button 
        type="submit" 
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
      >
        {title}
      </Button>
    </form>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-red-950 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-red-900/30 to-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight">
            NEWSLETTER
            <span className="block text-red-500">SAIZEN SCHOOL</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-medium">
            Junte-se a milhares de atletas que recebem os protocolos mais intensos de treino, nutrição e suplementação para máxima hipertrofia e força.
          </p>
          <div className="flex justify-center">
            <NewsletterForm title="QUERO EVOLUIR AGORA" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white">
            O QUE VOCÊ VAI RECEBER
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-red-800 hover:border-green-600 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Dumbbell className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Protocolos de Treino</h3>
                <p className="text-gray-300">Metodologias testadas e aprovadas para máxima hipertrofia e ganho de força</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-red-800 hover:border-green-600 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Nutrição Esportiva</h3>
                <p className="text-gray-300">Estratégias alimentares precisas para potencializar seus resultados</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-red-800 hover:border-green-600 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Suplementação</h3>
                <p className="text-gray-300">Reviews e recomendações baseadas em evidências científicas</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-red-800 hover:border-green-600 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Flame className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Técnicas Avançadas</h3>
                <p className="text-gray-300">Métodos de intensificação e periodização para quebrar plateaus</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-red-800 hover:border-green-600 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Brain className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Mindset de Campeão</h3>
                <p className="text-gray-300">Psicologia do treino e estratégias mentais para superação</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-red-800 hover:border-green-600 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Trophy className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Conteúdo Exclusivo</h3>
                <p className="text-gray-300">Vídeos, e-books e materiais premium para membros</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Description */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-white">
            RECEBA CONTEÚDO HARDCORE TODA SEMANA
          </h2>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              Receba por e-mail os protocolos mais intensos e eficazes para transformação corporal, selecionados pela equipe Saizen School.
            </p>
            <p>
              Toda semana você terá acesso a treinos que vão te levar ao limite, estratégias nutricionais para máxima hipertrofia e as últimas descobertas em suplementação.
            </p>
            <p>
              Você ainda pode acompanhar análises detalhadas de técnicas avançadas e receber conteúdos exclusivos como vídeos de treino, e-books de nutrição e protocolos que só os atletas de elite conhecem.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
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
      </section>

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
            <NewsletterForm title="QUERO SER UM ATLETA DE ELITE" />
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

