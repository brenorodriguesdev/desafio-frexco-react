import SideBarComponent from '../components/side-bar'
import TableComponent from '../components/table'


export default function HomePage() {
  return (
    <>
      <div>
        <SideBarComponent />
        
        <div className="md:pl-64 flex flex-col flex-1">
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Página Inicial</h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                {/* <div className="py-16">
                  <TableComponent items={[]} columns={[]} action={null} method="" />
                </div> */}
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
        
      </div>
    </>
  )
}