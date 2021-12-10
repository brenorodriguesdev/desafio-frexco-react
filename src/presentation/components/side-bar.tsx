import {
  HomeIcon,
  ArchiveIcon,
} from '@heroicons/react/outline'

const navigation = [
  { name: 'Página Inicial', href: '/', icon: HomeIcon, current: true },
  { name: 'Produtos', href: '/produto', icon: ArchiveIcon, current: false },
  { name: 'Estoques', href: '/estoque', icon: ArchiveIcon, current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function SideBarComponent() {
  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <img
            className="h-12 w-auto"
            src="https://frexco.com.br/wp-content/uploads/2020/04/logo-frexco-slogan.png"
            alt="Workflow"
          />
        </div>
        <div className="mt-5 flex-grow flex flex-col">
          <nav className="flex-1 px-2 pb-4 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                <item.icon
                  className={classNames(
                    item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                    'mr-3 flex-shrink-0 h-6 w-6'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}