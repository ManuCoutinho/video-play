import { PlayerStateType } from '@/models/player'

export const state = {
  course: {
    id: 1,
    modules: [
      {
        id: 1,
        title: 'Iniciando com React',
        lessons: [
          { id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' },
          {
            id: 'w-DW4DhDfcw',
            title: 'Estilização do Post',
            duration: '10:05'
          }
        ]
      },
      {
        id: '2',
        title: 'Estrutura da aplicação',
        lessons: [
          {
            id: 'gE48FQXRZ_o',
            title: 'Componente: Comment',
            duration: '13:45'
          },
          { id: 'Ng_Vk4tBl0g', title: 'Responsividade', duration: '10:05' }
        ]
      }
    ]
  },
  isLoading: false,
  currentModuleIndex: 0,
  currentLessonIndex: 0
} as PlayerStateType

export default state
