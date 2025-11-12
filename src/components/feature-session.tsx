import {
  Briefcase,
  Users,
  Layout,
  Database,
  Settings,
  Shield,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-500" />,
      title: "Gestão de Vagas",
      description:
        "Empresas podem cadastrar, editar e remover vagas de emprego com facilidade e rapidez.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Painel do Candidato",
      description:
        "Candidatos acessam um painel completo para visualizar vagas e acompanhar candidaturas.",
    },
    {
      icon: <Layout className="w-8 h-8 text-blue-500" />,
      title: "Dispositivos Móveis",
      description:
        "Android e iOS com design adaptável para diferentes tamanhos de tela e dispositivos.",
    },
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: "Banco de Dados Seguro",
      description:
        "Todas as informações são armazenadas de forma segura em um banco de dados MySQL.",
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-500" />,
      title: "Painel Administrativo",
      description:
        "Os administradores têm controle total sobre usuários, vagas e estatísticas do sistema.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Autenticação Segura",
      description:
        "Login e cadastro com verificação para garantir a segurança de empresas e candidatos.",
    },
  ];

  return (
    <section
      id="features"
      className="min-h-screen flex flex-col justify-center bg-gray-50 text-center px-6 py-24 sm:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Recursos do Labor
        </h2>
        <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
          O Labor foi desenvolvido para simplificar a conexão entre empresas e
          candidatos, oferecendo uma plataforma completa, segura e intuitiva.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-2xl p-8 hover:shadow-md transition-all h-full flex flex-col items-center justify-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
