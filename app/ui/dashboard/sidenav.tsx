import Image from "next/image";
import { BiNews,BiHome,BiLogOut,BiTag,BiCategory} from "react-icons/bi";
import { MdQuiz } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { signOut } from '@/auth';

const links = [
  {
    name: 'Home',
    href: '/dashboard',
    icon: BiHome,
  },
  {
    name: 'News',
    href: '/dashboard/news',
    icon: BiNews,
  },
  {
    name: 'Authors',
    href: '/dashboard/authors',
    icon: FaUser,
  },
  {
    name: 'Categories',
    href: '/dashboard/categories',
    icon: BiCategory,
  },
  {
    name: 'Tags',
    href: '/dashboard/tags',
    icon: BiTag,
  },
  {
    name: 'Questions',
    href: '/dashboard/questions',
    icon: MdQuiz,
  },
];

const SideNav = () => {
  return (
    <div className='h-screen w-full md:w-68 flex flex-col justify-between bg-gradient-to-r from-[#0F5813] to-[#00A759] px-3 pt-10 pb-5 md:px-2 rounded-lg'>
      <div className='w-full flex flex-col space-y-3 lg:space-y-4'>
        <Link href="/dashboard">
          <div className="mb-5 px-2 flex flex-row items-center">
            <Image src='/logo.png' alt="Alashmedia Logo" width={36} height={36} className="bg-white rounded-full"/>
            <h1 className="px-2 text-2xl font-bold text-white">Alash Media</h1>
          </div>
        </Link>
        <hr className="h-2 border-white"/>
        {
          links.map((link)=> {
            const LinkIcon = link.icon;
            return(
              
              <Link key={link.name} href={link.href}>
                <div className="flex flex-row items-center gap-2  hover:bg-[#00A759] text-gray-50 hover:text-indigo-700 px-2 py-2 cursor-pointer rounded-lg">
                  <LinkIcon color="white" size={24}/>
                  <p className="text-sm font-medium">{link.name}</p>
                </div>
              </Link>  
              
            )
          })
        }
      </div>
      <form action={async ()=> {
        'use server';
        await signOut({redirectTo: '/'});
      }}>
        <button className="flex flex-row items-center gap-2 hover:bg-[#00A759] text-white hover:text-black px-2 py-2 cursor-pointer rounded-lg">
          <BiLogOut color="white" size={24}/>
          <div>Log Out</div>
        </button>
      </form>
    </div>
  )
}

export default SideNav