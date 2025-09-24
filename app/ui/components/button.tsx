import Link from "next/link"

export function CreateButton({caption}: {caption: string}) {
const getHref = () => {
    switch (caption.toLowerCase()) {
      case "create news": return "/dashboard/news/create-news"
      case "add author": return "/dashboard/authors/add-author"
      case "add category": return "/dashboard/categories/add-category"
      case "add tag": return "/dashboard/tags/add-tag"
      case "add question": return "/dashboard/questions/add-question"
      default: return "/dashboard"
    }
  }
return (
  <Link href={getHref()}
    className="w-36 rounded px-2 py-2 bg-[#00A759] border-[#0F5813] text-white text-center cursor-pointer"
  >
    <p>{caption}</p>
  </Link>
)
}