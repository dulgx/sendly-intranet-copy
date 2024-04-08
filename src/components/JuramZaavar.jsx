import { BiFolder } from "react-icons/bi";
import folderIcon from '../assets/folder.png'

const posts = [
  {
    id: 1,
    title: 'Зээлийн үйл ажиллагаа',
    href: '#',
    description:
      'Loan regulations aim to protect borrowers from predatory lending practices, ensuring they understand the terms and can afford repayments.  This can include setting limits on interest rates and requiring lenders to disclose key information clearly.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
  },
  {
      id: 2,
      title: 'Зээлийн үйл ажиллагааны чиглэл, зөвлөмж ',
      href: '#',
      description:
        'Loan regulations aim to protect borrowers from predatory lending practices, ensuring they understand the terms and can afford repayments.  This can include setting limits on interest rates and requiring lenders to disclose key information clearly. ',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
    },
    {
      id: 3,
      title: 'НББ ажиллагаа ',
      href: '#',
      description:
        'Loan regulations aim to protect borrowers from predatory lending practices, ensuring they understand the terms and can afford repayments.  This can include setting limits on interest rates and requiring lenders to disclose key information clearly.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
    },
    {
      id: 3,
      title: ' Салбарын үйл ажиллагааны журам',
      href: '#',
      description:
        'Loan regulations aim to protect borrowers from predatory lending practices, ensuring they understand the terms and can afford repayments.  This can include setting limits on interest rates and requiring lenders to disclose key information clearly.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
    },
    {
      id: 3,
      title: 'Хүний нөөцийн журам',
      href: '#',
      description:
        'Loan regulations aim to protect borrowers from predatory lending practices, ensuring they understand the terms and can afford repayments.  This can include setting limits on interest rates and requiring lenders to disclose key information clearly.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
    },
    {
      id: 3,
      title: 'Албан бичиг',
      href: '#',
      description:
        'Loan regulations aim to protect borrowers from predatory lending practices, ensuring they understand the terms and can afford repayments.  This can include setting limits on interest rates and requiring lenders to disclose key information clearly.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
    },
    {
      id: 3,
      title: 'Хамтран ажиллах гэрээ',
      href: '#',
      description:
        'Loan regulations aim to protect borrowers from predatory lending practices, ensuring they understand the terms and can afford repayments.  This can include setting limits on interest rates and requiring lenders to disclose key information clearly.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
    },
]

export default function JuramZaavar() {
  return (
    <div className="bg-white sm:pb-2 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 pt-10  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="bg-stone-100  flex max-w-xl flex-col items-start justify-between p-5 rounded-xl shadow hover:bg-sky-50 cursor-pointer">
              <div className="group relative flex flex-row items-center">
                <img src={folderIcon} alt="folder" className='w-14'/>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 flex ml-8">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </div>
            </article>
          ))}
        </div>
    </div>
  )
}