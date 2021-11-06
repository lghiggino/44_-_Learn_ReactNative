import React from "react"
import { Link } from "expo-next-react-navigation"

export default function LinkToArtist({ slug, children }) {
    return (
        <Link
            routeName="artist"
            web={{
                as: `/artist/${slug}`,
            }}
            params={{
                slug,
            }}
        >
            {children}
        </Link>
    )
}

export interface ILinkToRouteName {
    routeName: string
    webpath: string
    slug?: string
    id?: string
    name?: string
    email?: string
    children: any
    web?: any
}

export function LinkToRouteName({ routeName, webpath, slug, id, name, email, children }: ILinkToRouteName) {
    return (
        <Link
            routeName={routeName}
            web={{
                as: `${webpath}`,
            }}
            params={{
                slug,
                id,
                name,
                email,
            }}
        >
            {children}
        </Link>
    )
}
