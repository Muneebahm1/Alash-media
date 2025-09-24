import { VscEdit } from "react-icons/vsc";
import Link from "next/link"

const Update = ({id,pathName}:{id:string,pathName?:string}) => {
  console.log(`update id: ${id}`);
  console.log(`update Path: ${pathName}`);
  return (
    <div>
      <Link href={`${pathName}/${id}/edit`}>
        <div className="rounded-md border border-[#4879D8] p-1">
          <VscEdit size={24} color="#00A759"/>
        </div>
      </Link>
    </div>
  )
}

export default Update