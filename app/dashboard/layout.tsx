import Sidenav from "../ui/sidenav"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (

        <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
            <div className="w-full flex-none md:w-64 bg-gray-200">
                {/* SideNav */}
                <Sidenav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md-12">{children}</div>
        </div>
        
  )
}