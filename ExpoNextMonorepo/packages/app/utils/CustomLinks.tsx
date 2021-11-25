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

type ILinkToRouteName = {
    routeName: string, 
    webpath: string, 
    slug: string, 
    children: any
}

export function LinkToRouteName({routeName, webpath, slug, children}){
    return (
        <Link
            routeName={routeName}
            web={{
                as: `/${webpath}/${slug}`,
            }}
            params={{
                slug,
            }}
        >
            {children}
        </Link>
    )
}