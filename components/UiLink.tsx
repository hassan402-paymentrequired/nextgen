import Link from 'next/link'
import React from 'react'

const UiLink = ({ des, title, cla }: { des?: string, title: string, cla?: string }) => {
    return (
        <Link 
        className={`text-sm text-neutral-900 ${cla}`}
        href={des}>{title}</Link>
    )
}

export default UiLink