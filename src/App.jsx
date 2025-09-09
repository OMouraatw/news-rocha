import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Mail, TrendingUp, Users, BookOpen, Target, Star } from 'lucide-react'
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
    alert('Inscrição realizada com sucesso!')
  }

  const NewsletterForm = ({ title = "Inscreva-se agora" }) => (
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
            Aceito receber comunicações sobre produtos
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
            <span className="block text-red-500">CARREIRA 3.0</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-medium">
            Junte-se a quase 70 mil pessoas que recebem a Carreira 3.0 e esteja por dentro das principais tendências e oportunidades do mercado de trabalho.
          </p>
          <div className="flex justify-center">
            <NewsletterForm title="INSCREVA-SE AGORA" />
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
                <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Dicas de Carreira</h3>
                <p className="text-gray-300">Soft e hard skills, habilidades essenciais e como se comportar no mercado</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-red-800 hover:border-green-600 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Cursos e Eventos</h3>
                <p className="text-gray-300">Indicações de cursos, workshops e eventos para se profissionalizar</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-red-800 hover:border-green-600 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Análises de Mercado</h3>
                <p className="text-gray-300">Análises em primeira mão sobre o mercado de trabalho</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-red-800 hover:border-green-600 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Mail className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Oportunidades</h3>
                <p className="text-gray-300">Vagas, estágios, trainees, cursos e eventos exclusivos</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-red-800 hover:border-green-600 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Entrevistas Exclusivas</h3>
                <p className="text-gray-300">Entrevistas com grandes líderes, executivos e empreendedores de sucesso</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-red-800 hover:border-green-600 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Conteúdo Gratuito</h3>
                <p className="text-gray-300">Vídeos, cursos e e-books para ficar por dentro das tendências</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Description */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-white">
            RECEBA CONTEÚDO SELECIONADO TODA QUINTA-FEIRA
          </h2>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              Receba por e-mail dicas e conteúdos gratuitos que vão ajudar no seu desenvolvimento pessoal e profissional, selecionados pelo time da nossa equipe.
            </p>
            <p>
              Toda quinta-feira leia as notícias mais quentes sobre o mercado de trabalho e fique por dentro das oportunidades em destaque de vagas, estágio, trainee e cursos.
            </p>
            <p>
              Você ainda pode acompanhar análises aprofundadas e receber conteúdos gratuitos como vídeos, cursos e e-books para ficar por dentro das tendências em carreira no Brasil e no mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white">
            VEJA O QUE DIZEM NOSSOS ASSINANTES
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-red-800">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 italic">
                  "São as inúmeras oportunidades que nos são apresentadas de alavancar a carreira ou até mesmo para uma transição de carreira. Gratidão!!!"
                </p>
                <p className="text-green-500 font-bold">Rose Moreira - Pedagoga</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-red-800">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 italic">
                  "É enriquecedora para quem busca orientações promissoras em sua carreira profissional."
                </p>
                <p className="text-green-500 font-bold">Gutemberg Santos - Técnico de enfermagem</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-red-800">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 italic">
                  "Gosto da forma como são feitas as colocações dos conteúdos, claros e objetivos."
                </p>
                <p className="text-green-500 font-bold">Elisangela - Em busca de oportunidade</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-red-800">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 italic">
                  "Fortalece o autoconhecimento, nos orienta e ajuda a conhecer nossas habilidades para tomarmos decisões mais acertadas."
                </p>
                <p className="text-green-500 font-bold">Wanderley Herter - Administrador</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-red-800">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 italic">
                  "Nos mantém antenados quanto às novidades do mercado de trabalho!"
                </p>
                <p className="text-green-500 font-bold">Márcio - Inspetor de Qualidade</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 border-red-800">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 italic">
                  "Rápida e relevante, gostei."
                </p>
                <p className="text-green-500 font-bold">Wagner Albers - Programador</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-red-950 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white">
            NÃO PERCA MAIS NENHUMA OPORTUNIDADE
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Junte-se aos milhares de profissionais que já transformaram suas carreiras com nossa newsletter.
          </p>
          <div className="flex justify-center">
            <NewsletterForm title="QUERO ME INSCREVER AGORA" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-red-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2025 - TODOS OS DIREITOS RESERVADOS
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

